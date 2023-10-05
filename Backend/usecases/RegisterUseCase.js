const UserAlreadyExistException = require("../exceptions/UserAlreadyExistException");

class RegisterUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }

  async execute(user) {
    const userExists = await this.userRepository.getUserByEmail(user.email);

    if (userExists) {
      throw new UserAlreadyExistException();
    }

    await this.userRepository.save(user);

    return {
      message: "User created successfully",
    };
  }
}

module.exports = RegisterUseCase;
