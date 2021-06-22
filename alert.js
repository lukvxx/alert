/*
Created by Lukas Deward 21.06.2021
Example function: SmallAlert('Error Message', 'Red', 'White', 3);
                            MESSAGE  BG COLOR  FONT COLOR  DURATION

UPDATE 22.06.2021 
Added BigAlert() and Notify()
*/
var cssfile="https://lukvx.de/alert/alert.css";

let div=document.createElement("div");div.classList.add("small_alert"),div.setAttribute("id","small_alert"),document.body.appendChild(div);let div2=document.createElement("div");div2.classList.add("big_alert"),div2.setAttribute("id","big_alert"),document.body.appendChild(div2),bigalert=document.getElementById("big_alert");let button=document.createElement("button");function disableScrolling(){let e=window.scrollX,t=window.scrollY;window.onscroll=function(){window.scrollTo(e,t)}}function enableScrolling(){window.onscroll=function(){}}function BigAlertDissapear(){let e=document.getElementById("big_alert");e.innerHTML="<button id='button' onclick='BigAlertDissapear()' style='display: none;'></button>",e.style.display="none",enableScrolling()}function Notify(e){SmallAlert(e,"#5a5a5aa1","white",5)}function SmallAlert(e,t,l,n){n*=1e3;let i=document.getElementById("small_alert");i.innerHTML=e,i.classList.remove("small_alert"),i.classList.add("small_alert_displayed"),i.style.backgroundColor=t,i.style.color=l,i.addEventListener("click",function(){i.classList.remove("small_alert_displayed"),i.classList.add("small_alert")}),setTimeout(function(){i.classList.remove("small_alert_displayed"),i.classList.add("small_alert")},n)}function BigAlert(e,t,l,n){BigAlertDissapear();let i=document.getElementById("button");i.innerHTML="Okey",i.style.display="block";let a=document.getElementById("big_alert");a.innerHTML="<h1>"+e+"</h1>"+t+a.innerHTML,a.style.backgroundColor=l,a.style.color=n,a.style.display="block",disableScrolling()}button.setAttribute("id","button"),button.setAttribute("onclick","BigAlertDissapear()"),button.style.display="none",bigalert.appendChild(button),bigalert.style.display="none";var cssId="alert";if(!document.getElementById(cssId)){var head=document.getElementsByTagName("head")[0],link=document.createElement("link");link.id=cssId,link.rel="stylesheet",link.type="text/css",link.href=cssfile,link.media="all",head.appendChild(link)}
