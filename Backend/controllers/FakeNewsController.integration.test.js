const app = require("../app");
const { client } = require("../configs/database");
const { loginAuthFake } = require("../test_utils/auth");
const {
  insertFakeNewsFake,
  insertFakeNewsListFake,
  deleteFakeNewsListFake,
} = require("../test_utils/fakenews");

const supertest = require("supertest");

const request = supertest(app);

// Teardown
afterAll(() => {
  client.close(); // Close the database connection
});

describe("Request FakeNews Route", () => {
  it("should return 200 and a list of fakenews containing 20 records", async () => {
    // Arrange
    const { user, token, callbackUserDelete } = await loginAuthFake(request);
    const fakeNewsListFake = await insertFakeNewsListFake();

    // Act
    const sut = await request
      .get(`/api/fakenews?token=${token}`)
      .set("Accept", "application/json");

    // Assert
    expect(sut.status).toBe(200);
    expect(sut.body.length).toBe(20);

    // Cleanup
    await callbackUserDelete(user);
    await deleteFakeNewsListFake(fakeNewsListFake);
  });
});
