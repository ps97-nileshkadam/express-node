let express = require("express")
let bp = require("body-parser")
let path = require("path")

require('dotenv').config()
const cors = require("cors")

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

let app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

const fileUpload = require("express-fileupload");

app.use(bp.json());
// app.use(express.static(path.join(__dirname, "/attachments")))
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
    next();
});
app.use(bp.json({ limit: "50mb" }));

app.use(fileUpload());

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(
    express.static(
        path.join(
            __dirname,
            `src`, `Client`
        )
    )
);
app.use('/*',
    express.static(
        path.join(
            __dirname,
            `src`, `Client`, 'index.html'
        )
    )
);

/*
app.listen(process.env.PORT, () => {
    console.log("Server started on Port: " + process.env.PORT)
});
*/

module.exports = app;