function sum(a, b) {
  if(typeof(a) === 'number' && typeof(b) === 'number') {
    return a + b;
  } else {
    throw new TypeError("arguments is not a number")
  }
}

module.exports = sum;
