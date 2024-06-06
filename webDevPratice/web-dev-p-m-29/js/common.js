console.log('hello browser')
function getTextElementById(elementId) {
  const phoneTotalElement = document.getElementById(elementId);
  const currentphoneString = phoneTotalElement.innerText;
  const currentPhoneTotal = parseInt(currentphoneString);
  return currentPhoneTotal;
  
}

function setTextElementById(elementId, value) {
  const subTotalElement = document.getElementById(elementId);
  subTotalElement.innerText = value;
}


function calculateSubTotal() {
// calculate Total

const currentPhoneTotal = getTextElementById('phone-total');
const currentCaseTotal = getTextElementById('case-total');

const currentSubTotal = currentPhoneTotal + currentCaseTotal;
setTextElementById('sub-total', currentSubTotal);




// calculate tax

const taxAmount = (currentSubTotal * 0.1); // multiplied 0.1 with currntsubtotal to find out 10% tax
setTextElementById('tax-amount',taxAmount.toFixed(2))
console.log(typeof(taxAmount))

const finalAmount = currentSubTotal + taxAmount;
setTextElementById('final-total', finalAmount);

}
