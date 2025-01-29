db = db.getSiblingDB('devlife_mongo');

db.createUser({
  user: 'root',
  pwd: 'root',
  roles: [
    {
      role: 'readWrite',
      db: 'devlife_mongo'
    },
  ],
});
