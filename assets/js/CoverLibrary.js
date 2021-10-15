function readJson(){

    var get = new XMLHttpRequest();
	// 2. Configure it: GET-request for the URL /article/.../load
	get.open('GET', 'http://claudio.menegotto.unaux.com/LibraryAPI.php', true);

	// 3. Send the request over the network
	get.send();

	// 4. This will be called after the response is received
	get.onload = function() {
		if (get.status != 200) { // analyze HTTP status of the response
            console.log(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
        } else {
            var Library = JSON.parse(get.response);

            var tmp = document.getElementById("CovereContainer");
            tmp.innerHTML = "<br/>";
            for(var i = 0; i<Library.Library.Cover.length; i++)
            {
                template = "<div class='col-md-6 col-lg-4 projects_'> <div class='project-card-no-image' id='" + Library.Library.Cover[i].Name + "' ><h3>" + Library.Library.Cover[i].Name + "</h3> <h4>" + Library.Library.Cover[i].Description + "</h4><image class='coverImg' src='" + Library.Library.Cover[i].path + "'><br/><br/><a class='Git_Button' role='button' href='" + Library.Library.Cover[i].url + "'>more</a></div></div></div>";                
                tmp.innerHTML += template;
            }
        }
    }
}