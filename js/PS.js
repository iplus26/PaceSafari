console.log("hi");
window.onscroll = function () {
	//console.log (document.body.scrollTop / (document.body.scrollHeight - window.innerHeight ));
	document.getElementById('pacesafari').style.right =  (1 - document.body.scrollTop / (document.body.scrollHeight - window.innerHeight )) * 100 + "%";
}
