const data = require('../data.json');

// Function to get all data
exports.getAllData = () => {
    if (!data || data.length === 0) {
      const error = new Error('No data available');
      error.status = 404;
      throw error;
    }
    return data;
};

// Function to filter data by name
exports.filterByName = (name) => {
    const result =  data.filter(item => item.name.includes(name));

    if (result.length === 0) {
        const error = new Error(`No data found for name: ${name}`);
        error.status = 404;
        throw error;
      }
    
    return result;
};

// Function to filter by language
exports.filterByLanguage = (language) => {
    const result =  data.filter(item => item.language.includes(language));

    if (result.length === 0) {
        const error = new Error(`No data found for language: ${language}`);
        error.status = 404;
        throw error;
      }
    
    return result;
};

// Function to filter by version
exports.filterByVersion = (version) => {
    const result =  data.filter(item => item.version.toString().includes(version));

    if (result.length === 0) {
        const error = new Error(`No data found for version: ${version}`);
        error.status = 404;
        throw error;
      }
    
    return result;
};

// Function to sort by name
exports.sortByName = (order = 'asc') => {
    return data.sort((a, b) => {
      if (a.name < b.name) {
        return order === 'asc' ? -1 : 1;
      }
      if (a.name > b.name) {
        return order === 'asc' ? 1 : -1;
      }
      return 0;
    });
  };

 // Funtion to sort by language
exports.sortByLanguage = (order = 'asc') => {
    return data.sort((a, b) => {
      if (a.language < b.language) {
        return order === 'asc' ? -1 : 1;
      }
      if (a.language > b.language) {
        return order === 'asc' ? 1 : -1;
      }
      return 0;
    });
  };
  
  // Function to sort version
exports.sortByVersion = (order = 'asc') => {
    return data.sort((a, b) => {
      if (a.version < b.version) {
        return order === 'asc' ? -1 : 1;
      }
      if (a.version > b.version) {
        return order === 'asc' ? 1 : -1;
      }
      return 0;
    });
  };
