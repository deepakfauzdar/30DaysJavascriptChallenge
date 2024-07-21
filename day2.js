console.log(5%2);//1

//checking ternary operator validation

const finder=(num)=>{
// num>0?console.log(`${num} is positive`):console.log(`${num} is negative`);
return num>0?num:undefined;
}

console.log(finder(10));
console.log(finder(-10));