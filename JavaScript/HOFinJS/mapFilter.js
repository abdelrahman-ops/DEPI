let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let numbers = numsAndStrings.filter(i => typeof i === 'number').map(num => -num);

console.log(numbers);