window.onload = function() {
	getGists();
}

//Ajax request for Gists from Github
var httpRequest;
if(window.XMLHttpRequest) {					//Browsers other than internet explorer
	httpRequest = new XMLHttpRequest();
}
else if(window.ActiveXObject) {				//internet explore browser
	httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}
if(!req) {
	throw 'Unable to create HttpRequest.';
}
