// const buttonTest = document.querySelector('.clickonme')
// // buttonTest.onclick = () => {
// //   console.log('click')
// // }
// // let dunc = () => {
// //   console.log('click func')
// // }
// // buttonTest.addEventListener('click', dunc)

// const options = {
//   'capture': false, //фаза на якій має спрацювати щотчик
//   'once': true, //якщо тру, то функція виконається тількт один раз схоче на removeEventLestener
//   'passive':false//якщо тру то ніколи не визве preventDefault()
// }
// let removeEvent = () => {
//   console.log('click one time')
//   // buttonTest.removeEventListener('click',removeEvent)
// }
// buttonTest.addEventListener('click', removeEvent, options)

//==============================================================================================
//Обєкт події
// const btn = document.querySelector('.clickonme')

// function someFuncEvent(event) {
//   // console.log(event.type) //тип події
//   // console.log(event.target) //обєект на якому спрацював обработчик події
//   // console.log(event.currentTarget) //обєкт до якого причеплений обработчик
//   // console.log(event.clientX + '- X')//положення курсору по Х
//   // console.log(event.clientY + '- Y')//положення курсору по Y

//   //щоби глянути усі можливі події потрібно викликати:
//   console.log(event)
// }

// btn.addEventListener('click', someFuncEvent)

//==============================================================================================
//Всплиття та занурення
// const firstBlock = document.querySelector('.first__block')
// const secondBlock = document.querySelector('.second__block')
// const thirdBlock = document.querySelector('.third__block')

// firstBlock.addEventListener('click', (event) => {
//   console.log('Ти нажав на перший блок')
//   // event.stopPropagation()// нучого не зміниться

// })
// secondBlock.addEventListener('click', (event) => {
//   console.log('Ти нажав на другий блок')
//   // event.stopPropagation()//перший блок не спрацює
// },{'capture': true})//При нажатії на другий блок, саме перший спрацює він, потм третій, дальше перший. Але якщо ми нажмемо на третій то спрацює всерівно другий а вже потім третій, томущо третій блок вложений в другий
// thirdBlock.addEventListener('click', (event) => {
//   console.log('Ти нажав на третій блок')
//   // event.stopPropagation()//другий та перший не спрацює

// })
//Всплиття
//Буде відбуватись всплиття блоків, пояснення:
//Коли ми нажімаємо на перший блок, все добре і виконується команда яка вказана до цього блок, але якщо ми нажмемо на другий то спочатку виконається команді другого блоку, а вже потім першого, та сама дія проходить і з третім блоком: спочатку третій, другий, а вже потім перший.

//Щоби зупинити це всплиття усіх блоків, потрібно добавити   event.stopPropagation()

//Занурення
//Якщо ми хочемо щоби спрацював певний блок перший(наприклад у нас це другий) то після функції потрібно добавити наш options де capture буде true. Або добавити {'capture': true}

//==============================================================================================
//Делігіровання обєкетів

// const lessonBlockWithButtons = document.querySelector('.lesson__buttons')
// function ShowMessage() {
//   console.log('Click ')
// }
// lessonBlockWithButtons.addEventListener('click', (event) => {
//   if (event.target.closest('.button-item')) {
//     ShowMessage()
//   }
// })

//На практиці
//МЕНЮ З ВИБІРОМ
// const menuBody = document.querySelector('.menu')
// document.addEventListener('click', menu)
// function menu(event) {
//   if (event.target.closest('.menu__btn')) {
//     menuBody.classList.toggle('_active')
//   }
//   else if (!event.target.closest('.menu')) {
//     menuBody.classList.remove('_active')
//   }
// }
//ця функція створює можлиівість відкривати та закривати в нашому випадку меню. робимо константу не все меню, далі на весь документ добавляємо подію клік з функцією яка: перевіряє найближчий елемент, якщо це той що нас потрібно то добавляємо класс до меню, та другим іфом навпаки, якщо найближчий НЕ меню, то видаляємо класс, це зроблено для того, щоб при нажаті на зону віяка не належить меню клас видалявся

//==============================================================================================
//Дії браузера по вмовчанню
//Дії по вмовчанню це наприклад: При нажатті на силку вона перекидає на інший сайт і тд, при нажатті на кнопку відправки, вона відправляє форму на базу і тд, але якщо нам потрібно буде це відмінити то:

