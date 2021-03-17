const butoane = Array.from(document.querySelectorAll("button"));
const textBox = document.querySelector("#textBox");
const butonE = butoane[15];
const butonC = butoane[14];

let numarMemorat = 0;
let numarAfisat = 0;
let rezultat = 0;

function sum(a, b) {
  return a + b;
}
function scd(a, b) {
  return a - b;
}
function inm(a, b) {
  return a * b;
}
function imp(a, b) {
  if (b == 0) return "Infinit";
  return Math.round(a / b);
}

for (let buton = 0; buton <= 9; buton++) {
  butoane[buton].addEventListener("click", (numar) => {
    numarAfisat = numarAfisat * 10 + parseInt(numar.originalTarget.textContent);
    textBox.textContent = numarAfisat;
  });
}

butonC.addEventListener("click", () => (textBox.textContent = 0));
