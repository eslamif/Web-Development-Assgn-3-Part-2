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
			var lanFilter = []
			var resultDescription = [];
			var resultHtmlUrl = [];
			
			//Determine which language box the user checked
			if(document.getElementsByName("python")[0].checked)
				lanFilter.push("python");
			
			if(document.getElementsByName("json")[0].checked)
				lanFilter.push("json");
			
			if(document.getElementsByName("javascript")[0].checked)
				lanFilter.push("javascript");
			
			if(document.getElementsByName("sql")[0].checked)
				lanFilter.push("sql");			
			
			if(document.getElementsByName("text")[0].checked)
				lanFilter.push("Text");				
			
			
			//TEST TEST - lanFilter was successfully stored? YES YES
			for(var i = 0; i < lanFilter.length; i++) {
				console.log("lanFilter saved successfully? " + lanFilter[i]);
			}
			
			
			//Filter results by language box preferences
			for(var i = 0; i < resultAllParsed.length; i++) {
				for(var j = 0; j < lanFilter.length; j++) {
					console.log("resultAllParsed.language = " + resultAllParsed[i].language);
					console.log("lanFilter = " + lanFilter[j]);
					if(resultAllParsed[i].language == lanFilter[j]) {
						resultDescription.push(resultAllParsed[i].description);
						resultHtmlUrl.push(resultAllParsed[i].html_url);
					}
				}
			}
			
			//TEST TEST - resultDescription filled correctly?
			console.log("Length of resultDescription = " + resultDescription.length);
			for(var i = 0; i < resultDescription.length; i++) {
				console.log("resultDescription saved successfully?" + resultDescription[i]);
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