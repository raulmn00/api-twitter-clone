const tweetService = require('./tweets.service');

const createTweetController = async (req, res) => {
	try {
		const { message } = req.body;

		if (!message) {
			res.status(400).send({
				message:
					'Envie todos os dados necessário para a criação do tweet',
			});
		}

		const { id } = await tweetService.createTweetService(
			message,
			req.userId
		);

		return res.send({
			message: 'Tweet criado com sucesso!',
			tweet: { id, message },
		});
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
};

const findAllTweetsController = async (req, res) => {
	try {
		const allTweets = await tweetService.findAllTweetsService();
		if (allTweets.length === 0) {
			return res
				.status(400)
				.send({ message: 'Nenhum tweet foi encontrado.' });
		}
		return res.send({
			results: allTweets.map((tweet) => ({
				id: tweet.id,
				message: tweet.message,
				likes: tweet.likes.length,
				comments: tweet.comments.length,
				retweets: tweet.retweets.length,
				name: tweet.user.name,
				userName: tweet.user.userName,
				avatar: tweet.user.avatar,
			})),
		});
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
};

module.exports = { createTweetController, findAllTweetsController };
