const bodyParser = require('body-parser'),
	    cors       = require('cors'),
	    morgan     = require('morgan'),
	    router     = require('./routes');

module.exports = app => {
	// Server setup
	app.use(bodyParser.json());
	app.use(cors());
	app.use(morgan('dev'));

	// Serve all api endpoint
	app.use(router);

	// Error handlers
	app.use(function(req, res, next) {
		let err = new Error('Not Found');
		err.status = 404;
		next(err);
  });
  
	app.use((error, req, res, next) => {
		res.status(error.status || 422).json({
			error: {
				message: error.message
			},
			error
		});
	});
};
