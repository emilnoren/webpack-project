const config = {};

// Web
config.server = {
	port: process.env.PORT || 3000,
};

// Database
config.database = {
	host: '',
	db_name: '',
	username: '',
	password: '',
	collation: '',
	prefix: '',
};

module.exports = config;