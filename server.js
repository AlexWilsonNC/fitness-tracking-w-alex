require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})

app.use('/api', require('./routes/api.js'))
app.use(require('./routes/paths.js'))

app.listen(PORT, () => {
    console.log(`Your App is running on http://localhost:${PORT}`)
})