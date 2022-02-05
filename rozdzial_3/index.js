// Zadanie 1_3 Napisz program sumujący elementy tablicy jednowymiarowej
function sumNumbersInArray(array) {
  console.log('Tablica ', array);
  return array.reduce((a, b) => a + b);
}

console.log('Zadanie 1_3: ');
console.log(sumNumbersInArray([1, 2, 3, 4]));


// Zadanie 2_3 Napisz program sumujący elementy parzyste tablicy jednowymiarowej
function sumEvenNumbersInArray(array) {
  console.log('Tablica ', array);
  let  counter = 0;

  array.forEach((number) => {
    if (number % 2 === 0) {
      counter = counter + number;
    }
  });

  return counter;
}

console.log('Zadanie 2_3: ');
console.log(sumEvenNumbersInArray([1, 2, 3, 4]));


// Zadanie 3_3 Napisz program sumujący elementy nieparzyste tablicy jednowymiarowej
function sumOddNumbersInArray(array) {
  console.log('Tablica ', array);
  let  counter = 0;

  array.forEach((number) => {
    if (number % 2 !== 0) {
      counter = counter + number;
    }
  });

  return counter;
}

console.log('Zadanie 3_3: ');
console.log(sumOddNumbersInArray([1, 2, 3, 4]));


// Zadanie 4_3 Napisz program sumujący elementy podzielne przez 7 tablicy jednowymiarowej
function sumNumbersDivisibleBySevenInArray(array) {
  console.log('Tablica ', array);
  let  counter = 0;

  array.forEach((number) => {
    if (number % 7 === 0) {
      counter = counter + number;
    }
  });

  return counter;
}

console.log('Zadanie 4_3: ');
console.log(sumNumbersDivisibleBySevenInArray([10, 21, 30, 42]));


// Zadanie 5_3 Napisz program obliczający iloczyn elementów tablicy jednowymiarowej
function multiplyNumbersInArray(array) {
  console.log('Tablica ', array);
  return array.reduce((a, b) => a * b);
}

console.log('Zadanie 5_3: ');
console.log(multiplyNumbersInArray([10, 2, 4, 5]));

// Zadanie 6_3 Napisz program obliczający iloczyn elementów tablicy jednowymiarowej
function multiplyEvenNumbersInArray(array) {
  console.log('Tablica ', array);
  let counter = 1;

  array.forEach((number) => {
    if (number % 2 === 0) {
      counter = counter * number;
    }
  });

  return counter;
}

console.log('Zadanie 6_3: ');
console.log(multiplyEvenNumbersInArray([10, 3, 4, 5]));


// Zadanie 7_3 Napisz program obliczający iloczyn elementów tablicy jednowymiarowej
function multiplyOddNumbersInArray(array) {
  console.log('Tablica ', array);
  let counter = 1;

  array.forEach((number) => {
    if (number % 2 !== 0) {
      counter = counter * number;
    }
  });

  return counter;
}

console.log('Zadanie 7_3: ');
console.log(multiplyOddNumbersInArray([10, 3, 4, 5]));