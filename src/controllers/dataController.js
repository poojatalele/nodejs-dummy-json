const dataService = require('../services/dataService');

// Controller function to get all data
exports.getAllData = (req, res) => {
  const data = dataService.getAllData();
  res.json(data);
};

// Controller function to filter data by name
exports.filterData = (req, res) => {
  const { name } = req.params;
  const data = dataService.filterData(name);
  res.json(data);
};

// Controller function to sort data by name
exports.sortDataByName = (req, res) => {
  const data = dataService.sortDataByName();
  res.json(data);
};
