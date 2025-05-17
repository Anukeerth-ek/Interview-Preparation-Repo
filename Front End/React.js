// _______________________________________________________________________________________
// 1. What is the differnce between var, let and const ?
// ans: var is a functional scoped, global scoped. Which means we can access the variables inside the functional scope. Lets see and examples

// const getDetails = ()=> {
//   var num1 = 10
//   if(true) {
//     var num2 = 20;
//     console.log(num1)
//     console.log(num2)
//   }

//   console.log(num1)
//   console.log(num2)

// }

// getDetails()

// In this we will get all the output as expected we won't get errors because var is functional scoped as well as global scoped variable declartion

// const getDetails = ()=> {
//   let num1 = 10
//   if(true) {
//     let num2 = 20;
//     console.log(num1)
//     console.log(num2)
//   }

//   console.log(num1)
//   console.log(num2)

// }

// getDetails()

// From this we will get error in the 4th console log because let is blocked scoped that means we can acess only inside the block (A block is defined by {})

// const getDetails = ()=> {
//   const num1 = 10
//   if(true) {
//     const num2 = 20;
//     console.log(num1)
//     console.log(num2)
//   }

//   console.log(num1)
//   console.log(num2)

// }

// getDetails()

// Same with the const too we will get error in the 4th console log because const is too a blocked scope.
// _______________________________________________________________________________________

// _______________________________________________________________________________________
// 2.Explain the concept of a Single Page Application (SPA).
// A Single Page Application (SPA) is a web application that dynamically updates the current page rather than loading entire new pages from the server.
// This approach provides a faster and more seamless user experience, leveraging JavaScript for dynamic content loading, client-side routing, and state management.
// While SPAs offer numerous advantages, such as improved performance and reduced server load, they also come with challenges like SEO optimization and initial load time.
// _______________________________________________________________________________________

// _______________________________________________________________________________________
// 3. What is JSX and how does it differ from HTML?
// ans: JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript files. It needs to be transpiled to regular JavaScript before execution.
// HTML is a standard markup language for creating web pages.
// JSX differs from HTML in syntax, handling of attributes, embedding JavaScript expressions, and dealing with styles and events.
// Using JSX in React simplifies the process of writing and managing UI components by allowing you to combine markup and logic in a single file.
// _______________________________________________________________________________________

// _______________________________________________________________________________________
// 5. How do you handle state management in a React application?
// ans: Small Applications: useState and useReducer are often sufficient for managing state.
// Medium to Large Applications: The Context API can be combined with useReducer for managing more complex state.
// Large and Complex Applications: Consider using external libraries like Redux, Recoil, or MobX for more scalable and maintainable state management.
// By understanding the strengths and use cases of each approach, you can choose the best state management strategy for your React application.
// _______________________________________________________________________________________

// _______________________________________________________________________________________
// 7. What is React?
// ans: React is a popular JavaScript library used for building user interfaces, especially single-page applications where you need a fast, interactive user experience. Developed 
// and maintained by Facebook, React helps developers create reusable UI components that can efficiently update and render in response to data changes. One of the main advantage of 
// react is single page application. In spa we dont need to load the content as per the request. Spa means when the website initially loads the server will pass the html and 
// respective css and javascript code. And it will dynamically rewrite the content according to the user's requests.
// Main features in React is
// 1. Components
// 2. State
// 3. JSX
// 4. Props
// 5. Virtual DOM

// 1. Components is nothing but just a reuseable piece of code we can reuse that when ever we want.
// 2. State a React-Object that contains data about or information about that component. A component's state will change when the component re-renders.
// 3. JSX - is javascript xml it will helps us to write html like code in react. jsx will helps us to write html in react without using the document.createElement() or append().
// 4. Props we can pass data to one component to another in the form of parent to child. We can pass props from parent to child. React's data flow is unidirectional that is from parent to child only.
// 5. Virtual DOM - Virtual is a light weight copy of real dom. when we update a state the react virutal dom will check the state and compare that with the real dom. And change that only. So it will helps us to increase the performance.
// _______________________________________________________________________________________

// _______________________________________________________________________________________
// 8. What is useMemo ?
// ans: useMemo is a react hook. It is mainly used for increasing performance by memoizing the function and it will be called when only needed. It can take two parameter, first is a function and second one is a array of values. Function will run only if the value inside the dependency is changed. Memoizing means it will return the cached value if the input is same as passed before. useMemo is almost similar to useCallback, useCallback will return the memoized function and useMemo will return the memoized value.
// syntax:

