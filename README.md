# 🔢 LeetCode Easy: 2620. Counter

## 📄 Problem Statement

You are given an integer `n`. Return a **counter function** that returns `n` on the first call, then returns `n + 1`, then `n + 2`, and so on for each subsequent call.

### 🧾 Function Signature

``` js
function createCounter(n: number): () => number
```
# 🧪 Example 1
## Input:
```
const counter = createCounter(10);
```
## Calls:
```
counter(); // 10
counter(); // 11
counter(); // 12
```
## Output:
```
[10, 11, 12]
```
# 💡 Key Concepts
+ Closure: A function that "remembers" the environment in which it was created.

+ The returned function can access and modify the variable n from its outer function scope.

+ This problem is great for practicing functional programming and understanding JavaScript's closure behavior.
# ✅ JavaScript Solution
javascript
```
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    return function() {
        const current = n;
        n += 1;
        return current;
    };
};

/** 
 * const counter = createCounter(10);
 * console.log(counter()); // 10
 * console.log(counter()); // 11
 * console.log(counter()); // 12
 */
```
# 🧠 Why It Works
+ The outer function createCounter(n) returns a new function.

+ This returned function retains access to n even after createCounter has finished executing.

+ Each call to the counter updates and returns the current value of n.

# 📊 Complexity Analysis

Type | Complexity
Time (per call) | O(1)
Space | O(1)

# 📚 Useful Topics
+ JavaScript Closures

+ Functional Programming

+ Lexical Scoping

+ State Persistence via Closure

# 👨‍💻 Author
Muawiya – AI Student & Mathematician
Founder of ⚡[ Coding Moves](https://www.youtube.com/@Coding_Moves)

> *Passionate about building intelligent systems and mastering the art of programming.*

📣 Follow Coding Moves
🔗 YouTube: <a href="https://www.youtube.com/@Coding_Moves">@Coding_Moves</a>
🔗 GitHub: <a href="https://github.com/Muawiya-contact">Muawiya-contact</a>
🔗 LinkedIn: <a href="https://www.linkedin.com/in/contactmuawia">Connect with Muawiya</a>

  

