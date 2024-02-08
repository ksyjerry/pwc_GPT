//주어진 숫자가 소수이면 true, 아니면 false를 출력하는 프로그램을 작성하시오.

function isPrime(num) {
  if (num === 1) return false;
  if (num === 2) return true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(1)); // false

console.log(isPrime(2)); // true
