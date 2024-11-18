const button = document.querySelector("#check-btn");
const input = document.querySelector("#text-input");
const p = document.querySelector("#result");


/* event listener attached to button which is checking is 
string in input a palindrome or not */
button.addEventListener("click", () => {
    if (input.value === "") {
        alert("Please input a value");
    } else if (input.value === input.value.split('').reverse().join('')) {
        p.textContent = `${input.value} is a palindrome`;
        input.value = "";
    } else {
        p.textContent = `${input.value} is not a palindrome`;
        input.value = "";
    }
});

// TO DO: make function to exclude special characters, space and upper/lower case letters 
const regex = (rgx) => {
    rgx = /_/;
}


