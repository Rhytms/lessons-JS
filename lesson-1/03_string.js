// const userName = 'Nazar'
// const userAge = 20
// function getAge() {
//   return userAge
// }

// const output = `Привіт мене звати ${userName} і мені ${userAge < 30 ? 'True' : 'False'} років`
// const output = `
// <header class="header">
//     <nav class="header__nav nav-header">
//       <a href="#" class="nav-header__link">Home</a>
//       <a href="#" class="nav-header__link">About</a>
//       <a href="#" class="nav-header__link">Services</a>
//       <a href="#" class="nav-header__link">Contact</a>
//     </nav>
// </header>`
// console.log(output);

// const userName = 'Nazar'
// console.log(userName.length);
// console.log(userName.toUpperCase());
// console.log(userName.toLowerCase());
// console.log(userName.charAt(2));
// console.log(userName.indexOf('ar'));
// console.log(userName.startsWith('Na'));
// console.log(userName.endsWith('!'));
// console.log(userName.repeat(3));
// const string = '      password       '
// console.log(string.trim());

function logPerson(s, userName, age, year, time) {
  if (age < 0) {
    age='Не народився'
  }
  if (year < 1900) {
    year='Ти вампір, згинь'
  }
  return `${s[0]}${userName}${s[1]}${age}${s[2]}${year}${s[3]}${time}`
}
const personName = 'Kirito'
const personAge = 20
const personYear = 2022
const personTime = '22.02.2022'

const personName2 = 'Ki'
const personAge2 = -20
const personYear2 = -2022
const personTime2 = '22.02.2022'
personName.let


// const output = logPerson`Імя: ${personName}, Вік: ${personAge}, Рік: 2022`
const output = logPerson`Імя: ${personName}, Вік: ${personAge}, Рік: ${personYear}, Час: ${personTime}`
const output2 = logPerson`Імя: ${personName2}, Вік: ${personAge2}, Рік: ${personYear2}, Час: ${personTime2}`

console.log(output)
console.log(output2)


