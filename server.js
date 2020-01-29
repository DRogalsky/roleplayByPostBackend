const express = require("express");
var cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;
app.use(cors())

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT)
    })
})