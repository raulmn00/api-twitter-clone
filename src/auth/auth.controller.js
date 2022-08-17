const authService = require('./auth.service');

const loginController = async (req, res) => {
	res.send({ message: 'Login realizado.' });
};

module.exports = {
	loginController,
};
