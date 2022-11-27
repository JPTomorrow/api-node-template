var bitwiseAdd = function (a: number, b: number) {
  if (b != 0) {
    let carry = a & b;
    a = a ^ b;
    b = carry << 1;
  }
  return a;
};

function flipInt(n: number) {
  var digit,
    result = 0;

  while (n) {
    digit = n % 10; //  Get right-most digit. Ex. 123/10 → 12.3 → 3
    result = result * 10 + digit; //  Ex. 123 → 1230 + 4 → 1234
    n = (n / 10) | 0; //  Remove right-most digit. Ex. 123 → 12.3 → 12
  }

  return result;
}

export { bitwiseAdd, flipInt };

// USAGE

// import { bitwiseAdd, flipInt } from "./lib/bitwise-math";
// console.log(bitwiseAdd(1, 2));
// console.log(flipInt(123));
