document.getElementById("newbtn").addEventListener("click", function () {
  document.getElementById("para").innerText = "changing from js";
});

document.getElementById("img").addEventListener("dblclick", function () {
  document.getElementById("img").style.visibility = "hidden";
});

document.getElementById("div").addEventListener("mouseover", (e) => {
  document.getElementById("div").style.backgroundColor = "green";
});

document.getElementById("div").addEventListener("mouseout", (e) => {
  document.getElementById("div").style.backgroundColor = "gray";
});

document.getElementById("input").addEventListener("keydown", (e) => {
  console.log(e.target.value);
});

document.getElementById("input").addEventListener("keyup", (e) => {
  document.getElementById("para").innerText = e.target.value;
});

function onFormSubmit(e) {
  const form = document.getElementById("form");
  const submitter = document.getElementById("submit");
  const formData = new FormData(form, submitter);

  console.log({ formData });
}

const form = document.getElementById("form");
const submitter = document.querySelector("button[value=save]");
const formData = new FormData(form, submitter);

const output = document.getElementById("output");

for (const [key, value] of formData) {
  output.textContent += `${key}: ${value}\n`;
}

document.getElementById("list").addEventListener("click", (e) => {
  const value = e.target.innerText;
  console.log(value);
});
