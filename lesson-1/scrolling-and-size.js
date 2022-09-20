// const mainElement = document.documentElement // фактично звертаємлсь до сторінки
// const mainElementHeight = mainElement.clientHeight // Висота видимого вікна брауера
// const mainElementWidth = mainElement.clientWidth // ширина видимога вікна браузера

// console.log(`Heigth - ${mainElementHeight} px`)
// console.log(`Width - ${mainElementWidth} px`)

// const innerElementHeight = window.innerHeight // висота вікна з зайвими елементами, наприклад полоса прокрутки
// const innerElementWidth = window.innerWidth // ширина елемента також з зайвими елементами

// console.log(`Inner Height - ${innerElementHeight} px`)
// console.log(`Inner Width - ${innerElementWidth} px`)

// //Щоби дізнатись всю висоту так ширину документа потрібно використовувати такий спосіб:

// let maxWidthDocument = Math.max(
//   document.documentElement.clientWidth, document.body.clientWidth,
//   document.documentElement.offsetWidth, document.body.offsetWidth,
//   document.documentElement.scrollWidth, document.body.scrollWidth,
// )

// let maxHeightDocument = Math.max(
//   document.documentElement.clientHeight, document.body.clientHeight,
//   document.documentElement.offsetHeight, document.body.offsetHeight,
//   document.documentElement.scrollHeight, document.body.scrollHeight,
// )

// console.log(`Max Height - ${maxHeightDocument}`)
// console.log(`Max Width - ${maxWidthDocument}`)

//==============================================================================================
//Вчимось виводити кількість прокрутки

// const windowScrollTop = window.scrollY
// const windowScrollLeft = window.screenX

// console.log(windowScrollTop)
// console.log(windowScrollLeft)

//==============================================================================================
//Як керувати скролом сторінки
// const btnScrollBy = document.querySelector('.scroll-by')
// const btnScrollTo = document.querySelector('.scroll-to')
// const btnScrollOptions = document.querySelector('.scroll-options')

// btnScrollBy.addEventListener('click', () => {
//   window.scrollBy(0, 50)
//   const positionY = window.scrollY
//   console.log(positionY)
// })
// //метод scrollBy буде прокручуваит сторінку кожен раз на 50 пікселей

// btnScrollTo.addEventListener('click', () => {
//   window.scrollTo(0, 50)
//   const positionY = window.scrollY
//   console.log(positionY)
// })
// //Метод scrollTo прокручує завжди від 0 до 50, тобто скільки би разів не нажімати завжди буде максимум прокрутки на 50 пікселей від 0

// btnScrollOptions.addEventListener('click', function scrollToOptions() {
//   window.scrollTo({
//     top: 300,
//     left: 0,
//     behavior:'smooth' //не працює в хромі :(
//   })
// })
//Метод scrollToOptions не працює на Сафарі, тому бажано його не виористовувати, в мене чомусь ця функцыя не працювала
//==============================================================================================
//метод ScrollIntoView, дозволяє прокрутити сторінку браузера до певного елемента

// const btnIntoView = document.querySelector('.scroll-into__view')
// btnIntoView.addEventListener('click', (top) => {
//   const decoration = document.querySelector('.decoration')
//   decoration.scrollIntoView(top)
// })
// //скролить сторінку доки верхній край цього елемента не буде в верху сторінки

// const btnIntoViewFalse = document.querySelector('.scroll-into__false')
// btnIntoViewFalse.addEventListener('click', () => {
//   const decoration = document.querySelector('.decoration')
//   decoration.scrollIntoView(false)
// })
// //якщо в методі вказати не top a false до прокручую доки нижні края не будуть в низу сторінки

// const btnIntoViewOptions = document.querySelector('.scroll-into__option')
// btnIntoViewOptions.addEventListener('click', () => {
//   const decoration = document.querySelector('.decoration')
//   decoration.scrollIntoView({
//     behavior: 'smooth',//не працює в хромі :(
//     block: 'center',//як ми хочемо щоб розміщався елемент
//     inline:'nearest'
//   })
// })
// //також можна додавати повні обєкти, але не працює в сафарі

// //якщо ми наприклад захочемо забрати можливість прокрутки сайту, все це робиться через overflow:hidden в css, нам треба через togle добавити або удалити класс
// const btnBodyAllow = document.querySelector('.scroll-allow')
// btnBodyAllow.addEventListener('click', () => {
//   document.body.classList.toggle('allow')
// })

