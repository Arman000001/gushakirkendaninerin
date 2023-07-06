
let seconds = 10;

var coun = Math.random

function getElement(id) {
  return document.getElementById(id);
}

function getRandomAnimals() {
  return animals[Math.round(Math.random() * animals.length - 1)]
}
function main() {
  let options = [];
  const maxOptions = 3;
  while (options.length < maxOptions) {
    let coun = getRandomAnimals();
    if (options.indexOf(coun) === -1) {
      options.push(coun);
    }
  }
  for (let i = 0; i < options.length; i++) {
    getElement(`option${i + 1}label`).innerHTML = options[i].name;
    getElement(`option${i + 1}input`).value = options[i].name;
    getElement(`option${i + 1}input`).checked = false;
  }
  correct = options[Math.round(Math.random() * (options.length - 1))];
  getElement("flag").src = correct.img;
}

function timer() {
  setTimeout(finish, seconds * 1000);
  getElement("time").innerHTML = seconds;
  let countdown = setInterval(function () {

    seconds--;
    getElement("time").textContent = seconds;
    if (seconds <= 0) clearInterval(countdown);
    if (seconds === 7) getElement("time").style.color = "green";
    if (seconds === 5) getElement("time").style.color = "#ff0000";
  }, 1000);
}

let correctAnswer = 0;
let incorrectAnswere = 0;

function getElement(id) {
  return document.getElementById(id)
}
function check() {
  let input;
  try {
    input = document.querySelector('input[name = "option"]:checked').value;
  } catch {
    return;
  }
  if (input === correct.name){
    correctAnswer++;
    getElement("score").innerHTML = correctAnswer;
  }else{
    incorrectAnswere++;
  }
  
  main()
}
function finish() {
  clearInterval(checkInterval);
  let percentage = 100;
  getElement("alertaccuracy").innerHTML = `դուք անցաք ${percentage}%`;
}
let checkInterval = setInterval(check, 50);
timer();
main()