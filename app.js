const app = require('express')();
const express = require('express');
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');

app.set('view engine', 'ejs');
const mysql = require('mysql');


// Connect to DB
const db = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '1599',
	database : 'ToDo149'
});

// Connect
db.connect((err) => {
	if (err) {
		throw err;
	}
	console.log('MySQL CONNECT...');
});


// Views
// Main page
app.get('/', function (req, res) {
	res.render('index');
});
// Admin
app.get('/lk', function (req, res) {
	res.render('lk');
});
// Mobile version
app.get('/mobile', function (req, res) {
	res.render('mobile');
});

// Chat
var reqDB = 'SELECT * FROM messages';
db.query(reqDB, (err, result) => {
	if (err) throw err;

	for(let i=0; i < result.length; i++){
		result[i].text;
	}

	// Chat render
	app.get('/chat', function (req, res) {
		res.render('chat', {
			smsText: result
		});
	});
});


// Admin
app.get('/admin', function (req, res) {
	res.render('admin');
});

// Use static folder "public"
app.use(express.static(path.join(__dirname, 'public')));


// Socket Connect
io.on('connection', function (socket) {
	console.log('Socket Run...')

	// Send sms
	socket.on('chat message', function(msg){

			let sql = `INSERT INTO messages (id, text) VALUES (NULL, '${msg}')`;
			db.query(sql, (err, result) => {
				if (err) throw err;
				console.log(result);
				console.log('SMS send! YES!!!');
			})

		io.emit('chat message', msg);
	});

	// Disconnect
	socket.on('disconnect', function(){
		console.log('Socket STOP!');
	});
});


// Start server
http.listen(3000, function() {
	console.log('Server Run...')
})