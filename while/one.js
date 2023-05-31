let sal=45000;
if (sal > 40000){
console.log("Eligible for marriage");
}
else{
   console.log("Not eligible for marriage");
}

let num=43;
if(num % 2==0){
   console.log("Even");
}
else{
   console.log("Odd");
} 
let salery=50000
salery > 45000 ? console.log("Eligible for marriage"): console.log("Not eligible for marriage")

let number=7;
if(number % 7==0){
console.log(7,"number is divisible by 7");
}
else{
   console.log("number is not divisible by 7");
}


let numb=3;
if(numb % 3==0){
   console.log(3,"numb is multiple by 3");
}
else{
   console.log("numb is not multiple by 3");
}


// write a program to print to check the given number is positive or not

let no=45;
if(no >0){
   console.log(45," is positive");
}
else{
   console.log("no is negative");
}

//write a number to check if a number is 3 digit numbers or not?

let integer=999;
if(integer > 99){
   console.log("integer is three digit");
}
else{
   console.log("integer is two digit");
}

//write a program to print even or odd for a given number?

let a=10;
if(a%2==0){
   console.log(a,"a is a even number");
}
else{
console.log(a,"a is a odd number");
}

//write a program to print the greatest number in two numbers?

let A=25;
let B=30;
if(A>B){
console.log(A," is greater than ",B);
}
else{
   console.log(B," is greater than ",A);
}

//write a program to print the greatest number in two numbers?

let c=200;
let d=100;
if(c>d || d>c){
   console.log( d,"is less than" ,c);
}
else{
   console.log( c," is less than ",d);
}

//write a program to print the greatest number in given three numbers?

let x=10;
let y=20;
let z=30;
if(x > y && x > z){
   console.log(x,"greatest number x");
}
if(y > z && y > x){
   console.log(y,"greatest number y");
}
if(z > y && z > x){
   console.log(z,"greatest number z");
}

//write a program to print the least number in given three numbers?

let X=500;
let Y=200;
let Z=300;

if(X < Y && X < Z){
   console.log(X,"the least number");
}
if(Y < Z && Y < X){
   console.log(Y,"the least number");
}
if (Z < X && Z < Y){
   console.log(Z,"the least number");
}

// write a program to print the given 3 number in ascending order

let h =25;
let i = 45;
let j = 35;
let k = 12;
let l = 9;

let gayathri = [h,i,j,k,l]

gayathri.sort(function(h,i){
   return  h-i
})

console.log(gayathri);

// write a program to print the given 6 numbers in descending order?

let p=76;
let q=78;
let r=09;
let s=43;
let t=65;
let u=45;

let kevika=[p,q,r,s,t,u]

kevika.sort(function(p,q){
   return q-p
})
console.log(kevika);








