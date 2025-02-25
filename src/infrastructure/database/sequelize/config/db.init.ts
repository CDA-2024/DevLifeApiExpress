import { sequelize } from "./db.config";
import path from "path";
import fs from "fs";
import logger from "../../../logger/logger";
import { exec } from "child_process";
import mysql from "mysql2/promise";

export async function syncDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Connexion à la base de données réussie.");

    await sequelize.sync({
      alter: true,
    });

    await loadSQLData();

    console.log("Toutes les tables ont été synchronisées.");
  } catch (error) {
    console.error("Erreur lors de la synchronisation :", error);
  }
}

async function loadSQLData() {
  const sqlFilePath = path.resolve(__dirname, "./init-data-db.sql");

  if (!fs.existsSync(sqlFilePath)) {
    logger.error("Le fichier SQL n'existe pas.");
    return;
  }

  try {
    const connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      port: process.env.MYSQL_PORT
        ? parseInt(process.env.MYSQL_PORT, 10)
        : undefined,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    });

    const [tables]: any[] = await connection.execute("SHOW TABLES");

    let isDatabaseEmpty = true;
    for (const table of tables) {
      const tableName = Object.values(table)[0];
      const [rows]: [mysql.RowDataPacket[], mysql.FieldPacket[]] =
        await connection.execute(
          `SELECT COUNT(*) AS count FROM \`${tableName}\``
        );
      if (rows[0].count > 0) {
        isDatabaseEmpty = false;
        break;
      }
    }

    if (!isDatabaseEmpty) {
      logger.info("Les données existent déjà, l'importation SQL est ignorée.");
      await connection.end();
      return;
    }

    await connection.end();

    const command = `docker exec -i devlife_mysql mysql -u ${process.env.MYSQL_USER} -p${process.env.MYSQL_PASSWORD} ${process.env.MYSQL_DATABASE} < ${sqlFilePath}`;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        logger.error("Erreur lors du chargement du fichier SQL :", error);
        return;
      }
      logger.info("Base de données initialisée avec succès !");
    });
  } catch (error) {
    logger.error(
      "Erreur lors de la vérification de la base de données :",
      error
    );
  }
}
