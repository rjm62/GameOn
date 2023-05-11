function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const returnHomePage =document.querySelector(".close")
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

const displayHeader = document.querySelector("header");
const displayHeroSection = document.querySelector(".hero-section");
const displayFooter = document.querySelector("footer");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

returnHomePage.addEventListener("click", launchModa2);


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  modalbg.style.backgroundColor = "transparent";
  displayHeader.style.display = "none";
  displayHeroSection.style.display = "none";
  displayFooter.style.display ="none"; 

  
}


function launchModa2() {
  modalbg.style.display = "none";
  modalbg.style.backgroundColor ="white";
  displayHeader.style.display = "flex";
  displayHeader.style.display = "none";
  displayHeroSection.style.display = "grid";
  displayFooter.style.display ="block";
 
}

                         /* page en  mobile pour l'inscription

if (window.matchMedia("(max-width:768px)").matches) {
  displayHeader.style.display = "block";
  modalbg.style.backgroundColor = "transparent";
  modalbg.style.top= "300px";
  
}
  else {
    modalbg.style.top= "-100px"; 
  }*/