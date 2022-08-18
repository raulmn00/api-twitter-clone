const User = require('./User');

const findByEmailUserService = (userEmail) =>
	User.findOne({ userEmail: userEmail });

const findAllUsersServices = () => {
	return User.find();
};

const createNewUserService = (body) => {
	return User.create(body);
};
const findUserByNameService = (userName) => {
	return User.findOne({ userName: userName });
};

const findByIdUserService = (idUser) => User.findById(idUser);

module.exports = {
	findByEmailUserService,
	createNewUserService,
	findAllUsersServices,
	findUserByNameService,
	findByIdUserService,
};
