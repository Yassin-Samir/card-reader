// @ts-nocheck
const main = document.querySelector(".input");
let input = document.querySelector("#name");
const name1 = document.querySelector(".name");
const num = document.getElementById("num");
const num1 = document.querySelector(".num");
const mm = document.querySelector("#mm");
const mm1 = document.querySelector(".f");
const mm2 = document.querySelector(".ff");
const yy = document.querySelector("#yy");
const cvv = document.querySelector("#cvv");
const span = document.querySelector(".back span");
const inputs = document.querySelectorAll("input");
const form = document.querySelector("form");
input.value = "";
num.value = "";
mm.value = "";
yy.value = "";
cvv.value = "";
input.oninput = () => {
  name1.textContent = input.value || "Jane Appleseed";
};
num.oninput = (e) => {
  if (Number(num.value.replace(/\s/g, ""))) {
    num1.textContent = num.value;
  } else {
    num1.textContent = "0000 0000 0000 0000";
  }
  e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
};
mm.oninput = () => {
  mm1.textContent = mm.value || "00";
};
yy.oninput = () => {
  mm2.textContent = yy.value || "00";
};
cvv.oninput = () => {
  span.textContent = cvv.value || "000";
};
inputs.forEach((i) => (i.required = true));
form.onsubmit = (e) => {
  e.preventDefault();
  main.style.display = "none";
  document.querySelector(".confirm").style.display = "grid";
};
