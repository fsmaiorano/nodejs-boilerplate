const services = require('../../../services');

class GithubController {

  constructor() {

  }

  async post(app, req, res) {
    const response = await app.services.githubServices.github.post(req.body.username);
    let x = 1;
    let xx = 1;
    let xxx = 1;
  }

}

module.exports = new GithubController();

