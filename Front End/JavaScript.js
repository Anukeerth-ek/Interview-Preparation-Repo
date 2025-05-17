// _________________________________________________________________
// 1. Explain the differences between == and ===
// ans:
// == (Loose Equality): "When using ==, JavaScript performs type coercion, so 5 == '5' evaluates to true because the string '5' is converted to the number 5 before the comparison."

// === (Strict Equality): "When using ===, no type conversion occurs, so 5 === '5' evaluates to false because the number 5 and the string '5' are of different types."
// _________________________________________________________________

// _________________________________________________________________
// 2. What is event delegation, and how does it function in JavaScript?
// ans: Event delegation is a technique in JavaScript where you attach a single event listener to a parent element instead of attaching individual
// listeners to each child element. This listener then handles events that bubble up from its descendant elements.  Event delegation in JavaScript allows you to
// efficiently manage events by attaching a single listener to a parent element and using event bubbling to handle interactions with its child elements,
// simplifying code and improving performance.
// _________________________________________________________________

// _________________________________________________________________
// 3. Explain the concept of prototypal inheritance.?
// ans:Prototype inheritance in javascript is the linking of prototypes of a parent object to a child object to share and utilize the properties of a
//  parent class using a child class. Prototypes are hidden objects that are used to share the properties and methods of a parent class with
//  child classes.
// _________________________________________________________________

// _________________________________________________________________
// 4. Differentiate between a variable that is null, undefined, or undeclared.
// ans:
// Undefined: A variable has been declared but not yet assigned a value.
// Null: A variable has been explicitly assigned a value of null, indicating an intentional absence of value.
// Undeclared: A variable that has not been declared at all and attempting to access it will result in a ReferenceError.
// _________________________________________________________________

// _________________________________________________________________
// 5. Explain the primary distinction between the Array.forEach() loop and Array.map() method, as well as when to choose one over the other.
// ans:
// Array.forEach():

// Purpose: Executes a provided function once for each array element, primarily for side effects or processing.
// Returns: undefined.
// Use Case: When you need to perform actions on each element without creating a new array.
// Array.map():

// Purpose: Creates a new array with the results of applying a provided function to each element.
// Returns: A new array with transformed elements.
// Use Case: When you need to transform each element and obtain a new array with the results.
// Use forEach() for side effects and map() for transforming data.
// _________________________________________________________________

// _________________________________________________________________
// 6. Reverse a String
// ans:
// const userName = "niveK"

// const reversedName = userName.split('').reverse().join('').toUpperCase()
// console.log(reversedName) // KEVIN
// _________________________________________________________________
// 7. Check for Palindrome
// i. 2211, 1221

// const firstNumber = "2211";
// const secondNumber = 1221;

// const resultOfFirst = secondNumber.toString().split('').reverse().join('')
// if(secondNumber == resultOfFirst){
//     console.log(`The entered input is Palindrome number`)
// }
// else console.log("The entered input is not a Palindrome number")
// _________________________________________________________________

// _________________________________________________________________

// 7. What is Closures?
// ans:
// 1. So closure is a concept in js where the inner function can access the variable from the outer function.

// for eg:

// const returnUserName = (userName) => {
//      const name = userName;
//      console.log("From outer function", userName);

//      return function innerFunction() {
//           console.log("From inner function", userName);
//      };
// };

// const innerFunction = returnUserName("Kevin");
// innerFunction();

// A closure is a function in JavaScript that "remembers" its lexical scope, even when the function is executed outside that scope. In simpler terms, a closure allows an inner function
// to retain access to variables from its outer (enclosing) function, even after the outer function has finished executing.

// Closures are created every time a function is defined, and they are a natural part of JavaScript's function scope behavior.
// _________________________________________________________________

// _________________________________________________________________
// 8. What is Map and filter in function in js?
// ans: Map function is used to manipulate or iterate an array element. Map will return new array after iterating/manipulating. And map does not change the original array.

// Filter is return the value if that value has successfully pass the condition

// const userNamesData = ["Kevin", "John", "Devin", "Peter"]
// // return the names

// const userNames = userNamesData.map((name)=> `The teams members ${name}`)
// console.log(userNames)

// const userData = [
//     {
//         name: "Kevin",
//         age: '12'
//     },
//     {
//         name: "John",
//         age: '42'
//     },
//     {
//         name: "Devin",
//         age: '37'
//     },
//     {
//         name: "Peter",
//         age: '22'
//     },
// ]

// return only users name whose age is greater than 30

// const userAgeGreaterThanThirty = userData.filter((user)=> user.age > 30).map((user)=> user.name)
// console.log(userAgeGreaterThanThirty)
// _________________________________________________________________

