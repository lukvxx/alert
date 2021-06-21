/*
Created by Lukas Deward 21.06.2021
Example function: SmallAlert('Error Message', 'Red', 'White', 3);
                            MESSAGE  BG COLOR  FONT COLOR  DURATION

*/
var cssfile="https://lukvx.de/json_htmlcontent/alert.css";

let div=document.createElement("div");function timeout(){small_alert.classList.remove("small_alert_displayed"),small_alert.classList.add("small_alert")}function SmallAlert(e,l,t,s){s*=1e3;let a=document.getElementById("small_alert");a.innerHTML=e,a.classList.remove("small_alert"),a.classList.add("small_alert_displayed"),a.style.backgroundColor=l,a.style.color=t,a.addEventListener("click",timeout),setTimeout(function(){a.classList.remove("small_alert_displayed"),a.classList.add("small_alert")},s)}function BigAlert(e,l,t,s){}div.classList.add("small_alert"),div.setAttribute("id","small_alert"),document.body.appendChild(div);var cssId="alertcss";if(!document.getElementById(cssId)){var head=document.getElementsByTagName("head")[0],link=document.createElement("link");link.id=cssId,link.rel="stylesheet",link.type="text/css",link.href=cssfile,link.media="all",head.appendChild(link)}
