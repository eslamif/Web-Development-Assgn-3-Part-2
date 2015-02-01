window.onload = function(){
}

function searchGist() {
	var httpRequest;
	if(window.XMLHttpRequest) {					//Browsers other than internet explorer
		httpRequest = new XMLHttpRequest();
	}
	else if(window.ActiveXObject) {				//internet explore browser
		httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	if(!httpRequest) {
		throw 'Unable to create HttpRequest.';
	}	

	httpRequest.onreadystatechange = function() {
		if(httpRequest.readyState == 4) {
			//Store git results from Github
			var resultAllParsed = JSON.parse(httpRequest.responseText);
			var resultDescription = [];
			var resultHtmlUrl = [];
			
			for(var i = 0; i < resultAllParsed.length; i++) {
				resultDescription[i] = resultAllParsed[i].description;
				resultHtmlUrl[i] = resultAllParsed[i].html_url;
			}
			
			//Display Gist Results as list items	
			var ul = document.getElementById('gistResults').appendChild(document.createElement("ul"));
			var li;
			
			for(var i = 0; i < resultDescription.length; i++) {
				li = document.createElement("li");
				li.innerHTML = resultDescription[i];
				ul.appendChild(li);	
			}

			

			/*
			//Save to local storage
			localStorage.setItem("test", resultAllParsed[0].description);
			console.log(localStorage.getItem("test"));
			*/
		}
	}
	
	httpRequest.open("GET", "https://api.github.com/gists/public", true);
	httpRequest.send();

	
}