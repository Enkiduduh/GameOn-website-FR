function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

let errorExists = false;
let error;

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
let formData = document.querySelectorAll(".formData");
const form = document.getElementById("myForm");
const modalCloseBtn = document.querySelector(".close");
const checkBox1 = document.getElementById("checkbox1");

////////////////////////////////////////////////////////
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
////////////////////////////////////////////////////////


//////////////////////////////////////////////////////
// Fermeture de la modal par écoute du click
modalCloseBtn.addEventListener("click", closeModal);

// Fermeture de la modal
function closeModal() {
  modalbg.style.display = "none";
}
////////////////////////////////////////////////////////



////////////////////////////////////////////////////////
//Envoyer le formulaire


form.addEventListener("submit", function (e) {

if (!form.first.value) {
  let error = document.querySelector("#errorfirst");
  error.innerHTML="Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
  errorExists = true;
  e.preventDefault();
}
if (!form.last.value) {
  let error = document.querySelector("#errorname");
  error.innerHTML="Veuillez entrer 2 caractères ou plus pour le champ du nom.";
  errorExists = true;
  e.preventDefault();
}
if (!form.email.value) {
  let error = document.querySelector("#erroremail");
  error.innerHTML="Vous devez saisir un email valide. ex: xxx@xx.xx";
  errorExists = true;
  e.preventDefault();
}
if (!form.quantity.value) {
  let error = document.querySelector("#errorquantity");
  error.innerHTML="Veuillez saisir une valeur numérique entre 0 et 99.";
  errorExists = true;
  e.preventDefault();
}
if (!checkBox1.checked) {
  let error = document.querySelector("#errorcheckbox1");
  error.innerHTML="Vous devez vérifier que vous acceptez les termes et conditions.";
  errorExists = true;
  e.preventDefault();
}
if (!form.birthdate.value) {
  let error = document.querySelector("#errorbirthdate");
  error.innerHTML="Vous devez saisir une date de naissance valide.";
  errorExists = true;
  e.preventDefault();
}
if (!document.forms["reserve"]["location"].value) {
  let error = document.querySelector("#errorlocationcity");
  error.innerHTML="Veuillez choisir une ville pour la participation au tournoi.";
  errorExists = true;
  e.preventDefault();
}


});

const validate = function () {
  if (errorExists === false) {
    document.querySelector(".modal-body").innerHTML = "Merci ! Votre réservation a été reçue."
  };
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
  } else {
    error.innerHTML="Vous devez vérifier que vous acceptez les termes et conditions.";
    errorExists = true;
  }
};
// ////////////////////////////////////////////////////////





// ////////////////////////////////////////////////////////
// //ECOUTER L'EVENEMENT INPUT SUR LE PRENOM'
// ////////////////////////////////////////////////////////
form.first.addEventListener('input',function() {
  valideFirst(this);
});

//Fonction vérifier via la RegExp que le prénom est conforme
const valideFirst = function(inputFirst) {
  let firstRegExp = new RegExp(/(^([a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]+){2,})+([\.\-\'][a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]+)?$/, 'g');
  let testFirst = firstRegExp.test(inputFirst.value)
  let error = document.querySelector("#errorfirst");
  if (testFirst) {
    console.log(form.first.value);
    error.innerHTML="";
  }
  else {
    error.innerHTML="Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    errorExists = true;
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
    console.log(form.last.value);
    error.innerHTML="";
  }
  else {
    error.innerHTML="Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    errorExists = true;
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
    error.innerHTML="";
  } else {
    error.innerHTML="Vous devez saisir un email valide. ex: xxx@xx.xx";
    errorExists = true;
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
  if (testBirthdate) {
    error.innerHTML="";
  } else {
    console.log(form.birthdate.value);
    error.innerHTML="Vous devez saisir une date de naissance valide.";
    errorExists = true;
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
  let quantityRegExp = new RegExp(/^(\d)+$/,'g');
  let testQuantity = quantityRegExp.test(inputQuantity.value);
  let error = document.querySelector("#errorquantity");
  if (testQuantity) {
      error.innerHTML="";
  } else if (testQuantity.value == "") {
      error.innerHTML="Veuillez saisir une valeur numérique entre 0 et 99.";
      errorExists = true;
  } else {
      error.innerHTML="Veuillez saisir une valeur numérique entre 0 et 99.";
      errorExists = true;
  }};


// console.log(document.forms["reserve"]["location"].value);

// const locationCity = document.querySelector("#locationCity");


const locationCity = document.getElementsByName('location')
for (e of locationCity) {
    if (e.checked) console.log(`Elément ${e.id} coché`)
}
console.log(locationCity)


// const locCity = document.forms["reserve"]["location"];


// form.locationCity.addEventListener("input", function() {
//   validateCity(this);
// });

// const validateCity = function() {
// let errorLocationCity = document.querySelector("#errorlocationcity");
// if (locationCity.value == "") {
//   errorLocationCity.innerHTML="Veuillez choisir une ville pour la participation au tournoi.";
// } else {
//     errorLocationCity.innerHTML="OK.";
//     errorExists = true;
// }};


// let locationCityValue = document.querySelector("input[name=location]:checked").value;
// console.log(locationCityValue);

// // ////////////////////////////////////////////////////////
// // //Ecouter la modification de la checkbox1
// checkBox1.addEventListener('click',function() {
//   valideCheckBox1(this);
// });

// //Fonction vérifier la coche de la checkbox1
// const valideCheckBox1 = function(checkbox1) {
//   let error = document.querySelector("#errorcheckbox1");
//   if (checkBox1.checked) {
//     error.innerHTML="";
//   } else {
//     error.innerHTML="Vous devez vérifier que vous acceptez les termes et conditions.";
//     errorExists = true;
//   }
// };
// // ////////////////////////////////////////////////////////
