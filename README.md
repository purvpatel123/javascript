# JavaScript Interview Notes

 A compact collection of JavaScript interview notes, concepts, and code snippets. Written and organized while preparing for frontend interviews.

---
## 1 What is Execution Context?
An execution context is the environment in which JavaScript code is evaluated and executed.

### Types of Execution Context
#### 1 Global Execution Context (GEC)

Created when your script first runs.

Only one GEC exists.

Variables/functions declared outside any function live here.

#### 2 Function Execution Context (FEC)

Created whenever a function is called.

Each function call gets its own execution context.

#### 3 Eval Execution Context (rare)

Created when eval() is used. Not used much in practice.

### Execution Context Life Cycle
Each context goes through two phases:
#### 1. Creation Phase (also called Memory Phase)
JavaScript scans the code and:

Creates the scope (lexical environment)

Allocates memory to variables and functions

Initializes variables with undefined

Functions are stored with their definitions

#### 2. Execution Phase
Now the code actually runs:

Variables are assigned real values

Functions are executed (and can create new contexts)

##### Example:

var x = 10;

function greet() {
  var msg = "Hello";
  console.log(msg);
}

greet();

### Execution Steps:
Global Execution Context Created

##### Memory phase:

x → undefined

greet → function() { ... }

##### Execution phase:

x → 10

greet() is called → creates Function Execution Context

##### Function Execution Context for greet()

##### Memory phase:

msg → undefined

##### Execution phase:

msg → "Hello"

console.log("Hello")

After function ends → context is popped off the call stack


# 2 Hoisting Explained

## ✅ What is Hoisting in JavaScript?

**Hoisting** is a JavaScript mechanism where **variable and function declarations are moved to the top of their scope** during the compilation phase, **before the code is executed**.

This means you can use `var` variables and functions **before they are declared** in the code.

However:

- `var` is hoisted and initialized with `undefined`
- `let` and `const` are hoisted but stay in a **Temporal Dead Zone (TDZ)**, so accessing them before declaration causes a **ReferenceError**
- Function **declarations** are fully hoisted (including body)
- Function **expressions** are **not hoisted as functions** (only the variable is hoisted if using `var`)

---

## ✅ Code Example

```javascript
console.log(a); // undefined
var a = 5;

console.log(b); // ReferenceError
let b = 10;

// Function Declaration
greet(); // "Hi"
function greet() {
  console.log("Hi");
}

// Function Expression
sayHi(); // TypeError: sayHi is not a function
var sayHi = function () {
  console.log("Hello");
};

```
