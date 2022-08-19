const userService = require('./users.service');
const authService = require('../auth/auth.service');

const createUserController = async (req, res) => {
	const { name, userName, userEmail, userPassword, userAvatar } = req.body;
	if (!name || !userName || !userEmail || !userPassword || !userAvatar) {
		return res.status(400).send({
			message:
				'Alguns campos estão faltando. Por favor verifique os campos: Name, UserName, Email, Password, Avatar',
		});
	}
	const foundUser = await userService.findByEmailUserService(userEmail);
	if (foundUser) {
		return res.status(400).send({
			message: 'Usuário existente. Por favor, tente usar outro email.',
		});
	}
	const userCreated = await userService
		.createNewUserService(req.body)
		.catch((err) => console.log(err.message));
	if (!userCreated) {
		return res.status(400).send({ message: 'Erro ao criar usuário.' });
	}

	const token = authService.generateTokenAuthService(userCreated.id);

	res.status(201).send({
		user: {
			id: userCreated.id,
			name,
			userName,
			email,
			avatar,
		},
		token,
	});
};
const findAllUserController = async (req, res) => {
	const allUsers = await userService.findAllUsersServices();
	if (allUsers.length === 0) {
		return res.status(400).send({
			message: 'Não existem usuários cadastrados!',
		});
	}
	res.send(allUsers);
};

const findUserByNameController = async (req, res) => {
	const userName = req.params.userName;
	const userFinded = await userService.findUserByNameService(userName);
	res.send(userFinded);
};

module.exports = {
	createUserController,
	findAllUserController,
	findUserByNameController,
};
