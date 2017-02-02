var db = require('../db');

module.exports = {
	getUsers: function(fn){
		db.users(fn);
	}
};

