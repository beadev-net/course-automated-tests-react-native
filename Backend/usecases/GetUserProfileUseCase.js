const JWTServices = require("../services/JWTService");
const UsersRepository = require("../repositories/UsersRepository");

class GetUserProfileUseCase {
  async execute({ token }) {
    const { id } = new JWTServices().decode(token);

    const result = await new UsersRepository().getUserById(id);

    if (!result) {
      return null;
    }

    delete result.password;

    return result;
  }
}

module.exports = GetUserProfileUseCase;
