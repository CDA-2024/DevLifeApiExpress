import { Request, Response, NextFunction, RequestHandler } from "express";
import { UsersUseCase } from "../../core/use-cases/user.use-case";
import { generateTokenAndSetCookie } from "../utils/generateToken";
import logger from "../../infrastructure/logger/logger";
import crypto from "crypto";
import emailService from "../../infrastructure/services/email.service";
import { Types } from "mongoose";
const usersUseCase = new UsersUseCase();
import bcrypt from "bcrypt";


export const loginController: RequestHandler = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        logger.info(`Login attempt with name: ${name}, email: ${email}`);
        if (!name && !email) {
            res.status(400).json({ 
                message: "Name or email are required" 
            });
            return;
        }
        if (!password) {
            res.status(400).json({ 
                message: "Password is required" 
            });
            return;
        }

        let user;
        
        if (name) {
            user = await usersUseCase.getByName(name);
        }

        if (email) {
            user = await usersUseCase.getByEmail(email);
        }

        if (!user) {
            res.status(401).json({ message: "Invalid credentials" });
            return;
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        
        if (!isPasswordValid) {
            res.status(401).json({ message: "Invalid credentials" });
            return;
        }

        // generateTokenAndSetCookie(user, res);

        const userResponse = {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            is_tutorial_finished: user.is_tutorial_finished,
            is_deleted: user.is_deleted
        };

        res.status(200).json(userResponse);

    } catch (error) {
        console.error('Login error:', error);
        next(error);
    }
};

export const registerController: RequestHandler = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            res.status(400).json({
                message: "Name, email and password are required"
            });
            return;
        }

        const existingUser = await usersUseCase.getByEmail(email);
        if (existingUser) {
            res.status(409).json({
                message: "User already exists with this email"
            });
            return;
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        // Génération du token de vérification
        const verificationToken = crypto.randomBytes(32).toString('hex');
        const tokenExpires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 heures
        
        const newUser = await usersUseCase.save({
            _id: new Types.ObjectId(),
            name,
            email,
            password: hashedPassword,
            verification_token: verificationToken,
            verification_token_expires: tokenExpires,
            email_verified: false
        });

        // Envoi de l'email de vérification
        await emailService.sendVerificationEmail(email, verificationToken);
        logger.info(`Verification email sent to: ${email}`);

        const userResponse = {
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            message: "User registered. Please verify your email to activate your account."
        };

        res.status(201).json(userResponse);

    } catch (error) {
        console.error('Registration error:', error);
        next(error);
    }
};

export const logoutController: RequestHandler = (req, res, next) => {
    try {
        res.clearCookie("token");
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        next(error);
    }
};

// Ajout du contrôleur de vérification d'email
export const verifyEmailController: RequestHandler = async (req, res, next) => {
    try {
        const { token } = req.query;
        
        if (!token) {
            res.status(400).json({ message: "Verification token is required" });
            return;
        }
        
        const user = await usersUseCase.getByVerificationToken(token as string);
        
        if (!user) {
            res.status(400).json({ message: "Invalid or expired verification token" });
            return;
        }
        
        if (user.verification_token_expires < new Date()) {
            res.status(400).json({ message: "Verification token has expired" });
            return;
        }
        
        // Mise à jour de l'utilisateur
        user.email_verified = true;
        user.verification_token = "";
        user.verification_token_expires = new Date();
        await usersUseCase.update(user);
        
        res.status(200).json({ message: "Email verified successfully" });
        
    } catch (error) {
        logger.error('Email verification error:', error);
        next(error);
    }
};



