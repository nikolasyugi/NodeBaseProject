global.__basedir = __dirname;

var modules = require(__basedir + '/modules.js')();

var keys = require(__basedir + '/keys.js')();

var app = modules.express();

app.use(modules.bodyParser.json());
app.use(modules.morgan('dev'));
app.use(modules.bodyParser.urlencoded({ extended: false }));
app.use(modules.express.static(modules.path.join(__basedir, 'public')));
app.use(modules.methodOverride());

var http = modules.http.createServer(app);

var sequelize = require(__basedir + '/configDB.js')(modules.Sequelize, keys);

var schemas = require(__basedir + '/configSchemas.js')(modules.Sequelize, sequelize, modules.bcrypt);

var Op = modules.Sequelize.Op;

var uidgen = new modules.UIDGenerator();

var transporter = modules.nodemailer.createTransport('smtps://' + keys.configEmail.email + ':' + keys.configEmail.password + '@smtp.gmail.com');

var server = require(__basedir + '/server.js')(keys, modules, schemas, Op, uidgen, transporter, modules.request);

server(app)();

return http.listen(process.env.PORT || 3000, function () {
	console.log("Server is on, listening on: 3000");
});