var express = require('express')
var app = express()

app.get('/', function(req, res) {
	res.send('Welcome to The Shire!')
})

app.listen(3000, function() {
	console.log('The Shire is running on port 3000')
})