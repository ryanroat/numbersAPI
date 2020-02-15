function rando(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1; // returns a 'random' number btwn 1 and max inclusive
}

const randomButton = document.querySelector('#randBtn');
randomButton.addEventListener('click', randomNumber);

const numberInput = document.querySelector('#numberInput');
numberInput.addEventListener('input', action);

function randomNumber() {
    const r = rando(100);
    numberInput.value = r;
    action();
}

function action() {
    const number = numberInput.value;
    const fact = document.querySelector('#fact');
    // console.log(number);
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://numbersapi.com/${number}`);
    xhr.onload = function() {
        if (this.status == 200 && number != '') {
            fact.innerHTML = this.responseText;
        } else {
            fact.innerHTML = '';
        }
    };
    xhr.send();
}
