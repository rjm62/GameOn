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


 // VARIABLES VERIFICATION ENTREES FORMULAIRE
var first = document.querySelector("#first"); 
var last = document.querySelector("#last");
var email = document.querySelector("#email");
var birthdate = document.querySelector("#birthdate");
var competitionQuantity = document.querySelector("#quantity");
var competitionChoice= document.querySelectorAll("#location1, #location2, #location3, #location4, #location5, #location6");
var conditionAccepted = document.querySelector("#checkbox1");
var buttonClick;
var buttonValid;
 
//  VARIABLES POUR RECUPERATION DES: "DONNEES PERSONNELLES" "COCHE SUR CONDITIONS GENERALES"  "NOMBRE DE TOURNOIS"  "CHOIX COMPETITION"
var firstValidationResult;
var lastValidationResult;
var emailValidationResult;
var birthdateValidationResult;      
var conditionAcceptedResult;
var competitionChoiceResult; 
var competitionNumberResult;
var formCheckResult;

// ECOUTE DES EVENEMENTS
first.addEventListener("change", firstCheck);
last.addEventListener("change", lastCheck);
email.addEventListener("change", emailCheck);
birthdate.addEventListener("change", birthdateCheck);
competitionQuantity.addEventListener("change", competitionQuantityCheck);

for (let i=0; i<competitionChoice.length; i++) {
  competitionChoice[i].addEventListener("change", competitionChoiceCheck);
  };

conditionAccepted.addEventListener("change", conditionAcceptedCheck);


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
    document.querySelector(".btn-submit").disabled=false;
  } 
  else {
    var text = document.querySelector(".first");
    text.dataset.error = "Veuillez entrer un prénom (minimum 2 caractères)";
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
    document.querySelector(".btn-submit").disabled=false;
  }  
  else {
    var text = document.querySelector(".last");
    text.dataset.error = "Veuillez entrer un Nom (minimum 2 caractères)";
    text.dataset.errorVisible = "true"; 
    var border = document.querySelector("#last");
    border.dataset.errorVisible ="true";
  }
}

//VERIFICATION EMAIL
 function emailCheck() {
    let check = document.forms["reserve"].elements["email"].value;
    let regEmail=new RegExp("^[a-z][a-z0-9\.\-_]*[a-z0-9]@[a-z0-9]{2,}\.[a-z0-9\.\-_]*[a-z\-_]+$", "i");
    let result= (regEmail.test(check));
    emailValidationResult = result;
    
  if (result===true) {
    var text = document.querySelector(".email");
    text.dataset.errorVisible = "false";
    var border = document.querySelector("#email");
    border.dataset.errorVisible ="false";
    document.querySelector(".btn-submit").disabled=false;
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
  birthdateValidationResult=1;
  document.querySelector(".btn-submit").disabled=false;
  /*let check = document.forms["reserve"].elements["birthdate"].value;
  let regDate=new RegExp("^[0-9]*[/]{1}[0-9]*[/]{1}[0-9]*$");
  let result= (regDate.test(check));
  birthdateValidationResult = result;
  
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
  }*/
}

//verification d'avoir rentré un nombre de 0 à 99 dans le champs
function competitionQuantityCheck() {
 competitionNumberResult = document.forms["reserve"].elements["quantity"].value;
  if ( 0<= competitionNumberResult & competitionNumberResult<99) {
    competitionNumberResult=1;
    document.querySelector(".btn-submit").disabled=false;
  }
  else {
    competitionNumberResult=0;
  }
}

 // verification d'avoir choisi un tournoi pour cette année 
function competitionChoiceCheck() {
  competitionChoiceResult=1;
  document.querySelector(".btn-submit").disabled=false;
}

// verification case cochée dans condition acceptée
function conditionAcceptedCheck() {
  conditionAcceptedResult = document.forms["reserve"].elements["checkbox1"].checked;
  if(conditionAcceptedResult==1) {
    document.querySelector(".btn-submit").disabled=false;
  }
}


// validation du formulaire si bien rempli
buttonClick = document.querySelector(".button");
buttonClick.addEventListener("click", checking);


function checking() {
  formCheckResult = !firstValidationResult/1 + !lastValidationResult/1 + !emailValidationResult/1 + !birthdateValidationResult/1 +
  !competitionNumberResult + !competitionChoiceResult + !conditionAcceptedResult/1;
  document.querySelector(".button").disabled=true;
  if(formCheckResult==0) {
    var confirmationReceipt = document.querySelector(".button");
    confirmationReceipt.value = "Fermer";
    let removeForm = document.querySelectorAll(".formData");
    for(var j=0; j<removeForm.length; j++) {
    removeForm[j].style.display = "none";
    }
    let thankMessage = document.querySelector(".text-label");
    thankMessage.style.paddingTop = "300px";
    thankMessage.style.paddingBottom = "310px";
    thankMessage.style.fontSize = "25px";
    thankMessage.style.textAlign = "center";
    thankMessage.style.textIndent = "50px";
    let prenom = document.forms["reserve"].elements["first"].value;
    thankMessage.textContent ="Merci "+ prenom + " pour votre inscription à GameOn !";
    buttonValid="1";
  }
  else {
    buttonValid="0";
  }
}