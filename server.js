module.exports = function (keys, modules, schemas, Op, uidgen, transporter) {

	//Middlewares
	var middlewares = {};
	middlewares.auth = require(__basedir + '/middlewares/auth.js')(schemas);

	//User
	var user = {};
	user.controllers = {};
	user.controllers.auth = require(__basedir + '/modules/user/auth-controller.js')(keys, Op, schemas, uidgen, transporter);
	user.controllers.user = require(__basedir + '/modules/user/user-controller.js')(schemas);

	//Test
	var test = {};
	test.controllers = {};
	test.controllers.test = require(__basedir + '/modules/test/test-controller.js')(schemas);


	//Rotas
	var routes = {};
	routes.routes = require(__basedir + '/routes/router.js')(modules.express, routes);
	routes.v1 = {};
	routes.v1.test = require(__basedir + '/routes/v1/test.js')(middlewares, test);
	routes.v1.user = require(__basedir + '/routes/v1/user.js')(middlewares, user);

	return routes.routes;

}