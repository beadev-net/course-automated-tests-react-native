const database = require("../configs/database");

class FakeNewsRepository {
  async getAllFakeNews(limit = 20) {
    return database.run(async (client) => {
      return client
        .db(database.database_name)
        .collection("fakenews")
        .find()
        .limit(limit)
        .toArray((err, doc) => {
          return doc;
        });
    });
  }
}

module.exports = FakeNewsRepository;
