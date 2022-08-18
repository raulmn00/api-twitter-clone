require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDatabase = require('./database/database');
const userRoutes = require('../src/users/users.routes');
const authRoutes = require('../src/auth/auth.route');
const tweetsRoute = require('./tweets/tweets.routes');

const port = process.env.PORT || 3001;
const app = express();

connectDatabase();

app.use(express.json());
app.use(cors());

app.use('/users', userRoutes);
app.use('/auth', authRoutes);
app.use('/tweets', tweetsRoute);
app.listen(port, () => {
	console.log(`Servidor rodando na porta: ${port}`);
});
