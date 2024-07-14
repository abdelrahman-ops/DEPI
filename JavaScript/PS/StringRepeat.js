function repeatStr(n, s) {
    var newStr = '';

    for (let index = 0; index < n; index++) {
        newStr += s;
    }

    return newStr;
}

// function repeatStr(n, s) {
//     return s.repeat(n);
// }