const completeTodo = (e) => {
  if (!e.target.getAttribute("aria-checked")) {
    e.target.setAttribute("aria-checked", "true");
    let aside = document.getElementById("completed-message");
    aside.style.visibility = "visible";
    setTimeout(toggleVisibility, 2000);
  } else {
    e.target.setAttribute("aria-checked", "false");
  }
};

const addTodo = (e) => {
  e.preventDefault();
  const text = document.querySelector("#item").value;
  if (text !== "") {
    const item = document.createElement("li");
    item.innerText = text;
    item.addEventListener('click', completeTodo)
    const checkbox = document.createElement("button");
    checkbox.innerText = "x";
    checkbox.addEventListener("click", removeTodo);
    item.append(checkbox);
    const list = document.querySelector("ul");
    list.appendChild(item);
  }
  document.querySelector("#item").value = "";
};

const removeTodo = (e) => {
  e.stopPropagation();
  e.target.parentNode.remove();
};

const toggleVisibility = (e) => {
  let aside = document.getElementById("completed-message");
  if (aside.style.visibility === "hidden") {
    aside.style.visibility = "visible";
  } else {
    aside.style.visibility = "hidden";
  }
};
document.querySelector("form").addEventListener("submit", addTodo);
