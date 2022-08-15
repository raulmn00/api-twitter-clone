const createUserController = async (req, res) => {
	res.send('create ok');
};
const findAllUserController = async (req, res) => {
	res.send('find all ok');
};

module.exports = {
	createUserController,
	findAllUserController,
};
