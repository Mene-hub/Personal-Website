var loadbool = true;
var darkThemeMq;
var body;
var lightgradient = "background-image:radial-gradient(rgb(225, 244, 247), rgb(131, 172, 200));";
var darkgradient = "background-image:radial-gradient(rgb(48, 70, 109), rgb(1, 11, 23));";

var Theme_ = {
    theme : 2
};

function load()
{
    darkThemeMq = window.matchMedia("(prefers-color-scheme: light)");
    body = document.getElementsByTagName("body")[0];
    
    checkTheme();
    setTime();
    resized();

    var d = new Date();
    var circle = document.getElementsByClassName("circle")[0];
    
    var h_ = d.getHours().toString();
    var m_ = d.getMinutes().toString();

    circle.setAttribute("style", "animation: generate " + (60 - parseInt(d.getSeconds().toString())) + "s linear;");
    
    setTimeout(check, ((60 - parseInt(d.getSeconds().toString())) * 1000))
}




function check(){

    var circle = document.getElementsByClassName("circle")[0];

    if(loadbool){
        loadbool = false;
        circle.setAttribute("style", "animation: wipe 60s linear infinite;");
    }

    setTime();
    checkTheme();

    setTimeout(check, 1000)

    return;
}

function setTime(){

    var d = new Date();
    
    var timer = document.getElementById("timer");
    var h_ = d.getHours().toString();
    var m_ = d.getMinutes().toString();

    //console.log(d.getSeconds());

    if(h_.length<2)
        h_ = "0" + h_;
    
    if(m_.length<2)
        m_ = "0" + m_;

    timer.innerHTML = h_ + ":" + m_;

}

function checkTheme()
{
    switch(Theme_.theme){

        case 2:
            darkThemeMq = window.matchMedia("(prefers-color-scheme: light)");

            if(darkThemeMq.matches)
                body.setAttribute("style", lightgradient);
                else
                    body.setAttribute("style", darkgradient);
            
            break;

        case 1:
            body.setAttribute("style", darkgradient);
            break;

        case 0:
            body.setAttribute("style", lightgradient);
                break;
    }
}

function livelyPropertyListener(name, val)
{
    switch(name)
    {
        case "theme":
            Theme_.theme = val;
            checkTheme();
            break;
    }
}

function resized()
{
    var win_dim = body.offsetHeight;
    var circle = document.getElementById("timerContainer");
    circle.setAttribute("style", "padding-top:" + (win_dim - circle.offsetHeight)/2 + "px;");
}