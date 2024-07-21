//1-checking yearber---+,-,0
function checker(year){
  if(year>0){
   console.log(`${year} is positive`);
  }else{
    if(year<0){
        console.log(`${year} is negative`);
    }else{
        console.log(`${year} is zero`);
    }
  }
}

checker(100);
checker(-1);
checker(0);

//2-checking if person is eligible for voting or not
const voterEligibility=(age)=>{
  age>=18?console.log("Eligible for voting"):console.log("Not eligible for voting");
}

voterEligibility(22);
voterEligibility(16);


//3-nested if-else-largest of three yearbers

const largestAmongAll=(year1,year2,year3)=>{
  let max=year1;
  if(max<year2 || max<year3){
    if(year2>year3){
      max=year2
    } else{
      max=year3;
    }
  }else{
    max=year1;
  }
  console.log(max);
  //another approach using arrays

  // const arr=[];
  // arr.push(year1);
  // arr.push(year2);
  // arr.push(year3);
  // let max=arr[0];
  // for(let i=0;i<3;i++){
  //   if(arr[i]>max){
  //     max=arr[i];
  //   }
  // }
  // console.log(max);
}

largestAmongAll(100,50,200);
largestAmongAll(5,2,45);

//4--switch case problem


const day=(year)=>{
switch (year) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday")
    break;
  case 3:
  console.log("Wednesday")
    break;
  case 4:
    console.log("Thursday")
    break;
  case 5:
    console.log("Friday")
    break;
  case 6:
    console.log("Saturday")
    break;
  case 7:
    console.log("Sunday")
    break;
  default:
    console.log("Please enter the yearber between 1-7 only")
    break;
}
}

day(4);
day(10);
day(2);
day(1);


//5--Console grade according to the score using switch case

const printGrade=(score)=>{
switch (true) {
  case (score>=90 && score<100):
    console.log('A');
    break;
  case (score>=80 && score<90):
    console.log('B');
    break;
  case (score>=70 && score<80):
    console.log('C');
    break;
  case (score>=60 && score<70):
    console.log('D');
    break;
  case (score>=50 && score<60):
    console.log('F');
    break;
  default:
    console.log("Please work hard, you have failed in the exam");
    break;
}
}

printGrade(44);
printGrade(76);


//6--ternary operator

const oddEvenChecker=(year)=>{
  year%2==0?console.log(`${year} is a even number`):console.log(`${year} is not a odd number`);
}

oddEvenChecker(45);
oddEvenChecker(900);


//7--leap Year program

const leapYearChecker=(year)=>{
  if(year%4==0){
    if(year%100==0){
      if(year%400===0){
        console.log(`${year} is a leap year`)
      }else{
        console.log(`${year} is not a leap year`);
      }
    }else{
      console.log(`${year} is a leap year`);
    }
}else{
  console.log(`${year} is not a leap year`);
}
}


leapYearChecker(1900);
leapYearChecker(1896);