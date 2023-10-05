const JWTService = require("../services/JWTService");
const { insertUserFake, deleteUserFake } = require("../test_utils/user");

const loginAuthFake = async () => {
  const user = await insertUserFake();

  const token = new JWTService().sign(user);

  return {
    user: user,
    token: token,
    callbackUserDelete: async (user) => {
      console.log("deleted user: ", user);
      await deleteUserFake(user);
    },
  };
};

const loginAuth = async (request, user) => {
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

module.exports = { loginAuthFake, loginAuth };
