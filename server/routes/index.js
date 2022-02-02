var express = require('express');
var router = express.Router();
const { get, create, getInfo } = require('../controllers')

router.get('/', get)
router.post('/create', create)
router.get('/info', getInfo)
module.exports = router