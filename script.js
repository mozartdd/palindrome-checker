const button = document.querySelector("#check-btn");
const input = document.querySelector("#text-input");
const p = document.querySelector("#result");

/* event listener attached to button which is checking is 
string in input a palindrome or not */
button.addEventListener("click", () => {
    if (input.value === "") {
        alert("Please input a value");
    } else {
        let cleanedInput = input.value.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    if (cleanedInput === cleanedInput.split('').reverse().join('')) {
        p.textContent = `${input.value} is a palindrome`;
    } else {
        p.textContent = `${input.value} is not a palindrome`;
    }
    input.value = ""
    }   
});