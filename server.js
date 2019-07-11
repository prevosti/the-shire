var express = require('express')
var app = express()

// Constants
const PORT = 3000;

// App
app.get('/', function(req, res) {
	res.send('Welcome to The Shire!')
})

app.listen(PORT, function() {
	console.log('The Shire is running on port ' + PORT)
})
