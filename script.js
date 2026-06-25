// Authentication

function login(){

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

if(
email === "admin@innoxr.com" &&
password === "Admin123"
){

localStorage.setItem("loggedIn","true");

window.location.href="dashboard.html";

}
else{
alert("Invalid Credentials");
}

}

// Protect Pages

if(
window.location.pathname.includes("dashboard.html") ||
window.location.pathname.includes("analytics.html")
){

if(localStorage.getItem("loggedIn")!=="true"){

window.location.href="index.html";

}

}

// Logout

function logout(){

localStorage.removeItem("loggedIn");

window.location.href="index.html";

}

// Search Device

function searchDevice(){

let input =
document.getElementById("searchInput").value.toUpperCase();

let cards =
document.getElementsByClassName("device-card");

for(let i=0;i<cards.length;i++){

let txt =
cards[i].innerText.toUpperCase();

cards[i].style.display =
txt.indexOf(input)>-1 ? "" : "none";

}

}

// Filter Device

function filterDevices(){

let filter =
document.getElementById("statusFilter").value;

let cards =
document.getElementsByClassName("device-card");

for(let i=0;i<cards.length;i++){

if(filter==="all"){
cards[i].style.display="";
}
else if(
filter==="online" &&
cards[i].classList.contains("online-card")
){
cards[i].style.display="";
}
else if(
filter==="offline" &&
cards[i].classList.contains("offline-card")
){
cards[i].style.display="";
}
else{
cards[i].style.display="none";
}

}

}

// Charts

window.onload = function(){

if(document.getElementById("interactionChart")){

new Chart(
document.getElementById("interactionChart"),
{
type:"bar",
data:{
labels:["Jan","Feb","Mar","Apr","May","Jun"],
datasets:[{
label:"Interactions",
data:[1200,1800,2200,2800,3500,4200]
}]
}
}
);

}

if(document.getElementById("statusChart")){

new Chart(
document.getElementById("statusChart"),
{
type:"pie",
data:{
labels:["Online","Offline"],
datasets:[{
data:[95,25]
}]
}
}
);

}

};