console.log('script loaded');

// 1. when the form is submitted add the number of coins to the page.
// 2. each with text from the "which coin"
// 3.


//// Dom Variables ///

// main form variable
const mainForm = document.querySelector('.main-form');
console.log(mainForm);

// coin items section
const coinItemsSection = document.querySelector('.coins-section');
console.log(coinItemsSection);

// number of coins
const howManyInput = document.querySelector('#how-many-input');
console.log(howManyInput);

// type of coins
const coinType = document.querySelector('#select-which-coin');
console.log(coinType)



/// DOM functions ///

// main function

mainForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(mainForm);
    // how many
    const howManyCoinsVal = formData.get('how-many-input');
    console.log(howManyCoinsVal);
    // what type
    const coinOption = coinType.options[coinType.selectedIndex].text;
    console.log(coinOption);
    // create divs that have the innerText of the correct coin
    // the div

    // while the number of coins I need to make
    // is less than the number of coins made
    // make another coin
    let currentCoins = 0;

    while (parseInt(howManyCoinsVal) > currentCoins){
        // if the coin option = the string associated with the innerText.
        if (coinOption === 'Penny'){
            // create element with JavaScript
            const pennyDiv = document.createElement('div');
            console.log(pennyDiv);
            // add a class to the classList of an element
            pennyDiv.classList.add('coinItem');;
            // update the innerText of an element
            pennyDiv.innerText = 'Penny';
            // append the button inside of the buttonWrapper div
            coinItemsSection.append(pennyDiv);
            currentCoins++;
        } else if (coinOption === 'Nickel'){
            console.log('This is a Nickel');
            const nickelDiv = document.createElement('div');
            console.log(nickelDiv);
            nickelDiv.classList.add('coinItem');;
            nickelDiv.innerText = 'Nickel';
            coinItemsSection.append(nickelDiv);
            currentCoins++;
        } else if (coinOption === 'Dime'){
            const dimeDiv = document.createElement('div');
            dimeDiv.classList.add('coinItem');;
            dimeDiv.innerText = 'Dime';
            coinItemsSection.append(dimeDiv);
            currentCoins++;
        } else if (coinOption === 'Quarter'){
            // else if is not needed since it is all that is left.
            const quarterDiv = document.createElement('div');
            quarterDiv.classList.add('coinItem');;
            quarterDiv.innerText = 'Quarter';
            coinItemsSection.append(quarterDiv);
            currentCoins++;
        }
    } // end while loop


    coinItemsSection.addEventListener('click', (event) => {
        coinItemsSection.removeChild(event.target);
    })

})

