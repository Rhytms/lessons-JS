// let windowWidth = window.innerWidth
// console.log(windowWidth)

// let bodyInfo = document.body
// let bodyChild = bodyInfo.childNodes
// console.log(bodyChild)
// let childrenBody = bodyInfo.children
// console.log(childrenBody)
// let ntnChild = bodyInfo.child

// let elementOfUl = document.querySelectorAll('.li-item')
// console.log(elementOfUl)
// let elemLi = document.querySelectorAll('li')
// console.log(elemLi[2])

// for (const itemOfLi of elemLi) {
//   console.log(itemOfLi)
// }
//=============================================================================================

// const listItem = document.querySelector('.li-item__subitem')
// // let listItemSecond = document.querySelector('.li-item')
// // console.log(listItem)
// // console.log(listItemSecond)
// const closestParnets = listItem.closest('.list-sub')
// console.log(closestParnets)
//=============================================================================================
// const textElement = document.querySelector('.text')
// const contentTextElement = textElement.innerHTML // виводить весь контент елемента разом з хтмл тегами
// console.log(contentTextElement)
// textElement.innerHTML =
//   `${contentTextElement} <p class="text">Hello, today we <span class="yellow">changed</span> and added <span class="yellow">text</span> </p>`
//   //добавляєм або змінюємо контент, можна вписувати теги хтмл, якщо перед цим задати старий контент в зміну, то можна використовувати його в майбуьнтому
//=============================================================================================

//зміна документа повністю через outer
// const textContent = document.querySelector('.text')
// const outerTextContent = textContent.outerHTML
// console.log(outerTextContent)
// //Виводить в консоль
// {/* <p class="text">
//       Lorem ipsum, dolor sit amet
//       <span class="yellow">consectetur</span> adipisicing elit. Quia, veritatis!
//     </p> */}
// textContent.outerHTML = `<p class="text">Hello, today we <span class="yellow">changed</span> and added <span class="yellow">text</span> </p>`

//=============================================================================================
// //textContent
// const textElement = document.querySelector('.text')
// console.log(textElement.textContent)//виводить тільки сам текст без тегів
// textElement.textContent = `<p class="text">Hello, today we <span class="yellow">changed</span> and added <span class="yellow">text</span> </p>`
// //Виводить точно такий текст який ми написали, теги хтмл не працюють
//=============================================================================================
//nextSibling
// const textElement = document.querySelector('.text')
// const nextSibText = textElement.nextSibling
// console.log(nextSibText)
// //Виводить коментар томущо він наступний після тегу р
// console.log(nextSibText.data)
// //виводить сам текст наступного елемента
// nextSibText.data = 'Changed commentar'
// console.log(nextSibText.data)
// //змінюємо коментар

//=============================================================================================
//=============================================================================================

//Створення нових елементів та вузлів
// const newElement = document.createElement('div')
//Щоб поміняти його вмістимість добавими innerhtml
// newElement.innerHTML = `<p class="text">Hello, today we <span class="yellow">changed</span> and added <span class="yellow">text</span> </p`;
// console.log(newElement)
// const newTextElement = document.createTextNode('Hello guys')
// console.log(newTextElement)
//Створення текстового контенту, вузла
//=============================================================================================
//Вставка контенту який ми створили в попередньому блоці
// const textElement = document.querySelector('.text')
// const title = document.querySelector('h1')

// textElement.after(title) //  Перенесли уже існуючий елемент на нше місце
// textElement.before(newElement, 'Hellow Wolrld!) // Перед елементом, через кому можна добивити ще якийсь елемент
// textElement.after(newElement) // Після елементом
// textElement.prepend(newElement) // Перед усім контентом в елементі
// textElement.append(newElement) // Після усього контенту в елементі
//=============================================================================================
//Вставка через insertAdjacentHTML
// textElement.insertAdjacentHTML(
//   'afterend',
//   `<p class="text">Hello, today we <span class="yellow">changed</span> and added <span class="yellow">text</span> </p>`
// )

// 'beforebegin' - вставити html безпосередньо перед textElement
// 'afterbegin' - вставити html в початок textElement
// 'beforebegin' - вставити html в кінець textElement
// 'beforebegin' - вставити html безпосередньо після textElement

//Також є:
// textElement.insertAdjacentText('afterend',
//   `some text`)
// //Вставляє текст
// textElement.insertAdjacentElement('afterbegin',
//   newElement)
// //Вставляє елемент

//=============================================================================================
//створення клона існуючого елемента без дочірних
// const cloneTextElement = textElement.cloneNode()
// console.log(cloneTextElement) // виводить р елмент без контенту, тільки з класом, назвою і тд
// title.after(cloneTextElement) // елемент вставився але він пустий

