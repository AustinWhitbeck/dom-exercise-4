// console.log('script loaded');

// /// variables ///

// const howManyVal = document.querySelector('#input1');
// console.log(howManyVal);
// const mainForm = document.querySelector('.main-form');
// console.log(mainForm);
// let numOfCoins = 0;
// console.log(numOfCoins);
// const makeMoney = document.querySelector('.make-money-button');
// let currentTotal = 0;
// const coinSelect = document.querySelector('#select-which-coin');
// console.log(coinSelect);

// /// DOM functions ///

//     // 1. // event.preventDefault(); prevents the page from refereshing every time you enter
//     // 2. // the const formData is a way to target the class FormData with the argument for the form it is getting
//           // data from
//     // 3. // created a variable that is equal to the variable that contains the form data getting the data from the 
//           // input 1. When we submit the FormData 'gets' the data from the input.


//          ///// try #1 /////
// // mainForm.addEventListener('submit', (event) => {
// //     event.preventDefault();
// //     const formData = new FormData(mainForm);
// //     const howManyValInput = formData.get('input1');
// //     console.log(howManyValInput);
// //     numOfCoins += parseInt(howManyValInput);
// //     console.log(currentTotal);
// //     // take the number of coins and the type, and appendChild that many
// //     if (event.target.option === '1') {
// //         console.log('This is a penny');
// //     }
// // })

//     ///// try #2 ////

// mainForm.addEventListener('submit', (event) =>{
//     // prevent default and make the FormData class a variable for the mainForm
//     event.preventDefault();
//     const formData = new FormData(mainForm);
//     const typeOfCoin = formData.get(coinSelect);
//     const coinOption = coinSelect.options[coinSelect.selectedIndex].text;
//     console.log(coinOption);

// })

// // what I want it to do //
// // 1. take in the form data
// // 2. when I hit enter or click 'make money' appendChild the appropriate coin type and number of correct type.
// // 3. then zero out the coins to add more.







// //  is the button the same as hitting submit? If not, then use this, if it is the same, then it will work inside the form
// // makeMoney.addEventListener('click', (event) => {
// //     console.log('this worked!');
// // })


// // make money button
// // takes the value of the current total
// // loops through the total using the largest step to divide it down into each coin.
// // at each step, appendChild to create an element (div) that has the name of the coin. 
// // div should have the name of the coin (penny etc) and the value of the coin.


