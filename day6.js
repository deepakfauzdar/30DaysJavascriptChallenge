const arr=[1,2,3,4,5];
arr.shift();//removes the first element from the array
console.log(arr);//[2,3,4,5]

//2--using unshift() to array
arr.unshift(10);//add value to the begining of the element
console.log(arr);//[10,2,3,4,5]


//task- Multidimensional Array
const arr2=[
    [1,2,3,4],
    [5,6,7,8]
];
console.log(arr2[0][0]);
//printing last element
console.log(arr2[arr2.length-1][arr2[arr2.length-1].length-1]);

const sumUsingForEach=(arr)=>{
    let sum=0;
    arr.forEach( (row)=>{
        console.log("row elements");
        console.log(row);
        row.forEach( (element)=>{
            console.log("Col elements "+element)
            sum+=element;
        })
    })
    console.log(sum);
}

sumUsingForEach(arr2);