const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

// Route to get all data
router.get('/', dataController.getAllData);

// Route to filter data by name
router.get('/filter/:name', dataController.filterData);

// Route to sort data by name
router.get('/sort/name', dataController.sortDataByName);

module.exports = router;
