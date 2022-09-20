const link = document.querySelector('#headir')
const testBtn = document.getElementById('testBtn')
console.dir(link.textContent)
// console.dir(testBtn.textContent)
const heading2List = document.querySelectorAll('h2')
const heading2Last = heading2List[1]
const heading2First = heading2List[0]


function addStyles(node, text, color,fontSize) {
  node.textContent = text
  node.style.color = color
  node.style.background = 'gray'
  node.style.padding = '2rem'
  node.style.marginTop = '2rem'
  node.style.textAlign = 'center'
  node.style.transition = '0.3s', 'linear'
  node.style.width = '100%'
  node.style.display = 'block'
  
  if (fontSize) {
    node.style.fontSize = fontSize
  }
}
// setTimeout(() => {
//   addStyles(heading2First,'Its heading2 first', 'yellow')
// }, 1000)
// const hlink = heading2Last.querySelector('a')

// hlink.addEventListener('click', (event) => {
//   event.preventDefault()
//   console.log('click on the link', event.target.getAttribute('href'));
//   const href = event.target.getAttribute('href')
//   window.location = href
  
// })
// setTimeout(() => {
//   addStyles(hlink,'Its heading2 Last', '#32ff51','2rem')
// }, 2000)
// addStyles(link, 'Some section with h1','rgb(50, 255, 81)')

// heading2First.addEventListener('click', () => {
//   console.log('click');
// })
// heading2Last.onmouseover = () => {
//   console.log('Click h2 last');
// }
// link.onclick = () => {
//   console.log(link.style.color);
//   if (link.style.color === 'rgb(50, 255, 81)') {
//     link.style.color='#000'
//   }
//   else {
//     link.style.color='rgb(50, 255, 81)'
//   }
//   // console.log('CLICK');
// }
// let linkPrompt = prompt('take a number:', 0)
// let message = 'My name:'
// let messageLink = linkPrompt > 1 && linkPrompt < 5 ? ', hello Nazar' :
//   linkPrompt > 5 && linkPrompt < 10 ? 'hello Vitalik' :
//     linkPrompt > 10 ? 'hello Artem':
//       linkPrompt < 0 ? 'hello Vlad': 'hello Ira'
// message += messageLink
// console.log(message)
// if (92 > '11' && 52 > 100) {
//   console.log('true')
// } else {
//   console.log('false')
// }
// if (0) {
//   console.log('false')
// } else if (' ') {
//   console.log('true')
// }
// while (num) {
//   console.log(num)
//   // num++
// }
// let min = 0
// let hours = 0
// let count = 0
// setInterval(() => {
//   console.log(`${hours} - Год. , ${min} - Хв. , ${count++} - Сек.`)
//   if (count === 60) {
//     count = 0
//     // console.log(++min ,'Хв', count++, 'Сек')
//     ++min
//   } else if (min === 60) {
//     min = 0
//     // console.log(++hours ,'Год',++min ,'Хв', count++, 'Сек')
//     ++hours
    
//   }
// }, 1000);
// let box = 0
// for (; box <= 10; box++){
//   if (box == 3 || box == 7) continue
//   console.log(box)
// }
// let num = 0
// while (num < 3) {
//   num++
//   console.log(`Число: ${num}`)
// }
// firstFor:for (let num = 0; num < 2; num++){
//   for (let size = 0; size < 3; size++){
//     if(size == 2) break firstFor
//     console.log(size)
//   }
// }
// function summCalc(num1 = 3, num2 = 1, num3 = 7, more, less) {
//   console.log(`Перше число: ${num1}`)
//   console.log(`Друге число: ${num2}`)
//   console.log(`Третє число: ${num3}`)

//   numSumm = num1 + num2 + num3
//   console.log(`Сумма: ${numSumm}`)

//   if (numSumm > 5) {
//     more()
//   } else {
//     less()
//   }
  
// }
// function showMore() {
//   console.log('Більше 5')
// }
// function showLess() {
//   console.log('Меньше 5')
// }
// summCalc(3,5,7,showMore, showLess)

// let showNum = (num) => {
//   console.log(num)
//   if (num < 3542) {
//   setTimeout(showNum,0, ++num)
    
//   }
// }
// setTimeout(showNum,0,1)
function showName() {
  console.log('hello Vasya')
}
setInterval(showName,10000)
console.log('hello Jokya')

'use strict'
if (2 > 1) {
  function showMessage() {
    console.log('Hello')
  }
}
showMessage()
// for (var i = 0; i < 100; i++) {
//   ctx.beginPath();
//   ctx.fillStyle = 'rgba(255,0,0,0.5)';
//   ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
//   ctx.fill();
// }

let contacts = ['Григорий:2232322', 'Марина:3453456', 'Василий:7654322', 'Наталья:9998769', 'Диана:9384975'];
let contactsSplit = contacts[2].split(':')
console.log(contactsSplit)







