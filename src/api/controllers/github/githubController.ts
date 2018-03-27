class GithubController {

    constructor() {

    }

    async getUser(app, req, res) {
      try {
        const isValid = this.validate(app, req, res);
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

    validate(app, req, res) {
      req.assert("username", "Error: Param 'username' is missing.").notEmpty();

      const errors = req.validationErrors();

      if (errors)
        res.send(errors);

      return true;
    }
  }

export default new GithubController();

