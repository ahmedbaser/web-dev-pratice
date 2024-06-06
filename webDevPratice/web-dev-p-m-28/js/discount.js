 document.getElementById('applyDiscountBtn').addEventListener('click', function() {
    var priceInput = document.getElementById('priceInput');
    var price = parseFloat(priceInput.value);
    var discountCode = document.getElementById('promoCode');
    var discountCodeInput = discountCode.value.trim().toUpperCase();
    const result = document.getElementById('result');

    if(isNaN(price) || price <= 0) {
        result.innerHTML = 'Please input a valid number'
    }

    if(discountCodeInput === "DISC30") { // check for specific discount code
        var discountPrice = price * 0.7; // 30% discount
        result.innerHTML = 'Discount is ' + discountPrice.toFixed(2);
    }
    else{
        result.innerHTML = 'Unvalid copen code'
    }



 })






















  
// document.addEventListener("DOMContentLoaded", function() {
//     const applyDiscountBtn = document.getElementById("applyDiscountBtn");
//     applyDiscountBtn.addEventListener("click", applyDiscount);
//   });
  
//   function applyDiscount() {
//     const priceInput = parseFloat(document.getElementById("priceInput").value);
//     const promoCode = document.getElementById("promoCode").value.trim().toLowerCase();
//     const result = document.getElementById("result");
  
//     const discountCodes = ["disc30"]; // Accepted discount codes
  
//     if (isNaN(priceInput) || priceInput <= 0) {
//       result.innerHTML = "Please enter a valid price.";
//       return;
//     }
  
//     if (discountCodes.includes(promoCode)) {
//       const discountedPrice = priceInput * 0.7; // 30% discount applied
//       result.innerHTML = `Discounted Price: ${discountedPrice.toFixed(2)}`;
//     } else {
//       result.innerHTML = "Invalid promo code. Discount not applied.";
//     }
//   }



