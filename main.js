let count = 0;

const countDisplay = document.getElementById('count-display');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const increaseBtn = document.getElementById('increase');

function updateDisplay() {
    countDisplay.textContent = count;

    countDisplay.classList.add('pop');
    setTimeout(() => {
        countDisplay.classList.remove('pop');
    }, 300);


    if (count > 0) {
        countDisplay.style.color = '#50C878'; 
    } else if (count < 0) {
        countDisplay.style.color = '#FF5C5C'; 
    } else {
        countDisplay.style.color = '#f0f0f0'; 
    }
}

decreaseBtn.addEventListener('click', () => {
    count--;
    updateDisplay();
});

increaseBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});

updateDisplay();