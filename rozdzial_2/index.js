// Zadanie 1_2 Napisz program sumujący liczby parzyste –liczba (-50) konczy wprowadzanie danych (zastosuj iterację dopóki Q wykonuj A)
function addEvenNumbers(number) {
  let counter = 0;

  for (let i = 0; i <= number; i++) {
    if (i % 2 === 0 && i < 50) {
      counter = counter + i;
      console.log('i = ', i);
      console.log('counter = ', counter);
    }
  }

  return counter;
}

console.log('Zadanie 1_2: ');
console.log(addEvenNumbers(60));


// Zadanie 2_2 Napisz program sumujący liczby nie parzyste –liczba (50) kooczy wprowadzanie danych (zastosuj iterację dopóki Q wykonujA)
function addOddNumbers(number) {
  let counter = 0;

  for (let i = 0; i <= number; i++) {
    if (i % 2 !== 0 && i < 50) {
      counter = counter + i;
      console.log('i = ', i);
      console.log('counter = ', counter);
    }
  }

  return counter;
}

console.log('Zadanie 2_2: ');
console.log(addOddNumbers(60));


// Zadanie 3_2 Napisz program sumujący liczby podzielne przez 7 –liczba (-50) kooczy wprowadzanie danych (zastosuj iterację dopóki Q wykonuj A)
function addNumbersDivisibleBySeven(number) {
  let counter = 0;

  for (let i = 0; i <= number; i++) {
    if (i % 7 === 0 && i < 50) {
      counter = counter + i;
      console.log('i = ', i);
      console.log('counter = ', counter);
    }
  }

  return counter;
}

console.log('Zadanie 3_2: ');
console.log(addNumbersDivisibleBySeven(70));


// Zadanie 7_2 Napisz program obliczający iloczyn liczb parzystych –liczba (-50) kooczy wprowadzanie danych (zastosuj iterację dopóki Q wykonuj A)
function multiplyEvenNumbers(number) {
  let counter = 1;

  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0 && i < 50) {
      counter = counter * i;
      console.log('i = ', i);
      console.log('counter = ', counter);
    }
  }

  return counter;
}

console.log('Zadanie 7_2: ');
console.log(multiplyEvenNumbers(70));

// Zadanie 8_2 Napisz program obliczający iloczyn liczbnie parzystych–liczba (50) kooczy wprowadzanie danych (zastosuj iterację dopóki Q wykonuj A)
function multiplyOddNumbers(number) {
  let counter = 1;

  for (let i = 1; i <= number; i++) {
    if (i % 2 !== 0 && i < 50) {
      counter = counter * i;
      console.log('i = ', i);
      console.log('counter = ', counter);
    }
  }

  return counter;
}

console.log('Zadanie 8_2: ');
console.log(multiplyOddNumbers(70));


// Zadanie 9_2 Napisz program obliczający iloczyn liczbpodzielnychprzez 7 –liczba (-50) kooczy wprowadzanie danych (zastosuj iterację dopóki Q wykonuj A)
function multiplyNumbersDivisibleBySeven(number) {
  let counter = 1;

  for (let i = 1; i <= number; i++) {
    if (i % 7 === 0 && i < 50) {
      counter = counter * i;
      console.log('i = ', i);
      console.log('counter = ', counter);
    }
  }

  return counter;
}

console.log('Zadanie 9_2: ');
console.log(multiplyNumbersDivisibleBySeven(70));


// Zadanie 13_2 Napisz program obliczający sumę i iloczyn liczb parzystych–liczba (-50) kooczy wprowadzanie danych (zastosuj iterację dopóki Q wykonuj A)
function addAndMultiplyEvenNumbers(number) {
  let counter = 0;

  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0 && i < 50) {
      counter = counter + ((i * i) + (i + i));
      console.log('i = ', i);
      console.log('counter = ', counter);
    }
  }

  return counter;
}

console.log('Zadanie 13_2: ');
console.log(addAndMultiplyEvenNumbers(4));