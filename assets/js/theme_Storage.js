function styleLoad(){
    if(localStorage.getItem("mene-hub_theme")=="dark")
    {
        document.getElementById("customSwitches").setAttribute("checked", "true");
        document.getElementById("boost_css").setAttribute("href", "assets/bootstrap/css/bootstrap.min_dark.css");
        document.getElementById("int_css").setAttribute("href", "assets/bootstrap/css/cssintegration_dark.css");
    }else{
        document.getElementById("boost_css").setAttribute("href", "assets/bootstrap/css/bootstrap.min_light.css");
        document.getElementById("int_css").setAttribute("href", "assets/bootstrap/css/cssintegration_light.css");
        localStorage.setItem("mene-hub_theme","light");
        document.getElementById("customSwitches").removeAttribute("checked");
    }

}

function styleChange(){
    if(localStorage.getItem("mene-hub_theme")=="dark"){
        localStorage.setItem("mene-hub_theme","light");
    }else
    localStorage.setItem("mene-hub_theme","dark");

    styleLoad();
}