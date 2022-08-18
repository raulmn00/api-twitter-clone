const authService = require('./auth.service');
const bcrypt = require('bcryptjs');

const loginController = async (req, res) => {
	const { userEmail, userPassword } = req.body;
	const user = await authService.authLoginService(userEmail);
	if (!user) {
		return res.status(400).send({ message: 'Usuário não encontrado.' });
	}
	const isPasswordValid = await bcrypt.compare(
		userPassword,
		user.userPassword
	);
	if (!isPasswordValid) {
		return res.status(400).send({ message: 'Senha inválida.' });
	}

	const token = authService.generateTokenAuthService(user.id);

	res.send(token);
};

module.exports = {
	loginController,
};
