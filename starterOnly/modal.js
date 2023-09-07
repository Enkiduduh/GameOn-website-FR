function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
let formData = document.querySelectorAll(".formData");
const form = document.getElementById("myForm");
const modalCloseBtn = document.querySelector(".close");
const checkBox1 = document.getElementById("checkbox1");




////////////////////////////////////////////////////////
//Ecouter la modification de la checkbox1
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
  }
};
////////////////////////////////////////////////////////





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
//Ecouter la modification du prénom
form.first.addEventListener('change',function() {
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
  }
};
////////////////////////////////////////////////////////

////////////////////////////////////////////////////////
//Ecouter la modification du nom
form.last.addEventListener('change',function() {
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
  }
};
////////////////////////////////////////////////////////

////////////////////////////////////////////////////////
//Ecouter la modification de l'email
form.email.addEventListener('change',function() {
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
  }
};
////////////////////////////////////////////////////////


////////////////////////////////////////////////////////
//Ecouter la modification de la birthdate
form.birthdate.addEventListener('change',function() {
  valideBirthdate(this);
});

//Fonction vérifier via la RegExp que la birthdate est conforme
const valideBirthdate = function(element) {
  let birthdateRegExp = new RegExp(/^((0[1-9])|(1[\d])|(2[\d])|(3[01]))\/((0[1-9])|(1[12]))\/([\d]{4})$/, 'g');
  let testBirthdate = birthdateRegExp.test(element)
  let error = document.querySelector("#errorbirthdate")
  if (testBirthdate) {
    error.innerHTML="";
  } else {
    error.innerHTML="Vous devez saisir une date de naissance valide.";
  }
};
////////////////////////////////////////////////////////


////////////////////////////////////////////////////////
//Ecouter la nombre de participation
form.quantity.addEventListener('change',function() {
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
  } else {
      error.innerHTML="Veuillez saisir une valeur numérique entre 0 et 99.";
  }};



const locationCity1 = document.getElementById("location1");
const locationCity2 = document.getElementById("location2");
const locationCity3 = document.getElementById("location3");
const locationCity4 = document.getElementById("location4");
const locationCity5 = document.getElementById("location5");
const locationCity6 = document.getElementById("location6");

let valeurCity;
if (document.getElementById('choix1').checked) {
 valeur = document.getElementById('choix1').value;
}

////////////////////////////////////////////////////////
//Envoyer le formulaire
form.addEventListener('submit', (event) => {

  event.preventDefault();

//EXEMPLE de regex Pour la DATE
//let birthdateRegExp = new RegExp(/^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/]\d{4}$/, 'g')

  console.log(form.first.value);
  console.log(form.last.value);
  console.log(form.email.value);
  console.log(form.birthdate.value);
  console.log(form.quantity.value);


  event.preventDefault();
}
);