// _________________________________________________________________
// 9. What is Object.freeze()?
// ans:
// Consider we have an Object that should not be changed if we unknowingly assign a new value to that. It will change that value right. There comes the JavaScript property
// Object.freeze()

// By using Object.freeze() we can't modify or add new values to that Object.

// Means this will the Object immutable.

// const userDetails = {
//     name: "kevin",
//     age: '12'
// }

// Object.freeze(userDetails)
// console.log("Before", userDetails)  // { name: 'kevin', age: '12' }

// userDetails.place = "kannur"

// userDetails.name = "John"

// userDetails.name = "narayan"
// console.log("After", userDetails)  // { name: 'kevin', age: '12' }
// _________________________________________________________________

// _________________________________________________________________
// 10. What you mean by Object.seal()?
// ans: By using this will make the object immutable in some sense. We can modify the Object but we can't add new values to the object

// const userDetails = {
//     name: "kevin",
//     age : 12
// }

// console.log("Before", userDetails)

// Object.seal(userDetails)

// userDetails.age = 11

// userDetails.place = "kannur"

// console.log("After", userDetails)
// _________________________________________________________________

// 11. What is Local Storage?
// ans: Local storage in javascript is a web storage object that will allow us to store key-value of the data locally in the user's browser. It will persiste
// even if we close the browser and reopened it. Unlike the session storage which will last for the duration of a single browser session.

// * Methods of Local Storage
// -----------------------------
// 1. localStorage.setItem(key, value) = store the data to localstorage.
// 2. localStorage.getItem(key) = Retrieve item from the localstorage.
// 3. localStorge.removeItem(key) = Delete a item from the localstorage.
// 4. localStorage.clear() = Delete all items from the localstorage.
// 5. localStorage.length() = Recieve the length of the stored data.
// 6. localStorage.key(index) = Recieve the value of the specific index.

// SAMPLE EXAMPLE

// const userDetails = {
//     name: "Kevin",
//     age: 12
// }
// const { LocalStorage } = require('node-localstorage');
// // Initialize localStorage with the folder name "mystorage"
// const localStorage = new LocalStorage('./mystorage');

// localStorage.setItem('userDetails', JSON.stringify(userDetails))
// console.log(localStorage.getItem('userDetails'))
// _________________________________________________________________

// _________________________________________________________________

// 12. What is Hoisting?
// Hoisting is a JavaScript mechanism where **variable and function declarations** are moved to the top of their containing scope **during the
// compilation phase**. However, only the declarations are hoisted, not the initializations.

// ---

// ## 🚀 Hoisting Behavior

// ### 1. **Variable Hoisting**

// #### 🔥 `var` Hoisting
// - Declarations are hoisted and initialized with `undefined`.
// - **Example:**

// console.log(a);    // Output: undefined
// var a = 10;
// console.log(a);    // Output: 10

// ✅ Function Declarations
// Fully hoisted (can be called before declaration).

// greet();
// function greet() {
//     console.log("Hello!");
// }
// ⚠️ Function Expressions
// Variable hoisted but not the function.

// console.log(sum);    // undefined
// var sum = function(a, b) {
//     return a + b;
// };
// console.log(sum(2, 3));    // 5
// 🚫 Arrow Functions
// Hoisted but not initialized → ReferenceError.

// console.log(add(2, 3));    // ReferenceError
// const add = (a, b) => a + b;
// 🛑 Class Hoisting
// Hoisted but not initialized → ReferenceError.

// const obj = new Person();    // ReferenceError
// class Person {
//     constructor(name) {
//         this.name = name;
//     }
// }
// ⚠️ Common Pitfalls
// Accessing let or const before initialization → ReferenceError.
// Expecting function expressions to be fully hoisted.
// Using arrow functions before declaration → ReferenceError.
// 🛠️ Best Practices
// ✅ Use let and const instead of var.
// ✅ Declare variables at the top of the scope.
// ✅ Use function declarations when hoisting is required.
// ✅ Use strict mode to catch undeclared variables.

// 💡 Key Takeaways
// var: Hoisted → undefined.
// let and const: Hoisted but not initialized → ReferenceError.
// Functions:
// Declarations → Fully hoisted.
// Expressions & Arrow → Hoisted but not initialized.
// Classes: Hoisted but uninitialized → ReferenceError
// _________________________________________________________________

// _________________________________________________________________

// 13. Callback

// const orderFood = (food) => {
//      console.log("Ordering the food");

//      setTimeout(() => {
//           console.log("Food has been delivered");
//           setTimeout(()=> food("Burger"), 2000)
//      }, 2000);
// };

// orderFood((food) => {
//      console.log(`Enjoying my favourite ${food}`);
// });

// ______________________________

// ✅ 1️⃣ Delay Execution (Timeout Simulation)
// Write a function delay that takes a callback and a delay time in milliseconds.