// const getDoubledValue = (num) => {
//      return num * 2;
// };

// let num = 2;

// const result = useMemo(() => getDoubledValue(num), [num]);
// * useMemo will take 2 arguments first one is a function and another one is an array of values.
// _______________________________________________________________________________________

// _______________________________________________________________________________________
// 9. What is the difference between state and props?
// ans:
// State and props are both ways to manage data in React, but they serve different purposes. State is managed within a component and is mutable, meaning a component can change its own state over time.
// It’s used for dynamic data that affects how the component behaves or renders. On the other hand, props are immutable and are passed from a parent component to a child component. They configure the child component and provide it with data but cannot be changed by the child.
//  Essentially, state is for managing a component's own data, while props are for passing data and configuration from parent to child components.
// _______________________________________________________________________________________

// _______________________________________________________________________________________
// 10. What is Prop Drilling?
// ans:
// Anyone who has worked in React would have faced this and if not then will face it definitely. Prop drilling is basically a situation when the same data is being sent at almost every level due to requirements in the final level. Here is a diagram to demonstrate it better.
// Data needed to be sent from Parent to ChildC. In this article different ways to do that are discussed.
// example:
// Parent
//   ↓
// Child (A)
//   ↓
// Child (B)
//   ↓
// Child (C)

// we can solve this using a context API
//  eg:
// 1. Consider parent component will be the child of App.js
//    2. And in Parent Component there is one child named Child A, And in Child A component there is one child named Child B, and in Child B component there is Child named Child C.
//    if we need to pass props to child C, commonly we just think by passing the props to all the childrens that end up with props drilling that will cause the performance.
//    We can solve that issue using Global state management, like context API, redux.

//    Firstly we need to create a provider in the parent component. like

// import { useContext } from "react";

// let nameContext = createContext(null);

// const Parent = () => {
//      const userFirstName = "Anukeerth";
//      const userLastNmae = "EK";
//      return (
//           <nameContext.Provider value={{userFirstName}}>
//                <div>
//                     <ChildA />
//                </div>
//           </nameContext.Provider>
//      );
// };

// const ChildC = ()=> {
//     const {userFirstName} = useContext(nameContext)
//     return (
//         <div>
//             <p>{userFirstName}</p>
//             </div>
//     )
// }
// This is how we use Context API
// _______________________________________________________________________________________

// _______________________________________________________________________________________
// 11. What you mean by pure components in React?
// ans:
// Pure Components in React are components that only re-render when their props or state change.
// They help optimize performance by preventing unnecessary renders, which is particularly useful for improving the efficiency of a React application.
// _______________________________________________________________________________________

// _______________________________________________________________________________________
// 12.  What are custom hooks?
// ans:
// Hooks are reusable functions.

// When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.

// Custom Hooks start with "use". Example: useFetch.
// _______________________________________________________________________________________

// _______________________________________________________________________________________
// 13. What is a higher order functions?
// ans:
// eg:
// const displayUserName = (userName)=> {
//     return userName
// }

// const getUserName = (nameFunction, name)=> {
//     return nameFunction(name)
// }


// console.log(getUserName(displayUserName, "Kevin"))

// * Higher order functions are functions that take one or more function as an argument or return a function. In here getUserName is a function. 
// _______________________________________________________________________________________

// _______________________________________________________________________________________
// 13. What are Higher Order Components (HOCs) in React?
// ans:
// A Higher-Order Component (HOC) is a function in React that takes a component and returns a new component with enhanced functionality.
//  The HOC pattern is used to add common behavior, state, or logic to multiple components without modifying their original code.
// _______________________________________________________________________________________

// _______________________________________________________________________________________
// 14. What is the role of state in React components?
// ans:
// In React, state is a built-in object that allows components to store and manage data that can change over time. This data is private to the component
// and can influence how the component renders.
// Key points about state in React:
// Component Memory:
// Think of state as the component's memory. It remembers information specific to that component instance.
// Data Storage:
// State holds data that is relevant to the component's functionality and appearance. This could be user input, fetched data, or any other dynamic information.
// Updating UI:
// When the state changes, React automatically re-renders the component to reflect the updated data. This makes it easy to build dynamic and interactive user interfaces.
// Local Scope:
// State is local to a component, meaning that it is not accessible to other components directly. You can pass data from a parent component to its children using props.
// useState Hook:
// In functional components, you use the useState hook to manage state. This hook returns an array with two elements: the current state value and a function to update that value.
// _______________________________________________________________________________________

// _______________________________________________________________________________________
15. 