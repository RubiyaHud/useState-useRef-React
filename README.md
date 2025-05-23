# useState
`useState` is a built-in `React Hook` that gives the function components a way to remember values that change over time, and automatically update the screen when those values change.

# useRef

`useRef` is a special `React Hook` that lets a component keep track of a **Value** or a **DOM element** without causing the component to **re-render** (or **reload** the screen) when that value changes.

### Example:
![image](https://github.com/user-attachments/assets/34ecae0e-860d-4600-a8a8-e090b9ed08d6)

### Output:

![image](https://github.com/user-attachments/assets/0fca471a-dbd1-4ac2-8ec9-508a6131c0ce)

![image](https://github.com/user-attachments/assets/23b24441-ee51-43c5-b802-f4d1c54c3524)


## Explanation:
 - `clickCount` initial value is set to `0`
   
   ```
    const clickCount = useRef(0);
   ```   
 - `clickCount` stores a number that changes when we click the `button`
 - Because it is in a `useRef`, React does not **refresh** the screen every time the number changes
 - We can still **access and update** the number inside `clickCount.current`
   
![image](https://github.com/user-attachments/assets/6826b450-306c-4e47-8e48-8ea7fa4c49da)

When we use `useRef`, it gives an **object** that looks like this:
```
{ current: value }
```
So in this line:

```
const clickCount = useRef(0);
```

We are creating a **ref object** where:
 - `clickCount.current` starts at `0`
 - We can **read or change** the value using `.current`
   
### In the Example:
```
clickCount.current += 1;
```
This adds `1` to the number stored in `clickCount`, but since it is stored in a `.current` property (and not in state), React does not `re-render` the UI.

## Render and Re-render in React:
###  ![render Icon](https://github.com/RubiyaHud/useState-useRef-React/blob/main/render.png) Render:
Rendering is when React takes the component and turns it into visible UI — like drawing the app on a blank canvas.
### ![re-render icon](https://github.com/RubiyaHud/useState-useRef-React/blob/main/re-render.png) Re-render:
A re-render is when React erases part of that canvas and redraws it because something (like state or props) changed.

### ![analogy icon](https://github.com/RubiyaHud/useState-useRef-React/blob/main/analogy.png) Analogy:
Think of React as a digital painter:
 - **Render** = The painter draws your app from scratch.
 - **Re-render** = The painter updates only the parts that changed — like redrawing a face after changing the smile.


