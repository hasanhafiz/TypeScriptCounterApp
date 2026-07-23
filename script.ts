const counterValue = document.getElementById('counterValue') as HTMLElement;
const incrementBtn = document.getElementById('incrementBtn') as HTMLButtonElement;
const decrementBtn = document.getElementById('decrementBtn') as HTMLButtonElement;
const resetBtn = document.getElementById('resetBtn') as HTMLButtonElement;

let count = 0; // initialize counter value to 0;

function displayCounter() {
    // Since, All three event listener usage this, we make a seperate function to avoid redundency and Follow the DRY principle.
    counterValue.textContent = count.toString();
}

incrementBtn.addEventListener('click', () => {
    count++;
    // counterValue.textContent = count; // Type 'number' is not assignable to type 'string'. So, convert it to string
    // counterValue.textContent = count.toString(); // All three event listener use this. This is redundent. So, apply Dry Principle.
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
