/*
Created by Lukas Deward 21.06.2021
Example function: SmallAlert('Error Message', 'Red', 'White', 3);
                            MESSAGE  BG COLOR  FONT COLOR  DURATION

Functions:

SmallAlert()
BigAlert()
Notify()



disableScrolling() <- disables Scrolling
enableScrolling() <- enables Scrolling
BigAlertDissapears() <- Regulates when the Big Alert Div dissapears
*/
var cssfile = "alert.css";
//Create all Elements used in functions
let div = document.createElement('div');
div.classList.add('small_alert');
div.setAttribute("id", "small_alert");
document.body.appendChild(div);

let div2 = document.createElement('div');
div2.classList.add('big_alert');
div2.setAttribute("id", "big_alert");
document.body.appendChild(div2);
bigalert = document.getElementById('big_alert');

let button = document.createElement('button');
button.setAttribute("id", "button");
button.setAttribute("onclick", "BigAlertDissapear()");
button.style.display = "none"
bigalert.appendChild(button);
bigalert.style.display = "none";

function disableScrolling(){
    let x=window.scrollX;
    let y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}
function enableScrolling(){
    window.onscroll=function(){};
}
function BigAlertDissapear() {
    let big_alert = document.getElementById("big_alert");
    big_alert.innerHTML = "<button id='button' onclick='BigAlertDissapear()' style='display: none;'></button>";
    big_alert.style.display = "none";
    enableScrolling();
}
function Nofify(value) {
    SmallAlert(value, '#5a5a5aa1', 'white', 5);
}

//MAIN
function SmallAlert(val, color, textcolor, duration) {
        duration = duration*1000;
        let small_alert = document.getElementById("small_alert");
        small_alert.innerHTML = val;
        small_alert.classList.remove("small_alert");
        small_alert.classList.add("small_alert_displayed");
        small_alert.style.backgroundColor = color;
        small_alert.style.color = textcolor;
        small_alert.addEventListener("click", function() {
            small_alert.classList.remove("small_alert_displayed");
            small_alert.classList.add("small_alert");
        });
        setTimeout(function (){
            small_alert.classList.remove("small_alert_displayed");
            small_alert.classList.add("small_alert");
        }, duration);
}
function BigAlert(title, val, color, textcolor) {
    //Possible types: Okey, Okey / Cancel, No / Yes, Cancel / Delete, Cancel / Send, 
    //                  T1              T2              T3                  T4
    BigAlertDissapear();
    let button = document.getElementById('button');
    //Display Box with Okey option
    button.innerHTML = "Okey";
    button.style.display = "block";
    let big_alert = document.getElementById("big_alert");
    big_alert.innerHTML = "<h1>"+title+"</h1>"+val+big_alert.innerHTML;
    big_alert.style.backgroundColor = color;
    big_alert.style.color = textcolor;
    big_alert.style.display = "block"
    disableScrolling();
}

var cssId = 'alert';
if (!document.getElementById(cssId)) {
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = cssfile;
    link.media = 'all';
    head.appendChild(link);
}
