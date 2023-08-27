const express = require('express');
const app = express();

const alerts_Router = require('./AletRouter');
const alerts_by_Profile_Router = require('./Alet_by_Profile_Router');

app.use('/alerts'     , alerts_Router);
app.use('/alerts_On'  , alerts_by_Profile_Router);

module.exports = app;
