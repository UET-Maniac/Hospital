var express = require("express")
var bodyParser = require("body-parser")
var path = require("path")
var http = require("http")

var app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.set("view engine", "ejs")
app.set("views", __dirname + "/views")

app.get('/', function(req, res) {
    res.render('./pages/index')
})




var port = process.env.PORT || 3000
app.set('port', port)

// Create HTTP server
var server = http.createServer(app)

// Listen on provided port
server.listen(port, function() {
    var host = server.address().address
    var port = server.address().port
    console.log('Server running at ' + host + ':' + port)
})