module.exports = function check(str, bracketsConfig) {
    let reg = /\(\)|\{\}|\[\]|\|\||[1][2]|[3][4]|[5][6]|[7][7]|[8][8]/;

    while (reg.test(str)) {
        str = str.replace(reg, '');
    }

    if (str.length === 0) {
        return true;
    } else {
        return false;
    }
}
