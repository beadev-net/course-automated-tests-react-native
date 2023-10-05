const RegisterUseCase = require("../usecases/RegisterUseCase");
const UsersRepository = require("../repositories/UsersRepository");

class RegisterController {
  async store(req, res, next) {
    try {
      const { name, email, password, birthday } = req.body;

      const userRepository = new UsersRepository();
      const useCase = new RegisterUseCase({ userRepository });

      console.log(`User: ${email}, registered with successfully`);

      const response = await useCase.execute({
        name,
        email,
        password,
        birthday,
      });

      res.status(201).send(response);

      res.end();

      return;
    } catch (err) {
      next(err);
    }
  }
}

module.exports = RegisterController;
