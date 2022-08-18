const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		require: true,
	},
	message: {
		type: String,
		require: true,
	},
	likes: {
		type: Array,
		require: true,
	},
	comment: {
		type: Array,
		require: true,
	},
	retweet: {
		type: Array,
		require: true,
	},
});

const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;
