use devlife_mysql;

INSERT INTO material (id_material_skill, name, type, description, image_url, created_at, updated_at, is_deleted) VALUES
(1, 'Ordinateur Basique', 'Matériel', 'PC de bureau standard pour tâches courantes', 'https://example.com/pc_basique.jpg', NOW(), NOW(), false),
(2, 'Ordinateur Gaming', 'Matériel', 'PC avec carte graphique haut de gamme pour gamers', 'https://example.com/pc_gaming.jpg', NOW(), NOW(), false),
(3, 'MacBook Pro', 'Matériel', 'Ordinateur portable puissant pour les développeurs', 'https://example.com/macbook_pro.jpg', NOW(), NOW(), false),
(4, 'Ordinateur Portable Classique', 'Matériel', 'Laptop adapté au télétravail', 'https://example.com/laptop.jpg', NOW(), NOW(), false),
(5, 'PC de Bureau Haute Performance', 'Matériel', 'Station de travail pour graphistes et devs', 'https://example.com/pc_haute_performance.jpg', NOW(), NOW(), false),
(6, 'Chaise Classique', 'Mobilier', 'Chaise de bureau simple et confortable', 'https://example.com/chaise_classique.jpg', NOW(), NOW(), false),
(7, 'Chaise Ergonomique', 'Mobilier', 'Chaise avec support lombaire et accoudoirs réglables', 'https://example.com/chaise_ergonomique.jpg', NOW(), NOW(), false),
(8, 'Chaise de Luxe', 'Mobilier', 'Chaise haut de gamme avec coussins mémoire de forme', 'https://example.com/chaise_luxe.jpg', NOW(), NOW(), false),
(9, 'Fauteuil Gamer', 'Mobilier', 'Chaise avec appui-tête et repose-pieds intégré', 'https://example.com/fauteuil_gamer.jpg', NOW(), NOW(), false),
(10, 'Chaise en Cuir Premium', 'Mobilier', 'Chaise en cuir véritable pour un confort ultime', 'https://example.com/chaise_cuir.jpg', NOW(), NOW(), false),
(11, 'Bureau Classique', 'Mobilier', 'Bureau en bois simple avec tiroirs intégrés', 'https://example.com/bureau_classique.jpg', NOW(), NOW(), false),
(12, 'Bureau Assis-Debout', 'Mobilier', 'Bureau réglable en hauteur pour alternance debout-assis', 'https://example.com/bureau_assis_debout.jpg', NOW(), NOW(), false),
(13, 'Bureau de Luxe', 'Mobilier', 'Bureau en bois massif avec finitions premium', 'https://example.com/bureau_luxe.jpg', NOW(), NOW(), false),
(14, 'Bureau Compact', 'Mobilier', 'Petit bureau pratique pour espace réduit', 'https://example.com/bureau_compact.jpg', NOW(), NOW(), false),
(15, 'Bureau avec Rangement', 'Mobilier', 'Bureau avec plusieurs tiroirs et étagères intégrés', 'https://example.com/bureau_rangement.jpg', NOW(), NOW(), false),
(16, 'Écran Classique', 'Matériel', 'Écran 24 pouces Full HD', 'https://example.com/ecran_classique.jpg', NOW(), NOW(), false),
(17, 'Écran 4K', 'Matériel', 'Écran 27 pouces Ultra HD 4K', 'https://example.com/ecran_4k.jpg', NOW(), NOW(), false),
(18, 'Écran Incurvé', 'Matériel', 'Écran 32 pouces incurvé pour immersion maximale', 'https://example.com/ecran_incurve.jpg', NOW(), NOW(), false),
(19, 'Écran UltraWide', 'Matériel', 'Écran 34 pouces ultra-large pour multitâche', 'https://example.com/ecran_ultrawide.jpg', NOW(), NOW(), false),
(20, 'Écran Tactile', 'Matériel', 'Écran tactile Full HD interactif', 'https://example.com/ecran_tactile.jpg', NOW(), NOW(), false);

INSERT INTO material_skill (id, name, created_at, updated_at, is_deleted) VALUES
(1, 'Utilisation de PC basique', NOW(), NOW(), false),
(2, 'Gaming haute performance', NOW(), NOW(), false),
(3, 'Développement sur MacBook', NOW(), NOW(), false),
(4, 'Utilisation de Laptop classique', NOW(), NOW(), false),
(5, 'Utilisation de station de travail', NOW(), NOW(), false),
(6, 'Confort de chaise classique', NOW(), NOW(), false),
(7, 'Posture ergonomique', NOW(), NOW(), false),
(8, 'Expérience chaise de luxe', NOW(), NOW(), false),
(9, 'Confort fauteuil gaming', NOW(), NOW(), false),
(10, 'Utilisation de chaise en cuir', NOW(), NOW(), false),
(11, 'Utilisation d’un bureau classique', NOW(), NOW(), false),
(12, 'Bureau assis-debout', NOW(), NOW(), false),
(13, 'Utilisation bureau de luxe', NOW(), NOW(), false),
(14, 'Travail sur bureau compact', NOW(), NOW(), false),
(15, 'Gestion espace bureau avec rangement', NOW(), NOW(), false),
(16, 'Utilisation écran classique', NOW(), NOW(), false),
(17, 'Expérience écran 4K', NOW(), NOW(), false),
(18, 'Utilisation écran incurvé', NOW(), NOW(), false),
(19, 'Travail sur écran ultra-large', NOW(), NOW(), false),
(20, 'Utilisation écran tactile', NOW(), NOW(), false);

