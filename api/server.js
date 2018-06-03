const express    = require('express');
const bodyParser = require('body-parser');
const routes = require("./routes.js");
const cors = require('cors');

const app  = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

routes(app);


const server = app.listen(6969, function () {
    console.log("app running on port.", server.address().port);
});
