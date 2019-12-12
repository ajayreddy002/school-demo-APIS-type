import express = require('express');
import routes from "./routes";
import bodyParser from 'body-parser';
import cors from 'cors'
// Create a new express application instance
const app: express.Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use('/', routes)
app.get('/', function (req, res) {
    res.send('Hello World');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000');
});