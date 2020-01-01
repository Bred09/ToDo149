// Notification (web push)
function push () {
    var noti = new Notification ('Вышло расписание на завтра!', {
        tag  : 'ache-mail',
        body : 'Расписание на 01.01.2020 уже на сайте',
        icon : 'https://sun9-30.userapi.com/c844616/v844616885/14a556/UUeTzaLpobg.jpg'
    });
}

function accept (argument) {
    if ( !("Notification" in window) ) {
        alert('Ваш браузер не поддреживает уведомления');
    }
    else if (Notification.permission === 'granted') {
        setTimeout(push, 5000);
    }
    else if (Notification.permission !== 'denied') {
        Notification.requestPermission (function (permission) {
            if ( !('permission' in Notification) ) {
                Notification.permission = permission;
            }
            if (permission === 'granted') {
                setTimeout(push, 5000);
            }
        })
    }
};

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
d.innerHTML = `${date.getDate()}:${month}:19`;

function f1(){
	var date = new Date();
	h.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

	d.innerHTML = `${date.getDate()}:${month}:19`;
}

setInterval(f1, 999);