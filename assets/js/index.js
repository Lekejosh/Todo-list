// Needed elements from Html

let userInput = document.querySelector("input");
let addTodoBtn = document.getElementById("addTodo");
let body = document.querySelector("body");
let h1 = document.querySelector("h1");
let welcomeText = document.querySelector("p");
let ul = document.querySelector("ul.todos");

// Create delete Todo button at the end of every Todo list
let myTodolist = document.getElementsByTagName("LI");
for (i = 0; i < myTodolist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myTodolist[i].appendChild(span);
}

// Create each todo and append to the parent element
attachTodo = () => {
  let list = document.createElement("li");
  list.appendChild(document.createTextNode(userInput.value));
  ul.appendChild(list);
  userInput.value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  list.appendChild(span);

  let close = document.getElementsByClassName("close");
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
};

// Create a key in localStorage for theme

// Create todo only when an input is entered
addTodo = () => {
  if (userInput.value.length > 0) {
    attachTodo();
  }
};

// Create todo when an input is entered and the enter key is pressed
enterKeyAddTodo = (e) => {
  if (userInput.value.length > 0 && event.which === 13) {
    attachTodo();
  }
};

// Event listeners

addTodoBtn.addEventListener("click", addTodo);
userInput.addEventListener("keypress", enterKeyAddTodo);
