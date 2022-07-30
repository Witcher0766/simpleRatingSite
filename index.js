// document.getElementById('firstPage').style.display = 'none';



const nextPage = document.getElementById('submit1');
const voterPage = document.getElementById('firstPage1');
const thanksPage = document.getElementById('secondPage');
const votedNumber = document.getElementById('votedNumber');
let rate1 = document.getElementById('rateForOne');
let rate2 = document.getElementById('rateForTwo');
let rate3 = document.getElementById('rateForThree');
let rate4 = document.getElementById('rateForFour');
let rate5 = document.getElementById('rateForFive');


// classlist is used to add/remove classes and also helps in toggling the classes and for replacing the classes
// classList.contains(token); // Returns true if the list contains the given token, otherwise false.





// classList.item(index); // Returns the item in the list by its index, or undefined if index is greater than or equal to the list's length
// classList.contains(token); // Returns true if the list contains the given token, otherwise false.
// classList.add(token1[, ...tokenN]); // Adds the specified token(s) to the list.
// classList.remove(token1[, ...tokenN]); // Removes the specified token(s) from the list.
// classList.replace(oldToken, newToken); // Replaces token with newToken.
// classList.supports(token); // Returns true if a given token is in the associated attribute's supported tokens.
// classList.toggle(token[, force]); // Removes token from the list if it exists, or adds token to the list if it doesn't. Returns a boolean indicating whether token is in the list after the operation.
// classList.entries(); // Returns an iterator, allowing you to go through all key/value pairs contained in this object.
// classList.forEach(callback[ ,thisArg]); // Executes a provided callback function once per DOMTokenList element.
// classList.keys(); // Returns an iterator, allowing you to go through all keys of the key/value pairs contained in this object.
// classList.values(); // Returns an iterator, allowing you to go through all values of the key/value pairs contained in this object.


thanksPage.style.display = 'none';
const checkIfClassIsActive = (v, i, s, h, u) => {
    if(
        u.classList.contains("actived") ||
        h.classList.contains("actived") ||
        s.classList.contains("actived") ||
        i.classList.contains("actived")  

    ){
        return (
            u.classList.remove("actived"),
            h.classList.remove("actived"),
            s.classList.remove("actived"),
            i.classList.remove("actived"),
            v.classList.add("actived")
        );
    }
    else {
        v.classList.add("actived");
    }
};




const setNumber = num => {
    if(num >= 1) {
        votedNumber.textContent = `${num}`;
    }
}


// function actived(rating) {
//     rating.style.backgroundColor = '#7c8798';
//     rating.style.color = 'white';
// }

rate1.addEventListener('click', () => {
    let number = 1;
    checkIfClassIsActive(rate1, rate2, rate3, rate4, rate5);
    // actived(rate1);
    return setNumber(number);
})

rate2.addEventListener('click', () => {
    let number = 2;
    checkIfClassIsActive(rate2, rate1, rate3, rate4, rate5);
    // actived(rate2);
    return setNumber(number);
} )

rate3.addEventListener('click', () => {
    let number = 3;
    checkIfClassIsActive(rate3, rate1, rate2, rate4, rate5);
    // actived(rate3);
    setNumber(number);
})

rate4.addEventListener('click', () => {
    let number = 4;
    checkIfClassIsActive(rate4, rate1, rate2, rate3, rate4);
    // actived(rate4);
    setNumber(number);
})

rate5.addEventListener('click', () => {
    let number = 5;
    checkIfClassIsActive(rate5, rate1, rate2, rate3, rate4);
    // actived(rate5);
    setNumber(number);
})


nextPage.addEventListener('click', (change = () => {

    if((voterPage.style.display = 'block'))
     voterPage.style.display = 'none';
    thanksPage.style.display = 'block';
    if(votedNumber.textContent === "") {
        votedNumber.textContent = "0";
    }
}))

// function backToNormal() {
//     rate1.style.backgroundColor = 'rgba(37, 45, 55, 0.5)'
//     rate1.style.color = '#7c8798';
// }

function reset1() {

    if((thanksPage.style.display = 'block'))
    thanksPage.style.display = 'none';
    voterPage.style.display = 'block';
    votedNumber.textContent = 0;
    rate1.classList.remove("actived"),
    rate2.classList.remove("actived"),
    rate3.classList.remove("actived"),
    rate4.classList.remove("actived"),
    rate5.classList.remove("actived")
}

document.querySelector('#reset1').addEventListener('click', reset1);
