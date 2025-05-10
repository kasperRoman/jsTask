// Наступна функція повертає true, якщо параметр age більший за 18.
// Інакше вона запитує підтвердження через confirm і повертає його результат:

// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Батьки дозволили?');
//     }
// }
// Перепишіть функцію, щоб вона робила теж саме, але без if і в один рядок.
// Зробіть два варіанти функції checkAge:

// Використовуючи оператор ?
//     Використовуючи оператор АБО ||

//         function checkAge(age) {
//             return (age > 18) ? true : confirm('Бфтьки дозволили?')
//         }
// const checkAge = age => (age > 18) ? true : confirm('Бфтьки дозволили?');
// const checkAge = age => (age > 18) || confirm('Бфтьки дозволили?');

// ---------------------------------------------------------------------------------------
//     Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.
// function min(a, b) {
//     if (a < b) {
//         return a
//     } else {
//         return b
//     }
// }
// const min = (a, b) => (a < b) ? a : b;
// console.log(min(12, 5))


// -----------------------------------------------------------------------
//     Замініть Функціональні Вирази на стрілкові функції у коді нижче:
// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
// }

// ask(
//     "Ви згодні?",
//     function () { alert("Ви погодились."); },
//     function () { alert("Ви скасували виконання."); }
// );

// const ask = (question, yes, no) => (confirm(question)) ? yes() : no();
// ask(
//     "Do you agree?",
//     () => console.log("you agree"),
//     () => console.log("you disagree")
// );

