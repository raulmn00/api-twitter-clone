require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDatabase = require('./database/database');
const userRoutes = require('../src/users/users.route');

const port = process.env.PORT || 3001;

const app = express();
connectDatabase();
app.use(cors());
app.use('/users', userRoutes);

app.listen(port, () => {
	console.log(`Servidor rodando na porta: ${port}`);
});
