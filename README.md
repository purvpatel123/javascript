# JavaScript Interview Notes

 A compact collection of JavaScript interview notes, concepts, and code snippets. Written and organized while preparing for frontend interviews.

---
## 1 What is Execution Context?
An execution context is the environment in which JavaScript code is evaluated and executed.

### Types of Execution Context
Global Execution Context (GEC)

Created when your script first runs.

Only one GEC exists.

Variables/functions declared outside any function live here.

Function Execution Context (FEC)

Created whenever a function is called.

Each function call gets its own execution context.

Eval Execution Context (rare)

Created when eval() is used. Not used much in practice.

