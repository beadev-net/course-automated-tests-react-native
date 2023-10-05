const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = process.env.DATABASE_URL || null;
console.log(uri);
if (!uri) {
  throw new Error(
    "Please define the DATABASE_URL environment variable inside .env",
  );
}

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
    await client.connect({
      useUnifiedTopology: true,
    });
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
