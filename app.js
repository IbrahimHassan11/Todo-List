let addTodo = document.querySelector(".add-todo");
let ul = document.querySelector("ul");
let search = document.querySelector(".head input");
let head = document.querySelector(".head");


///////////////////////////////////////////////////
// Add Todos
addTodo.addEventListener("submit", (e) => {
  e.preventDefault();
  let log = addTodo.add.value.trim();
  let logWrapper = `<li>
  <span>${log}</span>
  <ion-icon class="icon" name="trash-outline"></ion-icon>
  </li>`
  if(log.length){
  ul.innerHTML += logWrapper;
  addTodo.reset();
  }
});


///////////////////////////////////////////////////
// Delete Todos
ul.addEventListener("click", (e) => {
  if(e.target.classList.contains("icon")){
    e.target.parentElement.remove();
  }
});


///////////////////////////////////////////////////
// Search Todos
search.addEventListener("keyup", () => {
  let look = search.value.trim().toLowerCase();

  Array.from(ul.children)
  .filter((todo) => !todo.textContent.toLowerCase().includes(look))
  .forEach((todo) => todo.classList.add("filtered"));
  
  Array.from(ul.children)
  .filter((todo) => todo.textContent.toLowerCase().includes(look))
  .forEach((todo) => todo.classList.remove("filtered"));
  
});

head.addEventListener("submit", (e) => {
  e.preventDefault();
});