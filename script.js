const button = document.querySelector("#check-btn");
const input = document.querySelector("#text-input");
const p = document.querySelector("#result");

button.addEventListener("click", () => {
    if (input.value === "") {
        alert("Please input a value");
    } else {
        p.textContent = input.value;
    }
});


