function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// Array pour permettre la validation du formulaire
let isValid = []; // On stocke 1 si la donnée du form est ok, 0 sinon

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
let formData = document.querySelectorAll(".formData");
const form = document.getElementById("myForm");
const modalCloseBtn = document.querySelector(".close");
const modalBodySuccess = document.getElementById("modal")
// DOM Elements Buttons
const buttonSubmit = document.getElementById("btn-submit-final");
const buttonClose = document.getElementById("btn-submit-success");
// DOM Elements Inputs
let firstInput = document.getElementById("first");
const lastInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const checkBox1 = document.getElementById("checkbox1");



// const btnSubmit = document.querySelector(".btn-submit");
////////////////////////////////////////////////////////
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Fermeture de la modal par écoute du click sur le SPAN "X"
modalCloseBtn.addEventListener("click", closeModal);

// Fermeture de la modal
function closeModal() {
  modalbg.style.display = "none";
}

/////////////////////////////////////////////////////
buttonClose.addEventListener('click', function () {
  window.location.reload();  // Rechargement de la page uniquement lors de la validation du formulaire
  modalbg.style.display = "none";
});

//////////////////////////////////////////////////////



////////////////////////////////////////////////////////
//Envoyer le formulaire
form.addEventListener("submit", function (e) {

if (!form.first.value) {  // S'il n'y a aucune valeur rentrée dans l'input
  let error = document.querySelector("#errorfirst");
  error.innerHTML="Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
  firstInput.classList.add("invalid-input");

  e.preventDefault();
}
if (!form.last.value) {
  let error = document.querySelector("#errorname");
  lastInput.classList.add("invalid-input");
  error.innerHTML="Veuillez entrer 2 caractères ou plus pour le champ du nom.";

  e.preventDefault();
}
if (!form.email.value) {
  let error = document.querySelector("#erroremail");
  emailInput.classList.add("invalid-input");
  error.innerHTML="Vous devez saisir un email valide. ex: xxx@xx.xx";

  e.preventDefault();
}
if (!form.quantity.value) {
  let error = document.querySelector("#errorquantity");
  quantityInput.classList.add("invalid-input");
  error.innerHTML="Veuillez saisir une valeur numérique entre 0 et 99.";

  e.preventDefault();
}
if (!checkBox1.checked) {
  let error = document.querySelector("#errorcheckbox1");
  error.innerHTML="Vous devez vérifier que vous acceptez les termes et conditions.";

  e.preventDefault();
}
if (!form.birthdate.value) {
  let error = document.querySelector("#errorbirthdate");
  birthdateInput.classList.add("invalid-input");
  error.innerHTML="Vous devez saisir une date de naissance valide.";

  e.preventDefault();
}
if (!(document.forms["reserve"]["location"].value)) {
  e.preventDefault();
  let error = document.querySelector("#errorlocationcity");
  error.innerHTML="Vous devez choisir une ville pour le tournoi.";

}
});

// ////////////////////////////////////////////////////////
// //FONCTION VALIDER LE FORMULAIRE
// ////////////////////////////////////////////////////////
const validate = function () {
  let resultat = 0
  for (i = 0; i < isValid.length; i++) {
    resultat += isValid[i];
  }
    if (resultat == 7) {
      modalBodySuccess.classList.add("modal-body-success");
    document.querySelector(".modal-body").innerHTML = "Merci pour votre inscription."
    buttonClose.classList.remove("invisible");
    } else {
      console.log("Il y a des erreurs dans le formulaire")
    }
  };



// ////////////////////////////////////////////////////////
// //Ecouter la modification de la checkbox1
checkBox1.addEventListener('click',function() {
  valideCheckBox1(this);
});

//Fonction vérifier la coche de la checkbox1
const valideCheckBox1 = function(checkbox1) {
  let error = document.querySelector("#errorcheckbox1");
  if (checkBox1.checked) {
    error.innerHTML="";
    isValid[6] = 1;
    buttonSubmit.classList.add("red");
    buttonSubmit.classList.remove("grey");
  } else {
    buttonSubmit.classList.add("grey");
    buttonSubmit.classList.remove("red");
    isValid[6] = 0;
    error.innerHTML="Vous devez vérifier que vous acceptez les termes et conditions.";
  }
};
// ////////////////////////////////////////////////////////

// ////////////////////////////////////////////////////////
// //ECOUTER L'EVENEMENT INPUT SUR LE PRENOM'
// ////////////////////////////////////////////////////////
form.first.addEventListener('input',function() { // Validation unitaire en temps réel lors de l'input
  valideFirst(this);
});

