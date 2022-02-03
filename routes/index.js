var express = require('express');
var router = express.Router();
const { get, create } = require('../controllers')

router.get('/', get)
router.post('/create', create)
module.exports = router