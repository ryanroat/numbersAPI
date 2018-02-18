
    function rando(max) {
      return (Math.floor(Math.random() * Math.floor(max))+1);   // returns a 'random' number btwn 1 and max inclusive
    }

    let randomButton = document.querySelector("#randBtn");
    randomButton.addEventListener('click',randomNumber);

    let numberInput = document.querySelector("#numberInput");
    numberInput.addEventListener('input',action);

    function randomNumber() {
      let r = rando(100);
      numberInput.value = r;
      action();
    }

    function action(){
      let number = numberInput.value;
      let fact = document.querySelector('#fact');
      console.log(number);
      let xhr = new XMLHttpRequest();
      xhr.open('GET', 'http://numbersapi.com/'+number);
      xhr.onload = function (){
        if (this.status == 200 && number !=""){
          fact.innerHTML = this.responseText;
        }
        else {
          fact.innerHTML = '';
        }
      }
      xhr.send();
    };