const app = require('express')();
const express = require('express');
const http = require('http').createServer(app);
const io = require('socket.io')(http);

var fs = require("fs");
const path = require('path');

// Exports modules
const configDB = require('./configDB.js');
	
// Use express
app.set('view engine', 'ejs');
app.use(express.static('public'));
const mysql = require('mysql');
const PORT = process.env.PORT || 3000;


// Config data to DB
const db = mysql.createConnection({
	host     : configDB.host,
	user     : configDB.user,
	password : configDB.password,
	database : configDB.database
});




// Views
// Main page
// let reqDB = 'SELECT day FROM data  WHERE id = 1;';
// let reqDB = 'SELECT * FROM lessons;';

app.get('/', function (req, res) {
// JSON DB
	var dataJSON = fs.readFileSync("data.json");
	const data = JSON.parse(dataJSON);
	res.render('index', {
		data : data
	});
});

// Admin
app.get('/lk', function (req, res) {
	res.render('lk');
});
// Mobile version
app.get('/mobile', function (req, res) {
	res.render('mobile');
});

// Admin
app.get('/admin', function (req, res) {
	res.render('admin');
});


// Connect to DB
db.connect((err) => {
	if (err) {
		throw err;
	}
	console.log('MySQL CONNECT...');
});
// Chat
app.get('/chat', function (req, res) {

	let reqDB = 'SELECT * FROM messages';
	db.query(reqDB, (err, result) => {
		if (err) throw err;

		res.render('chat', {
			smsText: result
		});
	});
});

// Socket Connect
io.on('connection', (socket) => {
	console.log('Socket Run...')

	// Info to day
	socket.on('dataPush', (dataAdmin) => {
		sendNotification(message);
		// Query to DB
		fs.writeFileSync('data.json', JSON.stringify(dataAdmin));

		console.log('Data writing to DB');
		var dataIndex = fs.readFileSync('data.json');
		io.emit('dataPull', dataAdmin);
	});

	// Send sms
	socket.on('chat message', (msg) => {

		let sql = `INSERT INTO messages (id, text) VALUES (NULL, '${msg}')`;

		db.query(sql, (err, result) => {
			if (err) throw err;
			console.log('SMS adding to DB...');
		})

		io.emit('chat message', msg);
	});


	// Disconnect
	socket.on('disconnect', () => {
		console.log('Socket STOP!');
	});
});

// Notification
var sendNotification = function(data) {
  var headers = {
    "Content-Type": "application/json; charset=utf-8",
    "Authorization": "Basic ZDc3NzkzMDQtYjAxNi00YTg2LThhYTItMDczMzU2ZmJhY2Iz"
  };
  
  var options = {
    host: "onesignal.com",
    port: 443,
    path: "/api/v1/notifications",
    method: "POST",
    headers: headers
  };
  
  var https = require('https');
  var req = https.request(options, function(res) {  
    res.on('data', function(data) {
      console.log("Response:");
      console.log(JSON.parse(data));
    });
  });
  
  req.on('error', function(e) {
    console.log("ERROR:");
    console.log(e);
  });
  
  req.write(JSON.stringify(data));
  req.end();
};

var message = {
  app_id: "4f74eaf6-6ee9-43a6-a7b1-fccf3f809129",
  contents: {
  	"en": `Расписание на DAY уже на сайте`,
  	"ru": `Расписание на DAY уже на сайте`
  },
  included_segments: ["All"],
  headings: {
  	"en": "Расписание на завтра",
  	"ru": "Расписание на завтра"
  },

};

// Start server
http.listen(PORT, () => {
	console.log(`Server Run on port: ${PORT}`)
})
