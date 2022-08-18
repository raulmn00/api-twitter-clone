require('dotenv').config();
const User = require('../users/User');
const jwt = require('jsonwebtoken');

const authLoginService = async (userEmail) => {
	//findOne retorna o user que tem o email passado por parametro, .select('+userPassword') faz com que o mongo retorne tambem a senha para comparação e autenticação
	return User.findOne({ userEmail: userEmail }).select('+userPassword');
};

const generateTokenAuthService = (userId) => {
	return jwt.sign({ id: userId }, process.env.SECRET, { expiresIn: '24h' });
};

const findByIdUserService = async (userId) => User.findById(userId);

module.exports = {
	authLoginService,
	generateTokenAuthService,
	findByIdUserService,
};
