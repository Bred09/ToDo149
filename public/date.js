// Week day
function getWeekDay(date) {
	let days = [
		'Воскресенье',
		'Понедельник',
		'Вторник',
		'Среда',
		'Четверг',
		'Пятница',
		'Суббота'
	];

	return days[date.getDay()];
}

let date = new Date();

var day = document.querySelector('.day')
day.innerHTML = getWeekDay(date);

// Date and time
var h = document.querySelector('.hours');
h.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

var d = document.querySelector('.date');
var month = date.getMonth() + 1;
d.innerHTML = `${date.getDate()}:${month}:20`;

function f1(){
	var date = new Date();
	h.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

	d.innerHTML = `${date.getDate()}:${month}:20`;
}

setInterval(f1, 999);