function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4) {
        return pin;
    } else {
        // console.log('pin not 3 digit found', pin);
        return getPin();
    }
}


function generatePin() {
    const random = Math.round(Math.random()*10000);
    return random;
}


document.getElementById('generate-pin').addEventListener('click', function() {
    const pin = getPin();
    // display pin
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
});

document.getElementById('calculator').addEventListener('click', function(event) {
  const number = event.target.innerText;
  const typedNumberField = document.getElementById('type-number');
  const previousTypedNumber = typedNumberField.value;
  if(isNaN(number)) {
    if(number === 'C') {
        typedNumberField.value = ''; 

    } else if(number === '<') {
       const digits = previousTypedNumber.split('');
       digits.pop();
       const remainingDigit = digits.join('');
       typedNumberField.value = remainingDigit;
    }

  } else {
    const newTypedNumber = previousTypedNumber + number;
    typedNumberField.value = newTypedNumber;
  }
});

document.getElementById('verify-pin').addEventListener('click', function() {
   const displayPinField = document.getElementById('display-pin');
   const currentPin = displayPinField.value;  
   const typedNumberField =document.getElementById('type-number');
   const typeNumber = typedNumberField.value; 
   const PinSuccess = document.getElementById('pin-success'); 
   const Pinfaliure = document.getElementById('pin-failure');
   if(typeNumber === currentPin) {
   
   PinSuccess.style.display = 'block';
   Pinfaliure.style.display = 'none';
   
} else {
    
     Pinfaliure.style.display = 'block';
     PinSuccess.style.display = 'none';
   }
});