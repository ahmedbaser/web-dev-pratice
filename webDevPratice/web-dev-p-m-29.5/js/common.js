function getInputFieldById(elementId) {
    const inputField = document.getElementById(elementId);
    const inputValueString = inputField.value;
    const previusValue = parseInt(inputValueString);
    return previusValue;
}

function getTextFieldById(elementId) {
    const inputField = document.getElementById(elementId);
    const inputFieldValueString = inputField.innerText;
    const inputFieldValue = parseInt(inputFieldValueString);
    return inputFieldValue;
}



function setTextElementById(elementId, value) {
    const totalEx = document.getElementById(elementId);
    totalEx.innerText = value;
}

// Function to calculate total expenses and update balance
function CalculateTotal() {

  const FoodExpns = getInputFieldById('food-expense')
  const RentExpns = getInputFieldById('rent-expense')
  const ClothesExpns = getInputFieldById('clothes-expense')

  const TotalCost = FoodExpns + RentExpns + ClothesExpns;
  setTextElementById('expense-total', TotalCost)
  
  const Balance = getTextFieldById('Balance-total')
  const balanceRemaining = Balance - TotalCost;
  setTextElementById('Balance-total', balanceRemaining);
  // return balanceRemaining;
  
  const discount = balanceRemaining * 0.2;
  setTextElementById('save-amount', discount)

  const remainBalance = balanceRemaining - discount;
  setTextElementById('remain-balance', remainBalance);


}

// Function to calculate 20% of the remaining balance
// function calculate20Percent(balance) {
//   return 0.2 * balance;
// }

// // Add event listener to trigger the calculation of 20% of remaining balance
// document.getElementById('save-btn').addEventListener('click', function() {
//   const remainingBalance = CalculateTotal();
  
//   const saveAmount = calculate20Percent(remainingBalance);
//   setTextElementById('save-amount', saveAmount);

//   const finalBalance = remainingBalance - saveAmount;
//   setTextElementById('remain-balance', finalBalance);
// });




// function CalculateTotal() {
//   const FoodExpns = getInputFieldById('food-expense')
//   const RentExpns = getInputFieldById('rent-expense')
//   const ClothesExpns = getInputFieldById('clothes-expense')

//   const TotalCost = FoodExpns + RentExpns + ClothesExpns;
//   setTextElementById('expense-total', TotalCost)
  
//   const Balance = getTextFieldById('Balance-total')
//   const balanceRemaing = Balance - TotalCost;
//   setTextElementById('Balance-total', balanceRemaing);
//   return balanceRemaing;
// }








