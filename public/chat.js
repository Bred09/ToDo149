var a = document.querySelector('.sms')
var s = document.querySelector('.send')

function scroll() {
	a.scrollTo(pageXOffset, 999999999);
}
window.onload = () => {
	scroll();
	// после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
};

//   a.addEventListener('scroll', function() {
//   	arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
// });