const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

function styleLoad(BoxChecked){
    if(localStorage.getItem("mene-hub_theme")=="dark"){
        localStorage.setItem("mene-hub_theme","dark");
        setDark(false, BoxChecked);
    }else 
        if(localStorage.getItem("mene-hub_theme")=="light"){
            localStorage.setItem("mene-hub_theme","light");
            setLight(false, BoxChecked);
        }else 
            if(darkThemeMq.matches)
                setDark(false, BoxChecked);
                else
                setLight(false, BoxChecked);
}

function styleChange(BoxChecked){
    if(document.getElementById("customSwitches").checked==false)
        setLight(true, BoxChecked);
        else
        setDark(true, BoxChecked);
}

function setDark(saveStyle, BoxChecked){
    if(BoxChecked)
        document.getElementById("customSwitches").checked = true;

    document.getElementById("boost_css").setAttribute("href", "assets/bootstrap/css/bootstrap.min_dark.css");
    document.getElementById("int_css").setAttribute("href", "assets/bootstrap/css/cssintegration_dark.css");

    if(saveStyle)
        localStorage.setItem("mene-hub_theme","dark");
}

function setLight(saveStylem, BoxChecked){
    if(BoxChecked)
        document.getElementById("customSwitches").checked = false;

    document.getElementById("boost_css").setAttribute("href", "assets/bootstrap/css/bootstrap.min_light.css");
    document.getElementById("int_css").setAttribute("href", "assets/bootstrap/css/cssintegration_light.css");

    if(saveStyle)
        localStorage.setItem("mene-hub_theme","light");
}

function setBrowserStyle(BoxChecked){
    localStorage.removeItem("mene-hub_theme");

    if(darkThemeMq.matches)
        setDark(false, BoxChecked);
        else
        setLight(false, BoxChecked);
}