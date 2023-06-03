var bgroundPosition = 0;
var reset=0;
var check;
var result;
var buttonClick;
var text;
var border;
var openModalConfirmation;
var closeModalBody;
var thankMessage;
var formCheckResult;
var prenom;
var message;
var resultsArray =["firstValidationResult", "lastValidationResult", "emailValidationResult", "birthdateValidationResult", "competitionNumberResult",
"competitionChoiceResult", "conditionAcceptedResult"];

for (var i=0; i<resultsArray.length; i++) {
resultsArray[i]= 0;
}


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
  if (reset==1) {                   //dans le cas ou la page de confirmation est affichée
    openModalConfirmation = document.querySelector(".modalConfirmation");
    openModalConfirmation.style.display = "none";
    document.reserve.reset();      // vide tous les champs du formulaire
    message= document.querySelector(".button")
    message.value="C'est parti";   // remets le texte "C'est parti" dans le bouton
    var closeModalBody = document.querySelector(".modal-body");
    closeModalBody.style.display = "block";
    for (var i=0; i<resultsArray.length; i++) { // reset les variables pour les résultats
    resultsArray[i]= 0;
    reset=0;
    }
    
  }
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
  check = document.forms["reserve"].elements["first"].value;
  let regFirst=new RegExp("^[a-z][a-z\-_]+$", "i");
  result=(regFirst.test(check));
  resultsArray[0] = result;

  if (result===true) {
    text = document.querySelector(".first");
    text.dataset.errorVisible = "false";  
    border = document.querySelector("#first");
    border.dataset.errorVisible ="false";
    document.querySelector(".button").disabled=false;
  } 
  else {
    text = document.querySelector(".first");
    text.dataset.error = "Veuillez entrer un prénom (minimum 2 caractères)";
    text.dataset.errorVisible = "true"; 
    border = document.querySelector("#first");
    border.dataset.errorVisible ="true";
  }
}
//VERIFICATION DU NOM
function lastCheck() {
  check = document.forms["reserve"].elements["last"].value;
  let regLast=new RegExp("^[a-z][a-z\_]+$", "i");
  result=(regLast.test(check));
  resultsArray[1] = result;
    
  if (result===true) {
    text = document.querySelector(".last");
    text.dataset.errorVisible = "false";  
    border = document.querySelector("#last");
    border.dataset.errorVisible ="false";
    document.querySelector(".button").disabled=false;
  }  
  else {
    text = document.querySelector(".last");
    text.dataset.error = "Veuillez entrer un Nom (minimum 2 caractères)";
    text.dataset.errorVisible = "true"; 
    border = document.querySelector("#last");
    border.dataset.errorVisible ="true";
  }
}

//VERIFICATION EMAIL
 function emailCheck() {
    check = document.forms["reserve"].elements["email"].value;
    let regEmail=new RegExp("^[a-z][a-z0-9\.\-_]*[a-z0-9]@[a-z0-9]{2,}\.[a-z0-9\.\-_]*[a-z\-_]{2,}$", "i");
    result= (regEmail.test(check));
    resultsArray[2] = result;
    
  if (result===true) {
    text = document.querySelector(".email");
    text.dataset.errorVisible = "false";
    border = document.querySelector("#email");
    border.dataset.errorVisible ="false";
    document.querySelector(".button").disabled=false;
  }  
  else {
    text = document.querySelector(".email");
    text.dataset.error = "Veuillez entrer un mail valide";
    text.dataset.errorVisible = "true";
    border = document.querySelector("#email");
    border.dataset.errorVisible ="true";
  }
}
 
 //VERIFICATION DE LA DATE DE NAISSANCE
function birthdateCheck() {
  check = document.forms["reserve"].elements["birthdate"].value;
  var regBirthdate=new RegExp("[0-9]{4}");
  result= (regBirthdate.exec(check));
  console.log(result);
  console.log(regBirthdate);
  laDate = new Date();
  annee =laDate.getFullYear();
  if ((parseInt(annee)-parseInt(result))<16) {
    resultsArray[3]=0;
    text = document.querySelector(".birthdate");
    text.dataset.error = "Attention vous êtes trop jeune";
    text.dataset.errorVisible = "true";
    border = document.querySelector("#birthdate");
    border.dataset.errorVisible ="true";
   }
  
      else {
      resultsArray[3]=1;
      text = document.querySelector(".birthdate");
      text.dataset.errorVisible = "false";
      border = document.querySelector("#birthdate");
      border.dataset.errorVisible ="false";
      document.querySelector(".button").disabled=false;
      }
   }

//verification d'avoir rentré un nombre de 0 à 99 dans le champs
function competitionQuantityCheck() {
 resultsArray[4] = document.forms["reserve"].elements["quantity"].value;
  if ( 0<= resultsArray[4] & resultsArray[4] <99) {
    resultsArray[4]=1;
    document.querySelector(".button").disabled=false;
  }
}

 //verification d'avoir choisi un tournoi pour cette année 
function competitionChoiceCheck() {
  resultsArray[5]=1;
 document.querySelector(".button").disabled=false;
}

// verification case cochée dans condition acceptée
function conditionAcceptedCheck() {
  resultsArray[6] = document.forms["reserve"].elements["checkbox1"].checked;
  if(resultsArray[6]==1) {
  document.querySelector(".button").disabled=false;
  }
}

 //verification du formulaire si bien rempli
buttonClick = document.querySelector(".button");
buttonClick.addEventListener("click", checking);

function checking() {
  formCheckResult = !resultsArray[0]/1 + !resultsArray[1]/1 + !resultsArray[2]/1 + !resultsArray[3]/1 + !resultsArray[4]/1 +
  !resultsArray[5]/1 + !resultsArray[6]/1; //  si tous les champs sont correctement remplis, tous les "!resultsArray" valent "0".
                                          //   De ce fait la somme fait "0" (le formulaire peut donc être confirmé).
  document.querySelector(".button").disabled=true;
  if(formCheckResult==0) {                
    reset=1;    // cette variable servira à vider les champs du formulaire
    closeModalBody = document.querySelector(".modal-body");
    closeModalBody.style.display = "none";
    openModalConfirmation = document.querySelector(".modalConfirmation");
    openModalConfirmation.style.display = "flex";    // affichage du container de remerciement
    thankMessage = document.querySelector(".thankYou");
    prenom = document.forms["reserve"].elements["first"].value;    // recupération du prénom dans le champ "first" du formulaire
    thankMessage.textContent ="Merci "+ prenom +" pour votre inscription à GameOn !";   // réalisation du texte à afficher dans la fenetre de confirmation
    var buttonConfirmation = document.querySelector(".btn-confirmation");
    buttonConfirmation.addEventListener("click", closeModal); // fermeture de la modal de confirmation
  }
  else {
    message= document.querySelector(".button")     //modification du texte dans le bouton d'envoi
    message.value="Merci de compléter avant de réappuyer";
  }
}