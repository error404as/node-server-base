var express = require('express');
var router = express.Router();
var ctrl = require('../controllers');

router.get('/users', function(req, res, next) {
	ctrl.getUsers(function(data){
		res.json(data);
	})
});

module.exports = router;