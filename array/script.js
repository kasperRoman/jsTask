//  1. forEach()
// Виконує функцію для кожного елемента (нічого не повертає).
// let arr = [1, 2, 3];
// arr.forEach(function(item, index) {
//   console.log(`Елемент: ${item}, Індекс: ${index}`);
// });


//  2. map()
// Створює новий масив із результатів виклику функції.
// let arr = [1, 2, 3];
// let squared = arr.map(x => x * x);
// console.log(squared); // [1, 4, 9]


//  3. filter()
// Створює новий масив лише з елементів, які відповідають умові.
// let arr = [5, 12, 8, 130, 44];
// let bigNumbers = arr.filter(x => x > 10);
// console.log(bigNumbers); // [12, 130, 44]


//  4. reduce()
// Акумулює значення в одне (наприклад, підрахунок суми):
// let numbers = [1, 2, 3, 4];
// let sum = numbers.reduce((acc, val) => acc + val, 0);
// console.log(sum); // 10


//  5. find()
// Повертає перший елемент, що відповідає умові:
// let users = [{name: "Ivan"}, {name: "Oksana"}];
// let user = users.find(u => u.name === "Oksana");
// console.log(user); // {name: "Oksana"}


//  6. some()
// Чи є хоч один елемент, що задовольняє умову:
// let nums = [1, 2, 3, 4];
// let hasEven = nums.some(x => x % 2 === 0);
// console.log(hasEven); // true


//  7. every()
// Чи всі елементи відповідають умові:
// let nums = [2, 4, 6];
// let allEven = nums.every(x => x % 2 === 0);
// console.log(allEven); // true


// ➕ 8. push()
// Додає елемент у кінець:
// let arr = [1, 2];
// arr.push(3);
// console.log(arr); // [1, 2, 3]


//  9. splice()
// Видаляє або додає елементи в масив:
// let arr = [1, 2, 3, 4];
// arr.splice(1, 2); // Видалити 2 елементи з індексу 1
// console.log(arr); // [1, 4]


//  10. sort()
// Сортує масив (будьте обережні — змінює оригінальний масив!):
// let arr = [5, 2, 9, 1];
// arr.sort((a, b) => a - b);
// console.log(arr); // [1, 2, 5, 9]

// ---------------------------------------------------------------------------------------------------------------------------------------------
// Вивести кожен елемент масиву на екран з повідомленням Елемент: значення.
// const fruits = ['apple', 'banana', 'cherry'];
// fruits.forEach(fruit =>{
//     console.log(`Element: ${fruit}`)
// })

// Створи новий масив, у якому всі числа помножені на 2
// const numbers = [1, 2, 3, 4];
// let newNumbers = numbers.map(number => number*2);
// console.log(numbers)
// console.log(newNumbers)


// Отримай масив тільки парних чисел.
// const nums = [1, 2, 3, 4, 5, 6];
// let EvenNums = nums.filter(num=>num %2 ===0);
// console.log(EvenNums)

// Знайди перше число більше 10.
// const nums = [5, 12, 8, 130, 44]
// let bigNums = nums.find(num =>num>10);
// console.log(bigNums)


//  Знайди суму всіх елементів масиву.
// const values = [10, 20, 30];
// let sum = values.reduce((accum , value)=>accum+value ,0)
// console.log(sum);

// Перевір, чи є хоча б одне від’ємне число.
// const nums = [1, -2, 3, 4];
// let  negativeNumber = nums.some(num=> num<0);
// console.log(negativeNumber)

// Перевір, чи всі числа в масиві більші за 0.
// const nums = [1, 2, 3, 4];
// let positiveNums = nums.every(num =>num>0);
// console.log(positiveNums)

// Відсортуй масив чисел у порядку зростання.
// const numbers = [5, 1, 8, 3];
// let sortNumbers = numbers.sort((a,b)=>a-b);
// console.log(sortNumbers)

// Додай новий елемент у масив і виведи нову довжину.
// const colors = ['red', 'green'];
// colors.push('yellow');
// console.log(colors.length)

// Перевір, чи є в масиві елемент 'banana'.
// const fruits = ['apple', 'banana', 'cherry'];
// console.log(fruits.includes('banana'))


// Знайди всіх повнолітніх користувачів, відсортуй їх за віком у спадаючому порядку, і виведи масив їх імен.
// const users = [
//   { name: "Anna", age: 25 },
//   { name: "Bohdan", age: 17 },
//   { name: "Olena", age: 31 },
//   { name: "Max", age: 14 }
// ];
// let adultUsers = users.filter(user=> user.age >=18);
// let sortAdultUsers = adultUsers.sort((a,b) =>b.age - a.age);
// let result =sortAdultUsers.map(user =>user.name);
// console.log(result)

// Обчисли загальну вартість усіх замовлень (price × quantity), а також поверни масив назв товарів, у яких загальна сума замовлення більше 20 грн.
// const orders = [
//   { product: "Book", price: 15, quantity: 2 },
//   { product: "Pen", price: 3, quantity: 10 },
//   { product: "Notebook", price: 7, quantity: 4 }
// ];

// const total = orders.reduce((sum, item) => sum + item.price * item.quantity, 0);
// const filteredProducts = orders
//   .filter(item => item.price * item.quantity > 20)
//   .map(item => item.product);
//   console.log(total);
//   console.log(filteredProducts)

//  Знайди всі слова, що починаються з літери "a", і поверни масив цих слів, де кожне слово написане з великої літери
// const strings = ["apple", "banana", "avocado", "kiwi", "apricot"];
// const result = strings
//   .filter(word => word.startsWith("a"))
//   .map(word => word[0].toUpperCase() + word.slice(1));

// console.log(result);



// Перевір, чи всі оцінки більші за 50.
// Чи є хоча б одна оцінка менша за 60.
// Заміни всі оцінки менші за 60 на "не склав".
// const grades = [92, 87, 75, 68, 54, 89];
// const gradesOver50 = grades.every(grade=> grade >50);
// console.log(gradesOver50) ;
// const anyBelow60 =grades.some(grade =>grade <60);
// console.log(anyBelow60);
// const updatedGrades = grades.map(grade => (grade < 60 ? 'не склав' : grade));
// console.log(updatedGrades);


// Напиши функцію, яка повертає масив лише з унікальними числами, використовуючи filter та indexOf.
// const numbers = [3, 4, 5, 3, 2, 4, 7, 8, 7];
// const unique = numbers.filter((number , index , array)=> array.indexOf(num) === index);
// console.log(unique);
// Метод indexOf() шукає першу появу елемента у масиві та повертає його індекс. Якщо елемент не знайдено, повертає -1.

// З масиву об'єктів товарів поверни масив назв товарів, ціна яких менше 100, і відсортуй їх за алфавітом.
// const products = [
//   { name: "Phone", price: 300 },
//   { name: "Pen", price: 5 },
//   { name: "Notebook", price: 20 },
//   { name: "Mouse", price: 50 }
// ];
// const resolt = products.filter(product =>product.price <100)
//                        .map(product => product.name)
//                        .sort();