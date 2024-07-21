//1--print multiplication of table of 5 using for loop
for(let i=1;i<=10;i++){
    console.log(5*i);
}

//2--sum using while loop
let sum=0,i=1;
while(i<=10){
    sum+=i;
    i++;
}
console.log(sum);

//3--print reverse numbers using while loop

let j=10;
while(j>=1){
    console.log(j);
    j--;
}

//4--print a pattern
//for 5 rows
let row=1;
while(row<=5){
    let col=1;
    let stars="";
    while(col<=row){
        stars+="*";
        col++;
    }
    console.log(stars);
    row++;
}


//5--using do while loop

let k=1;
do{
    console.log(k);
    k++;
}while(k<=5);

//6--calculate factorial of a number using do-while loop

const findFactorial=(num)=>{
    let i=1,fact=1;
  do {
    fact=fact*i;
    i++;
  } while (i<=num);
  return fact;
}

console.log(findFactorial(5));
console.log(findFactorial(6));

//7--loop control statements
for(let i=1;i<=10;i++){
    if(i==5){
        continue;
    }
    console.log(i);
}

//8--using break statement
for(let i=1;i<=10;i++){
    if(i==7){
        break;
    }
    console.log(i);
}
