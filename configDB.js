module.exports = function (Sequelize, keys) {
	var sequelize = new Sequelize(keys.dbUrl);
	sequelize
		.authenticate()
		.then(function (err) {
			console.log('Connection has been established successfully.');
		})
		.catch(function (err) {
			console.log('Unable to connect to the database:', err);
		});

	return sequelize;
}