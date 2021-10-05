function gitConnection(){
	var get = new XMLHttpRequest();
	// 2. Configure it: GET-request for the URL /article/.../load
	get.open('GET', 'https://api.github.com/users/Mene-hub/repos');

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
				template = "<div class='col-md-6 col-lg-4'> <div class='project-card-no-image'> <h3>" + GitRepose[i].name + "</h3> <h4>" + GitRepose[i].description + "</h4><a class='Git_Button' role='button' href='" + GitRepose[i].html_url + "' Target='Blank'>more</a></div> </div></div>";
				var tmp = document.getElementById("reposeContainer");
				tmp.innerHTML = tmp.innerHTML + template;
			}
		}
	}
}

function gitLast(){
	var get = new XMLHttpRequest();
	// 2. Configure it: GET-request for the URL /article/.../load
	get.open('GET', 'https://api.github.com/users/Mene-hub/repos');

	// 3. Send the request over the network
	get.send();

	// 4. This will be called after the response is received
	get.onload = function() {
		if (get.status != 200) { // analyze HTTP status of the response
            console.log(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
        } else { // show the result
            var tmp = document.getElementById("lastproject");
			var GitRepose = JSON.parse(get.response);
			tmp.setAttribute("href",  GitRepose[GitRepose.length-1].html_url);
			tmp = document.getElementsByClassName("Banner")[0];
			tmp.setAttribute("src", "assets/img/Copertine/" + GitRepose[i].name + " Banner.png");
		}
	}
}
function scrolling(){
	var body = document.getElementById("Scroller");
	var y = parseInt((this.scrollY*100)/2475)-5;

	if(y>=5 && y<10)
		document.getElementById("sequence").setAttribute("src", "../assets/img/sequence/image000" + y + ".png");

	if(y>=10 && y<=55)
	document.getElementById("sequence").setAttribute("src", "../assets/img/sequence/image00" + y + ".png");

}