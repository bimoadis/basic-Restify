// 1. memanggil restify
const restify = require('restify');

//2.memebuat server
const server = restify.createServer();

//4. data yang ditampilakan 
const datakus = [
    {
        id: 1,
        name: "Rajasthan",
        address: "Jaipur"
    },
    {
        id: 2,
        name: "Punjab",
        address: "Chandigarh"
    },
    {
        id: 3,
        name: "Uttar Pradesh",
        address: "Lucknow"
    },
    {
        id: 4,
        name: "Gujarat",
        address: "Gandhinagar"
    },
    {
        id: 5,
        name: "Kerala",
        address: "Thiruvananthapuram"
    }
]

//6.membuat body parser untuk melihat data
server.use(restify.plugins.bodyParser);

//11.req.query
server.use(restify.plugins.queryParser());

//9. membuat middleware
const ensureAunteticated = (idCard) => {
    //10. parameter di middleware == idcard
    return (req, res, next) => {
        if (req.headers.authorization === idCard) {
            next();
        } else {
            res.send(401, { message: 'Anda tidak memiliki akses ini' })
        }
    }
}

//10. slug: category/year/month/day/title
//localhost:8080/blog/restify/2020
server.get('/blog/*', (req, res, next) => {
    const paramList = ['category', 'year', 'month', 'day', 'title'];
    const params = req.params['*'].split('/');
    const onjParams = {};
    params.forEach((param, index) => {
        if (index < paramList.length) {
            onjParams[paramList[index]] = param;
        }
    });
    res.send(200, { params: onjParams });
})

//9. membuat middlware secara global
// server.get('/',ensureAunteticated, function (req, res, next) {
//     res.send(200, 'Selamat datang di serverKU');
// });


//4.membuat fungsi get data
server.get('/api/dataku', sendInformation);
function sendInformation(req, res, next) {
    // this is the function which will get 
    // triggered when the /:stateName route
    // will be called
    res.send(200, datakus);
}

//3. memebuat get home
server.get('/', function (req, res, next) {
    res.send(200, 'Selamat datang di serverKU');
});


//5.membuat get berdasarkan id
server.get('/api/dataku/:id', id);
function id(req, res, next) {
    const dataku = datakus.filter(dataku => dataku.id === +req.params.id);
    if (!user) {
        return res.send(404, { message: `user dengan ID  ${req.params.id} tidak ditemukan` });
    }
    res.send(200, dataku);
}

//6.memebuat Post
server.post('/api/dataku', ensureAunteticated('2'), function (req, res, next) {
    const dataku = {
        id: datakus.length + 1,
        name: req.body.name,
        address: req.body.address
    };
    datakus.push(dataku);
    res.send(201, datakus);
});

//7.memebuat put
server.put('/api/dataku/:id', function (req, res, next) {
    const dataId = +req.params.id;
    const { name } = req.body;
    const { address } = req.body;

    const indexOfUser = datakus.findIndex(dataku => dataku.id === dataId);
    console.log('Index of User: ' + indexOfUser);
    datakus[indexOfUser].name = name;
    datakus[indexOfUser].address = address;
    console.log(datakus[indexOfUser]);
    res.send(200, datakus[indexOfUser]);
});

//8.memebuat delete
server.del('/api/dataku/:id', function (req, res, next) {
    const dataId = +req.params.id;
    const indexOfUser = datakus.findIndex(dataku => dataku.id === dataId);
    if (indexOfUser === -1) {
        return res.send(404, { message: `user dengan ID  ${req.params.id} tidak ditemukan` });
    }
    datakus.splice(indexOfUser, 1);
    res.send(200, { message: 'Successfully to delete' });

});


//2. masuk ke post yang sudah dipilih
server.listen(8080, function () {
    console.log('Server is up on port 8080');
});



