// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

const router = require("./Routes/index"); 

const db = require('./db');

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//Enable Cors
app.use(cors());

//index Router
// app.use('/', router);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});