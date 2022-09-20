// const para = document.querySelector('p')
// const input = document.queryCommandIndeterm('input')
// const btn = document.querySelector('button')
// const contacts = ['Саша:2232322', 'Назар:3453456', 'Діма:7654322', 'Коля:9998769', 'Артем:9384975']

// // btn.addEventListener('click', function () {
// //   const searchName = Object.values(input)
// //   Object.values(input) = ''
// //   input.focus
// //     for (let i = 0; i < contacts.length; i++){
// //       let contactsSplit = contacts[i].split(':')
// //       if (contactsSplit[0] === searchName) {
// //         para.textContent = contactsSplit[0] + ', tel.:' + contactsSplit[1] + '.'
// //         break
// //       } else {
// //         para.textContent='Not founded'
// //       }
// //     }
  
// // })
// // for (let i = 0; i < 100; i++) {
// //   let num = 0
// //   if (num < i) {
// //     console.log(`Next number - ${i}`)
// //   }
// //   console.log(String(i))
// // }
// btn.addEventListener('click', function () {
//   for (let i = 0; i < contacts.length; i++){
//   // console.log(contacts[i])
//   let splitCont = contacts[i].split(':')
//   if (splitCont[0] === contacts[0]) {
//     console.log(contactsSplit[0])
//   } else {
//     para.textContent= 'Not found'
//   }
// }
// })
// let massive = [1, 4, 3, 0, 4, 5, 4]
//   .filter(massive => (!massive % 2))
//   .reduceRight((accumulator, massive) => accumulator + Math.sqrt(massive), 0)
//   console.log(reduceRight)
// function sumFunc(numOne,numTwo){
//   let result = 1
//   for (let i = 0; i < numTwo; i++){
//     console.log(i)
//     result *= numOne
//     console.log(result)
//     // return result
//   }
// }
// let sumFucnTwo = sumFunc
// sumFucnTwo(2, 4)
// let i = 0
// let timeOutFunc = (text, name, i) => {
//   console.log(`${text} ${name} ${i++}`)
//   let clearFunc = setTimeout(timeOutFunc, 1, text, name, i)
//   if (i === 1000) {
//     clearTimeout(clearFunc)
//   }
// }
// setTimeout(timeOutFunc, 1, 'Привет', 'Nazar TimeOut', i)
// setInterval(timeOutFunc,1000,'Привет','Nazar Interval', i)


let privet = 'privet'
let id = Symbol('id')
let mass = {
  name: 'Nazar',
  age: 20,
  [privet]: 'hello guys',
  [id]: 'whats up',
  addressFirst: {
    city: 'Kharkiv',
    street: 'Ak.Val',
    addressSecond: {
      city: 'Kiev',
      street: 'Ak.Val',
      addressThird: {
        city: 'Odesa',
        street: 'Ak.Val'
      }
    }
  },
    showInfo(){
    // let show = () => console.log(`${mass.name}, i am ${mass.age}, live in ${mass.addressFirst.city} , on street ${mass.addressFirst.street}`)
    // show()
    console.log(`${this.name}, i am ${this.age}, live in ${this.addressFirst.city} , on street ${this.addressFirst.street}`)
  }
}
mass.showInfo()
let massClonSecond = mass
mass = null // клонуємо обєкт а згодом його обнуляємо, через this залишаться данні клонуємого обєкту, без нього(через mass.ключ) буде помилка 
massClonSecond.showInfo() //Працю тільки з this, якщо без нього то не можу знайти дані

function returnMass(name, age, gender) {
  return {
    name,
    age,
    gender,
    orientation: true,
  }
}
// console.log(mass)
// delete mass.addressFirst
// console.log(mass)
// let massClon = Object.assign({}, mass)
// Object.assign(massClon, { color: 'red', position: 'absolute' })
// console.log(massClon)
// console.log(mass?.addressFirst?.addressSecond?.addressThird)
// if ('age' in mass) {
//   console.log(mass.age)
// }
// for (let key in mass) {
//   console.log(key)
//   console.log(mass[key])
// }
// for (let key in mass.addressFirst.addressSecond) {
//   console.log(key)
//   console.log(mass.addressFirst.addressSecond[key])
// }

// let key = 'name'
// console.log(mass[key], mass[id])
// console.log(mass.addressFirst.city)
// console.log(mass.addressFirst.addressSecond.addressThird.city)
// let perForReturnMass = returnMass('Nazar', 20, 'Male')
// console.log(perForReturnMass)

