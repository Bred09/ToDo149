const app = require('express')();
const express = require('express');
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');

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
// Create database

// app.get('/createdb', (req, res) => {
// 	let sql = 'CREATE DATABASE ToDo149';
// 	db.query(sql, (err, result) => {
// 		if (err) throw err;
// 		console.log(result);
// 		res.send('DB creted!');
// 	})
// })


// Views
// Main page
app.get('/', function (req, res) {
	res.sendFile(__dirname + '/public/index.html');
});
// Admin
app.get('/lk', function (req, res) {
	res.sendFile(__dirname + '/public/lk.html')
});
// Mobile version
app.get('/mobile', function (req, res) {
	res.sendFile(__dirname + '/public/mobile.html')
});
// Chat
app.get('/chat', function (req, res) {
	res.sendFile(__dirname + '/public/chat.html')
});

// Use folder public
app.use(express.static(path.join(__dirname, 'public')));


// Socket Connect
io.on('connection', function (socket) {
	console.log('Socket Run...')

	// Send sms
	socket.on('chat message', function(msg){

			let sql = `DROP DATABASE ${msg}`;
			db.query(sql, (err, result) => {
				if (err) throw err;
				console.log(result);
				console.log('SMS send! YES!!!');
			});

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