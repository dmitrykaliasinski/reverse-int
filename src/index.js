module.exports = function reverse(n) {
    let number = Math.abs(n) + "";
    let rev = "";
    for (let i = number.length - 1; i >= 0; i--) {
        rev += number[i];
    }
    return Number(rev);
};