INSERT INTO employee (id_skill, name, salary, created_at, updated_at, is_deleted) VALUES
(1, 'Jean Dev', 450, NOW(), NOW(), false),
(2, 'Marie Code', 500, NOW(), NOW(), false),
(3, 'Alice UI', 480, NOW(), NOW(), false),
(4, 'Max Design', 470, NOW(), NOW(), false),
(5, 'Lucas API', 550, NOW(), NOW(), false),
(6, 'Emma Database', 530, NOW(), NOW(), false),
(7, 'Julien Cloud', 600, NOW(), NOW(), false),
(8, 'Sophie CI/CD', 590, NOW(), NOW(), false),
(9, 'Nathan Cyber', 580, NOW(), NOW(), false),
(10, 'Chloé Secure', 570, NOW(), NOW(), false);

INSERT INTO contract (id, title, type, image_url, description, reward, difficulty_level, is_deleted, created_at, updated_at) VALUES
(1,'Développement Site Web', 'Développement Web', 'https://example.com/contract1.jpg', "Création d'un site web responsive avec React et Node.js", 5000, 3, false, NOW(), NOW()),
(2,'Application Mobile', 'Développement Mobile', 'https://example.com/contract2.jpg', "Développement d'une application mobile Android et iOS", 8000, 4, false, NOW(), NOW()),
(3,'Maintenance Applicative', 'Maintenance', 'https://example.com/contract3.jpg', "Mise à jour et correction des bugs d'une application existante", 3000, 2, false, NOW(), NOW()),
(4,'Audit Sécurité', 'Cybersécurité', 'https://example.com/contract4.jpg', "Audit des failles de sécurité d'un site web et recommandations", 6000, 4, false, NOW(), NOW()),
(5,"Test d'Intrusion", 'Cybersécurité', 'https://example.com/contract5.jpg', "Simulation d'attaque pour tester la robustesse du système", 7500, 5, false, NOW(), NOW()),
(6,'Migration Cloud', 'Cloud Computing', 'https://example.com/contract6.jpg', "Migration d'une application vers AWS avec Docker et Kubernetes", 9000, 5, false, NOW(), NOW()),
(7,'CI/CD Automatisation', 'DevOps', 'https://example.com/contract7.jpg', "Mise en place d'un pipeline d\'intégration continue", 7000, 4, false, NOW(), NOW()),
(8,'Analyse Big Data', 'Data Science', 'https://example.com/contract8.jpg', 'Extraction et analyse de données pour business intelligence', 6500, 3, false, NOW(), NOW()),
(9,"Développement d'IA", 'Intelligence Artificielle', 'https://example.com/contract9.jpg', "Création d'un modèle d'apprentissage automatique pour la reconnaissance d'images", 12000, 5, false, NOW(), NOW()),
(10,'Chef de Projet Agile', 'Gestion de Projet', 'https://example.com/contract10.jpg', "Supervision d'une équipe de développeurs en méthode agile", 5000, 3, false, NOW(), NOW());

INSERT INTO employee_skill (name, description, created_at, updated_at, is_deleted) VALUES
( 'Développement Fullstack', 'Capacité à coder en front et back-end', NOW(), NOW(), false),
( 'Développement Frontend', 'Maîtrise des technologies UI/UX (React, Vue)', NOW(), NOW(), false),
( 'Développement Backend', 'Gestion des API, bases de données, Node.js', NOW(), NOW(), false),
( 'DevOps & Cloud', 'CI/CD, Docker, Kubernetes, AWS, Azure', NOW(), NOW(), false),
( 'Sécurité Informatique', "Tests d'intrusion, cybersécurité", NOW(), NOW(), false),
( 'Data Science & Big Data', 'Analyse de données, machine learning', NOW(), NOW(), false),
( 'Intelligence Artificielle', 'Développement de modèles IA et NLP', NOW(), NOW(), false),
( 'Gestion de Projet Agile', "Scrum, Kanban, gestion d'équipe", NOW(), NOW(), false),
( 'UI/UX Design', 'Création de maquettes et d’interfaces graphiques', NOW(), NOW(), false),
( 'Administrateur Système & Réseau', 'Maintenance des infrastructures IT', NOW(), NOW(), false);
