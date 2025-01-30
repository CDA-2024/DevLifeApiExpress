import { sequelize } from "./db.config";
import path from "path";
import fs from "fs";
import logger from "../../../logger/logger";
import { exec } from "child_process";

export async function syncDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Connexion à la base de données réussie.");

    sequelize.sync({
      alter: true,
    });

    await loadSQLData();

    console.log("Toutes les tables ont été synchronisées.");
  } catch (error) {
    console.error("Erreur lors de la synchronisation :", error);
  }
}

async function loadSQLData() {
  const sqlFilePath = path.resolve(
    __dirname,
    "../../../../../docker/mysql/init-data-db.sql"
  );

  if (!fs.existsSync(sqlFilePath)) {
    logger.error("Le fichier SQL n'existe pas.");
    return;
  }


  const command = `docker exec -i devlife_mysql mysql -u ${process.env.MYSQL_USER} -p${process.env.MYSQL_PASSWORD} ${process.env.MYSQL_DATABASE} < ${sqlFilePath}`;
  exec(command, (error, stdout, stderr) => {
    if (error) {
      logger.error(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      logger.error(`stderr: ${stderr}`);
      return;
    }
    logger.info(`stdout: ${stdout}`);
  });
}
