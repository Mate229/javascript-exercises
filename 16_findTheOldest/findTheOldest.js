const findTheOldest = function(a) {
    for(let i = 0; i < a.length; i++) {
        if ("yearOfDeath" in a[i] == false) {
            a[i]["yearOfDeath"] = (new Date).getFullYear();
        };
    };
    let b = a.sort((c, d) => (d.yearOfDeath - d.yearOfBirth) - (c.yearOfDeath - c.yearOfBirth));
    return b[0];
};

// Do not edit below this line
module.exports = findTheOldest;
