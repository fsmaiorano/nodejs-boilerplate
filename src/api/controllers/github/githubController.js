class GithubController {

  constructor() {
  }

  async getUser(app, req, res) {
    try {
      const response = await app.services.githubServices.github.getUser(req.body.username);
      res.send(response);
    } catch (err) {
      res.send(err.message);
    };
  }

}

module.exports = new GithubController();

