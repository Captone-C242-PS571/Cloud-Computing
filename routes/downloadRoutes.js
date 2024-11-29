const express = require('express');
const { downloadModel } = require('../controller/downloadController'); 

const router = express.Router();

/**
 * Route untuk mengunduh file model ML dari Google Cloud Storage
 * @route GET /download-model/:fileName
 */
router.get('/:fileName', downloadModel);

module.exports = router;
