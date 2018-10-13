module.exports = function(){
	var modules = {};
	//http://expressjs.com/
	modules.express 		= require('express');
	//https://nodejs.org/api/path.html
	modules.path 			= require('path');
	//https://nodejs.org/api/http.html#http_http
	modules.http 			= require('http');
	//https://github.com/expressjs/morgan
	modules.morgan         	= require('morgan');
	//Esse é o que deixa eu usar req.body https://github.com/expressjs/body-parser
	modules.bodyParser     	= require('body-parser');
	//https://github.com/expressjs/method-override
	modules.methodOverride 	= require('method-override');
	// http://docs.sequelizejs.com/en/latest/
	modules.Sequelize		= require('sequelize');
	//https://www.npmjs.com/package/uid-generator
	modules.UIDGenerator 	= require('uid-generator');
	// https://github.com/nodemailer/nodemailer
	modules.nodemailer 		= require('nodemailer');
	// https://www.npmjs.com/package/request
	modules.request 		= require('request');

	return modules;
}