// const cloneTextElement = textElement.cloneNode(true) // копіює з контентом всередині
// title.after(cloneTextElement) // вставить з усім контентом

//=============================================================================================
// щоб удалити елемент треба:
// textElement.remove()


//=============================================================================================
//метод className
// const listElement = document.querySelector('.li-item')
// const classNameElement = listElement.className
// console.log(classNameElement) // Виводить усі класи цього елемента
// listElement.className = 'red' // щоб змінити пишем так
// але такий спосіб повністю змінює всю назву класса, тому краще використати наступинй спосіб

//=============================================================================================
// метод classList
// const listElement = document.querySelector('.li-item')

// listElement.classList.add('active') // добавляє класс
// listElement.classList.remove('active') // видаляє класс
// listElement.classList.toggle('active') // якщо такий клас є то видаляє його, якщо нема то добавляє
// listElement.classList.contains('active') // перевіряє чи такий класс є, виводить буліан значення


//на практиці
// listElement.classList.add('active')
// if (listElement.classList.contains('active')) {
//   console.log('i have class - active :)')
// } else {
//   console.log('i have not this class :(')
// }

//Ми можемо перечислити усі класи задопомогою for, of
// for (let className of listElement.classList) {
//   console.log(className)
// }
//Виводить усі класи до елемента
//Краще використовувати цей спосіб чи через style

//=============================================================================================

//style в JS

// const listElement = document.querySelector('.li-item')
// listElement.style.color = 'red'
// listElement.style.fontSize = '20px'

// listElement.style.marginBottom = '' // обнуляє стиль

//Також э метод cssText, де ми записуємо звичний для нас css код, але мінус такого методу те, що він обнуляє всі стилі які біли до цього, і ставить тільки те, що ми написали
// listElement.style.cssText = `
// margin-left:200px;
// color:blue;
// font-size:40px;
// transition:.2s;
// `

//=============================================================================================
//Ми можемо звернутись до будь якого значення style, але якщо його не існує то виведе в консоль пустоту, щоб це змінити є метод :
// const textElement = document.querySelector('.text')
// const computedStyleElement = getComputedStyle(textElement)
// console.log(computedStyleElement.fontFamily)
// console.log(computedStyleElement.color)
// console.log(computedStyleElement.fontSize)

// //Також можемо отримати стилі псевдоелементів befote, after
// const computedStyleElementBefore = getComputedStyle(textElement, "::before")
// console.log(computedStyleElementBefore.backgroundColor)
// const computedStyleElementAfter = getComputedStyle(textElement, "::after")
// console.log(computedStyleElementAfter.backgroundColor)
//уей метод виконується тільки для читання, змінити через ньго стилі ми не можемо

//=============================================================================================
//=============================================================================================
// КРАЩЕ ВИКОРИСТОВУВАТИ МЕТОД ДОБАВЛЕННЯ КЛАССІВ А НЕ МЕТОД STYLE, ТІЛЬКИ В РІДКІСНИХ МОМЕНТАХ, НАПРИКЛАД ДЛЯ ЗАДДАННЯ КООРДИНАТІВ І ТД
//=============================================================================================
//=============================================================================================

//Ми також можемо знайти усі властивості якого елементу для цоього:
// const header = document.querySelector('h1')
// const btn = document.querySelector('button')

// // console.log(header.href)
// // console.log(btn.name)

// // //щоб побачити усі властивості
// // console.dir(header)
// // console.dir(btn)

// header.hasAttribute('name')//перевіряє чи є така властивість в вигляді буліан значення
// header.getAttribute('name')// отримуємо значення атрибуту
// header.setAttribute('name', 'href') // добавляє властивіть('назва властивості','будь яке імя')
// header.removeAttribute('name') // видаляє атрибут

// //Практика

// header.setAttribute('some-atribute', 'privet')
// if (header.hasAttribute('some-atribute')) {
//   console.log('true')
// }

// btn.setAttribute('id', '123')
// console.log(btn.getAttribute('id'))

// btn.id = '322'
// console.log(btn.getAttribute('id')) //getAtribute змінюється після того як ми його змінили id

// //Нестардатні атрибути
// console.log(header.dataset.size)

// header.dataset.size = '5051'
// console.log(header.dataset.size)
// // якщо імя скзалається з кількох слів (data-size-value-) то пишемо як CamelCase (header.dataset.sizeValue)

// //Цікаві властивості
// console.log(header.tagName) //виводить назву тегу, якщо наприклад забув як пишеться

// header.hidden = true // ховає елемент з сторінки
// console.log(header.hidden) // виводить тру або фолс

//=============================================================================================