// const link = document.querySelector('.link')
// link.addEventListener('click', (event) => {
//   console.log('Click on link')
//   event.preventDefault()//відміняє стандартні дії браузера в нашому випадку переход на іншу силку
// }, { 'passive': true })//з 'passive': true дія всерівно виконається, але виведе помилку що ми неможемо присвоїти тру, коли є preventDefault
//==============================================================================================
//Основи подій миші
//Типи подій миші
//Події можуть бути прості та комплексні
//Прості
/*
1) mousedown / mouseup - кнопка нажата на елементі / кнопка відпущена над елементом
2) mouseover / mouseout - курсор зявляється над елементом / курсор пропадає з цього елемента
3) mousemove - кожен рух миш над елементом буде виконувати подію
4) contextmenu - викликається при спробі відкрити контексне меню при нажаті на праву кнопку миші. Але ця подія відноситься не тільки до мишки, бо може бути відкрите задопомогою клавіатури
*/
//Комплексні
/*
click - викликає спочатку mousedown а потім mouseup, якщо нажата головна кнопка миші(ліва)
dblclick - двойне нажаття мишки
Усі комплексні події складаються з простих і в теорії ми могли обійтись без них, але добре що вони існують бо з ними можна працювати окремо
*/
//На практиці
// const testEventBtn = document.querySelector('.test__button')
// testEventBtn.addEventListener('mousedown',(event) => {
//   console.log(`Нажата кнопка - ${event.which}`)
// })
// testEventBtn.addEventListener('click', (event) => {
//   console.log(`Виконався клік, нажата кнопка - ${event.which}`)
// })
// testEventBtn.addEventListener('contextmenu', (event) => {
//   console.log(`Визване контексне меню, нажата нопка (може бути тільки права) - ${event.which}`)
// })

// event.which = 1 - показує яка кнопка нажата, якщо 1 то головна ліва
// event.which = 2 - показує яка кнопка нажата, якщо 2 то середня
// event.which = 3 - показує яка кнопка нажата, якщо 3 то не головна права

//Координати - X & Y( clientX/Y, pageX/Y )

// const testCoordBlock = document.querySelector('.test__coord')
// testCoordBlock.addEventListener('mousemove', (event) => {
//   testCoordBlock.innerHTML =
//   `ClientX - ${event.clientX} <br> ClientY - ${event.clientY} <br><br><br><br>
//   PageX - ${event.pageX} <br> PageY - ${event.pageY}`

// })//рух мишки на елементі
// testCoordBlock.addEventListener('mouseover', (event) => {
//   testCoordBlock.innerHTML =
//     `Курсор над елементом <br><br> Елемент на який перейшов - ${event.target} <br><br>
//     Елемент з якого вийшов - ${event.relatedTarget}`
//   console.log(event.target)
//   console.log(event.relatedTarget)
// })
/*Для mouseover присутній:
event.target - елемент на який курсор перейшов
event.relatedTarget - елемент з якого курсор вийшов*/
// testCoordBlock.addEventListener('mouseout', (event) => {
//   testCoordBlock.innerHTML = `Курсор за елементом <br><br> Елемент на який перейшов - ${event.relatedTarget} <br><br> Елемент з якого вийшов - ${event.target}`
//   console.log(event.target)
//   console.log(event.relatedTarget)
// })
/*Для mouseout все навпаки:
event.relatedTarget - елемент на який курсор перейшов
event.target - елемент з якого курсор вийшов*/

//Але якщо помістити інший елемент в цей блок то mouseover/mouseout сприйме це як за вихід, з попереднього блоку, а потім знову в нього зайде, тобто дія буде повторюватись, хоча мишка до сих пір в тому самому блоці:
// testCoordBlock.addEventListener('mouseover', () => {
//   console.log('Ми над елементом')
// })
// testCoordBlock.addEventListener('mouseout', () => {
//   console.log('Ми поза елементом')
// })
//Тому в такому випадку краще використовувати mouseenter/mouseleave
// testCoordBlock.addEventListener('mouseenter', () => {
//   console.log('Ми над елементом')
// })
// testCoordBlock.addEventListener('mouseleave', () => {
//   console.log('Ми поза елементом')
// })
//в цьому випадку інші елементи всередині блока не будуть рахуватись за окремі, а ніби вони і є цей самий блок

//Переваги mouseover/mouseout
// const blockForMouse = document.querySelector('.test__coord')
// blockForMouse.addEventListener('mouseover', (event) => {
//   let target = event.target.closest('p')
//   if (!target) return
//   target.style.cssText=`background:#521;`
// })
// blockForMouse.addEventListener('mouseout', (event) => {
//   let target = event.target.closest('p')
//   if (!target) return
//   target.style.cssText = ``
// })
////mouseenter/leave не можуть сприймати інші елементи всередині батьківського блока, тому в нас би таке ніколи не вийшло

