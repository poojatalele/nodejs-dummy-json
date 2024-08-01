const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

// Route to get all data
router.get('/', dataController.getAllData);

// Routes to filter data by specific columns
router.get('/filter/name/:name', dataController.filterByName);
router.get('/filter/language/:language', dataController.filterByLanguage);
router.get('/filter/version/:version', dataController.filterByVersion);
router.get('/filter/id/:id', dataController.filterById);

// Routes to sort data by specific columns
router.get('/sort/name/:order', dataController.sortByName);
router.get('/sort/language/:order', dataController.sortByLanguage);
router.get('/sort/version/:order', dataController.sortByVersion);
router.get('/sort/id/:order', dataController.sortById);

module.exports = router;
