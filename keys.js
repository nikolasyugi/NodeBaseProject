module.exports = function () {
	keys = {
		apiUrl: process.env.API_URL,
		configEmail: {
			email: process.env.EMAIL,
			password: process.env.EMAIL_PASSWORD
		},
		env: {
			host: process.env.HOST
		},

		dbUrl: process.env.CLEARDB_DATABASE_URL,

	}

	return keys;
}