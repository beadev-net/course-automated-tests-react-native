const app = require("../app");
const { registerUser } = require("../test_utils/user");
const { loginAuthFake, loginAuth } = require("../test_utils/auth");
const {
  insertFakeNewsFake,
  insertFakeNewsListFake,
  deleteFakeNewsListFake,
} = require("../test_utils/fakenews");

const supertest = require("supertest");

const request = supertest(app);

// describe("FAKE - Request FakeNews Route", () => {
//   it("should return 200 and a list of fakenews containing 20 records", async () => {
//     // Arrange
//     const { user, token, callbackUserDelete } = await loginAuthFake(request);
//     const fakeNewsListFake = await insertFakeNewsListFake();

//     // Act
//     const sut = await request
//       .get(`/api/fakenews?token=${token}`)
//       .set("Accept", "application/json");

//     // Assert
//     expect(sut.status).toBe(200);
//     expect(sut.body.length).toBe(20);

//     await deleteFakeNewsListFake(fakeNewsListFake);
//     await callbackUserDelete(user);
//   });
// });

describe("FLOW - Request FakeNews Route", () => {
  it("should return 200 and a list of fakenews containing 20 records", async () => {
    // Arrange
    const user = {
      name: "Vinicius",
      email: "Admin1",
      password: "admin",
    };
    const fakeNewsListFake = await insertFakeNewsListFake();

    // Act
    const registeredUser = await registerUser(request, user);
    const { token, callbackUserDelete } = await loginAuth(request, user);

    const sut = await request
      .get(`/api/fakenews?token=${token}`)
      .set("Accept", "application/json");

    // Assert
    expect(registeredUser.status).toBe(201);
    expect(sut.status).toBe(200);
    expect(sut.body.length).toBe(20);

    await deleteFakeNewsListFake(fakeNewsListFake);
    await callbackUserDelete(user);
  });
});
