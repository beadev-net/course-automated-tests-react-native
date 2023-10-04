const { connect, database_name } = require("../configs/database");

const collection = "users";

const defaultUserStub = {
  name: "Admin",
  email: "Admin",
  password: "admin",
};

const insertUserFake = async (user = null) => {
  const record = user ?? defaultUserStub;

  const client = await connect();
  await client.db(database_name).collection(collection).insertOne(record);

  return record;
};

const deleteUserFake = async (user = null) => {
  const record = user ?? defaultUserStub;

  const client = await connect();
  await client.db(database_name).collection(collection).deleteOne(record);

  return record;
};

module.exports = { insertUserFake, deleteUserFake };
