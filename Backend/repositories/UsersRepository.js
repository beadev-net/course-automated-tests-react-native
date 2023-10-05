const database = require("../configs/database");
const { ObjectId } = require("mongodb");
const collection = "users";

class UsersRepository {
  async getUserByEmail(email) {
    return database.run(async (client) => {
      return client
        .db(database.database_name)
        .collection(collection)
        .findOne(
          { email: email },
          {
            readConcern: {
              level: "local",
              readPreference: "primary",
            },
            readPreference: "primary",
            writeConcern: {
              w: "majority",
              wtimeout: 0,
            },
          },
        );
    });
  }

  async getUserById(id) {
    return database.run(async (client) => {
      return client
        .db(database.database_name)
        .collection(collection)
        .findOne({ _id: new ObjectId(id) });
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
      /**
       * @type {import('mongodb').Collection}
       * @type {import('mongodb').InsertOneResult}
       * @type {import('mongodb').InsertOneOptions}
       */
      return client
        .db(database.database_name)
        .collection(collection)
        .insertOne(user, {
          writeConcern: {
            w: 1,
            wtimeout: 10000,
            j: true,
          },
        });
    });
  }
}

module.exports = UsersRepository;
