const repeatString = function(str, a) {
    if (a < 0) {
        return "ERROR";
    }
    let result = ""
    for(let i=1; i <= a; i++) {
     result += str;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
