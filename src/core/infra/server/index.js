const { createApp } = require("./app");
const port = process.env.PORT || 8080;

(async () => {
    try {
        const app = await createApp();
        app.listen(port, () => {
            console.log(`[ APP ]: server is up on port ${port}`);
        })

    } catch (ex) {
        console.log('[APP]: this error');
        console.log(ex.message);
    }
})();

// console.log('this is server');




