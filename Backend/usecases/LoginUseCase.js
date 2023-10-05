const UsersRepository = require("../repositories/UsersRepository");
const JWTService = require("../services/JWTService");

class LoginUseCase {
  constructor(Repository) {
    this.userRepository = new UsersRepository();
  }

  async execute({ email, password }) {
    const user = await this.userRepository.getUserByEmail(email);
    console.log("user: ", user);
    console.log("email: ", email);
    console.log("password: ", password);

    if (user?.password != password) {
      return null;
    }

    const hashService = new JWTService();

    const token = hashService.sign({
      id: user._id.toString(),
      email: user.email,
    });

    return token;
  }
}

module.exports = LoginUseCase;
