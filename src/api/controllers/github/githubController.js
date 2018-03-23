class GithubController {

  constructor() {

  }

  async getUser(app, req, res) {
    const response = await app.services.githubServices.github.getUser(req.body.username);
    let x = 1;
    let xx = 1;
    let xxx = 1;
  }

}

module.exports = new GithubController();

