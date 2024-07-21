//--task1 about functions

function sqrt(num){
   console.log(Math.sqrt(num)); 
}

sqrt(400);//20
sqrt(625);//25

//2--arrow functions are not hoisted..unlike var, or unlike regular functions
function concat(str1, str2){
//  return str1+str2;
  return str1.concat(str2);//another way to do this problem
}

console.log(concat("Deepak","Fauzdar"));
console.log(concat("Pooja","Fauzdar"));


//3--using arrow functions, return a boolean value if specific character founds in the string

const findChar=(str,char)=>{
let charFound=false;
for(let i=0;i<str.length;i++){
    if(str[i]==char){
        charFound=true;
        return charFound;
    }
}
return charFound;
}

console.log(findChar("Deepak","n"));


//4--function parameters and default value
const product=(num1,num2=9.2)=>{
  return num1*num2;
}
console.log(product(10));

const greeting=(name,age=25)=>{
 return `hello ${name} with age ${age}`;
}
console.log(greeting("Deepak"));


///5--higher order functions---Task 1
function callback(){
    console.log("HIGHER ORDER FUNCTIONS")
}

const highOrderFunction=(fun,value)=>{

    for(let i=1;i<=value;i++){
        fun();
    }

}
highOrderFunction(callback,4);