const artem = ['loh', 'mudila', 'rukoblud']
console.log(artem)
let artemBody = {
  name: 'Artem',
  age: 12,
  languages: ['nim', 'ua', 'en'],
  spirt: '99%',
  hair: 'brown'
}

artemBody.age = 30
console.log(artemBody)
let body = document.querySelector('body')
let btn = document.querySelector('button')
btn.addEventListener('click', () => {
  btn.style.position = 'absolute'
  if (btn.style.background == 'white') {
    btn.style.background = '#455'
    btn.style.width = '165px'
    btn.style.height = '165px'
    btn.style.borderRadius = '50%'
    body.style.background = '#444'
    btn.style.borderColor = '#333'
    btn.style.top = '50%'
    btn.style.translate='20%'
    btn.style.fontSize = '24px'
    btn.style.transition = '1s'
    body.style.transition = '0.3s'
    btn.style.left = '100px'


  } else {
    btn.style.background = 'white'
    btn.style.left = '500px'
  body.style.background = '#333'

  }
})


// let i = 0
// let timeOutFunc = (text, name, i) => {
//   console.log(`${text} ${name} ${i++}`)
//   let clearFunc = setTimeout(timeOutFunc, 1000, text, name, i)
//   if (i === 1000) {
//     clearTimeout(clearFunc)
//   }
// }
// setTimeout(timeOutFunc, 1000, 'Привет', 'Nazar TimeOut', i)
// let func = () => {
//   for (let i = 0; i < 10; i++){
//     console.log(`hello ${i}`)
//   }
// }
// setInterval(func(), 1000)
// let i = 0
// setInterval(function () {
//   if (i <= 10) {
//     console.log(i++)
//   }
// },100)

// function userInfo(name, gender) {
//   this.name = name
//   this.age = 20
//   this.gender = gender
// }
// console.log(new userInfo('Nazar', 'Male'))
// console.log(new userInfo('Vika', 'Female'))

// let numOne = 5.241
// console.log(numOne.toFixed(3))


// let assOne = ['KOlya', 'Nazar', 'Lilya']
// console.log(assOne)
// let assTwo = assOne.slice(1, 2)
// console.log(assTwo)

// let assThird = assOne.concat('Olya')
// console.log(assThird)
// let assFouth = assOne.includes('Nazar', 1)
// console.log(assFouth)

// let arr = [
//   { name: 'Kolya', age: 18 },
//   { name: 'Sasha', age: 25 },
//   { name: 'Olya', age: 21 },
  
// ]

// let findItemIndex = arr.find(function (item, index, array) {
//   return item.name === 'Olya'
// })
// let findItem = arr.find(item => item.age === 18)
// let findItemIndex = arr.findIndex(index => index.age === 18)
// console.log(findItem)
// console.log(findItemIndex)
// let resultOfArr = arr.filter(function (item) {
//   return item.age >= 19
// })
// console.log(resultOfArr)

let people = ['Sasha', 'Nazar', 'Yana', 'Dima']
console.log(people.sort())

let randomNumb = [5, 2, 9, 7, 22,12,52,5,32,0]
console.log(randomNumb.sort())

// let sortNumbers = (a, b) => {
//   console.log(`Сравниваем ${a} и ${b}`)
//   // if(a > b) return 1
//   // if(a == b) return 0
//   // if(a < b) return -1

//   return a - b
// }
// console.log(randomNumb.sort(sortNumbers))
console.log(randomNumb.sort((a, b) => a - b))

let selectLetter = people.map((item) => { return item[0] })
console.log(selectLetter)

let stringArr = 'Nazar Dima Sasha Olya Ira'
let splitArray = stringArr.split(' ',3)
console.log(splitArray)

let array = ['Nazar', 'Dima', 'Sasha', 'Olya', 'Ira']
let joinArr = array.join('  ---  ')
console.log(joinArr)

// let arrayTest = []
// let objTest = {}
// console.log(typeof objTest)
// console.log(typeof arrayTest)

// if (Array.isArray(objTest)) {
//   console.log('its array')
// } else {
//   console.log('its not array')
// }

// for (let i = 0; i < array.length; i++){
//   console.log(array[i])
//   console.log(i)
// }

array.forEach((value, index, array) => {
  console.log(`${value} elements on ${index} position in array: ${array[length++]}`)
})

let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let reduceArrayNumbers = arrayNumbers.reduce((previosValue, item, index,array) => {
  return item + previosValue
},0)
console.log(reduceArrayNumbers)
