const restify = require('restify');
const { v1Router } = require('./api');

// membuat server baru
const createApp = async () => {
    const app = restify.createServer({
        name: 'simple Server',
        version: '1.0.0'
    });

    app.use(restify.plugins.bodyParser());
    app.use(restify.plugins.queryParser());

    // throw new Error('cant to db');

    app.get('/', function (req, res, next) {
        res.send(200, { message: 'Successfully in server' });

    });

    v1Router.router(app);

    return app;
};

module.exports.createApp = createApp;