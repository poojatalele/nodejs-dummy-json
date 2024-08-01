const dataService = require('../services/dataService');

// Controller function to get all data
exports.getAllData = (req, res) => {
  try{
    const data = dataService.getAllData();
    res.json(data);
  } catch(error) {
    res.status(500).json({ message: 'Error fetching data', error: error.message });
  }
};

// Controller function to filter data by name
exports.filterByName = (req, res) => {
  try{
    const { name } = req.params;
    if (!name) {
        throw new Error('Name parameter is required');
    }
    const data = dataService.filterByName(name);
    res.json(data);
  } catch (error) {
    res.status(400).json({ message: 'Invalid request', error: error.message });
  }
};

// Controller function to filter data by language
exports.filterByLanguage = (req, res) => {
    try {
      const { language } = req.params;
      if (!language) {
        throw new Error('Language parameter is required');
      }
      const data = dataService.filterByLanguage(language);
      res.json(data);
    } catch (error) {
      res.status(400).json({ message: 'Invalid request', error: error.message });
    }
  };

 // Controller function to filter data by version
exports.filterByVersion = (req, res) => {
    try {
      const { version } = req.params;
      if (!version) {
        throw new Error('Version parameter is required');
      }
      const data = dataService.filterByVersion(version);
      res.json(data);
    } catch (error) {
      res.status(400).json({ message: 'Invalid request', error: error.message });
    }
  };

  // Controller function to filter data by id
exports.filterById = (req, res) => {
    try {
      const { id } = req.params;
      if (!id) {
        throw new Error('ID parameter is required');
      }
      const data = dataService.filterById(id);
      res.json(data);
    } catch (error) {
      res.status(400).json({ message: 'Invalid request', error: error.message });
    }
  };

  // Controller function to sort data by name
exports.sortByName = (req, res) => {
    try {
      const { order } = req.params;
      if (!order) {
        throw new Error('Order parameter is required');
      }
      const data = dataService.sortByName(order);
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: 'Error sorting data', error: error.message });
    }
  };

  // Controller function to sort data by language
exports.sortByLanguage = (req, res) => {
    try {
      const { order } = req.params;
      if (!order) {
        throw new Error('Order parameter is required');
      }
      const data = dataService.sortByLanguage(order);
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: 'Error sorting data', error: error.message });
    }
  };
  
  // Controller function to sort data by version
exports.sortByVersion = (req, res) => {
    try {
      const { order } = req.params;
      if (!order) {
        throw new Error('Order parameter is required');
      }
      const data = dataService.sortByVersion(order);
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: 'Error sorting data', error: error.message });
    }
  };

  // Controller function to sort data by id
exports.sortById = (req, res) => {
    try {
      const { order } = req.params;
      if (!order) {
        throw new Error('Order parameter is required');
      }
      const data = dataService.sortById(order);
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: 'Error sorting data', error: error.message });
    }
  };
