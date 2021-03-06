var EMAILCHECK = /^[a-zA-Z0-9_.]+@([a-zA-Z]+\.)+[a-zA-Z]+$/;
var HOMEPAGECHECK = /^(http(s)?:\/\/)?([a-zA-Z0-9_-~]+\.)+[a-zA-Z]+(\/[a-zA-Z0-9#-_~]*)*$/;

function Form(inputClass, textArea, checkbox) {
  this.inputElements = document.getElementsByClassName(inputClass);
  this.textArea = document.getElementById(textArea);
  this.checkBox = document.getElementById(checkbox);
  this.check = true;
};

Form.prototype.validateTextFields = function(email, homePage) {
  for (var i = 0, len = this.inputElements.length; i < len; i++) {
    if(this.inputElements[i].value === "") {
      this.alertMessage(this.inputElements[i].id + " can't be empty.");
    } else if(this.checkFormat(this.inputElements[i], email, EMAILCHECK)) {
      this.alertMessage("Email id is not valid.");
    } else if(this.checkFormat(this.inputElements[i], homePage, HOMEPAGECHECK)) {
      this.alertMessage("Home Page is not valid.");
    }
  }
}

Form.prototype.validateTextArea = function() {
  if(this.textArea.value.length < 50) {
    this.alertMessage("Your description about yourself is too short.");
  }
}

Form.prototype.validateCheckBox = function() {
  if(!this.checkBox.checked) {
    this.alertMessage("Please check the receive notification checkbox.");
  }
}

Form.prototype.checkSubmit = function() {
  if(this.check) {
    document.forms[0].submit();
  }
}

Form.prototype.isValid = function() {
  this.check = true;
  this.validateTextFields("email", "home_page");
  this.validateTextArea();
  this.validateCheckBox();
  return(this.check);
}

Form.prototype.checkFormat = function(inputElement, elementId, validFormat) {
  return(inputElement.id === elementId && (!validFormat.test(inputElement.value)));
}

Form.prototype.alertMessage = function(msg) {
  alert(msg);
  this.check = false;
}

Form.prototype.bindEvents = function() {
  var _this = this;
      submitButton = document.getElementById("go");
  submitButton.addEventListener("click", function() {
    event.preventDefault();
    if(_this.isValid()) {
      document.getElementById("form").submit();
    }
  });
}

window.onload = function() {
  var form = new Form("input_text", "about_me", "notification");
  form.bindEvents();
};