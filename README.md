# useRef

`useRef` is a special `React Hook` that lets a component keep track of a **Value** or a **DOM element** without causing the component to **re-render** (or reload the screen) when that value changes.

### Example:
![image](https://github.com/user-attachments/assets/29fe33db-e09a-44e5-8e58-4c00a2c8d7b5)

## Explanation:
 - `clickCount` initial value is set to `0`
   
     ![image](https://github.com/user-attachments/assets/82d3e200-6b01-4cfe-87f7-02f216f3a0a1)
   
 - `clickCount` stores a number that changes when we click the button.
 - Because it’ is in a `useRef`, React does not refresh the screen every time the number changes.
 - We can still **access and update** the number inside `clickCount.current`
   
![image](https://github.com/user-attachments/assets/6826b450-306c-4e47-8e48-8ea7fa4c49da)
When we use `useRef`, it gives an **object** that looks like this:
```
{ current: value }
```
So in this line:
![image](https://github.com/user-attachments/assets/2eeedc17-9163-44ee-9587-5e7a82a648eb)

We are creating a **ref object** where:
 - `clickCount.current` starts at `0`
 - We can **read or change** the value using `.current`
