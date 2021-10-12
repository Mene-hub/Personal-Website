const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

function styleLoad(){
    if(localStorage.getItem("mene-hub_theme")=="dark"){
        localStorage.setItem("mene-hub_theme","dark");
        setDark(false);
    }else 
        if(localStorage.getItem("mene-hub_theme")=="light"){
            localStorage.setItem("mene-hub_theme","light");
            setLight(false);
        }else 
            if(darkThemeMq.matches)
                setDark(false);
                else
                setLight(false);
}

function styleChange(){
    if(document.getElementById("customSwitches").checked==false)
        setLight(true);
        else
        setDark(true);
}

function setDark(saveStyle){
    document.getElementById("customSwitches").checked = true;
    document.getElementById("boost_css").setAttribute("href", "assets/bootstrap/css/bootstrap.min_dark.css");
    document.getElementById("int_css").setAttribute("href", "assets/bootstrap/css/cssintegration_dark.css");

    if(saveStyle)
        localStorage.setItem("mene-hub_theme","dark");
}

function setLight(saveStyle){
    document.getElementById("customSwitches").checked = false;
    document.getElementById("boost_css").setAttribute("href", "assets/bootstrap/css/bootstrap.min_light.css");
    document.getElementById("int_css").setAttribute("href", "assets/bootstrap/css/cssintegration_light.css");

    if(saveStyle)
        localStorage.setItem("mene-hub_theme","light");
}

function setBrowserStyle(){
    localStorage.removeItem("mene-hub_theme");

    if(darkThemeMq.matches)
        setDark(false);
        else
        setLight(false);
}