/* 
1. add event listner to the case plus button
2. get the value from case number field (input field)
3. convert the number to an integer
4. calculate the new case number
5. set the value to the case number field

*/

function updateCaseNumber(isIncrease) {
  const caseNumberField = document.getElementById('case-number-field');
  const caseNumberFieldString = caseNumberField.value;
  const previousCaseNumber = parseInt(caseNumberFieldString);
  let newCaseNumber;
   if(isIncrease === true) {
    newCaseNumber = previousCaseNumber + 1;
  } else {
    newCaseNumber = previousCaseNumber - 1;
  }

  caseNumberField.value = newCaseNumber;
   return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement =  document.getElementById('case-total')
    caseTotalElement.innerText = caseTotalPrice;
}


document.getElementById('btn-case-plus').addEventListener('click', function() {
    const newCaseNumber = updateCaseNumber(true)
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
});

document.getElementById('case-muins-btn').addEventListener('click', function() {
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
})

let sum = 0;
for(let i = 0; i <= 100; i++) {
    sum = sum+i;
}