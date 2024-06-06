function palindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

function fibonacci(n) {
  let old = 0;
  let newn = 1;
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push(old);
    let memo = newn;
    newn = newn + old;
    old = memo;
  }

  return result.join(" ");
}

module.exports = {
  palindrome,
  fibonacci,
};
