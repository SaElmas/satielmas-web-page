const express = require('express');
const path = require('path');
const mainRoutes = require('./src/routes/mainRoutes');

const app = express();
const PORT = 3000;

// Middleware to serve static assets transparently
app.use(express.static(path.join(__dirname, 'public')));

// Use our modular MVC route file
app.use('/', mainRoutes);

app.listen(PORT, () => {
    console.log(`Server running smoothly on http://localhost:${PORT}`);
});