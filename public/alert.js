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
        alert('Ваш браузер не поддерживает уведомления');
    }
    else if (Notification.permission === 'granted') {
        setTimeout(push, 0);
    }
    else if (Notification.permission !== 'denied') {
        Notification.requestPermission (function (permission) {
            if ( !('permission' in Notification) ) {
                Notification.permission = permission;
            }
            if (permission === 'granted') {
                setTimeout(push, 0);
            }
        })
    }
};