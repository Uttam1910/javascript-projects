let counter = 0;

function increment() {
    counter++;
    document.getElementById('counter').innerText = counter;
}

function decrement() {
    counter--;
    document.getElementById('counter').innerText = counter;
}

function resetCounter() {
    counter = 0;
    document.getElementById('counter').innerText = counter;
}
