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
function quantidade(maiorNum, m) {
  let sum = 0;
  for (let key in maiorNum) {
    if (maiorNum[key] === m) {
      sum += 1;
    }
  }
  return sum;
}
function highestCount(numeros) {
  let maior = numeros[0];
  for (let index = 0; index < numeros.length; index += 1) {
    if (maior < numeros[index]) {
      Math.abs(maior = numeros[index]);
    }
  }
  return quantidade(numeros, maior);
}

// Desafio 7
function catAndMouse(num1, num2, num3) {
  let mouse = num1;
  let cat1 = num2;
  let cat2 = num3;
  let maisPerto = '';
  if (cat1 - mouse > cat2 - mouse) {
    maisPerto = 'cat2';
  } else if (Math.abs(cat1 - mouse) < cat2 - mouse) {
    maisPerto = 'cat1';
  } else {
    maisPerto = 'os gatos trombam e o rato foge';
  }
  return maisPerto;
}

// Desafio 8
function compare(array, index) {
  let palvr = '';
  if (array[index] % 3 === 0 && array[index] % 5 === 0) {
    palvr = 'fizzBuzz';
  } else if (array[index] % 3 === 0) {
    palvr = 'fizz';
  } else if (array[index] % 5 === 0) {
    palvr = 'buzz';
  } else {
    palvr = 'bug!';
  }
  return palvr;
}
function fizzBuzz(array) {
  let funcao = [];
  for (let index = 0; index < array.length; index += 1) {
    const a = compare(array, index);
    funcao.push(a);
  }
  return funcao;
}

// Desafio 9
// https://stackoverflow.com/questions/52313743/regex-vowels-to-1337-numbers
function encode(word) {
  let newWorld = word.replace(/([aeiou])/g, function (vogal) {
    let obj = {
      a: 1,
      e: 2,
      i: 3,
      o: 4,
      u: 5,
    };
    return obj[vogal];
  });
  return newWorld;
}

function decode(palavra) {
  let novaPalavra = palavra.replace(/[12345]/g, function (num) {
    let obj = {
      1: 'a',
      2: 'e',
      3: 'i',
      4: 'o',
      5: 'u',
    };
    return obj[num];
  });
  return novaPalavra;
}

// Desafio 10
function techList(array, nome) {
  let resp = [];
  array.sort();
  if (array.length > 0) {
    for (let index = 0; index < array.length; index += 1) {
      resp.push({ tech: array[index], name: nome });
    }
  } else {
    resp = 'Vazio!';
  }
  return resp;
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
