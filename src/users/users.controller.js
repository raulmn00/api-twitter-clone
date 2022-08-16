const userService = require('./users.service');

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
	res.status(201).send(userCreated);
};
const findAllUserController = async (req, res) => {
	const allUsers = await userService.findAllUsersServices();
	res.send(allUsers);
};

module.exports = {
	createUserController,
	findAllUserController,
};
