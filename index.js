require('dotenv').config();
const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 3001;

const app = express();
app.use(cors());

app.get('/', (req, res) => {
	res.send({ messge: 'Hello World' });
});

app.listen(port, () => {
	console.log(`Servidor rodando na porta: ${port}`);
});
