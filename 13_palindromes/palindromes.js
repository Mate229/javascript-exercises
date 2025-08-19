const palindromes = function (a) {
    let b = a.split("").reverse().join("");
    const remove = function (str) {
        return str.replace(/[\s!,.\\d+]/g, "");
    }
    if (remove(a).toLowerCase() === remove(b).toLowerCase()) {
        return true;
    } else {
        return false;
    };
};

// Do not edit below this line
module.exports = palindromes;
