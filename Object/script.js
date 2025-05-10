// Напишіть код, виконавши завдання з кожного пункту окремим рядком:

// Створіть порожній об’єкт user.
// Додайте властивість name зі значенням Іван.
// Додайте властивість surname зі значенням Сміт.
// Змініть значення name на Петро.
// Видаліть властивість name з об’єкта.

// let user ={};
// user.name = "Ivan";
// user.surname ="Smit";
// user.name ="Petro";
// delete user.name;
// console.log(user);

// -----------------------------------------------------------------------------------------------------

// Напишіть функцію isEmpty(obj), яка повертає true, якщо об’єкт не має жодної властивості, інакше false.

// let object={};
//  function isEmpty(obj){
//     for (let key  in obj){
//         return false
//     }
//     return true
//  };

// console.log(isEmpty(object));

// -----------------------------------------------------------------------------------------------------

// У нас є об’єкт для зберігання заробітної плати нашої команди:
// Напишіть код для підсумовування всіх зарплат і збережіть у змінній sum. 
// Якщо об’єкт salaries порожній, то результат має бути 0.

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }
//   let sum =0;

//   for(let key in salaries){
//     sum += salaries[key]
//   }

//   console.log(sum);

// -----------------------------------------------------------------------------------------------------

// Створіть функцію multiplyNumeric(obj), яка примножує всі числові властивості об’єкта obj на 2.

// let menu = {
//     width: 200,
//     height: 300,
//     title: "Моє меню"
//   };

//   function multiplyNumeric(obj){
//     for(let key in obj){
//         if (typeof obj[key] === "number"){
//             obj[key] *=2
//         }
//     }
//     return obj
//   }
//   console.log(multiplyNumeric(menu))

// -----------------------------------------------------------------------------------------------------

// Скопіюйте обєкт 

// let user = {
//     name: "Микола",
//     age: 30
//   };
  
//   let clone = Object.assign({}, user);
//   console.log(user , clone)

// -------------------------------------------------------------------------------------

// Створіть об’єкт calculator з трьома методами:

// read() запитує два значення та зберігає їх як властивості об’єкта з іменами a та b відповідно.
// sum() повертає суму збережених значень.
// mul() множить збережені значення і повертає результат.

// let calculator ={
//     read(){
//         this.a = +prompt("enter a")
//         this.b = +prompt("enter b")
//     },
//     sum(){
//         return this.a +this.b
//     },
//     mul(){
//         return this.a  * this.b
//     },
// };
// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());


// --------------------------------------------------------------------------------------------------
// Приклад об'єкта
const person = {
    name: "Max",
    age: 25,
    job: "Developer"
  };
  
  // Object.keys() - повертає масив ключів
  console.log(Object.keys(person)); // ["name", "age", "job"]
  
  // Object.values() - повертає масив значень
  console.log(Object.values(person)); // ["Max", 25, "Developer"]
  
  // Object.entries() - повертає масив пар ключ-значення
  console.log(Object.entries(person)); 
  // [["name", "Max"], ["age", 25], ["job", "Developer"]]
  
  // Object.hasOwn() - перевіряє чи властивість є ВЛАСНОЮ (не з прототипу)
  console.log(Object.hasOwn(person, "name")); // true
  console.log(Object.hasOwn(person, "toString")); // false
  
  // Object.assign() - копіює властивості
  const copiedPerson = Object.assign({}, person);
  console.log(copiedPerson); // { name: "Max", age: 25, job: "Developer" }
  
  // Object.freeze() - заморожує об'єкт
  Object.freeze(person);
  person.age = 30; // НЕ зміниться, бо об'єкт заморожений
  console.log(person.age); // 25
  
  // Object.seal() - забороняє додавати/видаляти властивості, але дозволяє змінювати існуючі
  const car = { brand: "Toyota", year: 2020 };
  Object.seal(car);
  car.year = 2021; // Можна змінити
  car.model = "Corolla"; // НЕ додасться
  console.log(car); // { brand: "Toyota", year: 2021 }
  
  // Object.create() - створює новий об'єкт з певним прототипом
  const proto = { greet() { console.log("Hello"); } };
  const user = Object.create(proto);
  user.name = "Anna";
  user.greet(); // Hello
  
  // Object.getPrototypeOf() - отримує прототип об'єкта
  console.log(Object.getPrototypeOf(user)); // { greet: [Function: greet] }