//==============================================================================================
//Розбір усіх величин

// let blockItem = document.querySelector('.block-item')
// const offSetBlockItem = blockItem.offsetParent //шукаємо батьківський елемент, найшло блок через те що ми прописали position:relative, по змовчуванню це body

// console.log(offSetBlockItem)

// const offSetTop = blockItem.offsetTop//це відстань від батьківського елементу до початку цього елементу
// const offSetLeft = blockItem.offsetLeft//це відстань від батьківського елементу до початку цього елементу
// console.log(`offsetTop: ${offSetTop}, offsettLeft: ${offSetLeft}`)

// const offSetHeight = blockItem.offsetHeight
// const offSetWidth = blockItem.offsetWidth
// console.log(`offsetHeight: ${offSetHeight}, offsettWidth: ${offSetWidth}`)//Виводить розміри нашого обєкту, які ми вказували або ні в css коді, виведе правильно тільки при box-sizing: border-box

// const blockItemClientTop = blockItem.clientTop
// const blockItemClientLeft = blockItem.clientLeft
// console.log(`ClientTop: ${blockItemClientTop}, ClientLeft: ${blockItemClientLeft}`)//виводить відступи внутрішньої частини від зовнішньої, якщо наприклад скролл буде в лівій частині(на арабський сайтаї і тд) то розмір буде більшей, бо буде враховуватись ще панель скрола

// const blockItemClientHeight = blockItem.clientHeight
// const blockItemClientWidth = blockItem.clientWidth
// console.log(`ClientHeight: ${blockItemClientHeight}, ClientWidth: ${blockItemClientWidth}`)// виведе загальні розміри нашого блока (height = 300-20-20 = 260px)(width=500-20-20-17(scroll)=443)два рази віднімаєм 20 томущо бордери з обох сторін

// const blockItemScrollHeight = blockItem.scrollHeight
// const blockItemScrollWidth = blockItem.scrollWidth
// console.log(`ScrollHeight: ${blockItemScrollHeight}, ScrollWidth: ${blockItemScrollWidth}`)//виводить значення висот та ширин вже повного контенту, тобто наприклад, вираховує висоту скритого оверфловом контенту, в нашому випадку виведе не 300 як вказано а 572, ширина не зміниться томущо оверфлов тільки по у

// // blockItem.scrollTop = 150
// const blockItemScrollTop = blockItem.scrollTop
// const blockItemScrollLeft = blockItem.scrollLeft
// console.log(`ScrollTop: ${blockItemScrollTop}, ScrollLeft: ${blockItemScrollLeft}`)//показує наскільки ми прокрутили наш блок, по х це 0, бо немає скрола, по у виведе 150, томущо ми так вказали

// // scrollBy,scrollTo - будут процювати не лише до браузера, а до усіх елементів в яких є прикрутка

//==============================================================================================

//координати
//бувають два типи, відносно вікна браузера, працює як position:fixed, принято позначати clientY,clientX
//Або відносно документа, схоже на position:absolute, принято позначати pageYm pageX

// const item = document.querySelector('.some-content')
// const itemCoord = item.getBoundingClientRect()//викликає інфу про розміри та положення обєкта
// console.log(itemCoord)

// //також можемо отримати значення не всьгго елементу а лише певної сторони наприклад:
// const itemCoordLeft = item.getBoundingClientRect().left//можемо вписувати: top,left,right,bottom,x,y,width,height і тд
// //значення top,left пожуть змінюватись в залежності від того наскільки ми опустились або піднялись скролом
// console.log(itemCoordLeft)

// //Другий спосіб, відносно документа
// //так само використовуємо getBoundingClientRect, але:
// const itemCordTop = item.getBoundingClientRect().top
// const itemCordTopDocument = itemCoordLeft + window.scrollY

// console.log(itemCordTop)
// console.log(itemCordTopDocument)


// //Якщо нам потрібно знайти елемент по відомим координатам:
// const someElement = document.elementFromPoint(100, 100)//метод(х,у)
// //ці документи відносні вікна браузера, якщо проскролити нижче то буде інший елемент
// console.log(someElement)

// //міні задачка
// setInterval(() => {
//   if (document.documentElement.scrollTop < 1000) {
//     document.documentElement.scrollTop += 100
//     console.log(document.documentElement.scrollTop)
//   }
// }, 500)
