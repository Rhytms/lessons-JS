const person = {
  name: 'Nazar',
  age: 20,
  languages: ['eu', 'ua', 'ru'],
  isProgrammer: true,
  // 'const key': 'Constanta',
  // ['key_' + (1+3)]:'Key 4',
  greet() {
    console.log('Hellow frow greet!');
  },
  info() {
    // console.log('this:',this)
    console.info('Персонаж по імені:', this.name)
  }
}
// person.languages.push('fr')
// console.log(person.name)
// delete person['key_4']
// console.log(person["const key"])
// console.log(person);

// const { name: userName, age: userAge, languages: userLang } = person //щоби не дублювати код багат разів, можна зразу змінювати йому значення та імена
// const { name: userAge = 12} = person //Знак = задає значення по вмовчанню, тобто якщо наприклад age = undefined, то воно виведе 12
// console.log(userName, userAge, userLang)

// for (let key in person){
//   if (person.hasOwnProperty(key)) {
//     console.log('Name:', key)
//     console.log('Value:',person[key])
//   }
// }
//Можливе питання на співбесіду, чим небезпечний метод фор ін, проблема в тому що він може бігти не лише по ключам обєкта, а й заходити та змінювати його прототип, і через це можуть бути проблеми

// const keysPerson = Object.keys(person)
// console.log(keysPerson)
// Object.keys(person).forEach((key) => {
//   console.log('Name:', key)
//   console.log('Value:',person[key])
// })


//Context
// person.info()
// const logger = {
//   keys(obj) {
//     console.log('Object keys:',Object.keys(obj));
//   }
// }
const logger2 = {
  keys() {
    // console.log('Object keys:',Object.keys(this));
  },
  keysAndValue() {
    Object.keys(this).forEach(key => {
      console.log(`"${key}:" ${this[key]}`);
    })
    // console.log('Values:', Object.values(person));
  },
  withParams(top = false, between = false, bottom = false) {
    if (top){
      console.log('-------  Start  -------');
    }
    Object.keys(person).forEach((key, index, array) => {
      console.log(`"${key}:" ${person[key]}`)
      if (between && index !== array.length - 1) {
        console.log('-----------------')
      }
    })
    if (bottom) {
      console.log('-------  End  --------');
    }
  }
}
// logger2.keysAndValue.call({ a: 1, c: { b: 2 } })
logger2.withParams.call(person,true,true,true)



