let nums = [2, 12, 11, 5,10, 1, 99];

let out = nums.reduce((acc, val)=>{
    if(val % 2 == 0){
        return acc*val;
    }
    else return acc + val;
}, 1);

console.log(out);