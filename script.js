/*
  This is your site JavaScript code - you can add interactivity!
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the steps in the TODO 🚧
*/
// Отримуємо кнопку за її ID, який був встановлений в index.html
const btn = document.getElementById("dippedButton"); 

if (btn) { // Перевіряємо, чи кнопка існує на сторінці
  btn.onclick = function () {
    // Клас 'dipped' у стилях (або inline style) змінює вигляд при кліку
    btn.classList.toggle("dipped");
    console.log('Кнопка "Click me!" була натиснута! Клас "dipped" перемкнено.');
  };
}


// ----- GLITCH STARTER PROJECT HELPER CODE -----

// Open file when the link in the preview is clicked
let goto = (file, line) => {
  window.parent.postMessage(
    { type: "glitch/go-to-line", payload: { filePath: file, line: line } }, "*"
  );
};
// Get the file opening button from its class name
const filer = document.querySelectorAll(".fileopener");
filer.forEach((f) => {
  f.onclick = () => { goto(f.dataset.file, f.dataset.line); };
});