//Fonction vérifier via la RegExp que le prénom est conforme
const valideFirst = function(inputFirst) {
  let firstRegExp = new RegExp(/(^([a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]+){2,})+([\.\-\'][a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]+)?$/, 'g');
  let testFirst = firstRegExp.test(inputFirst.value)
  let error = document.querySelector("#errorfirst");
  if (testFirst) {
    firstInput.classList.add("valid-input");
    error.innerHTML="";
    isValid[0] = 1;
  }
  else {
    firstInput.classList.add("invalid-input");
    firstInput.classList.remove("valid-input");
    error.innerHTML="Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    isValid[0] = 0;
  }
};


// ////////////////////////////////////////////////////////
// //ECOUTER L'EVENEMENT INPUT SUR LE NOM
// ////////////////////////////////////////////////////////
form.last.addEventListener('input',function() {
  valideLast(this);
});
//Fonction vérifier via la RegExp que le nom est conforme
const valideLast = function(inputLast) {
  let lastRegExp = new RegExp(/(^([a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]+){2,})+([ \.\-\'][a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]+)?$/, 'g');
  let testLast = lastRegExp.test(inputLast.value)
  let error = document.querySelector("#errorname");
  if (testLast) {
    lastInput.classList.add("valid-input");
    error.innerHTML="";
    isValid[1] = 1;
  }
  else {
    lastInput.classList.add("invalid-input");
    lastInput.classList.remove("valid-input");
    error.innerHTML="Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    isValid[1] = 0;
  }
};


// ////////////////////////////////////////////////////////
// //ECOUTER L'EVENEMENT INPUT SUR LE MAIL
// ////////////////////////////////////////////////////////
form.email.addEventListener('input',function() {
  valideEmail(this);
});

//Fonction vérifier via la RegExp que l'email est conforme'
const valideEmail = function(inputEmail) {
  let emailRegExp = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'g');
  let testEmail = emailRegExp.test(inputEmail.value)
  let error = document.querySelector("#erroremail")
  if (testEmail) {
    emailInput.classList.add("valid-input");
    error.innerHTML="";
    isValid[2] = 1;
  } else {
    emailInput.classList.add("invalid-input");
    emailInput.classList.remove("valid-input");
    error.innerHTML="Vous devez saisir un email valide. ex: xxx@xx.xx";
    isValid[2] = 0;
  }
};



// ////////////////////////////////////////////////////////
// //ECOUTER L'EVENEMENT INPUT SUR LA DATE DE NAISSANCE
// ////////////////////////////////////////////////////////
form.birthdate.addEventListener('input',function() {
  valideBirthdate(this);
});

//Fonction vérifier via la RegExp que la birthdate est conforme
const valideBirthdate = function(element) {
  let birthdateRegExp = new RegExp(/^([\d]{4})[\/\-]((0[1-9])|(1[\d])|(2[\d])|(3[01]))[\/\-]((0[1-9])|(1[12]))$/, 'g');
  let testBirthdate = birthdateRegExp.test(element.value)
  let error = document.querySelector("#errorbirthdate")
  let today = new Date()                                                     // Récupération de la date d'aujourd'hui
  let date3 = new Date(form.birthdate.value);                                // Récupération de la date de naissance
  let date3FullYear = date3.getFullYear();                                   // On veut récupérer uniquement l'année
  let todayFullYear = today.getFullYear();                                   // On veut récupérer uniquement l'année
  const dateDifference =  parseInt(todayFullYear) - parseInt(date3FullYear); // Soustraction "Aujourd'hui - Naissance"
  if (testBirthdate) {                                                       // On test si l'input est vraie
    if (dateDifference < 16) {                                               // On test si l'age est inf. à 16
      birthdateInput.classList.add("invalid-input");
      birthdateInput.classList.remove("valid-input");
      error.innerHTML="L'age minimum pour participer est 16 ans, revenez dans quelques années ;)";
    } else {
      birthdateInput.classList.add("valid-input");
      error.innerHTML="";
      isValid[3] = 1;
    }
  } else {
    console.log(form.birthdate.value);
    birthdateInput.classList.add("invalid-input");
    birthdateInput.classList.remove("valid-input");
    error.innerHTML="Vous devez saisir une date de naissance valide.";
    isValid[3] = 0;
  }
};
////////////////////////////////////////////////////////


// ////////////////////////////////////////////////////////
// //ECOUTER LE NOMBRE DE PARTICIPATION
// ////////////////////////////////////////////////////////
form.quantity.addEventListener('input',function() {
  valideQuantity(this);
});
//Fonction vérifier que le nombre de participation est remplie
const valideQuantity = function(inputQuantity) {
  let quantityRegExp = new RegExp(/^(0?[1-9]|[1-9][0-9])$/,'g');
  let testQuantity = quantityRegExp.test(inputQuantity.value);
  let error = document.querySelector("#errorquantity");
  if (testQuantity) {
      quantityInput.classList.add("valid-input");
      error.innerHTML="";
      isValid[4] = 1;
  } else if (testQuantity.value == "") {
      quantityInput.classList.add("invalid-input");
      quantityInput.classList.remove("valid-input");
      error.innerHTML="Veuillez saisir une valeur numérique entre 0 et 99.";
      isValid[4] = 0;
  } else {
      quantityInput.classList.add("invalid-input");
      quantityInput.classList.remove("valid-input");
      error.innerHTML="Veuillez saisir une valeur numérique entre 0 et 99.";
      isValid[4] = 0;
  }};

// ////////////////////////////////////////////////////////
// //ECOUTER LE CHOIX DE LA VILLE
// ////////////////////////////////////////////////////////
  const citys = document.querySelectorAll(".city");

  function checkCitys() {
      console.log(Array.from(citys).some((city) => city.checked));
      let error = document.querySelector("#errorlocationcity");
      if (!document.forms["reserve"]["location"].value) {
        error.innerHTML="Vous devez choisir une ville pour le tournoi.";
        isValid[5] = 0;
      } else {
        error.innerHTML="";
        isValid[5] = 1;
      }
    };

    citys.forEach((city) => {
      city.addEventListener("change", checkCitys);
    });
