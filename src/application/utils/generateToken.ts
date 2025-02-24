import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { Response } from "express";

dotenv.config(); // Charger les variables d'environnement

const JWT_SECRET = process.env.JWT_SECRET as string;

interface User {
  id: number;
  role: string;
}

export const generateTokenAndSetCookie = (
  user: User,
  res: Response
): string => {
  // Créer le payload : id + rôle
  const tokenPayload = {
    userId: user.id,
    role: user.role,
  };

  // Générer le token
  const token = jwt.sign(tokenPayload, JWT_SECRET, {
    expiresIn: "7d",
  });

  // Définir le cookie
  res.cookie("jwt-devlife", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // Expire dans 7 jours
    httpOnly: true, // Protection XSS -> empêche l'accès aux cookies via JS
    sameSite: "strict", // Protection CSRF -> ne pas envoyer cookie via un autre site
    secure: process.env.NODE_ENV === "production", // En dev:false, en prod:true (cookie uniquement en HTTPS)
  });

  return token;
};
