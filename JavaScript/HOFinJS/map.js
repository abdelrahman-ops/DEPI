let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let letters = mix.map(i => typeof i === 'string' ? i : '').reduce((acc,val) => acc + val, '');

console.log(letters);