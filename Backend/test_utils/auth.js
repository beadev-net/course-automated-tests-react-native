const { insertUserFake, deleteUserFake } = require("../test_utils/user");

const loginAuthFake = async (request) => {
  const user = await insertUserFake();

  const login = await request
    .post("/api/login")
    .send(user)
    .set("Accept", "application/json");

  return {
    user: user,
    token: login.body.token,
    callbackUserDelete: async (user) => {
      await deleteUserFake(user);
    },
  };
};

module.exports = { loginAuthFake };
