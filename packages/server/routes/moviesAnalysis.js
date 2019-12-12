const express = require('express');
const router = express.Router();
const movieController = require('../controller/movieAnalysis');

router.get('/movies', movieController.getMovies);

module.exports = router;
