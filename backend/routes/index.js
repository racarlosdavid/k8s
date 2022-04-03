var express = require('express');
var router = express.Router();
const config = require('../config/config');

router.get('/', function(req, res) {
    res.status(200).send(`Server ${config.name.appName} - Up and Running`);
});

module.exports = router;