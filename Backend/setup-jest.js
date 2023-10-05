require("dotenv").config({ path: "./.env.test" });

const { client, connect, database_name } = require("./configs/database");

const collections = ["users", "fakenews"];

beforeAll(async () => {
  await cleanup();
});

afterAll(async () => {
  await client.close();
});

const cleanup = async () => {
  console.log(" > Cleanup Database");

  const client = await connect();
  await collections.map(async (c) => {
    await client.db(database_name).collection(c).deleteMany({}); // Clean the database
  });
};
