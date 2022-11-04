var express = require('express');
var router = express.Router();
const pokeController = require('../controllers/pokeController');

/* GET home page. */
router.get('/', pokeController.getPokes);

module.exports = router;