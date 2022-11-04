var express = require('express');
var router = express.Router();
const pokeController = require('../controllers/pokeController');

router.get('/:name', pokeController.detailPoke);

router.post('/:name', pokeController.create);

router.delete('/:name', pokeController.deletePoke);

module.exports = router;