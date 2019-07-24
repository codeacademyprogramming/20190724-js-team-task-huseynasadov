"use strict";

/*let main = document.createElement("main"),
divCont = document.createElement("div"),
divRow = document.createElement("div"),
divCol12 = document.createElement("div"),
button = document.createElement("button");

document.body.appendChild(main);
main.appendChild(divCont);
divCont.className = "container vh-100 d-flex align-items-center justify-content-center";
divCont.appendChild(divRow);
divRow.className = "row";
divRow.appendChild(divCol12);
divCol12.className = "col-12";
divCol12.appendChild(button);
button.className = "btn btn-outline-info";
button.innerText = "Get Login Page"
button.style.color = "info"
button.id= "button";
document.getElementById("button").addEventListener("click",loginPage);
function loginPage(){
    alert("kmxc");

}


let form = document.createElement("form"),
image = document.createElement("img"),
label = document.createElement("label"),
input1 = document.createElement("input"),
input2 = document.createElement("input"),
input3 = document.createElement("input");


form.appendChild(image);
form.appendChild(label);
form.appendChild(input1);
form.appendChild(input2);
form.appendChild(input3);

form.className= "form-signin";
image.className = "mb-4";
input1.className = "form-control" ;
*/

let main = document.createElement("main"),
divCont = document.createElement("div"),
divRow = document.createElement("div"),
divCol12 = document.createElement("div"),
button = document.createElement("button"),
buttonStop = document.createElement("button"),
p = document.createElement("p");
p.className = "alert alert-warning";
document.body.appendChild(main);
main.appendChild(divCont);
divCont.className = "container vh-100 d-flex align-items-center justify-content-center";
divCont.appendChild(divRow);
divRow.className = "row";
divRow.appendChild(divCol12);
divCol12.className = "col-12";
divCol12.appendChild(button);
divCol12.appendChild(p);
button.className = "btn btn-outline-warning";

button.innerText = "Click";
button.style.color = "info";
button.id= "button";


document.getElementById("button").addEventListener("click",loginPage);

function loginPage(){
  
   p.innerText = setInterval(myTimer, 1000);
   document.title = setInterval(myTimer, 1000);

}

divCol12.appendChild(buttonStop);
buttonStop.className = "btn btn-outline-warning";
buttonStop.id = "button-stop";
buttonStop.innerText = "Stop";
buttonStop.addEventListener("click",stoptime);

var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  p.innerHTML = d.toLocaleTimeString();
}