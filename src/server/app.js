'use strict';

// Get config
require('dotenv').config();

// Import our modules and classes
import express from 'express';

// Our constants
const app = express();

// Base route
app.get(
	'/', 
	(req, res) => res.send('Hello World!')
);

// Start server
app.listen(
	process.env.PORT, 
	() => console.log(`Server running on port ${process.env.PORT}`)
);