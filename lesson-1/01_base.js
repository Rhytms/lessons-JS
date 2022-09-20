const userName = 'nazar';
const age = 29;
let boo = true
const header = document.querySelector(".header");
let navLInks = document.querySelectorAll(".nav-header__link");
const textBtn = document.querySelector("#testBtn");

console.log(navLInks);

function sayHello() {
  let message = "Hellow " + userName;
  console.log(message);
}

sayHello();

function mathHard(a, b) {
  let result = a * b;
  return result;
}

let sum = mathHard(12, 32);
console.log(sum);


window.addEventListener("scroll", checkScroll);
document.addEventListener("DOMContentLoaded", checkScroll);

function checkScroll() {
  let scrollPos = window.scrollY;
  
  if (scrollPos > 0) {
    header.classList.add('red');
  }
  else {
    header.classList.remove('red');
  }
}

testBtn.addEventListener("click", function () {
  console.log('clicked')
})

for (let navItem of navLInks) {
  navItem.addEventListener("click", function () {
    console.log(navItem.text);
  });
}

const para = document.querySelector('p');

para.addEventListener("click", updateName);

function updateName() {
  let name = prompt('Enter name');
  para.textContent = 'Player 1:' + name;
  
}

const cars = ['Mazda', 'Audi', 'BMW']
console.log(cars)
console.log(cars.length)
cars[0] = 'Porshe'
cars[3] = 'Mazda'
console.log(cars)

for (i = 0; i <= cars.length; i++){
  console.log(i)
}
for (let car of cars) {
  console.log(car)
}

const person = {
  firstName: 'Nazar',
  lastName: 'Danilov',
  age: 20,
  hasWife: false,
  languages: ['En', 'Ua', 'Ru'],
  greet: function () {
    console.log('greet from person')
  }
}
person.greet()
console.log(person.languages)
const key = age
console.log(key)

