import { User } from "../../core/entities/user.entity";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { UserModel } from "../../infrastructure/database/mongoose/schemas/user.schema";

interface DecodedToken {
  userId: number;
  userRole: string;
}

interface AuthentificateRequest extends Request {
  user?: User;
}

//Middleware de protection
export const protectRoute = async (
  req: AuthentificateRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    // vérif si token existe dans les cookies
    const token = req.cookies["jwt-devlife"];
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "No token provided" });
    }

    // vérif si token est valide
    const JWT_SECRET = process.env.JWT_SECRET;
    const decoded = jwt.verify(token, JWT_SECRET as string) as DecodedToken;
    if (!decoded) {
      return res
        .status(401)
        .json({ success: false, message: " token invalid" });
    }

    // vérif si l'utilisateur existe
    const user = await UserModel.findById(decoded.userId);
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: " user not found" });
    }

    // stocker user dans req.user
    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
