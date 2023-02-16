//  ! UTILITIES start

// # utility 1: case button

function updateCaseNumber(isIncrease) {
  const caseNumberField = document.getElementById("case-number-field");
  const caseNumberString = caseNumberField.value;
  const previousCaseNumber = parseInt(caseNumberString);

  let newCaseNumber;

  if (isIncrease) {
    newCaseNumber = previousCaseNumber + 1;
  } else {
    newCaseNumber = previousCaseNumber - 1;
  }

  caseNumberField.value = newCaseNumber;

  return newCaseNumber;
}

// # utility 2: case text field

function updateCaseTotalPrice(newCaseNumber) {
  const caseTotalPrice = newCaseNumber * 59;
  const caseTotalElement = document.getElementById("case-total");
  caseTotalElement.innerHTML = caseTotalPrice;
}

// # utility 3: phone button

function updatePhoneNumber(isIncreasing) {
  const phoneNumberField = document.getElementById("phone-number-field");
  const phoneNumberString = phoneNumberField.value;
  const previousPhoneNumber = parseInt(phoneNumberString);

  let newPhoneNumber;

  if (isIncreasing) {
    newPhoneNumber = previousPhoneNumber + 1;
  } else {
    newPhoneNumber = previousPhoneNumber - 1;
  }

  phoneNumberField.value = newPhoneNumber;

  return newPhoneNumber;
}

// # utility 4 : phone text field

function updatePhoneTotalPrice(newPhoneNumber) {
  const phoneTotalPrice = newPhoneNumber * 1219;
  const phoneTotalElement = document.getElementById("phone-total");
  phoneTotalElement.innerHTML = phoneTotalPrice;
}

// # utility 5 : phone sub update

function getTextElementValueById(elementId) {
  const phoneTotalElement = document.getElementById(elementId);
  const currentPhoneTotalString = phoneTotalElement.innerText;
  const currentPhoneTotal = parseInt(currentPhoneTotalString);

  return currentPhoneTotal;
}

// # utility 6 :
function setTextElementValueById(elementId, value) {
  const subTotalElement = document.getElementById(elementId);
  subTotalElement.innerText = value;
}

// # utility 7 : total update

function calculateSubTotal() {
  const currentPhoneTotal = getTextElementValueById("phone-total");
  const currentCaseTotal = getTextElementValueById("case-total");

  const currentSubTotal = currentPhoneTotal + currentCaseTotal;
  setTextElementValueById("sub-total", currentSubTotal);

  // * calculate tax
  const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
  const taxAmount = parseFloat(taxAmountString);
  setTextElementValueById("tax-amount", taxAmount);

  // * final amount
  const finalAmount = currentSubTotal + taxAmount;
  setTextElementValueById("final-total", finalAmount);
}

// ! UTILITIES end

/*
 step 1: add addEventListener to button "btn-case-plus" 
 step 2: get the value inside the case-number field(input field) 
 step 3: convert the number into "parseInt" 
 step 4. calculate the new case number 
 step 5. set the value to the new case number field 
 step 6: do not forget to call function "()" 
 */

// # btn-case-plus
document.getElementById("btn-case-plus").addEventListener("click", function () {
  const newCaseNumber = updateCaseNumber(true);

  updateCaseTotalPrice(newCaseNumber);

  calculateSubTotal();
});

// # btn-case-minus

document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    const newCaseNumber = updateCaseNumber(false);

    updateCaseTotalPrice(newCaseNumber);

    calculateSubTotal();
  });

// # btn-phone-plus

document
  .getElementById("btn-phone-plus")
  .addEventListener("click", function () {
    const newPhoneNumber = updatePhoneNumber(true);

    updatePhoneTotalPrice(newPhoneNumber);

    calculateSubTotal();
  });

// # btn-phone-minus

document
  .getElementById("btn-phone-minus")
  .addEventListener("click", function () {
    const newPhoneNumber = updatePhoneNumber(false);

    updatePhoneTotalPrice(newPhoneNumber);

    calculateSubTotal();
  });