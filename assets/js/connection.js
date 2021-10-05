function gitConnection(){
	var get = new XMLHttpRequest();
	// 2. Configure it: GET-request for the URL /article/.../load
	get.open('GET', 'https://api.github.com/users/Mene-hub/repos', true);

	// 3. Send the request over the network
	get.send();

	// 4. This will be called after the response is received
	get.onload = function() {
		if (get.status != 200) { // analyze HTTP status of the response
            console.log(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
        } else { // show the result
            var GitRepose = JSON.parse(get.response);
			var template;
            for(var i = 0; i<GitRepose.length; i++)
			{
				document.getElementById("datalistOptions").innerHTML += "<option value='" + GitRepose[i].name + "' >";
				template = "<div class='col-md-6 col-lg-4 projects_'> <div class='project-card-no-image' id='" + GitRepose[i].name + "' > <h3>" + GitRepose[i].name + "</h3> <h4>" + GitRepose[i].description + "</h4><a class='Git_Button' role='button' href='" + GitRepose[i].html_url + "'>more</a></div></div></div>";
				var tmp = document.getElementById("reposeContainer");
				tmp.innerHTML = tmp.innerHTML + template;
				gitReleases(GitRepose[i].name);
			}
		}
	}
}

function gitReleases(repos){
	var get = new XMLHttpRequest();
	// 2. Configure it: GET-request for the URL /article/.../load
	var repos_apiUrl ="https://api.github.com/repos/Mene-hub/" + repos + "/releases";
	get.open('GET', repos_apiUrl, true);

	// 3. Send the request over the network
	get.send();

	// 4. This will be called after the response is received
	get.onload = function() {
		if (get.status != 200) { // analyze HTTP status of the response
			console.log(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
		} else { // show the result
			if(JSON.parse(get.response).length>0){
				url = JSON.parse(get.response)[0].assets[0].browser_download_url;
				document.getElementById(repos).innerHTML += "<a class='Git_Download' role='button' href='" + url + "' Target='Blank'>download</a>";
			}
		}
	}
}

function SearchValueChange(val)
{
	document.getElementById("reposeContainer").innerHTML="";
	var form = document.getElementById("SearchBox");
	form.setAttribute("autocomplete", "false");
	gitFiltered(form.value);
}

function gitFiltered(filter){
	var get = new XMLHttpRequest();
	// 2. Configure it: GET-request for the URL /article/.../load
	get.open('GET', 'https://api.github.com/users/Mene-hub/repos', true);

	// 3. Send the request over the network
	get.send();

	// 4. This will be called after the response is received
	get.onload = function() {
		if (get.status != 200) { // analyze HTTP status of the response
            console.log(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
        } else { // show the result
            var GitRepose = JSON.parse(get.response);
			var template;
            for(var i = 0; i<GitRepose.length; i++)
			{
				filter = filter.toLowerCase();
				if((GitRepose[i].name + "").toLowerCase().includes(filter) || (GitRepose[i].description + "").toLowerCase().includes(filter)){
					document.getElementById("datalistOptions").innerHTML += "<option value='" + GitRepose[i].name + "' >";
					template = "<div class='col-md-6 col-lg-4 projects_'> <div class='project-card-no-image' id='" + GitRepose[i].name + "' > <h3>" + GitRepose[i].name + "</h3> <h4>" + GitRepose[i].description + "</h4><a class='Git_Button' role='button' href='" + GitRepose[i].html_url + "'>more</a></div></div></div>";
					var tmp = document.getElementById("reposeContainer");
					tmp.innerHTML = tmp.innerHTML + template;
					gitReleases(GitRepose[i].name);
				}
			}
		}
	}
}