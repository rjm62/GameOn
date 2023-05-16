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

returnHomePage.addEventListener("click", closeModal);


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

 //fonction fermeture modal form
function closeModal() {
  modalbg.style.display = "none";
}

 //  VERIFICATION ENTREES FORMULAIRE
var first = document.querySelector("#first"); 
var last = document.querySelector("#last");
var email = document.querySelector("#email");
var birthdate = document.querySelector("#birthdate");
var state
first.addEventListener("change", firstCheck);
last.addEventListener("change", lastCheck);
email.addEventListener("change", emailCheck);
birthdate.addEventListener("change", birthdateCheck);

      //  RECUPERATION: "DONNEES PERSONNELLES" "COCHE SUR CONDITIONS GENERALES"  "NOMBRE DE TOURNOIS"  "CHOIX COMPETITION"
var firstValidationResult;
var lastValidationResult;
var emailCheckValidationResult;
var birthdateCheckValidationResult;      
var conditionAccepted = document.forms["reserve"].elements["checkbox1"].checked;
var choiceCompetition = document.forms["reserve"].elements["location"].value; 
var numberCompetition = document.forms["reserve"].elements["quantity"].value;


                        // VERIFICATION DU PRENOM
function firstCheck() {
  let check = document.forms["reserve"].elements["first"].value;
  let regFirst=new RegExp("^[a-z]+[a-z\-_]{1}[a-z]+$", "i");
  let result=(regFirst.test(check));
  firstValidationResult = result;

  if (result===true) {
    var text = document.querySelector(".first");
    text.dataset.errorVisible = "false";  
    var border = document.querySelector("#first");
    border.dataset.errorVisible ="false";
  } 
  else {
    var text = document.querySelector(".first");
    text.dataset.error = "Veuillez entrer un prénom valide";
    text.dataset.errorVisible = "true"; 
    var border = document.querySelector("#first");
    border.dataset.errorVisible ="true";
  }
}
                          //VERIFICATION DU NOM
function lastCheck() {
  let check = document.forms["reserve"].elements["last"].value;
  let regLast=new RegExp("^[a-z]+[a-z\_]+[a-z]+$", "i");
  let result=(regLast.test(check));
  lastValidationResult = result;
    
  if (result===true) {
    var text = document.querySelector(".last");
    text.dataset.errorVisible = "false";  
    var border = document.querySelector("#last");
    border.dataset.errorVisible ="false";
  }  
  else {
    var text = document.querySelector(".last");
    text.dataset.error = "Veuillez entrer un Nom valide";
    text.dataset.errorVisible = "true"; 
    var border = document.querySelector("#last");
    border.dataset.errorVisible ="true";
  }
}

                            //VERIFICATION EMAIL
 function emailCheck() {
    let check = document.forms["reserve"].elements["email"].value;
    let regEmail=new RegExp("^[a-z][a-z0-9\.\-_]*[a-z0-9]@[a-z0-9]+[a-z0-9\.\-_]*[a-z0-9]+$", "i");
    let result= (regEmail.test(check));
    emailCheckValidationResult;
    
  if (result===true) {
    var text = document.querySelector(".email");
    text.dataset.errorVisible = "false";
    var border = document.querySelector("#email");
    border.dataset.errorVisible ="false";
  }  
  else {
    var text = document.querySelector(".email");
    text.dataset.error = "Veuillez entrer un mail valide";
    text.dataset.errorVisible = "true";
    var border = document.querySelector("#email");
    border.dataset.errorVisible ="true";
  }
}
 
                          //VERIFICATION DE LA DATE DE NAISSANCE
function birthdateCheck() {
  let check = document.forms["reserve"].elements["birthdate"].value;
  let regDate=new RegExp("^[0-3]{1}[0-9]{1}[/]{1}[01]{1}[0-9]{1}[/]{1}[12]{1}[2-9]{3}$");
  let result= (regDate.test(check));
  birthdateCheckValidationResult;
  
  if (result===true) {
    var text = document.querySelector(".birthdate");
    text.dataset.errorVisible = "false";
    var border = document.querySelector("#birthdate");
    border.dataset.errorVisible ="false";
    } 
  else {
    var text = document.querySelector(".birthdate");
    text.dataset.error = "Veuillez entrer une date valide";
    text.dataset.errorVisible = "true";
    var border = document.querySelector("#birthdate");
    border.dataset.errorVisible ="true";
  }
}