const UpdateUserProfileUseCase = require("../usecases/UpdateUserProfileUseCase");
const GetUserProfileUseCase = require("../usecases/GetUserProfileUseCase");
class UsersController {
  async update(req, res) {
    const { email, birthday, name } = req.body;

    const token = await new UpdateUserProfileUseCase().execute({
      email: email,
      birthday: birthday,
      name: name,
    });

    res.status(200).json({
      token: token,
    });

    res.end();
    return;
  }

  async show(req, res) {
    const { token } = req.query;

    const user = await new GetUserProfileUseCase().execute({
      token: token,
    });

    res.status(200).json({
      user: user,
    });

    res.end();
    return;
  }
}

module.exports = UsersController;
