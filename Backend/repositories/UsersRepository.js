const database = require("../configs/database");
const collection = "users";

class UsersRepository {
  async getUserByEmail(email) {
    return database.run(async (client) => {
      return client
        .db(database.database_name)
        .collection(collection)
        .findOne({ email: email });
    });
  }

  async updateProfileByEmail(email, { name, birthday }) {
    const filter = { email: email };

    return database.run(async (client) => {
      return client
        .db(database.database_name)
        .collection(collection)
        .updateOne(filter, {
          $set: {
            name: name,
            birthday: birthday,
          },
        });
    });
  }

  async save(user) {
    return database.run(async (client) => {
      return client
        .db(database.database_name)
        .collection(collection)
        .insertOne(user);
    });
  }
}

module.exports = UsersRepository;
