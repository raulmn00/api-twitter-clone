const Tweet = require('./Tweet');

const createTweetService = async (message, userId) => {
	return Tweet.create({ message, user: userId });
};

module.exports = {
	createTweetService,
};
