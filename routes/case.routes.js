const express = require('express');
const router = express.Router();
const { uploadCase, getCases, getCaseById } = require('../controllers/case.controller');


router.post('/upload', uploadCase);
router.get('/', getCases);
router.get('/:id', getCaseById);

module.exports = router;
