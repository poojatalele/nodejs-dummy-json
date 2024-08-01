const data = require('../data.json');

// Function to get all data
exports.getAllData = () => {
  return data;
};

// Function to filter data by name
exports.filterData = (name) => {
  return data.filter(item => item.name.includes(name));
};

// Function to sort data by name
exports.sortDataByName = () => {
  return data.sort((a, b) => a.name.localeCompare(b.name));
};
