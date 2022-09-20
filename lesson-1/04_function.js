// Функции
//Function Declaration - може виконувати код незалежно від находження, наприклад можемо спочатку визвати функцію, а потім її створити
// hello('Nazar')
// function hello(userName) {
//   console.log('Hello -', userName)
// }
// function hello(userName) {
//   console.log('Hello -', userName)
// }

// hello('Nazar')


// //Function Expression- неможемо викликати функцію до того, поки її не створили
// // hello2('Nazar')  -  !!!!!  ERROR  !!!!!
// // const hello2 = function (userName) {
// //   console.log('Hello 2 -', userName)
// // }

// const hello2 = function (userName) {
//   console.log('Hello 2 -', userName)
// }

// hello2('Nazar')


//Анонімні функції
// let counter = 0

// const interval=setInterval(function () {
//   if (counter === 10) {
//     clearInterval(interval)
//   }
//   else {
//     console.log(++counter);
//   }
// }, 100)
//Виконуємо артугмент що в середині, через певний час, який вказуємо самі, щоби зупинити функцію - закинемо її в перемінну і добавимо логіку

// const timeOut = setTimeout(function () {
//   console.log(++counter);
// })
//Добавляє затримку перед виконанням, виконується лише один раз, щоби зупинити також добавляємо логіку та метод 'clearTimeOut'


//Стрілочні функції
// const arrow = (userName) => {
//   console.log('Hello -', userName);
// }
// const arrow2 = userName => console.log('Hello -', userName)
//Працює лише якщо одне значення, чи одна задача фнкуції (наприклад вивести в консоль), якщо треба більше то пишемо в дужках через кому, наприклад
// const arrow2 = (userName, userAge) => console.log(`Hello my name ${userName}, i am ${userAge}`)

// const arrow2 = () => {
//   const info = prompt('Введите число')
//   const number = Math.pow(info, 2)
//   console.log(number)
// }
// arrow2()

// const userBtn=document.querySelector('#testBtn')
// const textCalc=document.querySelector('p')
// userBtn.addEventListener('click', function () {
//   let info = prompt('Введіть число')
//   let number = Math.pow(info, 2)
//   if (info != 0) {
//     console.log(number)
//     textCalc.textContent=`Вийшло: ${number}`
//   }
//   else {
//     console.log('На нуль не ділиться')
//     textCalc.textContent=`На нуль не ділиться`
//   }
// });

//Параметри по вмовчанню
// const sum = (a = 12, b = 2) => a * b
// console.log(sum())

// function sumAll(...all) {
//   let result = 0
//   for (let num of all) {
//     result += num
//   }
//   return result
// }
// const res = sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9)
// console.log(res);


//Замикання
function createMember(name) {
  return function (lastName) {
    console.log(name + lastName);
  }
}
const nameWithLastName = createMember('Nazar')
console.log(nameWithLastName('Danilov'));
