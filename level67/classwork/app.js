"use strict";

const errorMsg = document.querySelectorAll(".error-msg");
const submitBtn = document.querySelector(".submit");
const inputElem = document.querySelectorAll("input");
const textAreaMsg = document.querySelector("#message");

function showError(index) {
  errorMsg[index].classList.add("visible");
  inputElem[index].style.borderColor = "hsl(0, 66%, 56%)";
}

function hideError(index) {
  setTimeout(() => {
    errorMsg[index].classList.remove("visible");
    inputElem[index].style.borderColor = "rgba(0, 0, 0, 0.22)";
  }, 3000);
}

function checkValidName() {
  let firstName = inputElem[0].value;
  let lastName = inputElem[1].value;
  let isValid = true;

  if (!firstName) {
    showError(0);
    hideError(0);
    isValid = false;
  }

  if (!lastName) {
    showError(1);
    hideError(1);
    isValid = false;
  }

  return (isValid = true);
}

function checkValidEmail() {
  let emailAddress = inputElem[2].value;
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!regex.test(emailAddress)) {
    showError(2);
    hideError(2);
  } else {
    return true;
  }
}

function checkQueryType() {
  let generalEnquiry = inputElem[3].checked;
  let supportRequest = inputElem[4].checked;

  if (!generalEnquiry && !supportRequest) {
    showError(3);
    hideError(3);
  } else {
    return true;
  }
}

function checkMessage() {
  let message = textAreaMsg.value;

  if (!message) {
    showError(4);
    hideError(4);
    textAreaMsg.style.borderColor = "hsl(0, 66%, 56%)";

    setTimeout(() => {
      textAreaMsg.style.borderColor = "rgba(0, 0, 0, 0.196)";
    }, 3000);
  } else {
    return true;
  }
}

function checkConsentChecked() {
  let consent = inputElem[5].checked;

  if (!consent) {
    showError(5);
    hideError(5);
  } else {
    return true;
  }
}

function resetForm() {
  inputElem.forEach((item) => {
    item.value = "";
  });
  textAreaMsg.value = "";
  inputElem[3].checked = false;
  inputElem[4].checked = false;
  inputElem[5].checked = false;
}

submitBtn.addEventListener("click", function (e) {
  const isNameValid = checkValidName();
  const isEmailValid = checkValidEmail();
  const isQueryTypeCheck = checkQueryType();
  const isMessageValid = checkMessage();
  const isConsentChecked = checkConsentChecked();

  if (
    !isNameValid ||
    !isEmailValid ||
    !isQueryTypeCheck ||
    !isMessageValid ||
    !isConsentChecked
  ) {
    e.preventDefault();
  } else {
    e.preventDefault();
    document.querySelector(".success-wrap").classList.add("success-dropdown");

    setTimeout(() => {
      document
        .querySelector(".success-wrap")
        .classList.remove("success-dropdown");
    }, 4000);
    resetForm();
  }
});