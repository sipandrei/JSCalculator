const butoane = Array.from(document.querySelectorAll("button"));
const textBox = document.querySelector("#textBox");
const butonE = butoane[15];
const butonC = butoane[14];
const butonI = butoane[10];
const butonP = butoane[11];
const butonM = butoane[12];
const butonD = butoane[13];

let numarMemorat = 0;
let numarAux = 0;
let numarAfisat = 0;
let rezultat = 0;
let operatie;

for (let buton = 0; buton <= 9; buton++) {
  butoane[buton].addEventListener("click", (numar) => {
    numarAfisat = numarAfisat * 10 + parseInt(numar.originalTarget.textContent);
    numarMemorat = numarAfisat;
    textBox.textContent = numarAfisat;
  });
}

butonC.addEventListener("click", () => {
  textBox.textContent = 0;
  rezultat = 0;
  numarMemorat = 0;
  numarAfisat = 0;
  numarAux = 0;
  operatie = null;

  resetareClasa(butonP);
  resetareClasa(butonM);
  resetareClasa(butonI);
  resetareClasa(butonD);
});
butonP.addEventListener("click", () => {
  if (numarAux == 0) {
    numarAux = numarMemorat;
    numarAfisat = 0;
    operatie = 1;
    textBox.textContent = rezultat;
  } else {
    operatieNoua();
    numarAux = numarMemorat;
    numarAfisat = 0;
    operatie = 1;
    textBox.textContent = rezultat;
  }

  schimbareClasa(butonP);
  resetareClasa(butonD);
  resetareClasa(butonM);
  resetareClasa(butonI);
});
butonM.addEventListener("click", () => {
  if (numarAux == 0) {
    numarAux = numarMemorat;
    numarAfisat = 0;
    operatie = 2;
    textBox.textContent = rezultat;
  } else {
    operatieNoua();
    numarAux = numarMemorat;
    numarAfisat = 0;
    operatie = 2;
    textBox.textContent = rezultat;
  }

  schimbareClasa(butonM);
  resetareClasa(butonD);
  resetareClasa(butonP);
  resetareClasa(butonI);
});
butonI.addEventListener("click", () => {
  if (numarAux == 0) {
    numarAux = numarMemorat;
    numarAfisat = 0;
    operatie = 3;
    textBox.textContent = rezultat;
  } else {
    operatieNoua();
    numarAux = numarMemorat;
    numarAfisat = 0;
    operatie = 3;
    textBox.textContent = rezultat;
  }

  schimbareClasa(butonI);
  resetareClasa(butonD);
  resetareClasa(butonP);
  resetareClasa(butonM);
});
butonD.addEventListener("click", () => {
  if (numarAux == 0) {
    numarAux = numarMemorat;
    numarAfisat = 0;
    operatie = 4;
    textBox.textContent = rezultat;
  } else {
    operatieNoua();
    numarAux = numarMemorat;
    numarAfisat = 0;
    operatie = 4;
    textBox.textContent = rezultat;
  }

  schimbareClasa(butonD);
  resetareClasa(butonP);
  resetareClasa(butonI);
  resetareClasa(butonM);
});
butonE.addEventListener("click", () => {
  calcul(numarAux, numarMemorat);
  numarMemorat = null;
  numarAux = null;
  numarAfisat = rezultat;
  operatie = null;
  rezultat = 0;
  textBox.textContent = "= " + numarAfisat;
  numarAfisat = 0;

  resetareClasa(butonP);
  resetareClasa(butonM);
  resetareClasa(butonI);
  resetareClasa(butonD);
});

function calcul(a, b) {
  switch (operatie) {
    case 1:
      rezultat = a + b;
      break;
    case 2:
      rezultat = a - b;
      break;
    case 3:
      rezultat = a * b;
      break;
    case 4:
      if (b == 0) rezultat = "Infinit";
      rezultat = a / b;
      break;
  }
}

function schimbareClasa(buton) {
  buton.classList.add("butonActiv");
  buton.classList.remove("blackNgold");
}
function resetareClasa(buton) {
  buton.classList.remove("butonActiv");
  buton.classList.add("blackNgold");
}
function operatieNoua() {
  calcul(numarAux, numarMemorat);
  numarMemorat = rezultat;
  numarAux = 0;
  numarAfisat = rezultat;
  operatie = null;
  textBox.textContent = numarAfisat;
  numarAfisat = 0;
}