// It should execute the callback after the specified delay.

// ans:
// function delay(callback, time) {
//      setTimeout(()=> callback(), time, time);
// }

// console.log("Start");
// delay(() => {
//      console.log("Hello after 2 seconds!");
// }, 2000);
// _________________________________

// ✅ 2️⃣ Filter Array with Callback
// Create a function filterArray() that takes:

// An array
// A callback function that defines the filtering condition
// It should return a new array with only the elements that satisfy the condition.

// function filterArray(arr, callback) {
//     return arr.filter(callback)
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// const evenNumbers = filterArray(numbers, (num) => num % 2 === 0);
// console.log(evenNumbers);   // [2, 4, 6]

// const oddNumbers = filterArray(numbers, (num) => num % 2 !== 0);
// console.log(oddNumbers);    // [1, 3, 5, 7]

// const numberGreaterThanFour = filterArray(numbers, (num) => num > 4);
// console.log(numberGreaterThanFour);    // [5, 6, 7]

//  Challenge: Try adding more conditions (e.g., num > 4).
// _________________________________

// ✅ 3️⃣ Create a Custom forEach()
// Build your own version of the forEach() method using a callback.

// function customForEach(arr, callback) {
//      // console.log('arr', callback)
// }

// const numbers = [1, 2, 3, 4];

// customForEach(numbers, (num, index) => {
//      console.log(`Index ${index}: ${num}`);
// });
// console.log("hello world");
// _________________________________

// _________________________________
// 17. 
// what is this in js?
// let name = "anu"
// const obj = {
//     name: 'Kevin',
//     greet: function() {
//         console.log("this is it", this.name)
//     }
// }

// console.log(obj.greet())

// Definition: this refers to the Object that is executing the current function
// _________________________________

// _________________________________
// 18. Closure?

// const getUserName = (name)=> {
//     console.log("outer", name) 

//     return function outerFunction() {
//         console.log("inner", name)
//     }
// }

// getUserName("Kevin")()
// _________________________________

// _________________________________
// 19. Hoisted
// *  JavaScript hoists declarations to the top of the scope.
// *  var declarations and functions declarations are hoisted.
// *  let and const are hoisted by not initialised

// console.log(name)
// var name = "kevin"

// So what will happen is if we are using var to declare a variable it will gets hoisted
// and assign undefined to that so when we use that variable before declaration we will be getting undefined

// So if we use let and const it will also get hoisted but it will through a reference error
// that is the main problem
// _________________________________

// _________________________________
// 20. Promise?
// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// _________________________________

// _________________________________
// 21. What is the difference between the equality operators == and ===?
// ans: 
// The == operator is the loose equality operator. It compares two values after performing type coercion if the types are different. For example:

// "3" == 3 // true, because the string "3" is converted to the number 3
// The === operator is the strict equality operator. It checks both value and type without any type conversion. For example:

// "3" === 3 // false, because one is a string and the other is a number
// So:

// == checks for equality after type conversion

// === checks for equality without type conversion

// 💡 Best practice: Use === by default to avoid unexpected behavior caused by implicit type coercion.
// _________________________________

// _________________________________
// 22. What is the difference between an element and a component in React?
// ans:
// In React, components and elements are two foundational concepts, but they serve different purposes.

// 📦 React Component:
// A component is a JavaScript function or class that returns React elements.

// It encapsulates UI logic and can accept props (inputs) and maintain its own state (if needed).

// Components are reusable, making them the building blocks of any React application.

// // Example of a functional component
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }
// 🧱 React Element:
// A React element is a plain object that represents a DOM node or another component.

// It is created either by JSX syntax (e.g., <div>) or by calling React.createElement().

// Elements are immutable and describe what you want to see on the screen.

// Think of it like a "blueprint" React uses to render UI efficiently.

// // React element created using JSX
// const element = <Welcome name="Alice" />;
// 🔁 Summary:
// Aspect	Component	Element
// Definition	Function or class that returns UI	Description of a DOM node or component
// Purpose	Logic + Structure	UI Representation (what to render)
// Reusable	✅ Yes	❌ No (but used inside components)
// Created by	Developer	JSX or React.createElement()
// Rendered by	Returns an element	Rendered into the DOM by React

// 💡 Analogy:
// Think of a component as a factory, and a React element as the product it manufactures. React uses these products (elements) to build the actual UI (DOM).
// _________________________________

// _________________________________

// 23. What is the difference between the postfix i++ and prefix ++i increment operators?
// ans:
// Both of them are used to increment the value, and if we are using i++ we are first assigning and then incrementing the value of i by 1, and if we are using ++i we are first 
// incrementing and then assigning that to the value i, 
// _________________________________
