const User = require('../users/User');

const authLoginService = async (userEmail) => {
	//findOne retorna o user que tem o email passado por parametro, .select('+userPassword') faz com que o mongo retorne tambem a senha para comparação e autenticação
	return User.findOne({ userEmail: userEmail }).select('+userPassword');
};

module.exports = {
	authLoginService,
};
