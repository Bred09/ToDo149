var a = document.querySelector('.sms')
var s = document.querySelector('.send')

function scroll() {
	a.scrollTo(pageXOffset, 999999999);
}
window.onload = () => {
	scroll();
};