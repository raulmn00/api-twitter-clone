const Tweet = require('./Tweet');

const createTweetService = async (message, userId) => {
	return Tweet.create({ message, user: userId });
};

const findAllTweetsService = async () => {
	return Tweet.find().sort({ _id: -1 }).populate('user');
};

module.exports = {
	createTweetService,
	findAllTweetsService,
};
