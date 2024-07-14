function sumArray(array) {
    if (array == null) return 0;
    var sorted = array.sort((a, b) => a - b);
    var sum = 0;
    for (let i = 1; i < sorted.length - 1; i++) {
        sum += sorted[i];
    }
    return sum;
}