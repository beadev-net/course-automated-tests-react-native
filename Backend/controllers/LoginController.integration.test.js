const app = require("../app");
const { insertUserFake, deleteUserFake } = require("../test_utils/user");

const supertest = require("supertest");

const request = supertest(app);

describe("Request Login Route", () => {
  it("should return 200", async () => {
    // Arrange
    await insertUserFake();
    const payload = {
      email: "Admin",
      password: "admin",
    };

    // Act
    const sut = await request
      .post("/api/login")
      .send(payload)
      .set("Accept", "application/json");

    // Assert
    expect(sut.status).toBe(200);
    expect(sut.body).toHaveProperty("token");

    // Cleanup
    await deleteUserFake();
  });

  it("should return 401", async () => {
    // Arrage
    const payload = {
      email: "Admin",
      password: "admin",
    };

    // Act
    const sut = await request
      .post("/api/login")
      .send(payload)
      .set("Accept", "application/json");

    // Assert
    expect(sut.status).toBe(401);
  });
});
