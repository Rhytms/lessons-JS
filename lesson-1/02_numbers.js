//Number
// const pow = 10e5
// console.log(pow)
// console.log(Math.pow(2, 53)-1)
// console.log(Number.MIN_SAFE_INTEGER, 'MIN_SAFE_INTEGER')
// console.log(Number.MAX_SAFE_INTEGER, 'MAX_SAFE_INTEGER')
// console.log(Number.MIN_VALUE, 'MIN_VALUE')
// console.log(Number.MAX_VALUE, 'MAX_VALUE')
// console.log(Number.POSITIVE_INFINITY, 'POSITIVE_INFINITY')
// console.log(Number.NEGATIVE_INFINITY, 'NEGATIVE_INFINITY')
// console.log(Number.EPSILON, 'EPSILON')
// console.log(Number.NaN, 'Not A Number')
// const weird = 2 / undefined
// console.log(Number.isNaN(weird),'Чи це число NaN - (2/undefined)')
// console.log(isNaN(42),'Чи це число NaN - (42)')
// console.log(Number.isFinite(Infinity),'Чи це число бескінечне - (Infinity)')
// console.log(isFinite(42),'Чи це число бескінечне - (42)')


// const stringInt = '42'
// const stringFloat = '42.42'
// console.log(parseInt(stringInt) + 2, 'Перетворюємо рядок в число (ціле) - (Number.parseInt or +stringInt)')
// console.log(+stringFloat + 2.22,'Перетворюємо рядок в число (не ціле) - (Number.parseFloat or stringFloat)')

// console.log(0.4 + 0.2, '0.0.6000000000000001 - not right')
// console.log((2 / 5) + (1 / 5), '0.6000000000000001 - not right')
// console.log((0.4+0.2).toFixed(1),'Задопомогою .toFixed - скільки знаків після коми, але перетворює в рядок')
// console.log(parseFloat((0.4+0.2).toFixed(1)),'Якщо перед цим поставити parseFloat то все буде ок')



//BigInt
// console.log(99161604234582853152261, 'type - number')
// console.log(99161604234582853152261n, 'type - bigint')
// console.log(901n - 9n), 'з bigint можуть працювати числа тільки типу bigint'
// // console.log(99161604252.261n) error
// // console.log(901n - 9) error
// console.log(10n - BigInt(4),'6n but bigint')


//Math
// console.log(Math.E, 'Епсілант')
// console.log(Math.PI, 'Пі')
// console.log(Math.sqrt(25), 'корінь')
// console.log(Math.pow(2, 10), 'степінь')
// console.log(Math.abs(-42), 'модуль')
// console.log(Math.max(2,52,1,62,24,86),'max')
// console.log(Math.min(2, 52, 1, 62, 24, 86), 'min')
// console.log(Math.floor(4.9),'Округлює завжди в меншу сторону, навіть 4.9')
// console.log(Math.ceil(4.1), 'Округлює завжди в більшу сторону, навіть 4.1')
// console.log(Math.round(4.5), 'заокруглює до найближчого числа(4.4->4, 4.6->5')
// console.log(Math.trunc(4.4),'забирає усі знаки після коми')
// console.log(Math.random()); //рандомні числа

//Example

// function getRandowNumber(min, max) {
//   return Math.random() * (max - min) + min
// }
// console.log(getRandowNumber(11, 42));
// console.log(parseInt(getRandowNumber(11, 42)))

function getRandowNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}
console.log(getRandowNumber(1, 100));










