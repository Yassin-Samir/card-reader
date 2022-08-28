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
function logic(e, num) {
  let retur = new RegExp(`(\d{${num}})`, "g");
  return e.replace(/[A-Za-z]/g, "").replace(retur, "$1");
}
num.oninput = (e) => {
  e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/(\d{4})/g, "$1 ")
    .trim();
  if (Number(e.target.value.replace(/\s/g, ""))) {
    num1.textContent = e.target.value;
  } else num1.textContent = "0000 0000 0000 0000";
};
mm.oninput = (e) => {
  e.target.value = logic(e.target.value, 2);
  if (Number(e.target.value)) {
    mm1.textContent = e.target.value;
  } else mm1.textContent = e.target.value;
};
yy.oninput = (e) => {
  e.target.value = logic(e.target.value, 2);
  if (Number(e.target.value)) {
    span.textContent = e.target.value;
  } else span.textContent = "00";
};
cvv.oninput = (e) => {
  e.target.value = logic(e.target.value, 3);
  if (Number(e.target.value)) {
    span.textContent = e.target.value;
  } else span.textContent = "000";
};
inputs.forEach((i) => (i.required = true));
form.onsubmit = (e) => {
  e.preventDefault();
  main.style.display = "none";
  document.querySelector(".confirm").style.display = "grid";
};
