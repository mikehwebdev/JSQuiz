// questionsData was creating using AI. I created the first question as an example and then asked ai to use that format and generate 200 common questions
//  that junior web developers will be expected to know and understand with a correct answer, and then two other answers that are plausible sounding but wrong.

const questionsData = [
    {
        question: "What does the .map() function do?",
        answer: "The .map() function transforms each element in an array using a callback function and returns a new array with the transformed elements. It doesn't modify the original array.",
        falseAnswer1: "The .map() function modifies the original array by applying a transformation to each element and returns the modified array in place.",
        falseAnswer2: "The .map() function creates a new array containing only the elements that match a specific condition, filtering out the rest."
    },
    {
        question: "What is the difference between .filter() and .map()?",
        answer: ".filter() returns a new array with elements that pass a test condition, while .map() returns a new array with transformed elements.",
        falseAnswer1: ".filter() modifies the original array while .map() creates a new array.",
        falseAnswer2: ".filter() can only work with numbers while .map() works with any data type."
    },
    {
        question: "What does .reduce() do?",
        answer: ".reduce() processes each element in an array with a reducer function to accumulate a single value and returns that value.",
        falseAnswer1: ".reduce() removes elements from an array that don't meet a condition.",
        falseAnswer2: ".reduce() splits an array into smaller arrays based on specified criteria."
    },
    {
        question: "What is hoisting in JavaScript?",
        answer: "Hoisting is JavaScript's behavior of moving declarations to the top of their scope before code execution, allowing access before declaration.",
        falseAnswer1: "Hoisting is a browser feature that automatically optimizes variable placement for better performance.",
        falseAnswer2: "Hoisting is when variables are automatically converted to a specific data type at runtime."
    },
    {
        question: "What is a closure?",
        answer: "A closure is a function that has access to variables in its outer scope even after the outer function has returned.",
        falseAnswer1: "A closure is when a function automatically closes and stops executing after a certain time period.",
        falseAnswer2: "A closure is a reserved keyword used to prevent variables from being accessed globally."
    },
    {
        question: "What is the difference between 'let' and 'const'?",
        answer: "'let' can be reassigned and has block scope, while 'const' cannot be reassigned after initialization but also has block scope.",
        falseAnswer1: "'let' is global while 'const' is local to the function only.",
        falseAnswer2: "'const' is faster than 'let' because it's immutable and optimized by the engine."
    },
    {
        question: "What does 'this' refer to in JavaScript?",
        answer: "'this' refers to the object that the method is being called on, which can change depending on the calling context.",
        falseAnswer1: "'this' always refers to the global window object in every context.",
        falseAnswer2: "'this' refers to the parent function that called the current function."
    },
    {
        question: "What is a Promise?",
        answer: "A Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.",
        falseAnswer1: "A Promise is a function that guarantees to return a value synchronously within 1 second.",
        falseAnswer2: "A Promise is a way to create multiple threads in JavaScript for parallel execution."
    },
    {
        question: "What are the three states of a Promise?",
        answer: "The three states are: pending (initial state), fulfilled (resolved), and rejected (error occurred).",
        falseAnswer1: "The three states are: waiting, processing, and completed.",
        falseAnswer2: "The three states are: initialized, executing, and terminated."
    },
    {
        question: "What is async/await?",
        answer: "async/await is syntactic sugar for working with Promises, where async declares an asynchronous function and await pauses execution until a Promise settles.",
        falseAnswer1: "async/await is a way to create multiple simultaneous loops in JavaScript.",
        falseAnswer2: "async/await is used to delay code execution for a specified number of milliseconds."
    },
    {
        question: "What is the difference between == and ===?",
        answer: "== performs type coercion before comparison, while === checks both value and type without coercion (strict equality).",
        falseAnswer1: "=== is faster than == so it should always be used.",
        falseAnswer2: "== works with objects while === only works with primitives."
    },
    {
        question: "What does the spread operator (...) do?",
        answer: "The spread operator unpacks elements from an iterable (array or string) into places where zero or more elements are expected.",
        falseAnswer1: "The spread operator creates a copy of an object and removes nested properties.",
        falseAnswer2: "The spread operator is used only for combining multiple strings together."
    },
    {
        question: "What is destructuring?",
        answer: "Destructuring is a convenient way to extract values from arrays or properties from objects into distinct variables.",
        falseAnswer1: "Destructuring is the process of breaking down a complex function into smaller functions.",
        falseAnswer2: "Destructuring removes properties from an object permanently."
    },
    {
        question: "What is a template literal?",
        answer: "A template literal is a string enclosed in backticks that allows embedded expressions and multi-line strings using ${expression} syntax.",
        falseAnswer1: "A template literal is a predefined string format stored in memory for reuse.",
        falseAnswer2: "A template literal is a way to create immutable strings that cannot be modified."
    },
    {
        question: "What is the difference between null and undefined?",
        answer: "null is an assignment value representing no value, while undefined is the default value of uninitialized variables.",
        falseAnswer1: "null and undefined are identical and can be used interchangeably.",
        falseAnswer2: "undefined is used for objects while null is used for primitive types."
    },
    {
        question: "What is event bubbling?",
        answer: "Event bubbling is when an event triggered on a child element propagates up through its parent elements in the DOM.",
        falseAnswer1: "Event bubbling is when events are processed simultaneously on all elements.",
        falseAnswer2: "Event bubbling is a browser feature that prevents events from firing."
    },
    {
        question: "What does event.preventDefault() do?",
        answer: "event.preventDefault() cancels the event if it is cancelable, preventing the default action from occurring.",
        falseAnswer1: "event.preventDefault() stops the event from bubbling up to parent elements.",
        falseAnswer2: "event.preventDefault() removes the event listener from the element."
    },
    {
        question: "What is the difference between document.getElementById() and document.querySelector()?",
        answer: "getElementById() finds elements by ID only, while querySelector() can find elements using any valid CSS selector.",
        falseAnswer1: "querySelector() only works with class selectors while getElementById() works with all selectors.",
        falseAnswer2: "getElementById() is faster but querySelector() has better browser support."
    },
    {
        question: "What is callback hell?",
        answer: "Callback hell (pyramid of doom) is when callbacks are nested deeply, making code hard to read and maintain.",
        falseAnswer1: "Callback hell is when a function calls itself recursively more than 5 times.",
        falseAnswer2: "Callback hell is a JavaScript error that occurs when too many events are triggered."
    },
    {
        question: "What is React?",
        answer: "React is a JavaScript library for building user interfaces with reusable components using a virtual DOM for efficient rendering.",
        falseAnswer1: "React is a server-side framework for building backend APIs.",
        falseAnswer2: "React is a CSS preprocessor for styling web applications."
    },
    {
        question: "What are React components?",
        answer: "React components are reusable pieces of UI that can be either class components or function components that return JSX.",
        falseAnswer1: "React components are HTML templates that cannot be modified.",
        falseAnswer2: "React components are CSS stylesheets used to style the application."
    },
    {
        question: "What is JSX?",
        answer: "JSX is a syntax extension that allows you to write HTML-like code in JavaScript, which gets transpiled to JavaScript function calls.",
        falseAnswer1: "JSX is a database query language similar to SQL.",
        falseAnswer2: "JSX is a file format for storing React component configurations."
    },
    {
        question: "What is the difference between props and state?",
        answer: "props are immutable data passed from parent to child components, while state is mutable data managed within a component.",
        falseAnswer1: "props can be modified within the component while state cannot.",
        falseAnswer2: "state is passed from parent to child while props are managed internally."
    },
    {
        question: "What is the useState hook?",
        answer: "useState is a React Hook that lets you add state to function components by returning the current state and a function to update it.",
        falseAnswer1: "useState is used to manage props in class components.",
        falseAnswer2: "useState automatically saves the component state to local storage."
    },
    {
        question: "What is the useEffect hook?",
        answer: "useEffect is a React Hook for performing side effects in function components, running after render and accepting a dependency array.",
        falseAnswer1: "useEffect is only used to fetch data from APIs.",
        falseAnswer2: "useEffect prevents re-renders by caching component output."
    },
    {
        question: "When does useEffect run?",
        answer: "useEffect runs after the component renders, and with a dependency array, it only runs when dependencies change.",
        falseAnswer1: "useEffect only runs once when the component first mounts.",
        falseAnswer2: "useEffect runs before the component renders and can update props."
    },
    {
        question: "What is the virtual DOM?",
        answer: "The virtual DOM is an in-memory representation of the real DOM that React uses to optimize updates before rendering to the actual DOM.",
        falseAnswer1: "The virtual DOM is a separate browser API used for styling.",
        falseAnswer2: "The virtual DOM is a copy of the real DOM that gets deleted after each render."
    },
    {
        question: "What is reconciliation in React?",
        answer: "Reconciliation is React's process of comparing the old and new virtual DOMs to determine what changes need to be made to the actual DOM.",
        falseAnswer1: "Reconciliation is the process of combining multiple components into one.",
        falseAnswer2: "Reconciliation is when React updates all props in a component simultaneously."
    },
    {
        question: "What is a key prop in React lists?",
        answer: "A key prop is a unique identifier for each item in a list that helps React identify which items have changed, been added, or been removed.",
        falseAnswer1: "A key prop is used to sort list items alphabetically.",
        falseAnswer2: "A key prop is required only when displaying objects in a list."
    },
    {
        question: "What is conditional rendering in React?",
        answer: "Conditional rendering is displaying different UI based on certain conditions using if statements, ternary operators, or logical operators.",
        falseAnswer1: "Conditional rendering is a way to create multiple versions of a component file.",
        falseAnswer2: "Conditional rendering automatically hides components when data is not available."
    },
    {
        question: "What is the difference between controlled and uncontrolled components?",
        answer: "Controlled components have their state managed by React via props/state, while uncontrolled components manage their own state through the DOM.",
        falseAnswer1: "Uncontrolled components are more efficient because they don't cause re-renders.",
        falseAnswer2: "Controlled components can only be used with form inputs."
    },
    {
        question: "What is form handling in React?",
        answer: "Form handling in React involves managing form input values through state and updating state on input changes to create controlled components.",
        falseAnswer1: "Form handling is automatically done by the browser without needing React code.",
        falseAnswer2: "Form handling in React requires special form libraries that are built-in."
    },
    {
        question: "What is lifting state up?",
        answer: "Lifting state up is moving state from child components to a common parent component to share state between siblings.",
        falseAnswer1: "Lifting state up is a performance optimization that removes unused state.",
        falseAnswer2: "Lifting state up moves state to the global scope for all components to access."
    },
    {
        question: "What is prop drilling?",
        answer: "Prop drilling is passing props through multiple levels of nested components that don't use them, just to pass them to deeper components.",
        falseAnswer1: "Prop drilling is a technique to improve performance by caching props.",
        falseAnswer2: "Prop drilling is removing unused props from components automatically."
    },
    {
        question: "What is the useContext hook?",
        answer: "useContext is a React Hook that lets you read context from a Context object without passing props through every level of the component tree.",
        falseAnswer1: "useContext is used to fetch data from an external context (API).",
        falseAnswer2: "useContext creates a new global state for the entire application."
    },
    {
        question: "What is the useReducer hook?",
        answer: "useReducer is a React Hook for managing complex state by taking a reducer function and initial state, returning current state and a dispatch function.",
        falseAnswer1: "useReducer is a shorthand for using useState multiple times.",
        falseAnswer2: "useReducer reduces the size of components by removing code."
    },
    {
        question: "What is a custom hook?",
        answer: "A custom hook is a JavaScript function that uses React Hooks internally and follows the naming convention 'use' prefix to share stateful logic.",
        falseAnswer1: "A custom hook is a React component that only contains HTML.",
        falseAnswer2: "A custom hook is a built-in React feature that cannot be modified."
    },
    {
        question: "What is React.memo?",
        answer: "React.memo is a higher-order component that optimizes performance by memoizing a component and only re-rendering if props change.",
        falseAnswer1: "React.memo makes all components pure and prevents any re-renders.",
        falseAnswer2: "React.memo converts class components into function components."
    },
    {
        question: "What is the useCallback hook?",
        answer: "useCallback returns a memoized version of a callback function that only changes if dependencies change, optimizing performance with child components.",
        falseAnswer1: "useCallback automatically calls a function at specific intervals.",
        falseAnswer2: "useCallback converts callback functions into promises."
    },
    {
        question: "What is the useMemo hook?",
        answer: "useMemo returns a memoized value that is only recomputed when dependencies change, optimizing performance for expensive calculations.",
        falseAnswer1: "useMemo saves data to browser memory permanently.",
        falseAnswer2: "useMemo is used to create memoized components only."
    },
    {
        question: "What is a Higher-Order Component (HOC)?",
        answer: "An HOC is a pattern where a function takes a component and returns an enhanced component with additional functionality or props.",
        falseAnswer1: "An HOC is a React component that is positioned higher in the DOM tree.",
        falseAnswer2: "An HOC is a built-in React optimization feature."
    },
    {
        question: "What is the purpose of the key prop in forms?",
        answer: "The key prop helps React identify which items have changed in lists and is crucial for maintaining component state correctly.",
        falseAnswer1: "The key prop is used to validate form input data.",
        falseAnswer2: "The key prop stores the form submission data."
    },
    {
        question: "What is React Fragment?",
        answer: "React Fragment is a way to return multiple elements from a component without adding an extra wrapper element to the DOM.",
        falseAnswer1: "React Fragment is a way to break a component into smaller pieces.",
        falseAnswer2: "React Fragment is a memory management tool that cleans up unused components."
    },
    {
        question: "What is the difference between class and function components?",
        answer: "Class components use ES6 classes and lifecycle methods, while function components are simpler and use hooks for state and side effects.",
        falseAnswer1: "Function components cannot access state or lifecycle methods.",
        falseAnswer2: "Class components are faster than function components."
    },
    {
        question: "What are React lifecycle methods?",
        answer: "Lifecycle methods are class component methods called at specific stages (mounting, updating, unmounting) to run code at desired times.",
        falseAnswer1: "Lifecycle methods are automatically called for all components regardless of type.",
        falseAnswer2: "Lifecycle methods are used to manage props in function components."
    },
    {
        question: "What is componentDidMount?",
        answer: "componentDidMount is a lifecycle method called after the component is mounted (rendered) to the DOM, commonly used for API calls.",
        falseAnswer1: "componentDidMount is called before the component renders.",
        falseAnswer2: "componentDidMount is used to validate component props."
    },
    {
        question: "What is componentWillUnmount?",
        answer: "componentWillUnmount is a lifecycle method called before the component is removed from the DOM, used for cleanup like timers or subscriptions.",
        falseAnswer1: "componentWillUnmount is called when component props change.",
        falseAnswer2: "componentWillUnmount prevents the component from being removed."
    },
    {
        question: "What is the difference between map and forEach?",
        answer: ".map() returns a new array with transformed elements, while .forEach() executes a function for each element and returns undefined.",
        falseAnswer1: ".forEach() is faster than .map() so it should always be used.",
        falseAnswer2: ".forEach() can also be used directly in JSX rendering with proper syntax like .map()."
    },
    {
        question: "What is JSON?",
        answer: "JSON is a lightweight data format that uses human-readable text to store and exchange data as key-value pairs.",
        falseAnswer1: "JSON is a programming language used to create web applications.",
        falseAnswer2: "JSON is a compressed file format similar to ZIP."
    },
    {
        question: "What is the difference between JSON.stringify() and JSON.parse()?",
        answer: "JSON.stringify() converts a JavaScript object to a JSON string, while JSON.parse() converts a JSON string back to a JavaScript object.",
        falseAnswer1: "JSON.stringify() and JSON.parse() do the exact same thing.",
        falseAnswer2: "JSON.stringify() is only used for storing data while JSON.parse() is for displaying it."
    },
    {
        question: "What is an arrow function?",
        answer: "An arrow function is a concise syntax for writing functions using => notation that implicitly returns a value and has a different 'this' binding.",
        falseAnswer1: "Arrow functions are faster than regular functions.",
        falseAnswer2: "Arrow functions cannot be used as methods in objects."
    },
    {
        question: "What is the difference between arrow functions and regular functions?",
        answer: "Arrow functions don't have their own 'this' binding and cannot be used as constructors, while regular functions have both.",
        falseAnswer1: "Arrow functions are only used for callbacks while regular functions are for main code.",
        falseAnswer2: "Regular functions automatically return values while arrow functions don't."
    },
    {
        question: "What is a ternary operator?",
        answer: "A ternary operator is a conditional operator (? :) that evaluates a condition and returns one of two values based on the result.",
        falseAnswer1: "A ternary operator is used to combine three variables together.",
        falseAnswer2: "A ternary operator repeats code three times automatically."
    },
    {
        question: "What is the logical AND operator (&&)?",
        answer: "The && operator returns the first falsy value or the last value if all are truthy, used for conditional logic and short-circuit evaluation.",
        falseAnswer1: "The && operator combines two values into an array.",
        falseAnswer2: "The && operator always returns true or false."
    },
    {
        question: "What is the logical OR operator (||)?",
        answer: "The || operator returns the first truthy value or the last value if all are falsy, used for providing default values.",
        falseAnswer1: "The || operator combines two strings together.",
        falseAnswer2: "The || operator is the same as the && operator."
    },
    {
        question: "What is truthy and falsy?",
        answer: "Truthy values are values that evaluate to true in a boolean context; falsy values are values that evaluate to false (0, '', null, undefined, NaN, false).",
        falseAnswer1: "Truthy and falsy only apply to boolean data types.",
        falseAnswer2: "All strings are truthy and all numbers are falsy."
    },
    {
        question: "What is type coercion?",
        answer: "Type coercion is JavaScript's automatic conversion of values from one data type to another when operators are used between different types.",
        falseAnswer1: "Type coercion is a way to forcefully change a variable's data type manually.",
        falseAnswer2: "Type coercion is an error that occurs when data types don't match."
    },
    {
        question: "What is the difference between slice() and splice()?",
        answer: ".slice() returns a shallow copy of a portion of an array without modifying it, while .splice() modifies the original array and returns removed elements.",
        falseAnswer1: ".slice() modifies the array while .splice() creates a new array.",
        falseAnswer2: ".slice() and .splice() do the same thing."
    },
    {
        question: "What is object destructuring?",
        answer: "Object destructuring extracts properties from an object and assigns them to variables in a concise syntax.",
        falseAnswer1: "Object destructuring removes properties from an object.",
        falseAnswer2: "Object destructuring converts an object into an array."
    },
    {
        question: "What is array destructuring?",
        answer: "Array destructuring extracts values from an array and assigns them to variables based on their position.",
        falseAnswer1: "Array destructuring sorts the array in descending order.",
        falseAnswer2: "Array destructuring filters out falsy values from an array."
    },
    {
        question: "What is the difference between Object.assign() and the spread operator?",
        answer: "Both copy object properties, but Object.assign() mutates the target object while the spread operator creates a new object.",
        falseAnswer1: "Object.assign() only works with arrays while spread operator works with objects.",
        falseAnswer2: "The spread operator is slower than Object.assign()."
    },
    {
        question: "What is the 'new' keyword in JavaScript?",
        answer: "The 'new' keyword creates an instance of a user-defined object type or built-in object type, calling the constructor function.",
        falseAnswer1: "The 'new' keyword declares a new variable.",
        falseAnswer2: "The 'new' keyword is used to initialize the global scope."
    },
    {
        question: "What is a prototype?",
        answer: "A prototype is an object that properties and methods are inherited from, and every JavaScript object has a prototype.",
        falseAnswer1: "A prototype is a draft version of a website before deployment.",
        falseAnswer2: "A prototype is a way to make objects immutable."
    },
    {
        question: "What is prototypal inheritance?",
        answer: "Prototypal inheritance is the mechanism where objects inherit properties and methods from their prototype object.",
        falseAnswer1: "Prototypal inheritance is the same as classical inheritance in other languages.",
        falseAnswer2: "Prototypal inheritance prevents code reuse in JavaScript."
    },
    {
        question: "What is the difference between null and false?",
        answer: "null is an object that represents no value, while false is a boolean value representing the opposite of true.",
        falseAnswer1: "null and false are the same value with different names.",
        falseAnswer2: "false is used for empty values while null is used for missing values."
    },
    {
        question: "What is the difference between var, let, and const?",
        answer: "var is function-scoped and hoisted, let is block-scoped and not initialized, const is block-scoped, not initialized, and cannot be reassigned.",
        falseAnswer1: "All three keywords behave identically in modern JavaScript.",
        falseAnswer2: "const is faster than let and var so it should always be used."
    },
    {
        question: "What is hoisting with var?",
        answer: "var declarations are hoisted and initialized with undefined, allowing access before declaration but with undefined value.",
        falseAnswer1: "var declarations are hoisted but throw an error if accessed before declaration.",
        falseAnswer2: "var is not hoisted at all in JavaScript."
    },
    {
        question: "What is the Temporal Dead Zone?",
        answer: "The Temporal Dead Zone is the time between entering a scope and reaching a let/const declaration where variables cannot be accessed.",
        falseAnswer1: "The Temporal Dead Zone is a browser feature that prevents code execution temporarily.",
        falseAnswer2: "The Temporal Dead Zone only applies to var declarations."
    },
    {
        question: "What is Object.keys()?",
        answer: "Object.keys() returns an array of the object's own property names (keys) as strings.",
        falseAnswer1: "Object.keys() returns the values of an object.",
        falseAnswer2: "Object.keys() permanently removes properties from an object."
    },
    {
        question: "What is Object.values()?",
        answer: "Object.values() returns an array of the object's own property values.",
        falseAnswer1: "Object.values() returns the keys of an object.",
        falseAnswer2: "Object.values() modifies the original object."
    },
    {
        question: "What is Object.entries()?",
        answer: "Object.entries() returns an array of key-value pairs [key, value] for each property in the object.",
        falseAnswer1: "Object.entries() returns only the property names.",
        falseAnswer2: "Object.entries() converts an object into a string."
    },
    {
        question: "What is the difference between .includes() and .indexOf()?",
        answer: ".includes() returns true/false if an element exists, while .indexOf() returns the index of the element or -1 if not found.",
        falseAnswer1: ".indexOf() returns true/false while .includes() returns an index.",
        falseAnswer2: ".includes() only works with strings while .indexOf() works with arrays."
    },
    {
        question: "What is the .find() method?",
        answer: ".find() returns the first element in an array that satisfies the testing function, or undefined if none found.",
        falseAnswer1: ".find() returns all elements that match the condition.",
        falseAnswer2: ".find() modifies the original array."
    },
    {
        question: "What is the .some() method?",
        answer: ".some() returns true if at least one element passes the test function, otherwise false, without modifying the array.",
        falseAnswer1: ".some() returns the first element that passes the test.",
        falseAnswer2: ".some() modifies the original array by removing non-matching elements."
    },
    {
        question: "What is the .every() method?",
        answer: ".every() returns true only if all elements pass the test function, otherwise false.",
        falseAnswer1: ".every() returns an array of elements that pass the test.",
        falseAnswer2: ".every() modifies the array and removes failing elements."
    },
    {
        question: "What is the .sort() method?",
        answer: ".sort() sorts an array in place and returns the sorted array, converting elements to strings for comparison by default.",
        falseAnswer1: ".sort() creates a new sorted array and leaves the original unchanged.",
        falseAnswer2: ".sort() only works with numeric arrays."
    },
    {
        question: "What is the .reverse() method?",
        answer: ".reverse() reverses an array in place and returns the reversed array.",
        falseAnswer1: ".reverse() creates a new reversed array without modifying the original.",
        falseAnswer2: ".reverse() sorts an array in reverse alphabetical order."
    },
    {
        question: "What is the .join() method?",
        answer: ".join() combines all array elements into a single string with an optional separator between elements.",
        falseAnswer1: ".join() combines two arrays into one.",
        falseAnswer2: ".join() separates a string into multiple strings."
    },
    {
        question: "What is the .split() method?",
        answer: ".split() divides a string into an array of substrings based on a specified separator.",
        falseAnswer1: ".split() divides an array into multiple arrays.",
        falseAnswer2: ".split() removes characters from a string."
    },
    {
        question: "What is .trim()?",
        answer: ".trim() removes whitespace from both ends of a string and returns a new string.",
        falseAnswer1: ".trim() removes all whitespace from a string including internal spaces.",
        falseAnswer2: ".trim() modifies the original string."
    },
    {
        question: "What is .concat()?",
        answer: ".concat() combines two or more arrays and returns a new array without modifying the original arrays.",
        falseAnswer1: ".concat() modifies the original array by adding elements.",
        falseAnswer2: ".concat() can only be used with strings."
    },
    {
        question: "What is the difference between let and var in loops?",
        answer: "let is block-scoped so each iteration gets its own variable, while var is function-scoped causing closure issues in loops.",
        falseAnswer1: "var and let behave identically in loops.",
        falseAnswer2: "var creates a new variable for each iteration like let does."
    },
    {
        question: "What is lexical scoping?",
        answer: "Lexical scoping means the scope of a variable is determined by its position in the source code at write time, not at runtime.",
        falseAnswer1: "Lexical scoping is determined by where a function is called.",
        falseAnswer2: "Lexical scoping only applies to global variables."
    },
    {
        question: "What is a scope chain?",
        answer: "A scope chain is the hierarchy of scopes that JavaScript searches from innermost to outermost to find variable values.",
        falseAnswer1: "A scope chain is a mechanism to prevent global variables from being used.",
        falseAnswer2: "A scope chain links all variables together in memory."
    },
    {
        question: "What is a pure function?",
        answer: "A pure function always returns the same output for the same input and doesn't have side effects or modify external state.",
        falseAnswer1: "A pure function is a function without parameters.",
        falseAnswer2: "A pure function can modify global variables as long as it returns the same value."
    },
    {
        question: "What is immutability?",
        answer: "Immutability means data cannot be changed after creation; to modify data, a new copy with the change is created.",
        falseAnswer1: "Immutability is when a variable is declared with const and cannot be reassigned.",
        falseAnswer2: "Immutability prevents any updates to data in JavaScript."
    },
    {
        question: "What is the difference between shallow copy and deep copy?",
        answer: "Shallow copy copies only top-level properties (nested objects are still referenced), while deep copy recursively copies all levels.",
        falseAnswer1: "Shallow copy is faster but creates duplicates, deep copy is slower but avoids issues.",
        falseAnswer2: "Shallow copy copies everything while deep copy only copies the top level."
    },
    {
        question: "What is event delegation?",
        answer: "Event delegation is attaching an event listener to a parent element to handle events from child elements using event bubbling.",
        falseAnswer1: "Event delegation is preventing child elements from triggering events.",
        falseAnswer2: "Event delegation creates multiple event listeners on individual elements."
    },
    {
        question: "What is the difference between stopPropagation() and stopImmediatePropagation()?",
        answer: "stopPropagation() prevents event bubbling to parent elements, while stopImmediatePropagation() also stops other handlers on the same element.",
        falseAnswer1: "stopPropagation() stops the entire event from firing.",
        falseAnswer2: "stopImmediatePropagation() is used to stop event capturing."
    },
    {
        question: "What is the error object in JavaScript?",
        answer: "The Error object contains information about an error including name, message, and stack properties when an error occurs.",
        falseAnswer1: "The Error object prevents errors from occurring.",
        falseAnswer2: "The Error object is automatically created for all functions."
    },
    {
        question: "What is try-catch-finally?",
        answer: "try-catch-finally is error handling where try runs code, catch handles errors if they occur, and finally runs regardless of outcome.",
        falseAnswer1: "try-catch-finally prevents all errors from being thrown.",
        falseAnswer2: "finally is required for try-catch blocks to work."
    },
    {
        question: "What is throw?",
        answer: "throw is used to create a custom error that stops execution and passes to a catch block or stops the program.",
        falseAnswer1: "throw deletes a variable from memory.",
        falseAnswer2: "throw repeats a code block until an error is thrown."
    },
    {
        question: "What is the difference between == and !=?",
        answer: "== checks value equality with type coercion, while != is its negation; === and !== check strict equality without coercion.",
        falseAnswer1: "!= always returns the opposite of ==.",
        falseAnswer2: "== is for strings while != is for numbers."
    },
    {
        question: "What is the typeof operator?",
        answer: "typeof is an operator that returns the data type of a variable as a string.",
        falseAnswer1: "typeof modifies the data type of a variable.",
        falseAnswer2: "typeof is used to check if a variable exists."
    },
    {
        question: "What is instanceof?",
        answer: "instanceof checks if an object is an instance of a specific class or constructor function.",
        falseAnswer1: "instanceof returns the data type name as a string.",
        falseAnswer2: "instanceof modifies the object's prototype chain."
    },
    {
        question: "What is NaN?",
        answer: "NaN stands for 'Not-a-Number' and represents an undefined numerical result, and typeof NaN returns 'number'.",
        falseAnswer1: "NaN is a string value that means 'not a number'.",
        falseAnswer2: "NaN is always false in boolean context."
    },
    {
        question: "What is isNaN()?",
        answer: "isNaN() converts its argument to a number and returns true if the result is NaN, commonly used to check for invalid numbers.",
        falseAnswer1: "isNaN() doesn't perform type coercion and only checks if the value is literally NaN.",
        falseAnswer2: "isNaN() is an alias for typeof x === 'number'."
    },
    {
        question: "What is Infinity?",
        answer: "Infinity is a special value representing positive infinity, and -Infinity represents negative infinity.",
        falseAnswer1: "Infinity is not a valid value in JavaScript.",
        falseAnswer2: "Infinity is the maximum number that can be stored in JavaScript."
    },
    {
        question: "What is setInterval()?",
        answer: "setInterval() repeatedly executes a function with a specified time delay in milliseconds until clearInterval() is called.",
        falseAnswer1: "setInterval() executes a function once after a specified delay.",
        falseAnswer2: "setInterval() delays code execution for a given time period."
    },
    {
        question: "What is setTimeout()?",
        answer: "setTimeout() executes a function once after a specified delay in milliseconds.",
        falseAnswer1: "setTimeout() repeats a function at regular intervals.",
        falseAnswer2: "setTimeout() pauses all code execution until the timer completes."
    },
    {
        question: "What is the difference between synchronous and asynchronous code?",
        answer: "Synchronous code executes line-by-line and blocks until completion, while asynchronous code allows other code to run while waiting.",
        falseAnswer1: "Asynchronous code is always faster than synchronous code.",
        falseAnswer2: "Synchronous code runs in the background while asynchronous code blocks the main thread."
    },
    {
        question: "What is the event loop?",
        answer: "The event loop continuously checks if there are tasks in the callback queue and moves them to the call stack when it's empty.",
        falseAnswer1: "The event loop is a browser feature that speeds up code execution.",
        falseAnswer2: "The event loop manages variable scope and memory allocation."
    },
    {
        question: "What is the call stack?",
        answer: "The call stack is a data structure that tracks function calls, executing functions from top to bottom and removing them when complete.",
        falseAnswer1: "The call stack stores all variables in memory.",
        falseAnswer2: "The call stack is a queuing system for asynchronous tasks."
    },
    {
        question: "What is the task queue?",
        answer: "The task queue (macrotask queue) stores tasks like setTimeout callbacks that are executed after the call stack and microtask queue are empty.",
        falseAnswer1: "The task queue executes tasks before the call stack.",
        falseAnswer2: "The task queue only handles promises."
    },
    {
        question: "What is the microtask queue?",
        answer: "The microtask queue handles high-priority tasks like Promise callbacks, which execute before the task queue.",
        falseAnswer1: "The microtask queue is for small tasks only.",
        falseAnswer2: "The microtask queue and task queue are the same thing."
    },
    {
        question: "What is a Web API?",
        answer: "Web APIs are built-in browser features accessed via JavaScript that handle tasks like DOM manipulation, timers, and network requests.",
        falseAnswer1: "Web APIs are external services that must be downloaded.",
        falseAnswer2: "Web APIs are part of the JavaScript language specification."
    },
    {
        question: "What is fetch()?",
        answer: "fetch() is a Web API that makes HTTP requests and returns a Promise that resolves to the response object.",
        falseAnswer1: "fetch() is only used for fetching data from files on disk.",
        falseAnswer2: "fetch() returns data synchronously before the function completes."
    },
    {
        question: "What is localStorage?",
        answer: "localStorage is a Web API that stores key-value pairs in the browser persistently until explicitly deleted, survives page refreshes.",
        falseAnswer1: "localStorage is cleared automatically when the browser closes.",
        falseAnswer2: "localStorage can store any JavaScript object without serialization."
    },
    {
        question: "What is sessionStorage?",
        answer: "sessionStorage is similar to localStorage but only persists for the current browser session and is cleared when the tab closes.",
        falseAnswer1: "sessionStorage persists data permanently like localStorage.",
        falseAnswer2: "sessionStorage is shared across all tabs of a browser."
    },
    {
        question: "What is a regular expression (regex)?",
        answer: "A regular expression is a pattern of characters used to match, find, or replace text in strings.",
        falseAnswer1: "A regular expression is used to store regular expressions in memory.",
        falseAnswer2: "A regular expression is a special variable type in JavaScript."
    },
    {
        question: "What is the .match() method?",
        answer: ".match() searches a string for matches against a regex and returns an array of matches or null.",
        falseAnswer1: ".match() replaces all matches with a new string.",
        falseAnswer2: ".match() modifies the original string."
    },
    {
        question: "What is the .replace() method?",
        answer: ".replace() returns a new string with the first match of a pattern replaced, leaving the original string unchanged.",
        falseAnswer1: ".replace() replaces all occurrences of a pattern by default.",
        falseAnswer2: ".replace() modifies the original string."
    },
    {
        question: "What is the .search() method?",
        answer: ".search() returns the index of the first match of a regex pattern or -1 if not found.",
        falseAnswer1: ".search() returns true or false if a pattern is found.",
        falseAnswer2: ".search() modifies the string."
    },
    {
        question: "What is the .test() method?",
        answer: ".test() returns true if a regex pattern matches a string, otherwise false.",
        falseAnswer1: ".test() returns the matched string.",
        falseAnswer2: ".test() modifies the string being tested."
    },
    {
        question: "What is the difference between .exec() and .test()?",
        answer: ".exec() returns an array of matches or null and updates lastIndex, while .test() returns true/false.",
        falseAnswer1: ".exec() and .test() return the same results.",
        falseAnswer2: ".test() is more efficient than .exec() for all purposes."
    },
    {
        question: "What is export in JavaScript modules?",
        answer: "export is used to make functions, variables, or classes available for import in other modules.",
        falseAnswer1: "export sends data to an external server.",
        falseAnswer2: "export creates a backup copy of code."
    },
    {
        question: "What is import in JavaScript modules?",
        answer: "import is used to include exported functions, variables, or classes from other modules into the current module.",
        falseAnswer1: "import loads external JavaScript libraries only.",
        falseAnswer2: "import creates a new copy of the imported code."
    },
    {
        question: "What is Git?",
        answer: "Git is a distributed version control system used to track code changes, enable collaboration, and maintain project history.",
        falseAnswer1: "Git is a cloud storage service for backing up code files.",
        falseAnswer2: "Git is a programming language for web development."
    },
    {
        question: "What is a Git commit?",
        answer: "A commit is a snapshot of changes to the repository that includes a unique ID, message, author, and timestamp.",
        falseAnswer1: "A commit is a published version of code released to production.",
        falseAnswer2: "A commit is a backup copy of all files in the repository."
    },
    {
        question: "What is a branch in Git?",
        answer: "A branch is an independent line of development that allows you to work on features separately without affecting the main code.",
        falseAnswer1: "A branch is a backup of the main repository.",
        falseAnswer2: "A branch is a folder structure in the project directory."
    },
    {
        question: "What is the master/main branch?",
        answer: "The main branch (formerly master) is the default branch that typically contains production-ready code.",
        falseAnswer1: "The main branch is a temporary branch used only for development.",
        falseAnswer2: "The main branch is automatically created for every feature."
    },
    {
        question: "What is a pull request (PR)?",
        answer: "A pull request is a request to merge code changes from one branch into another, allowing code review before merging.",
        falseAnswer1: "A pull request downloads code from the remote repository.",
        falseAnswer2: "A pull request is a way to create a new branch."
    },
    {
        question: "What is a merge in Git?",
        answer: "A merge combines changes from one branch into another, integrating the code and history from both branches.",
        falseAnswer1: "A merge deletes one branch after combining code.",
        falseAnswer2: "A merge creates a backup of both branches."
    },
    {
        question: "What is a merge conflict?",
        answer: "A merge conflict occurs when Git cannot automatically reconcile changes made to the same lines in different branches.",
        falseAnswer1: "A merge conflict happens when a branch is older than the main branch.",
        falseAnswer2: "A merge conflict is when two developers work on the same project."
    },
    {
        question: "What is a rebase in Git?",
        answer: "A rebase rewrites commit history by replaying commits from one branch on top of another, creating a linear history.",
        falseAnswer1: "A rebase merges two branches and creates a merge commit.",
        falseAnswer2: "A rebase reverts all commits back to the original state."
    },
    {
        question: "What is the difference between merge and rebase?",
        answer: "Merge creates a merge commit and preserves history, while rebase rewrites history and creates a linear commit chain.",
        falseAnswer1: "Merge is faster than rebase and should always be used.",
        falseAnswer2: "Rebase and merge produce identical results."
    },
    {
        question: "What is git stash?",
        answer: "git stash temporarily saves uncommitted changes so you can switch branches and retrieve them later.",
        falseAnswer1: "git stash permanently deletes uncommitted changes.",
        falseAnswer2: "git stash commits all changes automatically."
    },
    {
        question: "What is git revert?",
        answer: "git revert creates a new commit that undoes the changes from a previous commit, preserving the full history.",
        falseAnswer1: "git revert deletes a commit permanently from history.",
        falseAnswer2: "git revert switches to a previous branch state."
    },
    {
        question: "What is git reset?",
        answer: "git reset moves the current branch pointer to a specified commit, potentially discarding commits or unstaging changes.",
        falseAnswer1: "git reset creates a backup of the repository.",
        falseAnswer2: "git reset is the same as git revert."
    },
    {
        question: "What is git log?",
        answer: "git log displays the commit history showing commits, authors, dates, and messages for the current branch.",
        falseAnswer1: "git log lists all files modified in the repository.",
        falseAnswer2: "git log shows all branches available in the repository."
    },
    {
        question: "What is git diff?",
        answer: "git diff shows the differences (additions, deletions, modifications) between commits, branches, or the working directory.",
        falseAnswer1: "git diff creates a backup of changed files.",
        falseAnswer2: "git diff merges two branches together."
    },
    {
        question: "What is a remote repository?",
        answer: "A remote repository is a version of the repository hosted on a server (like GitHub) where the team shares code.",
        falseAnswer1: "A remote repository is a backup stored on your local machine.",
        falseAnswer2: "A remote repository is a temporary copy of the project."
    },
    {
        question: "What is git push?",
        answer: "git push sends local commits to the remote repository, making changes available to other developers.",
        falseAnswer1: "git push downloads changes from the remote repository.",
        falseAnswer2: "git push creates a backup of local files."
    },
    {
        question: "What is git pull?",
        answer: "git pull fetches changes from the remote repository and merges them into the current local branch.",
        falseAnswer1: "git pull sends local commits to the server.",
        falseAnswer2: "git pull deletes the remote repository."
    },
    {
        question: "What is the difference between git fetch and git pull?",
        answer: "git fetch retrieves changes from remote without merging, while git pull fetches and automatically merges them.",
        falseAnswer1: "git fetch and git pull do the same thing.",
        falseAnswer2: "git pull is faster than git fetch."
    },
    {
        question: "What is a .gitignore file?",
        answer: ".gitignore specifies files and directories that Git should not track or include in commits.",
        falseAnswer1: ".gitignore creates a backup of ignored files.",
        falseAnswer2: ".gitignore deletes files from the repository."
    },
    {
        question: "What is REST?",
        answer: "REST (Representational State Transfer) is an architectural style for building web services using HTTP methods and standard conventions.",
        falseAnswer1: "REST is a database query language like SQL.",
        falseAnswer2: "REST is a JavaScript framework for building web applications."
    },
    {
        question: "What are HTTP methods?",
        answer: "HTTP methods are verbs (GET, POST, PUT, DELETE, PATCH) that indicate the action to be performed on a resource.",
        falseAnswer1: "HTTP methods are the URL paths in an API.",
        falseAnswer2: "HTTP methods are authentication tokens for API access."
    },
    {
        question: "What is GET in REST?",
        answer: "GET is an HTTP method used to retrieve data from a server without modifying it; it's idempotent and safe.",
        falseAnswer1: "GET is used to create new resources on the server.",
        falseAnswer2: "GET is used to delete resources from the server."
    },
    {
        question: "What is POST in REST?",
        answer: "POST is an HTTP method used to create new resources on the server by sending data in the request body.",
        falseAnswer1: "POST is used to retrieve data from the server.",
        falseAnswer2: "POST is used to delete resources from the server."
    },
    {
        question: "What is PUT in REST?",
        answer: "PUT is an HTTP method used to replace an entire resource with new data; it requires the complete resource representation.",
        falseAnswer1: "PUT is used to partially update a resource.",
        falseAnswer2: "PUT is used to retrieve data from the server."
    },
    {
        question: "What is PATCH in REST?",
        answer: "PATCH is an HTTP method used to partially update a resource by sending only the fields that need to be changed.",
        falseAnswer1: "PATCH is used to replace an entire resource.",
        falseAnswer2: "PATCH is used to delete resources from the server."
    },
    {
        question: "What is DELETE in REST?",
        answer: "DELETE is an HTTP method used to remove a resource from the server.",
        falseAnswer1: "DELETE is used to create new resources.",
        falseAnswer2: "DELETE is used to retrieve data from the server."
    },
    {
        question: "What are HTTP status codes?",
        answer: "HTTP status codes are three-digit numbers indicating the outcome of an HTTP request (1xx, 2xx, 3xx, 4xx, 5xx).",
        falseAnswer1: "HTTP status codes are time values indicating how long a request took.",
        falseAnswer2: "HTTP status codes are user authentication credentials."
    },
    {
        question: "What does a 200 status code mean?",
        answer: "A 200 status code means 'OK' - the request was successful and the server returned the requested data.",
        falseAnswer1: "A 200 status code means the resource was moved permanently.",
        falseAnswer2: "A 200 status code means the request was invalid."
    },
    {
        question: "What does a 404 status code mean?",
        answer: "A 404 status code means 'Not Found' - the requested resource does not exist on the server.",
        falseAnswer1: "A 404 status code means the server is temporarily unavailable.",
        falseAnswer2: "A 404 status code means the request was successful."
    },
    {
        question: "What does a 500 status code mean?",
        answer: "A 500 status code means 'Internal Server Error' - an unexpected error occurred on the server.",
        falseAnswer1: "A 500 status code means the request was invalid.",
        falseAnswer2: "A 500 status code means the resource was not found."
    },
    {
        question: "What is the difference between 201 and 200 status codes?",
        answer: "201 'Created' indicates a new resource was successfully created, while 200 'OK' indicates a general successful request.",
        falseAnswer1: "201 is for GET requests while 200 is for POST requests.",
        falseAnswer2: "201 and 200 are identical status codes."
    },
    {
        question: "What is an API endpoint?",
        answer: "An API endpoint is a specific URL that represents a resource and accepts HTTP requests to perform operations on that resource.",
        falseAnswer1: "An API endpoint is the server's physical location.",
        falseAnswer2: "An API endpoint is an authentication token."
    },
    {
        question: "What is a request body?",
        answer: "A request body is data sent with HTTP requests (typically POST, PUT, PATCH) containing information to be processed.",
        falseAnswer1: "A request body is the URL path of the API.",
        falseAnswer2: "A request body is the HTTP method used."
    },
    {
        question: "What are request headers?",
        answer: "Request headers are metadata sent with HTTP requests providing information about the request like content type and authorization.",
        falseAnswer1: "Request headers are the response data from the server.",
        falseAnswer2: "Request headers are URL parameters."
    },
    {
        question: "What is the Content-Type header?",
        answer: "Content-Type header specifies the format of data being sent or received, commonly 'application/json' for JSON data.",
        falseAnswer1: "Content-Type header specifies the file size of the request.",
        falseAnswer2: "Content-Type header authenticates the user."
    },
    {
        question: "What is authentication in APIs?",
        answer: "Authentication is the process of verifying the identity of a client accessing an API, typically using tokens or credentials.",
        falseAnswer1: "Authentication is the process of storing API data permanently.",
        falseAnswer2: "Authentication is the format of the API response."
    },
    {
        question: "What is an API token?",
        answer: "An API token is a unique credential issued to a client that authorizes access to an API, typically sent in the Authorization header.",
        falseAnswer1: "An API token is a unique identifier for each API endpoint.",
        falseAnswer2: "An API token is a backup of the API server."
    },
    {
        question: "What is CORS?",
        answer: "CORS (Cross-Origin Resource Sharing) is a mechanism allowing servers to specify which origins can access their resources.",
        falseAnswer1: "CORS is a method for encrypting API responses.",
        falseAnswer2: "CORS is a way to cache API responses."
    },
    {
        question: "What is pagination in APIs?",
        answer: "Pagination divides large result sets into manageable pages, typically using limit and offset parameters to retrieve data in chunks.",
        falseAnswer1: "Pagination is a way to sort API results.",
        falseAnswer2: "Pagination encrypts API responses."
    },
    {
        question: "What is filtering in APIs?",
        answer: "Filtering allows clients to request only resources matching specific criteria using query parameters.",
        falseAnswer1: "Filtering sorts API results in ascending order.",
        falseAnswer2: "Filtering removes invalid data from responses."
    },
    {
        question: "What is a render prop?",
        answer: "A render prop is a React pattern where a component receives a function as a prop and calls it to render content, enabling logic reuse.",
        falseAnswer1: "A render prop is used to style components.",
        falseAnswer2: "A render prop is a deprecated React feature."
    },
    {
        question: "What is a compound component?",
        answer: "A compound component is a pattern where components work together as a group, sharing implicit state and coordinating behavior.",
        falseAnswer1: "A compound component is a large component made of smaller pieces.",
        falseAnswer2: "A compound component is created using CSS modules."
    },
    {
        question: "What is a custom hook?",
        answer: "A custom hook is a reusable function that uses React hooks internally and shares stateful logic between components.",
        falseAnswer1: "A custom hook is a React component with hooks.",
        falseAnswer2: "A custom hook is a built-in React feature."
    },
    {
        question: "What is the Container/Presentational pattern?",
        answer: "Container/Presentational is a pattern where containers handle logic and state, while presentational components just render UI.",
        falseAnswer1: "Container/Presentational is used to style components.",
        falseAnswer2: "Container/Presentational is a deprecated React pattern."
    },
    {
        question: "What is prop validation with PropTypes?",
        answer: "PropTypes is a library for runtime type checking of React component props to catch bugs during development.",
        falseAnswer1: "PropTypes prevents components from rendering invalid props.",
        falseAnswer2: "PropTypes automatically converts prop types."
    },
    {
        question: "What is accessibility (a11y)?",
        answer: "Accessibility is the practice of designing websites and applications usable by everyone, including people with disabilities.",
        falseAnswer1: "Accessibility is a feature for hiding website content.",
        falseAnswer2: "Accessibility is a performance optimization technique."
    },
    {
        question: "What is semantic HTML?",
        answer: "Semantic HTML uses meaningful tags (article, nav, section, button) that convey content meaning to browsers and assistive technologies.",
        falseAnswer1: "Semantic HTML is HTML that follows CSS styling rules.",
        falseAnswer2: "Semantic HTML is automatically generated by React."
    },
    {
        question: "What is ARIA?",
        answer: "ARIA (Accessible Rich Internet Applications) is a set of attributes that improve accessibility for dynamic and interactive web content.",
        falseAnswer1: "ARIA is a JavaScript framework for building web apps.",
        falseAnswer2: "ARIA is a CSS preprocessor."
    },
    {
        question: "What is an alt attribute?",
        answer: "The alt attribute provides alternative text for images, describing the image for screen readers and when images fail to load.",
        falseAnswer1: "The alt attribute changes the appearance of an image.",
        falseAnswer2: "The alt attribute stores image metadata."
    },
    {
        question: "What is keyboard navigation?",
        answer: "Keyboard navigation allows users to navigate and interact with web content using only the keyboard, essential for accessibility.",
        falseAnswer1: "Keyboard navigation is a feature for power users only.",
        falseAnswer2: "Keyboard navigation is disabled by default in browsers."
    },
    {
        question: "What is focus management?",
        answer: "Focus management ensures keyboard focus is visible and moves logically through interactive elements for accessibility.",
        falseAnswer1: "Focus management is a CSS feature for styling.",
        falseAnswer2: "Focus management is only needed for buttons."
    },
    {
        question: "What is the tab order in HTML?",
        answer: "Tab order is the sequence elements receive focus when using the Tab key, determined by the DOM order and tabindex attribute.",
        falseAnswer1: "Tab order is the number of tabs open in the browser.",
        falseAnswer2: "Tab order is controlled only by CSS."
    },
    {
        question: "What is the tabindex attribute?",
        answer: "The tabindex attribute controls the tab order and focusability of elements; positive values specify order, 0 makes it focusable.",
        falseAnswer1: "The tabindex attribute changes the appearance of an element.",
        falseAnswer2: "The tabindex attribute is only used for form inputs."
    },
    {
        question: "What is aria-label?",
        answer: "aria-label provides an accessible name for an element when there's no visible text, helping screen readers identify the element.",
        falseAnswer1: "aria-label changes the visual appearance of an element.",
        falseAnswer2: "aria-label is used only for buttons."
    },
    {
        question: "What is a screen reader?",
        answer: "A screen reader is assistive software that reads website content aloud, helping blind and visually impaired users access web pages.",
        falseAnswer1: "A screen reader is a browser extension for highlighting text.",
        falseAnswer2: "A screen reader is a tool for reading QR codes."
    },
    {
        question: "What is color contrast in accessibility?",
        answer: "Color contrast refers to the difference in brightness between text and background, important for readability for users with low vision.",
        falseAnswer1: "Color contrast is a CSS property for styling.",
        falseAnswer2: "Color contrast only applies to dark mode."
    },
    {
        question: "What is Web Content Accessibility Guidelines (WCAG)?",
        answer: "WCAG are international guidelines for making web content accessible to people with disabilities, organized by levels A, AA, and AAA.",
        falseAnswer1: "WCAG is a JavaScript library for accessibility.",
        falseAnswer2: "WCAG is a CSS framework for styling."
    },
    {
        question: "What is performance optimization?",
        answer: "Performance optimization involves improving website speed and responsiveness by reducing load times and resource usage.",
        falseAnswer1: "Performance optimization is only needed for large applications.",
        falseAnswer2: "Performance optimization is handled automatically by browsers."
    },
    {
        question: "What is lazy loading?",
        answer: "Lazy loading defers loading of images or components until they're needed (visible in viewport), reducing initial load time.",
        falseAnswer1: "Lazy loading is when components fail to load.",
        falseAnswer2: "Lazy loading is a deprecated technique."
    },
    {
        question: "What is code splitting?",
        answer: "Code splitting divides code into smaller chunks that are loaded on-demand rather than loading everything upfront.",
        falseAnswer1: "Code splitting removes unused code from bundles.",
        falseAnswer2: "Code splitting is only used for CSS files."
    },
    {
        question: "What is memoization in performance?",
        answer: "Memoization caches the results of expensive computations and returns cached results for identical inputs.",
        falseAnswer1: "Memoization stores data in the browser cache.",
        falseAnswer2: "Memoization automatically optimizes all functions."
    },
    {
        question: "What is the Critical Rendering Path?",
        answer: "The Critical Rendering Path is the sequence of steps the browser takes to render a page, affecting initial load performance.",
        falseAnswer1: "The Critical Rendering Path is the route to the server.",
        falseAnswer2: "The Critical Rendering Path only affects mobile performance."
    },
    {
        question: "What is image optimization?",
        answer: "Image optimization reduces file sizes through compression, format selection, and responsive sizing without sacrificing quality.",
        falseAnswer1: "Image optimization makes images larger for better quality.",
        falseAnswer2: "Image optimization is only for mobile devices."
    },
    {
        question: "What is a Content Delivery Network (CDN)?",
        answer: "A CDN distributes content across geographically dispersed servers, delivering content from servers closest to users for faster access.",
        falseAnswer1: "A CDN is a backup service for websites.",
        falseAnswer2: "A CDN is a way to encrypt website content."
    },
    {
        question: "What is minification?",
        answer: "Minification removes unnecessary characters from code (whitespace, comments) to reduce file size without affecting functionality.",
        falseAnswer1: "Minification makes code easier to read.",
        falseAnswer2: "Minification is only used for CSS files."
    },
    {
        question: "What is caching?",
        answer: "Caching stores copies of files or data to avoid repeated processing, reducing server load and improving access speed.",
        falseAnswer1: "Caching permanently stores data in memory.",
        falseAnswer2: "Caching is only used for large files."
    },
    {
        question: "What is error boundary in React?",
        answer: "An error boundary is a React component that catches JavaScript errors in child components and displays fallback UI instead of crashing.",
        falseAnswer1: "An error boundary prevents all errors from occurring.",
        falseAnswer2: "An error boundary is used to catch network errors."
    },
    {
        question: "What is a try-catch block?",
        answer: "A try-catch block handles exceptions by attempting code in try, and executing error handling in catch if an error occurs.",
        falseAnswer1: "A try-catch block prevents errors from being thrown.",
        falseAnswer2: "A try-catch block is used only for async operations."
    },
    {
        question: "What is error handling in APIs?",
        answer: "Error handling in APIs involves properly catching, logging, and returning meaningful error responses to clients.",
        falseAnswer1: "Error handling in APIs prevents network failures.",
        falseAnswer2: "Error handling in APIs is optional for production code."
    },
    {
        question: "What is graceful degradation?",
        answer: "Graceful degradation ensures a website remains functional with reduced features when advanced features fail or aren't supported.",
        falseAnswer1: "Graceful degradation removes unsupported features entirely.",
        falseAnswer2: "Graceful degradation is only for older browsers."
    },
    {
        question: "What is progressive enhancement?",
        answer: "Progressive enhancement builds websites with basic functionality first, then adds advanced features for browsers that support them.",
        falseAnswer1: "Progressive enhancement prevents pages from loading.",
        falseAnswer2: "Progressive enhancement is the same as graceful degradation."
    },
    {
        question: "What is a loading state?",
        answer: "A loading state indicates that an operation is in progress, providing visual feedback to users during asynchronous operations.",
        falseAnswer1: "A loading state prevents users from interacting with the page.",
        falseAnswer2: "A loading state is automatically managed by React."
    },
    {
        question: "What is an error state?",
        answer: "An error state displays when an operation fails, showing users what went wrong and providing options to recover or retry.",
        falseAnswer1: "An error state hides the error from users.",
        falseAnswer2: "An error state automatically reloads the page."
    },
    {
        question: "What is validation in forms?",
        answer: "Form validation checks user input against rules before submission, catching errors early and providing feedback to users.",
        falseAnswer1: "Form validation happens only on the server.",
        falseAnswer2: "Form validation prevents users from submitting forms."
    },
    {
        question: "What is client-side vs server-side validation?",
        answer: "Client-side validation happens in the browser for immediate feedback; server-side validation is critical for security and data integrity.",
        falseAnswer1: "Client-side validation is more secure than server-side.",
        falseAnswer2: "Server-side validation is optional if client-side works."
    },
    {
        question: "What is exception handling?",
        answer: "Exception handling is managing errors that occur during program execution using mechanisms like try-catch to prevent crashes.",
        falseAnswer1: "Exception handling prevents all errors from occurring.",
        falseAnswer2: "Exception handling is only for production environments."
    },
    {
        question: "What is a fallback UI?",
        answer: "A fallback UI is displayed when the main content fails to load, providing a graceful user experience during errors or delays.",
        falseAnswer1: "A fallback UI prevents components from loading.",
        falseAnswer2: "A fallback UI is only for mobile devices."
    },
    {
        question: "What is logging errors?",
        answer: "Error logging records error information (message, stack trace, context) for debugging and monitoring application health.",
        falseAnswer1: "Error logging prevents errors from occurring.",
        falseAnswer2: "Error logging is only needed during development."
    },
    {
        question: "What is a 404 error page?",
        answer: "A 404 error page is displayed when a user requests a resource that doesn't exist, with helpful navigation or search options.",
        falseAnswer1: "A 404 error page crashes the entire application.",
        falseAnswer2: "A 404 error page is the same as a server error."
    },
    {
        question: "What is connection timeout?",
        answer: "Connection timeout occurs when a client cannot establish a connection to the server within a specified time limit.",
        falseAnswer1: "Connection timeout is when the page takes too long to load.",
        falseAnswer2: "Connection timeout is a browser cache issue."
    },
    {
        question: "What is a retry mechanism?",
        answer: "A retry mechanism automatically attempts an operation again after a failure, often with increasing delays (exponential backoff).",
        falseAnswer1: "A retry mechanism prevents operations from failing.",
        falseAnswer2: "A retry mechanism is only for databases."
    },
    {
        question: "What is the difference between warnings and errors in console?",
        answer: "Errors indicate critical issues that break functionality, while warnings indicate potential problems that don't stop execution.",
        falseAnswer1: "Warnings and errors have the same severity.",
        falseAnswer2: "Warnings only appear in development mode."
    },
    {
        question: "What is console debugging?",
        answer: "Console debugging uses console methods (log, error, warn) to output information during execution for understanding program flow.",
        falseAnswer1: "Console debugging prevents errors from occurring.",
        falseAnswer2: "Console debugging is only for development environments."
    },
    {
        question: "What is the debugger statement?",
        answer: "The debugger statement pauses code execution when DevTools is open, allowing inspection of variables and code at that point.",
        falseAnswer1: "The debugger statement removes bugs automatically.",
        falseAnswer2: "The debugger statement is only for testing code."
    },
    {
        question: "What is a breakpoint?",
        answer: "A breakpoint is a point in code where execution pauses when reached, allowing inspection of program state in the debugger.",
        falseAnswer1: "A breakpoint is where the code stops permanently.",
        falseAnswer2: "A breakpoint prevents code from running."
    },
    {
        question: "What is the stack trace?",
        answer: "A stack trace shows the sequence of function calls leading to an error, helping identify where and why the error occurred.",
        falseAnswer1: "A stack trace is a list of all variables in memory.",
        falseAnswer2: "A stack trace is generated only for fatal errors."
    },
    {
        question: "What is defensive programming?",
        answer: "Defensive programming involves writing code that anticipates and handles potential errors and invalid inputs gracefully.",
        falseAnswer1: "Defensive programming prevents all bugs.",
        falseAnswer2: "Defensive programming is only for critical systems."
    },
    {
        question: "What is input sanitization?",
        answer: "Input sanitization removes or escapes potentially harmful characters from user input before processing or storing it.",
        falseAnswer1: "Input sanitization prevents users from entering special characters.",
        falseAnswer2: "Input sanitization is only needed for password fields."
    },
    {
        question: "What is XSS (Cross-Site Scripting)?",
        answer: "XSS is a security vulnerability where attackers inject malicious scripts into web pages viewed by other users.",
        falseAnswer1: "XSS is a performance issue related to script execution.",
        falseAnswer2: "XSS is a type of database error."
    },
    {
        question: "What is CSRF (Cross-Site Request Forgery)?",
        answer: "CSRF is a security attack where an attacker tricks users into performing unwanted actions on a site they're authenticated to.",
        falseAnswer1: "CSRF is a type of network routing error.",
        falseAnswer2: "CSRF is a database vulnerability."
    },
    {
        question: "What is SQL injection?",
        answer: "SQL injection is a security attack where attackers insert malicious SQL code into input fields to manipulate database queries.",
        falseAnswer1: "SQL injection is a JavaScript syntax error.",
        falseAnswer2: "SQL injection is a type of network attack."
    },
    {
        question: "What is authentication vs authorization?",
        answer: "Authentication verifies who a user is, while authorization determines what resources an authenticated user can access.",
        falseAnswer1: "Authentication and authorization are the same process.",
        falseAnswer2: "Authorization happens before authentication."
    },
    {
        question: "What is JWT (JSON Web Token)?",
        answer: "JWT is a token format containing encoded claims that prove authentication without requiring server-side session storage.",
        falseAnswer1: "JWT is a method for encrypting passwords.",
        falseAnswer2: "JWT is a replacement for HTTPS security."
    },
    {
        question: "What is HTTPS?",
        answer: "HTTPS is HTTP with encryption (SSL/TLS), securing data transmission by encrypting communication between client and server.",
        falseAnswer1: "HTTPS is faster than HTTP.",
        falseAnswer2: "HTTPS is only needed for websites with logins."
    },
    {
        question: "What is environment variables?",
        answer: "Environment variables are configuration values stored outside code that change per environment (dev, staging, production).",
        falseAnswer1: "Environment variables are stored in the code repository.",
        falseAnswer2: "Environment variables are only used for passwords."
    },
    {
        question: "What is a .env file?",
        answer: "A .env file stores environment variables locally during development and is typically ignored by version control.",
        falseAnswer1: "A .env file is deployed to production.",
        falseAnswer2: "A .env file contains source code."
    },
    {
        question: "What is the difference between development and production builds?",
        answer: "Development builds include source maps and debugging info; production builds are optimized, minified, and stripped of debug code.",
        falseAnswer1: "Development and production builds are identical.",
        falseAnswer2: "Production builds are slower than development builds."
    },
    {
        question: "What is a build tool?",
        answer: "A build tool automates tasks like transpiling, bundling, minifying, and optimizing code for deployment.",
        falseAnswer1: "A build tool is used only for testing code.",
        falseAnswer2: "A build tool is a deployment platform."
    },
    {
        question: "What is webpack?",
        answer: "webpack is a module bundler that combines JavaScript modules and assets into optimized bundles for browser delivery.",
        falseAnswer1: "webpack is a styling framework.",
        falseAnswer2: "webpack is a testing library."
    },
    {
        question: "What is npm?",
        answer: "npm (Node Package Manager) is the package manager for JavaScript, used to install, manage, and share code dependencies.",
        falseAnswer1: "npm is a code editor.",
        falseAnswer2: "npm is a web hosting service."
    },
    {
        question: "What is package.json?",
        answer: "package.json is a file listing project metadata, dependencies, scripts, and configuration for a Node.js/npm project.",
        falseAnswer1: "package.json stores compiled code.",
        falseAnswer2: "package.json is generated by the browser."
    },
    {
        question: "What is package-lock.json?",
        answer: "package-lock.json locks exact versions of installed dependencies to ensure consistent installations across environments.",
        falseAnswer1: "package-lock.json is a backup of package.json.",
        falseAnswer2: "package-lock.json stores project configuration."
    },
    {
        question: "What is a monorepo?",
        answer: "A monorepo is a single repository containing multiple related projects or packages, managed together with shared dependencies.",
        falseAnswer1: "A monorepo is a backup repository.",
        falseAnswer2: "A monorepo is used only for large companies."
    },
    {
        question: "What is continuous integration (CI)?",
        answer: "CI automatically runs tests and builds when code is pushed, catching integration issues early in the development process.",
        falseAnswer1: "CI is a deployment platform.",
        falseAnswer2: "CI is only used for production releases."
    },
    {
        question: "What is continuous deployment (CD)?",
        answer: "CD automatically deploys tested code to production or staging environments, enabling rapid release cycles.",
        falseAnswer1: "CD is the same as continuous integration.",
        falseAnswer2: "CD requires manual approval for each deployment."
    },
    {
        question: "What is semantic versioning?",
        answer: "Semantic versioning uses X.Y.Z format where X is major, Y is minor, Z is patch, communicating breaking vs compatible changes.",
        falseAnswer1: "Semantic versioning is only for major releases.",
        falseAnswer2: "Semantic versioning determines code quality."
    },
    {
        question: "What is the difference between dependencies and devDependencies?",
        answer: "dependencies are required for the app to run in production, while devDependencies are only needed during development.",
        falseAnswer1: "devDependencies are also installed in production.",
        falseAnswer2: "dependencies and devDependencies are identical."
    },
    {
        question: "What is a monolithic architecture?",
        answer: "A monolithic architecture combines all functionality into a single application, making it simpler but harder to scale.",
        falseAnswer1: "A monolithic architecture is the same as microservices.",
        falseAnswer2: "A monolithic architecture is used only for small apps."
    },
    {
        question: "What is a microservices architecture?",
        answer: "A microservices architecture divides functionality into independent, deployable services that communicate via APIs.",
        falseAnswer1: "A microservices architecture is used only for very large apps.",
        falseAnswer2: "A microservices architecture requires less infrastructure."
    },
    {
        question: "What is Docker?",
        answer: "Docker is a containerization platform that packages applications with dependencies into containers for consistent deployment.",
        falseAnswer1: "Docker is a version control system.",
        falseAnswer2: "Docker is a database platform."
    },
    {
        question: "What is the concept of 'immutable' deployments?",
        answer: "Immutable deployments create new infrastructure for each deployment instead of modifying existing systems, improving reliability.",
        falseAnswer1: "Immutable deployments prevent code changes.",
        falseAnswer2: "Immutable deployments are faster than regular deployments."
    },
    {
        question: "What is a feature flag?",
        answer: "A feature flag is a control allowing developers to enable/disable features in production without redeploying, useful for gradual rollouts.",
        falseAnswer1: "A feature flag is a variable that stores feature names.",
        falseAnswer2: "A feature flag is a Git branch naming convention."
    },
    {
        question: "What is A/B testing?",
        answer: "A/B testing compares two versions of a feature with different users to determine which performs better.",
        falseAnswer1: "A/B testing is only for UI changes.",
        falseAnswer2: "A/B testing compares different browsers."
    },
    {
        question: "What is monitoring in production?",
        answer: "Production monitoring tracks application health, performance, and errors in real-time to alert teams to issues.",
        falseAnswer1: "Production monitoring is only needed for critical apps.",
        falseAnswer2: "Production monitoring prevents errors from occurring."
    },
    {
        question: "What is an SLA (Service Level Agreement)?",
        answer: "An SLA is a commitment specifying expected service uptime and performance levels, with penalties for breaches.",
        falseAnswer1: "An SLA is a type of software license.",
        falseAnswer2: "An SLA is required only for paid services."
    },
    {
        question: "What is technical debt?",
        answer: "Technical debt refers to shortcuts or suboptimal code that speeds up development but requires future refactoring.",
        falseAnswer1: "Technical debt is the cost of hosting servers.",
        falseAnswer2: "Technical debt is a type of software bug."
    },
    {
        question: "What is refactoring?",
        answer: "Refactoring is improving code structure and quality without changing functionality, reducing complexity and technical debt.",
        falseAnswer1: "Refactoring changes the application's behavior.",
        falseAnswer2: "Refactoring always slows down development."
    },
    {
        question: "What is code review?",
        answer: "Code review is a peer process where developers examine code changes for quality, correctness, and adherence to standards.",
        falseAnswer1: "Code review prevents all bugs.",
        falseAnswer2: "Code review is only for junior developers."
    },
    {
        question: "What is pair programming?",
        answer: "Pair programming involves two developers working at one computer on the same code, improving quality and knowledge sharing.",
        falseAnswer1: "Pair programming is slower than individual development.",
        falseAnswer2: "Pair programming is only for difficult problems."
    },
    {
        question: "What is agile methodology?",
        answer: "Agile is an iterative development approach emphasizing collaboration, flexibility, and continuous improvement in short sprints.",
        falseAnswer1: "Agile is a type of project management software.",
        falseAnswer2: "Agile requires less planning than waterfall."
    },
    {
        question: "What is a sprint in agile?",
        answer: "A sprint is a fixed time period (typically 2 weeks) where a team completes planned work items and delivers a potentially shippable increment.",
        falseAnswer1: "A sprint is a type of running exercise.",
        falseAnswer2: "A sprint is a version control branch."
    },
    {
        question: "What is Scrum?",
        answer: "Scrum is an agile framework using sprints, standups, and retrospectives to organize work and improve team performance.",
        falseAnswer1: "Scrum is a code quality tool.",
        falseAnswer2: "Scrum is only for large teams."
    },
    {
        question: "What is the difference between .call(), .apply(), and .bind()?",
        answer: ".call() and .apply() invoke a function immediately with a specified 'this' context (apply accepts array of args), while .bind() returns a new function with 'this' bound without invoking it.",
        falseAnswer1: "All three methods do the same thing and can be used interchangeably.",
        falseAnswer2: ".call() and .bind() accept multiple arguments, while .apply() only accepts a single argument."
    },
    {
        question: "What does .bind() do?",
        answer: ".bind() creates a new function with a permanently bound 'this' context and optional preset arguments, returning the function without executing it.",
        falseAnswer1: ".bind() immediately invokes a function with a specific 'this' context.",
        falseAnswer2: ".bind() creates a copy of a function that shares the same 'this' as the original."
    },
    {
        question: "What does .call() do?",
        answer: ".call() invokes a function immediately with a specified 'this' context and arguments passed individually.",
        falseAnswer1: ".call() creates a new function without executing it.",
        falseAnswer2: ".call() passes arguments as an array to the function."
    },
    {
        question: "What does .apply() do?",
        answer: ".apply() invokes a function immediately with a specified 'this' context and arguments passed as an array.",
        falseAnswer1: ".apply() passes arguments individually to the function.",
        falseAnswer2: ".apply() creates a new function with bound 'this' context."
    },
    {
        question: "What is Promise.all()?",
        answer: "Promise.all() takes an array of Promises and returns a single Promise that resolves when all input Promises resolve, or rejects if any Promise rejects.",
        falseAnswer1: "Promise.all() executes all Promises sequentially one after another.",
        falseAnswer2: "Promise.all() returns the result of whichever Promise resolves first."
    },
    {
        question: "What is Promise.race()?",
        answer: "Promise.race() takes an array of Promises and returns a single Promise that resolves or rejects as soon as the first Promise settles.",
        falseAnswer1: "Promise.race() waits for all Promises to complete before returning.",
        falseAnswer2: "Promise.race() returns the results of only the rejected Promises."
    },
    {
        question: "What is Promise.allSettled()?",
        answer: "Promise.allSettled() returns a Promise that resolves after all input Promises settle, returning results with status and value/reason for each.",
        falseAnswer1: "Promise.allSettled() fails immediately if any Promise rejects.",
        falseAnswer2: "Promise.allSettled() returns only the results of resolved Promises."
    },
    {
        question: "What is optional chaining (?.)?",
        answer: "Optional chaining (?.) safely accesses nested properties by returning undefined if the reference is null or undefined, instead of throwing an error.",
        falseAnswer1: "Optional chaining (?.) is used to chain multiple function calls together.",
        falseAnswer2: "Optional chaining (?.) is a way to access object properties conditionally using an if statement."
    },
    {
        question: "What is the nullish coalescing operator (??)?",
        answer: "The nullish coalescing operator (??) returns the right operand if the left operand is null or undefined, otherwise returns the left operand.",
        falseAnswer1: "The nullish coalescing operator (??) is the same as the logical OR operator (||).",
        falseAnswer2: "The nullish coalescing operator (??) checks if a value is undefined without checking null."
    },
    {
        question: "What is the difference between ?? and ||?",
        answer: "?? returns the right value only for null/undefined, while || returns the right value for any falsy value (0, '', false, NaN, etc).",
        falseAnswer1: "?? and || work identically in all situations.",
        falseAnswer2: "|| is more useful than ?? because it handles all falsy values."
    },
    {
        question: "What does .push() do?",
        answer: ".push() adds one or more elements to the end of an array, modifies the original array, and returns the new array length.",
        falseAnswer1: ".push() creates a new array with the added elements.",
        falseAnswer2: ".push() adds elements at the beginning of an array."
    },
    {
        question: "What does .pop() do?",
        answer: ".pop() removes the last element from an array, modifies the original array, and returns the removed element.",
        falseAnswer1: ".pop() creates a new array without the last element.",
        falseAnswer2: ".pop() removes the first element from an array."
    },
    {
        question: "What does .shift() do?",
        answer: ".shift() removes the first element from an array, modifies the original array, and returns the removed element.",
        falseAnswer1: ".shift() moves elements to the right and returns the array.",
        falseAnswer2: ".shift() removes the last element from an array."
    },
    {
        question: "What does .unshift() do?",
        answer: ".unshift() adds one or more elements to the beginning of an array, modifies the original array, and returns the new array length.",
        falseAnswer1: ".unshift() adds elements at the end of an array.",
        falseAnswer2: ".unshift() creates a new array with added elements."
    },
    {
        question: "What is the difference between push/pop and shift/unshift?",
        answer: "push/pop modify the end of an array while shift/unshift modify the beginning; all four mutate the original array and return relevant values.",
        falseAnswer1: "push/pop are faster than shift/unshift in all situations.",
        falseAnswer2: "push/pop create new arrays while shift/unshift modify the original."
    },
    {
        question: "What is Array.isArray()?",
        answer: "Array.isArray() returns true if the value is an array, otherwise false; it's more reliable than typeof for detecting arrays.",
        falseAnswer1: "Array.isArray() checks if an array contains specific elements.",
        falseAnswer2: "Array.isArray() converts a value into an array."
    },
    {
        question: "What is Array.from()?",
        answer: "Array.from() creates a shallow copy of an array from an array-like or iterable object (strings, Sets, Maps, NodeLists).",
        falseAnswer1: "Array.from() extracts a portion of an array without modifying it.",
        falseAnswer2: "Array.from() merges multiple arrays together."
    },
    {
        question: "What is .flat()?",
        answer: ".flat() creates a new array with all sub-arrays concatenated recursively up to a specified depth, flattening nested arrays.",
        falseAnswer1: ".flat() removes duplicate elements from an array.",
        falseAnswer2: ".flat() sorts array elements in descending order."
    },
    {
        question: "What is .flatMap()?",
        answer: ".flatMap() maps each element using a function and then flattens the result by one level, combining map and flat operations.",
        falseAnswer1: ".flatMap() flattens an array without applying a function to elements.",
        falseAnswer2: ".flatMap() is slower than using map and flat separately."
    },
    {
        question: "What is .findIndex()?",
        answer: ".findIndex() returns the index of the first element that satisfies the testing function, or -1 if none found.",
        falseAnswer1: ".findIndex() returns the element itself, not its index.",
        falseAnswer2: ".findIndex() returns an array of all matching indices."
    },
    {
        question: "What is the difference between .indexOf() and .includes()?",
        answer: ".indexOf() returns the index of an element or -1 if not found, while .includes() returns true/false for element existence.",
        falseAnswer1: ".indexOf() is faster than .includes() and should always be used.",
        falseAnswer2: ".includes() works with arrays while .indexOf() only works with strings."
    },
    {
        question: "What string methods convert case?",
        answer: ".toUpperCase() converts a string to uppercase, .toLowerCase() converts to lowercase, and .toLocaleUpperCase()/.toLocaleLowerCase() use locale rules.",
        falseAnswer1: ".toUpperCase() and .toLowerCase() modify the original string.",
        falseAnswer2: "String case conversion methods only work on ASCII characters."
    },
    {
        question: "What do .startsWith() and .endsWith() do?",
        answer: ".startsWith() checks if a string begins with specified characters, .endsWith() checks if it ends with them; both return true/false.",
        falseAnswer1: "Both methods modify the original string.",
        falseAnswer2: ".startsWith() and .endsWith() return the matching substring."
    },
    {
        question: "What does .substring() do?",
        answer: ".substring() returns a new string between specified start and end indices, treating negative values as 0.",
        falseAnswer1: ".substring() modifies the original string.",
        falseAnswer2: ".substring() returns only a single character."
    },
    {
        question: "What is the difference between .substring() and .slice()?",
        answer: ".substring() swaps arguments if start > end and treats negatives as 0, while .slice() uses negative indices to count from the end.",
        falseAnswer1: ".substring() and .slice() behave identically.",
        falseAnswer2: ".slice() is for arrays only and .substring() is for strings only."
    },
    {
        question: "What is Set in JavaScript?",
        answer: "Set is a collection that stores unique values of any type, with methods like add(), delete(), has(), and clear().",
        falseAnswer1: "Set automatically sorts values in ascending order.",
        falseAnswer2: "Set can store duplicate values and is similar to an array."
    },
    {
        question: "What is Map in JavaScript?",
        answer: "Map is a collection of key-value pairs where keys can be any type, with methods like set(), get(), has(), delete(), and clear().",
        falseAnswer1: "Map only accepts string keys like objects do.",
        falseAnswer2: "Map is slower than objects and should be avoided."
    },
    {
        question: "What is the difference between Set and Array?",
        answer: "Set stores unique values and has no index access, while Array stores any values including duplicates and is index-ordered.",
        falseAnswer1: "Set and Array have identical performance characteristics.",
        falseAnswer2: "Array automatically removes duplicate values like Set does."
    },
    {
        question: "What is the difference between Map and Object?",
        answer: "Map can use any type as keys and has methods for size/iteration, while Object keys are strings/symbols and is not iterable by default.",
        falseAnswer1: "Map and Object have identical performance for all use cases.",
        falseAnswer2: "Objects are better for all situations than Maps."
    },
    {
        question: "What does .repeat() do on strings?",
        answer: ".repeat() returns a new string with the original string repeated a specified number of times.",
        falseAnswer1: ".repeat() modifies the original string.",
        falseAnswer2: ".repeat() removes repeated characters from a string."
    },
    {
        question: "What do .padStart() and .padEnd() do?",
        answer: ".padStart() pads the beginning of a string to a target length, .padEnd() pads the end; both take a target length and pad string.",
        falseAnswer1: "Both methods modify the original string.",
        falseAnswer2: ".padStart() and .padEnd() remove characters from the string."
    },
    {
        question: "What is parseInt()?",
        answer: "parseInt() parses a string and returns an integer of the specified radix (base), stopping at the first non-digit character.",
        falseAnswer1: "parseInt() always returns a floating-point number.",
        falseAnswer2: "parseInt() is the same as Number() conversion."
    },
    {
        question: "What is parseFloat()?",
        answer: "parseFloat() parses a string and returns a floating-point number, stopping at the first invalid character.",
        falseAnswer1: "parseFloat() only accepts strings that represent whole numbers.",
        falseAnswer2: "parseFloat() is faster than Number() for all conversions."
    },
    {
        question: "What is the difference between parseInt() and parseFloat()?",
        answer: "parseInt() returns an integer and accepts a radix parameter, parseFloat() returns a decimal number and doesn't use radix.",
        falseAnswer1: "parseInt() and parseFloat() produce identical results.",
        falseAnswer2: "parseFloat() is deprecated in favor of parseInt()."
    },
    {
        question: "What is Number.isInteger()?",
        answer: "Number.isInteger() returns true if a value is an integer, unlike parseInt() which converts strings first.",
        falseAnswer1: "Number.isInteger() is the same as typeof x === 'number'.",
        falseAnswer2: "Number.isInteger() converts strings to integers automatically."
    },
    {
        question: "What is .toFixed()?",
        answer: ".toFixed() returns a string representation of a number with a specified number of decimal places, rounding if necessary.",
        falseAnswer1: ".toFixed() returns a number with decimal places.",
        falseAnswer2: ".toFixed() modifies the original number."
    },
    {
        question: "What is for...in loop?",
        answer: "for...in iterates over enumerable properties of an object including inherited ones, useful for object iteration.",
        falseAnswer1: "for...in iterates over array indices in order like for...of does.",
        falseAnswer2: "for...in is faster than forEach for arrays."
    },
    {
        question: "What is for...of loop?",
        answer: "for...of iterates over iterable objects (arrays, strings, Sets, Maps) returning values directly, not keys/indices.",
        falseAnswer1: "for...of iterates over object properties like for...in does.",
        falseAnswer2: "for...of works with any object, not just iterables."
    },
    {
        question: "What is the difference between for...in and for...of?",
        answer: "for...in iterates over object keys/indices including inherited properties, for...of iterates over iterable values without inherited properties.",
        falseAnswer1: "for...in and for...of are interchangeable.",
        falseAnswer2: "for...of is deprecated in favor of for...in."
    },
    {
        question: "What is Object.freeze()?",
        answer: "Object.freeze() prevents modifications to an object: properties cannot be added, deleted, or modified, and existing properties become read-only.",
        falseAnswer1: "Object.freeze() makes an object immutable at all nested levels.",
        falseAnswer2: "Object.freeze() prevents accessing object properties."
    },
    {
        question: "What is Object.seal()?",
        answer: "Object.seal() prevents adding or removing properties from an object, but existing properties can still be modified.",
        falseAnswer1: "Object.seal() is identical to Object.freeze().",
        falseAnswer2: "Object.seal() makes an object completely immutable."
    },
    {
        question: "What is the difference between Object.freeze() and Object.seal()?",
        answer: "freeze() prevents modifications to existing properties and blocks adding/removing, seal() blocks adding/removing but allows modifying existing properties.",
        falseAnswer1: "freeze() and seal() do the same thing.",
        falseAnswer2: "seal() is more restrictive than freeze()."
    },
    {
        question: "What is Object.create()?",
        answer: "Object.create() creates a new object with the specified prototype object and properties, used for setting up inheritance.",
        falseAnswer1: "Object.create() clones an existing object including all properties.",
        falseAnswer2: "Object.create() is the same as using the new operator."
    },
    {
        question: "What is rest parameters (...) in function arguments?",
        answer: "Rest parameters (...) allow a function to accept an indefinite number of arguments as an array.",
        falseAnswer1: "Rest parameters are the same as the spread operator and work identically.",
        falseAnswer2: "Rest parameters can only be used once in a function definition."
    },
    {
        question: "What is the difference between rest parameters and spread operator?",
        answer: "Rest parameters (...) in function definitions collect multiple arguments into an array, spread operator unpacks arrays into individual elements.",
        falseAnswer1: "Both are used for the same purpose and are interchangeable.",
        falseAnswer2: "Spread operator collects arguments while rest parameters unpack them."
    }
]

export {questionsData}