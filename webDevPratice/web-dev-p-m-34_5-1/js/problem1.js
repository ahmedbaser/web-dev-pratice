  // pratice 1 solved 

const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
      {
        name: {
          common: "John",
          fullName: ["John", "Doe"]
        },
        age: 32,
        isMale: false,
        address: {
          street: "13/A St Joseph",
          house: 10,
        }
      },
      {
        name: {
          common: "Humayoun",
          fullName: ["Humayoun", "Kabir"]
        },
        age: 33,
        isMale: true,
        address: {
          street: "13/A St Lucia",
          house: 11,
        }
      }
    ]
  };

 const newCard = document.getElementById('header-one');
 newCard.innerText = 'Person Name: ' + person.result[0].name.common;
 
 const ageCard = document.getElementById('card-age');
 ageCard.innerText = 'Age: ' + person.result[0].age ;

 const Address = document.getElementById('Address-card');
 Address.innerText ='Street: '  + person.result[0].address.street;

 const newCardTwo = document.getElementById('header-two');
 newCardTwo.innerText = 'Person Name: ' + person.result[1].name.common;
 
 const ageCardTwo = document.getElementById('age-cardTwo');
 ageCardTwo.innerText = 'Age: ' + person.result[1].age ;

 const AddressCardTwo = document.getElementById('Address-cardTwo');
 AddressCardTwo.innerText ='Street: '  + person.result[1].address.street;
