module.exports = function(modules){

	//Test
	var test = {};
	test.controllers = {};
	test.controllers.test = require(__dirname + '/modules/test/test-controller.js')();

	//Routes
	var routes = {};
	routes.routes = require(__dirname + '/routes/router.js')(modules.express, routes);
	routes.v1 = {};
	routes.v1.teste = require(__dirname + '/routes/v1/test.js')(test);

	return routes.routes;

}