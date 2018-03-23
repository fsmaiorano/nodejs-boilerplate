const { apiConfig } = require('../../../configs');

const githubRoutes = (server) => {
    server.post(`${apiConfig.routesUrl}/github/getUser`, (req, res) => {
        console.log(req);
    });
}

module.exports = githubRoutes;
