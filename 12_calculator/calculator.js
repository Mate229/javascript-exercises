const add = function(a, b) {
	return +a + +b;
};

const subtract = function(a, b) {
	return +a - +b;
};

const sum = function(a) {
	return a.reduce((total, item) => total + item, 0);
};

const multiply = function(a) {
  let produit = 1;
  for(let i = 0; i < a.length; i++) {
    produit *= a[i];
  }
  return produit;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	if (a === 0) {
    return 1;
  } else {
    let facteur = 1;
    for(let i = 1; i <= a; i++) {
      facteur *= i;
    }
    return facteur;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
