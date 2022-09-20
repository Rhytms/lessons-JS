const car = ['Mazda', 'Ford', 'Audi', 'Mercedes']
// const people = [
//   {name:'Nazar', budget:4000},
//   {name:'VItalik', budget:288},
//   {name:'Dima', budget:3120}
// ]
const fib = [1, 1, 2, 3, 5, 8, 13, 21, 34]

//Method
// car.push('BMW') //добавляє новйи айтем в кінець масиву
// car.unshift('Reno') //добавляє айтем в початок масиву
// // car.shift() //вертає перший айтем нам і видаляє з масиву
// const firstCar = car.shift()
// const lastCar=car.pop() //Вертає останній елемент та згодом видаляє його з масиву
// console.log(firstCar);
// console.log(lastCar);
// console.log(car.reverse());
// console.log(car);
// console.log(reverseText);
// const index = car.indexOf('Ford')
// car[index] = 'Porshe'
// console.log(car.includes('Audi'))
// console.log(car);
// const upperCar = car.map(car => { return car.toUpperCase() }) //повертає завжди новий масив, не змінює головний
// console.log(upperCar);
// console.log(car);

// const powFib = fib.map(fib => { return Math.pow(fib, 2) })
// console.log(powFib);

// const pow2 = num => num ** 2
// const pow2Fib = fib.map(pow2).map(Math.sqrt) //підносить масив до квадрату, та бере його корінь

// const pow2 = num => num ** 2
// const pow2Fib = fib.map(pow2)
// const filteredNum = pow2Fib.filter(num => num >20)
// console.log(pow2Fib);
// console.log(filteredNum);

const people = [
  {name:'Nazar', budget:4000},
  {name:'VItalik', budget:1200},
  {name:'Taisa', budget:4200},
  {name:'Yura', budget:1241},
  {name:'Kolya', budget:8644},
  {name:'Shasha', budget:4356},
  {name:'Dima', budget:3120}
]

// const reducePeople = people.reduce((acc, person) => {
//   if (person.budget > 2000) {
//     acc += person.budget
//   }
//   return acc
// }, 0)
//Такий спосіб застраліий, попробуєм через фільтр
const reducePeople = people
  .filter(person => person.budget > 4000)
  .reduce((acc, person) => {
    acc += person.budget
    return acc
  }, 0)
  //Цей спосібкраще так як, метод filter робить новий масив, а в масиві є метод reduce, такий спосіб написання більш професійніший
console.log(reducePeople);
console.log(people);

// const index = people.findIndex(function (person) {
//   return person.budget===4000
// })//Находить індекс в обєжкті масива і виводить данні які запрошуєш
// const person = people.find(function (person) {
//   return person.budget===4000
// })//виводить строчку з данними з масива
// console.log(person);

// let findedPerson
// for (person of people) {
//   if (person.budget === 4000) {
//     findedPerson = person
//   }
// }
// console.log(findedPerson);

// const person = people.find((person) => {
//   return person.budget===288
// })
// console.log(person);

// const person = people.find(person => person.budget === 288)
// console.log(person);

// // Задача 1
// const text = 'hello, we learn JS'
// // const reverseText = text.split(' ') //split претворює елемент в масив
// const reverseText = text.split('').reverse().join('')
