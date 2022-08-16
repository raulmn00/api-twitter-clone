const User = require('./User');

const findByEmailUserService = (userEmail) =>
	User.findOne({ userEmail: userEmail });

const findAllUsersServices = () => {
	return User.find();
};

const createNewUserService = (body) => {
	return User.create(body);
};

module.exports = {
	findByEmailUserService,
	createNewUserService,
	findAllUsersServices,
};
