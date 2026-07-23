"use strict";
const counterValue = document.getElementById('counterValue');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');
let count = 0; // initialize counter value to 0;
function displayCounter() {
    // Since, All three event listener usage this, we make a seperate function to avoid redundency and Follow the DRY principle.
    // counterValue.textContent = count; // Type 'number' is not assignable to type 'string'. So, convert it to string
    // counterValue.textContent = count.toString(); // All three event listener use this. This is redundent. So, apply Dry Principle.
    counterValue.textContent = count.toString();
}
incrementBtn.addEventListener('click', () => {
    count++;
    displayCounter();
});
decrementBtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
    }
    // counterValue.textContent = count.toString();
    displayCounter();
});
resetBtn.addEventListener('click', () => {
    count = 0;
    // counterValue.textContent = count.toString();
    displayCounter();
});
