const app = require('express').express();
const logger = require('morgan');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
})