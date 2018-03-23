const { apiConfig } = require('../../../configs');
const { githubController } = require('../../controllers');

const githubRoutes = app => {
  app.post(`${apiConfig.routesUrl}/github/getUser`, (req, res) => {
    app.api.controllers.github.githubController.post(app, req, res);
  });
}

module.exports = githubRoutes;
