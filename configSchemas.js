module.exports = function (Sequelize, sequelize, bcrypt) {

	//Schema
	var schema = {};
	schema.User = require(__basedir + '/models/User.js')(Sequelize, sequelize, bcrypt);


	// Schema Assotiations


	sequelize

		// .sync({force: true})
		// .then(function(err) {
		//   console.log('It worked!');

		// }, function (err) { 
		//   console.log('An error occurred while creating the table:', err);
		// });

		.sync()
		.then(function (err) {
			console.log('It worked!');

		}, function (err) {
			console.log('An error occurred while creating the table:', err);
		});

	return schema;
}