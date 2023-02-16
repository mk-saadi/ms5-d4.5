// !UTILITY s

// # utility 1

function getPin() {
  const pin = generatePin();

  // >> eikhane (pin+ '') use karar karon holo "number" value ta ke "string" e convert kara
  const pinString = pin + "";
  if (pinString.length === 4) {
    return pin;
  } else {
    // >> eikhane else use karar karon holo jodi generate kora pin ta "4" digit er na hay tahole "else" pin ta abar generate karar jonno upore pathiye dibe.
    return getPin();
  }
}

// !UTILITY e

// # 2

function generatePin() {
  // >> random number generate karar jonno "Math.random" ebong number ke purno songkhate rupantor karar jonno "Math.round"

  const random = Math.round(Math.random() * 10000);
  return random;
}

// # 3 generate pin

document.getElementById("generate-pin").addEventListener("click", function () {
  const pin = getPin();

  // >> display pin
  const displayPinField = document.getElementById("display-pin");
  displayPinField.value = pin;
});

// # 4 calculator
// >>important: the lines comes in this exact order, changing in lines order may cause the code to not work properly

document
  .getElementById("calculator")
  .addEventListener("click", function (event) {
    const number = event.target.innerText;
    const typedNumberField = document.getElementById("typed-numbers");
    const previousTypedNumber = typedNumberField.value;

    // >> important
    // >> this right here
    if (isNaN(number)) {
      if (number === 'C') {
        typedNumberField.value = '';
      } 
      else if (number === '<') {
        const digits = previousTypedNumber.split('');
        digits.pop();
        const remainingDigits = digits.join('');
        typedNumberField.value = remainingDigits;
      }
    } else {
      const newTypedNumber = previousTypedNumber + number;
      typedNumberField.value = newTypedNumber;
    }
  });

// # 5 verify the pin

document.getElementById('verify-pin').addEventListener('click',function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typedNumberField= document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;

    // >> show/not show (modal)
    const pinSuccessMessage= document.getElementById('pin-success');
    const pinUnsuccessMessage= document.getElementById('pin-unsuccess');

    if(typedNumber=== currentPin){
        pinSuccessMessage.style.display = 'block';
        pinUnsuccessMessage.style.display = 'none';
    }
    else{
        pinUnsuccessMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
});