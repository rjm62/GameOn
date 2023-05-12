var bgroundPosition = 0;

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
  displayHeroSection.style.display = "none";
  displayFooter.style.display ="none";
  modalbg.style.backgroundColor ="transparent"
  if (window.matchMedia("(max-width:768px)").matches) {
  displayHeader.style.display = "block" 
  }
  else { 
    displayHeader.style.display = "none"  
  }
}

// fonction suite à action sur croix pour fermeture inscription
function launchModa2() {
  modalbg.style.display = "none";
  modalbg.style.backgroundColor ="white"
  displayHeader.style.display = "block"
  displayFooter.style.display ="block";
  if (window.matchMedia("(max-width:1100px)").matches) {
    displayHeroSection.style.display = "block";
    }
    else { 
      displayHeroSection.style.display = "grid"; 
    }
}

// Déplacement de .bground pour laisser la place au menu déroulant
const clickIcon = document.querySelector(".icon");
clickIcon.addEventListener("click", bgroundMove);

function bgroundMove() {
  if ( bgroundPosition<1) {
    modalbg.style.top = "200px";
    bgroundPosition=1;
  }
  else {
    modalbg.style.top = "70px";
    bgroundPosition=0; 
  }

}