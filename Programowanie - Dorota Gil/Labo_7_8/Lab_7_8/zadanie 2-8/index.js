// czy ma wartosc
function checkValue(field, fieldName) {
    if (field.value.trim() === '') {
      field.setCustomValidity(fieldName + ' jest wymagane.');
      return false;
    } else {
      field.setCustomValidity('');
      return true;
    }
  }
  
  // dlugosc znakow
  function checkLength(field, fieldName, minLength) {
    if (field.value.trim().length < minLength) {
      field.setCustomValidity(fieldName + ' powinno zawierać co najmniej ' + minLength + ' znaków.');
      return false;
    } else {
      field.setCustomValidity('');
      return true;
    }
  }
  
  // e-mail czy jest z @
  function checkEmail(field) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(field.value)) {
      field.setCustomValidity('Podaj poprawny adres email.');
      return false;
    } else {
      field.setCustomValidity('');
      return true;
    }
  }
  
  // haslo
  function checkPassword(field) {
    const password = field.value;
    if (password.length < 8 || !/\d/.test(password) || !/[a-z]/i.test(password)) {
      field.setCustomValidity('Hasło powinno zawierać co najmniej 8 znaków, w tym przynajmniej jedną cyfrę i jedną literę.');
      return false;
    } else {
      field.setCustomValidity('');
      return true;
    }
  }
  
  // zad5
  function checkPasswordMatch(field, passwordField) {
    if (field.value !== passwordField.value) {
      field.setCustomValidity('Hasła nie są identyczne.');
      return false;
    } else {
      field.setCustomValidity('');
      return true;
    }
  }
  
  // do zad4
  function checkBirthDate(field) {
    const currentDate = new Date();
    const birthDate = new Date(field.value);
    const age = currentDate.getFullYear() - birthDate.getFullYear();
  
    if (age < 18) {
      field.setCustomValidity('Musisz mieć ukończone 18 lat.');
      return false;
    } else {
      field.setCustomValidity('');
      return true;
    }
  }
  
  // do zad 6
  function toggleWojewodztwo() {
    const krajField = document.getElementById('kraj');
    const wojewodztwoField = document.getElementById('wojewodztwo');
  
    if (krajField.value === 'Polska') {
      wojewodztwoField.disabled = false;
    } else {
      wojewodztwoField.value = '';
      wojewodztwoField.disabled = true;
    }
  }
  
  // adres do checkboxa
  function toggleAdresKorespondencyjny() {
    const checkbox = document.getElementById('adres-korespondencyjny-checkbox');
    const adresKorespondencyjnyField = document.getElementById('adres-korespondencyjny');
  
    if (checkbox.checked) {
      adresKorespondencyjnyField.value = '';
      adresKorespondencyjnyField.disabled = true;
    } else {
      adresKorespondencyjnyField.disabled = false;
    }
  }
  
  // walidacja formularza
  function validateForm(event) {
    event.preventDefault();
  
    const form = document.getElementById('registration-form');
    const fields = form.elements;
  
    let isFormValid = true;
  
    for (let i = 0; i < fields.length; i++) {
      const field = fields[i];
      const fieldName = field.getAttribute('name');
  
      if (!validateField(field, fieldName)) {
        isFormValid = false;
      }
    }
  
    if (isFormValid) {
      alert('Formularz został poprawnie wypełniony.');
      form.reset();
    }
  }
  
  // walidacja pola
  function validateField(field, fieldName) {
    let isValid = true;
  
    if (fieldName === 'imie' || fieldName === 'nazwisko') {
      isValid = checkValue(field, fieldName);
    } else if (fieldName === 'email') {
      isValid = checkValue(field, fieldName) && checkEmail(field);
    } else if (fieldName === 'haslo') {
      isValid = checkValue(field, fieldName) && checkPassword(field);
    } else if (fieldName === 'powtorz-haslo') {
      const passwordField = document.getElementById('haslo');
      isValid = checkValue(field, fieldName) && checkPasswordMatch(field, passwordField);
    } else if (fieldName === 'telefon') {
      isValid = checkValue(field, fieldName);
    } else if (fieldName === 'data-urodzenia') {
      isValid = checkValue(field, fieldName) && checkBirthDate(field);
    }
  
    const errorContainer = document.getElementById(fieldName + '-error');
    errorContainer.textContent = field.validationMessage;
  
    return isValid;
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    form.addEventListener('submit', validateForm);
  
    const krajField = document.getElementById('kraj');
    krajField.addEventListener('change', toggleWojewodztwo);
  
    const checkbox = document.getElementById('adres-korespondencyjny-checkbox');
    checkbox.addEventListener('change', toggleAdresKorespondencyjny);
  });