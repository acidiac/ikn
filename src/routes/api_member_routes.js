/*!
 * Indigenous Knowledge Network Platform 
 * Author: Amit Chanchal, amit.chanchal@hotmail.com
 * SUI, IKN(Anthill)
 * June 2016, Bangalore
 */

//Member routes

var express = require('express'),
	mongoose require('mongoose'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override');

var router = express.Router();

router.use(bodyParser.urlencoded({extended:true}));

// middleware that is specific to this router

/*
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
*/





module.exports = router;