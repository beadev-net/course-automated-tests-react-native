const { connect, database_name } = require("../configs/database");
const collection = "fakenews";

const uuid = require("uuid");
const randomstring = require("randomstring");

const generateFakeNewsStub = () => {
  const id = uuid.v4();
  const title = randomstring.generate({
    length: 12,
    charset: "alphabetic",
  });

  const description = randomstring.generate({
    length: 50,
  });

  const published_at = new Date().toISOString();

  const author = randomstring.generate({
    length: 12,
    charset: "alphabetic",
  });

  const image = `https://ui-avatars.com/api/?background=random&name=${author}`;

  return {
    id,
    title,
    description,
    image,
    published_at,
    author,
    test: true,
  };
};

const generateFakeNewsListStub = (quantity) => {
  const fakeNewsList = [];

  for (let i = 0; i < quantity; i++) {
    const fakeNews = generateFakeNewsStub();
    fakeNewsList.push(fakeNews);
  }

  return fakeNewsList;
};

const insertFakeNewsFake = async (fakeNews = null) => {
  const record = fakeNews ?? generateFakeNewsStub();

  const client = await connect();
  await client.db(database_name).collection(collection).insertOne(record);

  return record;
};

const insertFakeNewsListFake = async (fakeNewsList = null, quantity = 20) => {
  const record = fakeNewsList ?? generateFakeNewsListStub(quantity);

  const client = await connect();
  await client.db(database_name).collection(collection).insertMany(record);

  return record;
};

const deleteFakeNewsListFake = async (fakeNewsList) => {
  const client = await connect();
  await client
    .db(database_name)
    .collection(collection)
    .deleteMany({ id: { $in: fakeNewsList.map((x) => x.id) } });
};

module.exports = {
  insertFakeNewsFake,
  insertFakeNewsListFake,
  generateFakeNewsStub,
  generateFakeNewsListStub,
  deleteFakeNewsListFake,
};
