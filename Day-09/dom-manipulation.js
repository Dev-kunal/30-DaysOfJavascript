// modifying existing element in html

const oneDiv = document.getElementById("id");

oneDiv.innerText = " this is text changed from js through innertext";

const elementWithClass = document.getElementsByClassName("class");
elementWithClass[0].style.backgroundColor = "yellow";

// creating element in html
const newDiv = document.createElement("div");
const textOde = document.createTextNode("this is div created through js");
newDiv.appendChild(textOde);

oneDiv.appendChild(newDiv);

const list = document.getElementById("list");
const listItem = document.createElement("li");
listItem.innerText = "this is new listItem";
list.appendChild(listItem);

// remove element from DOM
const btn = document.getElementById("btn");
if (btn) btn.remove();

const newlist = document.getElementById("newList");
console.log({ newlist });
newlist.removeChild(newlist.lastElementChild);

// modifying attributes and classes

const image = document.getElementById("img");
image.setAttribute(
  "src",
  "https://cdn.pixabay.com/photo/2022/09/15/09/04/sea-7456037_1280.jpg"
);

image.classList.add("foo", "goo");
image.classList.remove("foo");

// event listeners

document.getElementById("newbtn").addEventListener("click", () => {
  const para = document.getElementById("para");
  para.innerText = "this is new text";
});

document.getElementById("newbtn").addEventListener("mouseover", () => {
  document.getElementById("newbtn").style.border = "5px solid violet";
});
