module.exports = function (Sequelize, sequelize, bcrypt) {

	var User = sequelize.define('User', {
		user_id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: Sequelize.STRING,
			allowNull: false
		},
		email: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true
		},
		lastName: Sequelize.STRING,
		password: Sequelize.TEXT,
		occupation: Sequelize.INTEGER,
		token: Sequelize.TEXT,
		token_update: Sequelize.DATE,
		new_password_token: Sequelize.TEXT
	});

	User.beforeCreate((user, options) => {
		if (user.password != undefined) {
			return bcrypt.hash(user.password, 10)
				.then(hash => {
					user.password = hash;
				})
				.catch(err => {
					throw new Error();
				});
		}
	});

	return User;

}


// occupation 0 -> farmer
// occupation 1 -> agronomist
// occupation 2 -> farmer & agronomist
