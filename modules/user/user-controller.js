module.exports = function (schemas) {

	var User = schemas.User;

	return {
		get: function (req, res) {

			var user = res.locals.user;

			return res.json({ success: true, user: user });

		},

		put: function (req, res) {

			var user = res.locals.user;

			var body = req.body;

			User.update(body, { where: { email: user.email } }).then(function (userDB) {
				return res.json({ success: true, message: 'Dados alterados com sucesso!' });
			}).catch(function (err) {
				return res.status(400).json({ success: false, err: err });
			});

		}

	}
}