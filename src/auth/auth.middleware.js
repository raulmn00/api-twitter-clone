require('dotenv').config();
const jwt = require('jsonwebtoken');

const { findByIdUserService } = require('../users/users.service');

module.exports = (req, res, next) => {
	const authHeader = req.headers.authorization;
	if (!authHeader) {
		return res.status(401).send({ message: 'Usuario não autorizado.' });
	}
	const partsToken = authHeader.split(' ');

	if (partsToken.length !== 2) {
		return res.status(401).send({ message: 'Token inválido.' });
	}
	const [scheme, token] = partsToken;

	if (!/^Bearer^/i.test(scheme)) {
		return res.status(401).send({ message: 'Token mal formatado.' });
	}
	jwt.verify(token, process.env.SECRET, async (err, decoded) => {
		const user = await findByIdUserService(decoded.id);
		if (err || !user || !user.id) {
			return res.status(401).send({ message: 'Token inválido.' });
		}
		req.userId = user.id;
		return next();
	});
};
