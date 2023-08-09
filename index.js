const addTodo = (e) => {
  e.preventDefault();
  const text = document.querySelector("#item").value;
  console.log(text);
  if (text !== "") {
  const list = document.querySelector("ul");
  const item = document.createElement("li");
  item.innerText = text
  list.appendChild(item);
  }
  document.querySelector("#item").value = "";
};

document.querySelector("form").addEventListener("submit", addTodo);
