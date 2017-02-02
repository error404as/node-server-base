var mongoose = require('mongoose');
var path = require('path');
var User = require('./models/userSchema');

var conf = require('./config');

mongoose.connect(conf.db_url);


module.exports = {
	
	users: function(fn){
		User.find().exec(function(err, data){
			fn(data)
		});
	}

};

