const modal = document.getElementById("modal-window");
let psw = document.getElementById("psw");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");
let loginBtn = document.getElementById("login-btn");

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function openModalWindow() {
  modal.style.display = "block";
}

function closeModalWindow() {
  let email = document.form.email.value;
  console.log(email);
  modal.style.display = "none";
}
// email validation
function validateEmail(mail) {
  let rightMailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (mail.value.match(rightMailFormat)) {
    document.form.email.focus();
    localStorage.setItem("email", mail);
    return true;
  } else {
    alert("A megadott e-mail cím nem felel meg a követelményeknek");
    return false;
  }
}
// password validation
psw.onfocus = function () {
  document.getElementById("message").style.display = "block";
};

psw.onblur = function () {
  document.getElementById("message").style.display = "none";
};
psw.onkeyup = function () {
  let lowerCaseLetters = /[a-z]/g;
  if (psw.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  let upperCaseLetters = /[A-Z]/g;
  if (psw.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }
  let numbers = /[0-9]/g;
  if (psw.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  if (psw.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
};
