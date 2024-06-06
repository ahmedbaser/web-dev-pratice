// Task 4 completed 
const borderRadius = document.querySelectorAll('.card');
for(const card of borderRadius) {
    card.style.borderRadius = '30px'
}

// Task 1 complete 
 
const LightColor = document.querySelectorAll('h2');
for(const h2 of LightColor) {
    h2.style.color = 'lightblue'
}

// const BackgroundColor = document.querySelectorAll('backpack');
// for(const backpack of BackgroundColor) {
//    backpack.style.BackgroundColor = 'tomato';
// }


// Task 2 completed 
const BackgroundColor =  document.getElementById('backpack');
BackgroundColor.style.backgroundColor = 'tomato';

// Task 5 completed 
document.getElementById('BuyOne').addEventListener('click', function(){
    console.log('This is the best option for me to learn DOM');
});


// Task 6 completed 

const buyNowButton = document.querySelectorAll('.panda-btn-buy-now');

function removeCard(event) {
    const button = event.target;
    const card = button.closest('.removeCard');
    card.remove();
}

buyNowButton.forEach(button => {
    button.addEventListener('click', removeCard);
})




// Task 7 completed 
document.getElementById('exampleInputEmail1').addEventListener('keyup', function(){
    const text = event.target.value;
    const deleteButton = document.getElementById('btn-sumbit');
    if(text === 'Email') {
        deleteButton.removeAttribute('disabled')
    } else {
        deleteButton.setAttribute('disabled', true)
    }
});

// Task 8 completed 
const  image = document.getElementById('shoes-one');
const newSrc = image.getAttribute('data-new-src');
image.addEventListener('mouseenter', function()  {
    this.src = newSrc;
})