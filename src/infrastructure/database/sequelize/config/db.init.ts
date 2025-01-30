import { sequelize } from "./db.config";

export async function syncDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Connexion à la base de données réussie.");

    sequelize.sync({
      alter: true,
    });

    console.log("Toutes les tables ont été synchronisées.");
  } catch (error) {
    console.error("Erreur lors de la synchronisation :", error);
  }
}
