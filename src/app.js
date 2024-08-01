const express = require('express');
const dataRoutes = require('./routes/dataRoutes');
const errorHandler = require('./middleware/errorHandler');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api/data', dataRoutes);

// Error handling middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
