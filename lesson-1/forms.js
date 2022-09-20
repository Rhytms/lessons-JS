//Властивості та методи форм
// console.log(document.forms)//виводить усі форми на сторінці
// console.log(document.forms[0])
// console.log(document.forms.main)//можна шукати по імені
//Можемо також шукати форми по querySelectorAll але в такому випадку буде нежива функція, і якщо ми захочемо добавити нову форму черех js то вона всерівно виведе стару форму
//тому краще користуватись document.forms

//==============================================================================================
//Елементи форм
// const mainForms = document.forms.main
// // console.log(mainForms.elements) // викликає список усіх елементів всередині цієї форми

// //щоб отримати один елемент з цієї форми потрібно викликати через імя форми:
// const mainFormsItem = mainForms.nameInput
// console.log(mainFormsItem)
// const mainFormsRadioButton = mainForms.nameRadio
// console.log(mainFormsRadioButton) // виводить усе під цим іменем

// //щоб отримати доступ від елементу під цим іменем до батьківського елементу то
// console.log(mainFormsRadioButton.form)


//Значення інпут елементів можна отримати через value(string), checked(boolean)
// const mainForm = document.forms.main
// const formItemInput = mainForm.nameInput
// const formItemTextarea = mainForm.nameTextarea
// const formItemRadio = mainForm.nameRadio

// const mainChecker = mainForm.nameCheck

// const mainFormFile = mainForm.nameFile

// console.log(formItemInput.value)
// console.log(formItemTextarea.value)
// //Виводить значення value або якщо це текстареа то виводить значення того, що там написано

// formItemInput.value = 'Hello'
// formItemTextarea.value = 'Some text hello'//так можна змінити value

// console.log(formItemRadio[0].value)
// console.log(formItemRadio[1].value)
// console.log(formItemRadio[0].checked)
// console.log(formItemRadio[1].checked)
//отримати значення поля типу радіо
//Щоб змінити значення треба
// formItemRadio[0].value = 'left'
// formItemRadio[1].checked = true

// console.log(mainChecker.value)
// console.log(mainChecker.checked)
//отримати значення поля типу checkbox
// mainChecker.value = 'blue'
// mainChecker.checked = true

// console.log(mainFormFile.value)
//отримати значення поля типу file
//тут ми не можемо змінити значення value, можемо тільки очистити придавши '' пустоту

// const mainFormSelected = mainForm.nameSelect
//Отримати усі опції
// console.log(mainFormSelected.options)
// //Отримати індекс вибраного айтему
// const selectedOption = mainFormSelected.selectedIndex
// console.log(selectedOption)//вивело 0 томущо в [0] айтемі стоїть selected
// //Отримати значення вибраного айтему
// const selectedValue = mainFormSelected.value
// console.log(selectedValue)
// //Отримати текст вибраного айтему
// const selectedText = mainFormSelected.options[selectedOption].text
// console.log(selectedText)

//Якщо ми хочемо керувати та змінювати данні то
// mainFormSelected.options[1].selected = true // тепер буде вибраний 1 елемент по індексу
// mainFormSelected.selectedIndex = 1 // також змінює елемент який буде відображатись
// mainFormSelected.value = 3 // точно те саме, де число це номер елемента від 1 до ...

//Щоб добавити нову опцію то потрібно
// new Option(text, value, defaultSelected, selected)
// text - значення любе
// value - під яким номером по порядку
// defaultSelected - якщо true то добавляє selected в html код
// selected - якщо true то буде виводитись як ніби по замовчуванням
// а потім написати mainFormSelected.append(назву нашої опції)

// let newOptions = new Option('100', '4', true, true)
// mainFormSelected.append(newOptions)

// //мультивибір створюєтсья якщо в html коді добавити до форми multiple, і тепер selected можна приписати не лише один раз, щоби відобразити усі елементи які були вибрані на сайті в цій формі потрібно:

// let allSelectedOptions = Array.from(mainFormSelected)
//   .filter(option => option.selected)
//   .map(option => option.value)

// console.log(allSelectedOptions)
  //цей метод виводить value опцій які були вибрані, в нашому випадку це (1,4)
  //але ми також можемо виводити index опції, для цього треба замінити або добавити замість value -> index


//==============================================================================================
//Події форм та їх елементів
//Фокусировка focus && blur
//focus дається коли ми натискаємо мишкою або табом і тд
//blur це коли фокусування спадає

// const mainForm = document.forms.main
// const formInput = mainForm.nameInput

// const formInputPlaceholder = formInput.placeholder

// formInput.addEventListener('focus', (e) => {
//   formInput.placeholder = ''
// })
// formInput.addEventListener('blur', (e) => {
//   formInput.placeholder = formInputPlaceholder
// })
//ця функція при отримані фокусі обнуляє placeholder а якщо фокус пропаде, то повертає його як зміну

//Нажаль фокус підтримують не усі елементи, це можуть лише кнопки, інпути різні і тд, а таке як діви, хедери - ні. Щоб це змінити потрібно в html коді добавляти tabindex, чим менше число, тим скоріше кнопка Tab зможе його вибрати (але від 1), тобто 1 - самий перший все далі потім

