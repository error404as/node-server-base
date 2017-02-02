var express = require('express');
var router = express.Router();
var ctrl = require('../controllers');
var passport = require('passport');  


router.get('/', function(req, res, next) {
	res.render('index', { title: 'Home', editor: res.isuser, message:'Is index page' });
});



router.get('/login', isLoggedOut, function(req, res, next) {  
  res.render('login.ejs', { title: 'Login', message: req.flash('loginMessage'), editor: res.isuser });
});

router.post('/login', passport.authenticate('local-login', {  
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true,
}));

router.get('/signup', isLoggedOut, function(req, res) {  
  res.render('signup.ejs', { title: 'Sign Up', message: req.flash('loginMessage'), editor: res.isuser });
});

router.post('/signup', passport.authenticate('local-signup', {  
  successRedirect: '/',
  failureRedirect: '/signup',
  failureFlash: true,
}));

router.get('/logout', function(req, res) {  
  req.logout();
  res.redirect('/');
});

module.exports = router;

function isLoggedIn(req, res, next) {  
	if(req.isAuthenticated()) { return next() };
	res.redirect('/login');
}
function isLoggedOut(req, res, next) {  
	if(req.isAuthenticated()) { res.redirect('/'); };
	next();
}
