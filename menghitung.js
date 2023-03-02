// f(x) = x ** 2
function menghitung1(x) {
    return x ** 2;
  } 

// f(x, y) = (x * 2) + (y * 2)
function menghitung2 (x, y) {
  return x * 2 + y * 2;
}

// f(x, y) = (x * y) / 2
function menghitung3 (x, y) {
  return (x * y) / 2;
}

// f(x, y) = x * y
function menghitung4 (x, y)  {
  return x * y;
}

// f(x) = π * 2 * x
const PI = 3.14159;
function menghitung5 (x) {
  return PI * 2 * x;
};

// contoh penggunaan fungsi
console.log(menghitung1(4)); // output: 16
console.log(menghitung2(5, 8)); // output: 26
console.log(menghitung3(6, 10)); // output: 30
console.log(menghitung4(7, 9)); // output: 63
console.log(menghitung5(3)); // output: 18.84954
