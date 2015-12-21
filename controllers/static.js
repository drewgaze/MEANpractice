var express = require('express');
var router = express.Router();

router.use(express.static(__dirname + '/../assets'));
router.use(express.static(__dirname + '/../templates'));

var filename = 'app.html';

var options = {root: './layouts', heads: {'x-timestamp': Date.now(), 'x-sent': true}};

router.get('/', function(req, res) {

	res.sendFile(filename, options, function(err) {

		if (err) return next(err);
	});
});

module.exports = router;