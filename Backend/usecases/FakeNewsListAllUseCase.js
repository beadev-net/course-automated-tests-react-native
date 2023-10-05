const fakeNewsRepository = require("../repositories/FakeNewsRepository");

class FakeNewsListAllUseCase {
  constructor() {
    this.repository = new fakeNewsRepository();
  }

  async execute() {
    const getAll = await this.repository.getAllFakeNews();

    return getAll;
  }
}

module.exports = FakeNewsListAllUseCase;
