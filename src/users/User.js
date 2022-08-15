const moongose = require('mongoose');

const UserSchema = new moongose.Schema({
	name: {
		type: String,
		required: true,
	},
	userName: {
		type: String,
		required: true,
		unique: true,
	},
	userEmail: {
		type: String,
		required: true,
		unique: true,
		lowercase: true,
	},
	userPassword: {
		type: String,
		required: true,
		//select: false,
	},
	userAvatar: {
		type: String,
		required: true,
	},
});

const User = moongose.model('User', UserSchema);

module.exports = User;
