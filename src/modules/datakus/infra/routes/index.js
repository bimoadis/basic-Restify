const { createUser } = require("../../useCases/createUser");
const { deleteUser } = require("../../useCases/deleteUser");
const { getRecentUser } = require("../../useCases/getRecentUser");
const { getUserById } = require("../../useCases/getUserById");
const { updateUser } = require("../../useCases/updateUser");


const datakuRouter = (apiVersionPath, app) => {
    //apiVersionPath
    app.post(apiVersionPath + '/dataku', createUser);
    app.get(apiVersionPath + '/dataku', getRecentUser);
    app.get(apiVersionPath + '/dataku/:id', getUserById);
    app.put(apiVersionPath + '/dataku/:id', updateUser);
    app.del(apiVersionPath + '/dataku/:id', deleteUser);
}

module.exports.datakuRouter = { routes: datakuRouter };