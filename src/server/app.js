'use strict';

import express from 'express';

const config = require('./config.js'),
			app = express();


app.get('/', (req, res) => res.send('Hello World!'));

app.listen(config.server.port, () => console.log(config));