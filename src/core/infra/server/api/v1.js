const { datakuRouter } = require("../../../../modules/datakus/infra/routes");

const v1Router = (app) => {
    const apiVersionPath = '/api/v1';
    app.get(apiVersionPath, function (req, res, next) {
        res.send(200, { message: 'Server on Version V1' });
    });
    datakuRouter.routes(apiVersionPath, app);
}

module.exports.v1Router = { router: v1Router };