var main = document === null || document === void 0 ? void 0 : document.querySelector(".input");
var input = document === null || document === void 0 ? void 0 : document.querySelector("#name");
var name1 = document === null || document === void 0 ? void 0 : document.querySelector(".name");
var num = document === null || document === void 0 ? void 0 : document.getElementById("num");
var num1 = document === null || document === void 0 ? void 0 : document.querySelector(".num");
var mm = document === null || document === void 0 ? void 0 : document.querySelector("#mm");
var mm1 = document === null || document === void 0 ? void 0 : document.querySelector(".f");
var mm2 = document === null || document === void 0 ? void 0 : document.querySelector(".ff");
var yy = document === null || document === void 0 ? void 0 : document.querySelector("#yy");
var cvv = document === null || document === void 0 ? void 0 : document.querySelector("#cvv");
var span = document === null || document === void 0 ? void 0 : document.querySelector(".back span");
var inputs = document === null || document === void 0 ? void 0 : document.querySelectorAll("input");
var form = document === null || document === void 0 ? void 0 : document.querySelector("form");
var con = document === null || document === void 0 ? void 0 : document.querySelector(".con");
(input && num && mm && yy && cvv).value = "";
input.oninput = function () {
    name1.textContent = input.value || "Jane Appleseed";
};
function rotate() {
    con.style.transform = "rotateY(0deg)";
}
function logic(e, num) {
    var retur = new RegExp("(d{".concat(num, "})"), "g");
    return e.replace(/[A-Za-z]/g, "").replace(retur, "$1");
}
(num && mm && yy && name1).addEventListener("focus", rotate);
num.oninput = function (e) {
    e.target.value = e.target.value
        .replace(/[^\dA-Z]/g, "")
        .replace(/(\d{4})/g, "$1 ")
        .trim();
    if (Number(e.target.value.replace(/\s/g, ""))) {
        num1.textContent = e.target.value;
    }
    else
        num1.textContent = "0000 0000 0000 0000";
};
mm.oninput = function (e) {
    e.target.value = logic(e.target.value, 2);
    if (Number(e.target.value)) {
        mm1.textContent = e.target.value;
    }
    else
        mm1.textContent = "00";
};
yy.oninput = function (e) {
    e.target.value = logic(e.target.value, 2);
    if (Number(e.target.value)) {
        mm2.textContent = e.target.value;
    }
    else
        mm2.textContent = "00";
};
cvv.addEventListener("focus", function () { return (con.style.transform = "rotateY(180deg)"); });
cvv.oninput = function (e) {
    e.target.value = logic(e.target.value, 3);
    if (Number(e.target.value)) {
        span.textContent = e.target.value;
    }
    else
        span.textContent = "000";
};
inputs.forEach(function (i) { return (i.required = true); });
form.onsubmit = function (e) {
    e.preventDefault();
    main.style.display = "none";
    var confirm = document.querySelector(".confirm");
    confirm.style.display = "grid";
};
