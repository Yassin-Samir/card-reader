const main: HTMLDivElement = document.querySelector(".input") as HTMLDivElement;
const input: HTMLInputElement = document.querySelector(
  "#name"
) as HTMLInputElement;
const name1: HTMLSpanElement = document.querySelector(
  ".name"
) as HTMLSpanElement;
const num: HTMLInputElement = document.getElementById(
  "num"
) as HTMLInputElement;
const num1: HTMLSpanElement = document.querySelector(".num") as HTMLSpanElement;
const mm: HTMLInputElement = document.querySelector("#mm") as HTMLInputElement;
const mm1: HTMLSpanElement = document.querySelector(".f") as HTMLSpanElement;
const mm2: HTMLSpanElement = document.querySelector(".ff") as HTMLSpanElement;
const yy: HTMLInputElement = document.querySelector("#yy") as HTMLInputElement;
const cvv: HTMLInputElement = document.querySelector(
  "#cvv"
) as HTMLInputElement;
const span: HTMLSpanElement = document.querySelector(
  ".back span"
) as HTMLSpanElement;
const inputs: NodeList = document.querySelectorAll("input") as NodeList;
const form: HTMLFormElement = document.querySelector("form") as HTMLFormElement;
const con: HTMLDivElement = document.querySelector(".con") as HTMLDivElement;
(input && num && mm && yy && cvv).value = "";
input.oninput = (): void => {
  name1.textContent = input.value || "Jane Appleseed";
};
function rotate(): void {
  con.style.transform = "rotateY(0deg)";
}
input.addEventListener("focus", rotate);
function logic(e: string, num: number): string {
  let retur = new RegExp(`(\d{${num}})`, "g");
  return e.replace(/[A-Za-z]/g, "").replace(retur, "$1");
}
num.addEventListener("focus", rotate);
num.oninput = (e: any): void => {
  e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/(\d{4})/g, "$1 ")
    .trim();
  if (Number(e.target.value.replace(/\s/g, ""))) {
    num1.textContent = e.target.value;
  } else num1.textContent = "0000 0000 0000 0000";
};
mm.addEventListener("focus", rotate);
mm.oninput = (e: any): void => {
  e.target.value = logic(e.target.value, 2);
  if (Number(e.target.value)) {
    mm1.textContent = e.target.value;
  } else mm1.textContent = "00";
};
yy.addEventListener("focus", rotate);
yy.oninput = (e: any): void => {
  e.target.value = logic(e.target.value, 2);
  if (Number(e.target.value)) {
    mm2.textContent = e.target.value;
  } else mm2.textContent = "00";
};
cvv.addEventListener("focus", () => (con.style.transform = "rotateY(180deg)"));
cvv.oninput = (e: any): void => {
  e.target.value = logic(e.target.value, 3);
  if (Number(e.target.value)) {
    span.textContent = e.target.value;
  } else span.textContent = "000";
};
inputs.forEach((i: any): boolean => (i.required = true));
form.onsubmit = (e: any): void => {
  e.preventDefault();
  main.style.display = "none";
  const confirm = document.querySelector(".confirm") as HTMLDivElement;
  confirm.style.display = "grid";
};
