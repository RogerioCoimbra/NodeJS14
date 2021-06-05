const prime = require("get-primes");
const PrimeNumbers = require("./PrimeNumbers");
const number = 100;

const message = "Teste NodeJs!";
console.log("");

console.time(1);
console.log("lib");
console.log(prime(number));
console.timeEnd(1);

function sort_prime(num) {
    var prime_num1 = [], prime_num2 = [];
    for (var i = 0; i <= num; i++) {
      prime_num2.push(true);
    }
    for (var i = 2; i <= num; i++) {
      if (prime_num2[i]) {
        prime_num1.push(i);
        for (var j = 1; i * j <= num; j++) {
          prime_num2[i * j] = false;
        }
      }
    }
  
    return prime_num1;
  }
  
  console.time(2);
  console.log("Func");
  console.log(sort_prime(number));
  console.timeEnd(2);

  console.time(3);
  console.log("MyFunc");
  console.log(new PrimeNumbers().getPrimeNumbersUntil(number));
  console.timeEnd(3);


  setTimeout(() => {
    
  }, 1000);