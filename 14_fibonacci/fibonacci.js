const fibonacci = function(a) {
    if (parseInt(a) < 0) {
        return "OOPS";
    } else {
        if (parseInt(a) < 2) {
            return parseInt(a);
        } else {
            return fibonacci(parseInt(a) - 1) + fibonacci (parseInt(a) -2);
        }
    }
};

// Do not edit below this line
module.exports = fibonacci;