//==============================================================================================
//Події клавіатури
/*
Основні це:
  keydown - коли ми клавішу нажимаємо 
  keyup - коли ми клавішу відпускаємо
*/
// document.addEventListener('keydown', (event) => {
//   console.log(`Кнопка нажата: ${event.code} (${event.key})`)
// })
// document.addEventListener('keyup', (event) => {
//   console.log(`Кнопка відпущена: ${event.code}(${event.key})`)
// })
//event.code показує яка клавіша нажата (завжди в англійській розкладці(KeyG) наприклад)
//event.key показує яка клавіша була нажата, виведе ту мову яка виставлена на компютері(g,п,і)
//На практиці event.code ми можем використовувати щоби дізнатись, чи була нажаті сочетаніє клавіш наприклад
// document.addEventListener('keydown', (event) => {
//   if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
//     console.log(`Ви нажали: Ctrl + Z`)
//   }
// })
// document.addEventListener('keydown', (event) => {
//   console.log(`Нажата клавіша: ${event.code}(${event.key})`)
//   console.log(event.repeat)
// })
//event.repeat перевіряє чи зажата клавіша чи ні, і виводить буліан значення

//Практичне завдання

// const txtItem = document.querySelector('.text-area textarea')
// const txtItemLimit = txtItem.getAttribute('maxlength')
// const textCounter = document.querySelector('.area-span span')
// textCounter.innerHTML = txtItemLimit

// txtItem.addEventListener('keyup', setCounterSpan)
// txtItem.addEventListener('keydown', (event) => {
//   if(event.repeat) setCounterSpan()
// })//ця друга функція допомагає при зажатті кнопки, так вона буде підраховувати навіть якщо зажмемо, бо без нього вона буде підраховуватись тільки після віджаття клавіші

// function setCounterSpan(){
//   const txtCounetResult = txtItemLimit - txtItem.value.length
//   textCounter.innerHTML = txtCounetResult
// }
//сама функція виводить скільки нам залишилось можливих символів в полі
//доробимо наше меню, щоби при нажаті на ескейп воно також закривалось
// const menuBody = document.querySelector('.menu')
// document.addEventListener('click', menu)
// function menu(event) {
//   if (event.target.closest('.menu__btn')) {
//     menuBody.classList.toggle('_active')
//   }
//   else if (!event.target.closest('.menu')) {
//     menuBody.classList.remove('_active')
//   }
// }
// document.addEventListener('keyup', (event) => {
//   if (event.code === 'Escape') {
//     menuBody.classList.remove('_active')
//   }
// })

//==============================================================================================
//Події при скролі
// window.addEventListener('scroll',()=> {
//   console.log(`${scrollY}px`)
// })

//==============================================================================================
//Події загрузки сторінки
/*
  1) DOMContentLoaded - браузер повністю загрузим дом дерево html, але зовнішні ресурси наприклад картинки можуть бути ще не загружені
  2) load -браузер завантажим html дерево та зовнішні ресурси
  3) beforeunload / unload - користувач покидає сторінку
 */
// document.eeadyState - стан загрузки
/*
  Є три можливих значення:
  'loading' - документ завантажується
  'interactive' - документ був повністю прочитаний
  'complete' - документ був повністю прочитаний і усі зовнішні ресурси також були повністю загружені
 */
//Приклад
// document.addEventListener('DOMContentLoaded', readyDom)

// window.addEventListener('load', readyLoad)

// function readyDom() {
//   const image = document.querySelector('.img img')
//   console.log(document.readyState)
//   console.log(`DOM завантажен!`);
//   console.log(image.clientWidth)
// }
// function readyLoad() {
//   console.log(document.readyState)
//   const image = document.querySelector('.img img')
//   console.log(`Сторінка завантажена!`)
//   console.log(image.clientWidth)
// }

// window.addEventListener('beforeunload', beforeUnload)
// function beforeUnload(event) {
//   event.preventDefault()
//   event.returnValue = ''
// }//виводить діалогове вікно де питається чи впевнений що треба покинути/обновити сторінку

//==============================================================================================

//задачка

const findSome = document.querySelector('.find__some')

findSome.addEventListener('click', (event) => {
  if (event.target.closest('.find__img')) {
    findSome.classList.toggle('_active')
  }
  else if (!event.target.closest('.find__some')) {
    findSome.classList.remove('_active')
  }
})
document.addEventListener('keyup', (event) => {
  if (event.code === 'Escape') {
    findSome.classList.remove('_active')
  }
})
const language = document.querySelector('.textarea-symbol__language')
document.addEventListener('keyup', (event) => {
  if (event.code == 'ShidtLeft' || event.code == 'AltLeft') {
    language.classList.toggle('_active')
    language.innerHTML =  `Ви змінили мову`
  }
})

const txtItem = document.querySelector('.find__textarea textarea')
const txtItemLimit = txtItem.getAttribute('maxlength')
const txtItemCount = document.querySelector('.find__textarea span')
txtItemCount.innerHTML = txtItemLimit

txtItem.addEventListener('input', countElements)

function countElements(){
  const count = txtItemLimit - txtItem.value.length
  txtItemCount.innerHTML = count
}