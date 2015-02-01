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

	var lanFilter = []
	var resultDescription = [];
	var resultUrl = [];

	//Determine which language box the user checked
	if(document.getElementsByName("python")[0].checked)
		lanFilter.push("Python");
	
	if(document.getElementsByName("json")[0].checked)
		lanFilter.push("JSON");
	
	if(document.getElementsByName("javascript")[0].checked)
		lanFilter.push("JavaScript");
	
	if(document.getElementsByName("sql")[0].checked)
		lanFilter.push("SQL");			
	
	if(document.getElementsByName("text")[0].checked)
		lanFilter.push("Text");			
	
	
	//Obtain Gists based on user's page number preference
	var numPages = document.getElementById("pageNumber").value;									//user's page number
	console.log("user page number = " + numPages);												//TEST - USER'S PAGE NUMBER INPUT
	for(var pageNum = 1; pageNum < (numPages + 1); pageNum++) {
		console.log("current page number = " + pageNum);										//TEST - CURRENT PAGE NUMBER ITERATION (SHOULD NOT EXCEED USER'S INPUT!)
		//httpRequest.open("GET", "https://api.github.com/gists/public?page=pageNum", true);	//commented to prevent lockout
		//httpRequest.send();																	//commented to prevent lockout
		
		//Store Gists from Github
		httpRequest.onreadystatechange = function() {
			if(httpRequest.readyState == 4) {
				var resultAllParsed = JSON.parse(httpRequest.responseText);
				
				/*
				//TEST TEST - lanFilter was successfully stored? YES YES
				for(var i = 0; i < lanFilter.length; i++) {
					console.log("lanFilter saved successfully? " + lanFilter[i]);
				}
				*/
				
				//Filter results by user language preferences
				for(var i = 0; i < resultAllParsed.length; i++) {
					for(var fileName in resultAllParsed[i].files) {								//files = object in resultAllParsed				
						var oneFile = resultAllParsed[i].files[fileName];						//access properties of files object
						for(var j = 0; j < lanFilter.length; j++) {								//filter based on user language preferences
							if(lanFilter[j] == oneFile.language) {
								resultDescription.push(resultAllParsed[i].description);			//save description
								resultUrl.push(resultAllParsed[i].html_url);					//save url
							}
						}
					}				
				}
					
				/*
				//TEST TEST - filtered and saved correctly? YES YES
				for(var i = 0; i < resultDescription.length; i++) {
					console.log(resultDescription[i]);
					console.log(resultUrl[i]);					
				}
				*/

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
	}
}