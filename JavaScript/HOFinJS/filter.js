let myString = "EElllzzzzzzzeroo";

let Array = myString.split('');

let uniqueArray = Array.filter((char, index) => {return Array.indexOf(char) === index;});

let uniqueString = uniqueArray.join('');

console.log(uniqueString);
