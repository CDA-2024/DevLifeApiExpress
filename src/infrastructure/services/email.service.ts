import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();


class EmailService {
    private transporter: nodemailer.Transporter;

    constructor() {
        // Configuration pour le développement (Mailtrap) ou la production
        if (process.env.NODE_ENV === 'development') {
            // Configuration Mailtrap pour les tests
            this.transporter = nodemailer.createTransport({
                host: 'sandbox.smtp.mailtrap.io',
                port: 2525,
                auth: {
                    user: process.env.MAILTRAP_USER,
                    pass: process.env.MAILTRAP_PASSWORD
                }
            });
            console.log('Service d\'email configuré avec Mailtrap pour le développement');
        } else {
            // Configuration de production
            this.transporter = nodemailer.createTransport({
                host: process.env.EMAIL_HOST,
                port: Number(process.env.EMAIL_PORT) || 587,
                secure: process.env.EMAIL_SECURE === 'true',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASSWORD,
                },
            });
        }
    }

    async sendVerificationEmail(to: string, token: string): Promise<void> {
        const appUrl = process.env.APP_URL || 'http://localhost:3000';
        const verificationUrl = `${appUrl}/auth/verify-email?token=${token}`;

        const info = await this.transporter.sendMail({
            from: `"DevLife" <${process.env.NODE_ENV === 'development' ? 'noreply@devlife.com' : process.env.EMAIL_USER}>`,
            to,
            subject: "Confirmez votre inscription à DevLife",
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Bienvenue sur DevLife!</h2>
          <p>Merci de vous être inscrit. Pour activer votre compte, veuillez cliquer sur le bouton ci-dessous:</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${verificationUrl}" style="background-color: #4CAF50; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px; font-weight: bold;">
              Confirmer mon adresse email
            </a>
          </div>
          <p>Si le bouton ne fonctionne pas, vous pouvez copier et coller ce lien dans votre navigateur:</p>
          <p>${verificationUrl}</p>
          <p>Ce lien expirera dans 24 heures.</p>
          <p>À bientôt sur DevLife!</p>
        </div>
      `,
        });

        if (process.env.NODE_ENV === 'development') {
            console.log('Email envoyé à Mailtrap:', info.messageId);
            console.log('Destinataire:', to);
            console.log('Token de vérification:', token);
        }
    }
}

export default new EmailService(); 