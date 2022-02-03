// Zadanie 1_1 Napisz program znajdujący Największy Wspólny Dzielnik dwóch liczb metodą Euklidesa
function gcd(a, b) {
  if (a === 0) return b;
  if (b === 0) return a;

  return gcd(b, a % b);
}

console.log('Zadanie 1_1: ');
console.log(gcd(9, 6));
console.log(gcd(20, 5));


// Zadanie 2_1 Napisz program znajdujący Największą Wspólną Wielokrotnośd dwóch liczb
function gcdTwoNumbers(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number'))
    return false;

  x = Math.abs(x);
  y = Math.abs(y);

  while(y) {
    const t = y;
    y = x % y;
    x = t;
  }

  return x;
}

console.log('Zadanie 1_2: ');
console.log(gcdTwoNumbers(12, 13));
console.log(gcdTwoNumbers(9, 3));