//Якщо ввести tabindex="0", то такий елемент буде нарівні кнопками і тд, але він буде ставитись після тих у кого tabindex => 1

//tabindex="-1" позволяє фокусуватись лише програмно, тобто Tab фокус працюввати не буде, але через js код ми можемо його сфокусувати
//Наприклад добавимо до діва фокус:
// const lesson = document.querySelector('.lesson')
// lesson.addEventListener('focus', () => {
//   lesson.classList.add('_focus')
//   console.log('div елемент в фокусі')
// })
// lesson.addEventListener('blur', () => {
//   lesson.classList.remove('_focus')
// })

//методи focusin / focusout
// const mainForm = document.forms.main

// mainForm.addEventListener('focus', () => {
//   mainForm.classList.add('_active')
// },{'capture':true})
// //щоби отримати фокус до елементу ми можемо добавити {'capture':true}, який візьме в фокус при виборів дочернього елементу в цій формі
// mainForm.addEventListener('focusin', () => {
//   mainForm.classList.add('_active')
// })//Або використуємо focusin, так також все буде працювати

//Подія change
//change спрацьовує при закінченні змінювання елементу
//В таких елементах як inpute text, textarea працює як (blur) але в checkbox,radiobutton,select працює зразу

// const mainForm = document.forms.main
// const formInput = mainForm.nameInput
// const formSelect = main.nameSelect
// const formFile = main.nameFile

// formInput.addEventListener('change', () => {
//   console.log(`Спрацювало change в input`)
// })
// formSelect.addEventListener('change', () => {
//   console.log(`Спрацювало change в select`)
// })
// formFile.addEventListener('change', () => {
//   console.log(`Спрацювало change в file`)
// })


//Подія input
//Спрацьовує кожен раз при зміні значення поля

// const mainForm = document.forms.main
// const formInput = mainForm.nameInput

// formInput.addEventListener('input', () => {
//   console.log(`value: ${formInput.value}`)
// })
//ця функція виводить в консоль все що змінюється в полі інпут, корисна дуже штука

//Події cut,paste,copy

// const mainForm = document.forms.main
// const formInput = mainForm.nameInput

// mainForm.addEventListener('cut', () => {
//   console.log('Вирізаємо')
// })
// mainForm.addEventListener('copy', () => {
//   console.log('Копіюємо')
// })
// mainForm.addEventListener('paste', () => {
//   console.log('Вставляємо')
// })
//ця методи спрацбовують при сочетанії клаввіш Ctrl + Z (вирізати), Ctrl + C (копіюємо), Ctrl + V(вставляємо), або задопомогою правої кнопки миші

//Метод submit - відправка форми

// const mainForm = document.forms.main
// const formInput = mainForm.nameInput

// formInput.addEventListener('submit', (event) => {
//   console.log('Форма відправляється')
//   if (!formInput.value) {
//     console.log('Поле input не заповнене')
//     event.preventDefault()
//   }
// })

//==============================================================================================

//На практиці
// const mainForm = document.forms.main
// const formInput = mainForm.nameInput

// formInput.addEventListener('submit', (event) => {
//   if (emailTest(formInput)) {
//     formInput.parentElement.insertAdjacentHTML(
//       'beforeend',
//       `<div class="main-form__error">
//       Введіть email
//       </div>`
//     )
//     event.preventDefault()
//   }
// })

// formInput.addEventListener('focus', (event) => {
//   if (formInput.nextElementSibling) {
//     formInput.nextElementSibling.remove()
//   }
// })

// function emailTest(input) {
// 	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
// }


//Виведення того фото, яке ти вибрав щоб завантажити на сайт
// const mainForm = document.forms.main;
// const mainFormFile = mainForm.nameFile;

// mainFormFile.addEventListener("change", function (e) {
// 	let selectedFile = mainFormFile.files[0];

// 	// Получаем URL изображения
// 	let fileUrl = URL.createObjectURL(selectedFile);

// 	mainFormFile.parentElement.insertAdjacentHTML(
// 		"beforeend",
// 		`<div class="main-form__image">
// 			<img alt="" title="${selectedFile.name}" src="${fileUrl}">
// 		</div>`
// 	);
// });










//==============================================================================================
//Тепер ми можемо покращити наш текстареа, який вичисляє скільки доступно символів для цього змінюємо keyup на input, а keydown, томущо input сприймає усі зміни, навіть якщо кнопка зажата
// const txtItem = document.querySelector('.text-area textarea')
// const txtItemLimit = txtItem.getAttribute('maxlength')
// const textCounter = document.querySelector('.area-span span')
// textCounter.innerHTML = txtItemLimit

// txtItem.addEventListener('input', setCounterSpan)
// // txtItem.addEventListener('keyup', setCounterSpan)
// // txtItem.addEventListener('keydown', (event) => {
// //   if(event.repeat) setCounterSpan()
// // })//ця друга функція допомагає при зажатті кнопки, так вона буде підраховувати навіть якщо зажмемо, бо без нього вона буде підраховуватись тільки після віджаття клавіші


// function setCounterSpan(){
//   const txtCounetResult = txtItemLimit - txtItem.value.length
//   textCounter.innerHTML = txtCounetResult
// }
//==============================================================================================



