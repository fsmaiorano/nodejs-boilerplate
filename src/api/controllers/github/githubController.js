class GithubController {

  constructor(app, req, res) {

  }

  async getUser(app, req, res) {
    try {
      const response = await this.handleVersion(app, req);
      res.send(response);
    } catch (err) {
      res.send(err.message);
    };
  }

  async handleVersion(app, req) {
    let apiVersion = req.headers.accept;
    switch (apiVersion) {
      case "1.0":
        return await app.services.githubServices.v1.github.getUser(req.body.username)
        break;
      default:
        return await app.services.githubServices.v1.github.getUser(req.body.username)
        break;
    }
  }
}

module.exports = new GithubController();

