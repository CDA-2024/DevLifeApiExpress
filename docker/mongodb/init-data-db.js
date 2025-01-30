db = db.getSiblingDB("devlife_mongo");

if (db.users.countDocuments() === 0) {
  db.users.insertMany([
    {
      id: 1,
      name: "Jean Dupont",
      email: "jean.dupont@example.com",
      password: "password123",
      role: "admin",
      is_tutorial_finished: true,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 2,
      name: "Marie Curie",
      email: "marie.curie@example.com",
      password: "securepass",
      role: "user",
      is_tutorial_finished: false,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 3,
      name: "Alan Turing",
      email: "alan.turing@example.com",
      password: "enigma",
      role: "moderator",
      is_tutorial_finished: false,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);

  print("3 utilisateurs insérés avec succès !");
} else {
  print("Les utilisateurs existent déjà, aucune insertion.");
}
