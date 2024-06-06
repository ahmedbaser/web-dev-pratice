
document.getElementById('applyDiscountBtn').addEventListener('click', applyDiscount) 
//     function applyDiscount() {
//         var priceInput = document.getElementById("priceInput");
//         var price = parseFloat(priceInput.value);
        
//         var discountCodeInput = document.getElementById("promoCode");
//         var discountCode = discountCodeInput.value.trim().toUpperCase(); // Convert to uppercase for case insensitivity
//         const result = document.getElementById('result');
//         if (isNaN(price) || price <= 0) {
//             alert("Please enter a valid price.");
//             return;
//         }
    
//         if (discountCode === "DISC30") { // Check for specific discount code
//             var discountedPrice = price * 0.7; // 30% discount
//             result.innerHTML="Discount applied! New Price: $" + discountedPrice.toFixed(2);
//         } else {
//            result.innerHTML="Invalid or no discount applied.";
//         }
//     } 
