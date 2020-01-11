const app = require('express')();
const express = require('express');
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');

app.set('view engine', 'ejs');
const mysql = require('mysql');
const PORT = process.env.PORT || 3000;


// Connect to DB
const db = mysql.createConnection({
	host     : '127.0.0.1',
	user     : 'root',
	password : '1599',
	database : 'todo149'
	// host     : 'db4free.net',
	// user     : 'rootik',
	// password : 'qweasdzxc',
	// database : 'todo149'
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

// Admin
app.get('/admin', function (req, res) {
	res.render('admin');
});



// Use static folder "public"
app.use(express.static(path.join(__dirname, 'public')));



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
io.on('connection', function (socket) {
	console.log('Socket Run...')

	// Info to day
	socket.on('todo', (data) => {
		let sql = `UPDATE data SET day = '${data}' WHERE data.id = 1`;

		db.query(sql, (err, result) => {
			if (err) throw err;
			console.log('Day changed');
		});

		io.emit('todo', data);
	});

	// Send sms
	socket.on('chat message', function(msg){

		let sql = `INSERT INTO messages (id, text) VALUES (NULL, '${msg}')`;

		db.query(sql, (err, result) => {
			if (err) throw err;
			console.log('SMS adding to DB...');
		})

		io.emit('chat message', msg);
	});


	// Disconnect
	socket.on('disconnect', function(){
		console.log('Socket STOP!');
	});
});


// Start server
http.listen(PORT, function() {
	console.log(`Server Run... [${PORT}]`)
})