function compareTrue(a, b) {
  if (a && b) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(word) {
  let array = word.split(' ');
  return array;
}

// Desafio 4
function concatName(lista) {
  let nome = `${lista[lista.length - 1]}, ${lista[0]}`;
  return nome;
}

// Desafio 5
function footballPoints(w, t) {
  let pontuacao = (w * 3) + (t * 1);
  return pontuacao;
}

// Desafio 6
function highestCount(numeros) {
  let maior = numeros[0];
  let sum = 0;
  for (let index = 0; index < numeros.length; index += 1) {
    if (maior < numeros[index]) {
      Math.abs(maior = numeros[index]);
    }
  }
  for (let key in numeros) {
    if (numeros[key] === maior) {
      sum += 1;
    }
  }
  return sum;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
