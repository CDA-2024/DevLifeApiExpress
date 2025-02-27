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
                error: "Identifiant ou mot de passe incorrect" 
            });
            return;
        }
        if (!password) {
            res.status(400).json({ 
                error: "Mot de passe incorrect" 
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
            res.status(401).json({ error: "Identifiant ou mot de passe incorrect" });
            return;
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        
        if (!isPasswordValid) {
            res.status(401).json({ error: "Identifiant ou mot de passe incorrect" });
            return;
        }

        // generateTokenAndSetCookie(user, res);

        const loginResponse = {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            is_tutorial_finished: user.is_tutorial_finished,
            is_deleted: user.is_deleted
        };

        res.status(200).json(loginResponse);

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
                message: "Nom, email et mot de passe sont requis"
            });
            return;
        }

        const existingUser = await usersUseCase.getByEmail(email);
        if (existingUser) {
            res.status(409).json({
                message: "Un utilisateur existe déjà"
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

        const registerResponse = {
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            message: "Utilisateur enregistré. Veuillez vérifier votre email pour activer votre compte."
        };

        res.status(201).json(registerResponse);

    } catch (error) {
        console.error('Registration error:', error);
        next(error);
    }
};

export const logoutController: RequestHandler = (req, res, next) => {
    try {
        res.clearCookie("token");
        res.status(200).json({ message: "Déconnexion réussie" });
    } catch (error) {
        next(error);
    }
};

// Ajout du contrôleur de vérification d'email
export const verifyEmailController: RequestHandler = async (req, res, next) => {
    try {
        const { token } = req.query;
        
        if (!token) {
            res.status(400).json({ 
                success: false,
                error: "Le lien de vérification est requis" 
            });
            return;
        }
        
        const user = await usersUseCase.getByVerificationToken(token as string);
        
        if (!user) {
            res.status(400).json({ 
                success: false,
                error: "Lien de vérification invalide ou expiré" 
            });
            return;
        }
        
        if (user.verification_token_expires < new Date()) {
            res.status(400).json({ 
                success: false,
                error: "Le lien de vérification a expiré" 
            });
            return;
        }
        
        // Mise à jour de l'utilisateur
        user.email_verified = true;
        user.verification_token = "";
        user.verification_token_expires = new Date();
        await usersUseCase.update(user);
        
        res.status(200).json({ 
            success: true,
            message: "Email vérifié avec succès",
            user: {
                name: user.name,
                email: user.email
            }
        });
        
    } catch (error) {
        logger.error('Email verification error:', error);
        next(error);
    }
};

/**
 * Contrôleur pour renvoyer l'email de vérification
 * Route: GET /api/auth/resend-verification?email=user@example.com
 */
export const resendVerificationEmailController: RequestHandler = async (req, res, next) => {
    try {
        const { email } = req.query;
        
        if (!email) {
            res.status(400).json({ error: "L'adresse email est requise" });
            return;
        }
        
        // Récupérer l'utilisateur par email
        const user = await usersUseCase.getByEmail(email as string);
        
        if (!user || user.email_verified) {
            res.status(200).json({ message: `Si un compte est associé à ${email}, un nouveau lien de vérification a été envoyé` });
            return;
        }
        
        // Générer un nouveau token de vérification
        const verificationToken = crypto.randomBytes(32).toString('hex');
        const tokenExpires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 heures
        
        // Mettre à jour le token de vérification
        user.verification_token = verificationToken;
        user.verification_token_expires = tokenExpires;
        await usersUseCase.update(user);
        
        // Envoyer l'email de vérification
        await emailService.sendVerificationEmail(user.email, verificationToken);
        logger.info(`Email de vérification renvoyé à: ${user.email}`);
        
        res.status(200).json({ message: `Si un compte est associé à ${email}, un nouveau lien de vérification a été envoyé` });
        
    } catch (error) {
        logger.error('Erreur lors du renvoi de l\'email de vérification:', error);
        next(error);
    }
};