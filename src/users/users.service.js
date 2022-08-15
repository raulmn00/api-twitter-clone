const User = require('./User');

const findByEmailUserService = (userEmail) =>
	User.findOne({ userEmail: userEmail });

const createNewUserService = (body) => {
	return User.create(body);
};

module.exports = {
	findByEmailUserService,
	createNewUserService,
};
