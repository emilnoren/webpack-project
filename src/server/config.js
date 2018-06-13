const config = {};

// WEB
config.server = {};
config.server.port = process.env.PORT || 3000;

// DATABASE
config.database = {};
config.database.host = '';
config.database.db_name = '';
config.database.username = '';
config.database.password = '';
config.database.collation = '';
config.database.prefix = '';

module.exports = config;