window.onload = function(){
	//searchGist();
}



function searchGist() {
	//Store git results from Github
			var resultAllParsed = [];
			var lanFilter = []
			var resultDescription = [];
			var resultHtmlUrl = [];
			
			console.log(document.getElementsByName("python")[0].value);
			console.log(document.getElementsByName("python").length);
		
			//Determine which language box the user checked
			if(document.getElementsByName("python").checked)
				console.log("Python is checked");
				//lanFilter.push("python");
			else
				console.log("Python is not checked");
			
			//console.log("Python = " + lanFilter[0]);
			
			if(document.getElementsByName("json").checked)
				lanFilter.push("json");
			
			if(document.getElementsByName("javascript").checked)
				lanFilter.push("javascript");
			
			if(document.getElementsByName("sql").checked)
				lanFilter.push("sql");			
			
			if(document.getElementsByName("text").checked)
				lanFilter.push("Text");				


			/*
			console.log(lanFilter.length);
			
			for(var i = 0; i < lanFilter.length; i++) {
				console.log(lanFilter[i]);
			}
			
			
			//Filter results by language box preferences
			for(var i = 0; i < resultAllParsed.length; i++) {
				for(var j = 0; j < lanFilter.length; j++) {
					if(resultAllParsed[i].language == lanFilter[j]) {
						resultDescription = (resultAllParsed[i].description);
						resultHtmlUrl.push(resultAllParsed[i].html_url);
					}
				}
			}
			
	
			
			//Display Gist Results as list items	
			var ul = document.getElementById('gistResults').appendChild(document.createElement("ul"));
			var li;
			
			for(var i = 0; i < resultDescription.length; i++) {
				li = document.createElement("li");
				li.innerHTML = resultDescription[i];
				ul.appendChild(li);	
			}
			*/
			
			
			
	
			
}