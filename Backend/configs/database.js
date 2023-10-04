const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = "mongodb://root:root@localhost:27017/";
const database_name = "fakedb";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connect() {
  try {
    await client.connect();
    await client.db(database_name).command({ ping: 1 });

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );

    return client;
  } catch (err) {
    console.log(err.stack);
  }
}

async function run(callback) {
  try {
    if (typeof callback === "function") {
      console.log(" > Running Callback");
      return callback(client);
    }
  } catch (err) {
    console.log(err.stack);
  }
}

module.exports = { connect, run, database_name, client };
