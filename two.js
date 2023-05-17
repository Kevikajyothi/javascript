for(let i=1;i<=10;i++){
    console.log(i);
}

for(let i=5;i<=15;i++){
    console.log(i);
}

for(let i=15;i>=10;i--){
    console.log(i);
}

for (let i=0;i<=10;i=i+2){
    console.log(i);
}

for (let i=1;i<=10;i=i+2){
    console.log(i);
}

for (let i=10;i>=1;i--){
    console.log(i);
}

for (let i=1;i<=10;i++){
    console.log("4*",i,"=",4*i);
}


for(let i=1;i<=10;i++){
    console.log("6*",i,"=",6*i);
}

for(let i=10;i>=1;i--){
    console.log("8*",i,"=",8*i);
}

initialization = i=1;
condition      = i<=10;
increment      = i++







for (let i=1;i<=10;i++){
    console.log("7*",i,"=",7*i);
}


for (let i=0;i<=10;i++){
    console.log("3*",i,"=",3*i);
}

let a=24
let fact=[]
for(let i=1;i<=a;i++){
    if (a %i==0){
        fact.push(i)
    }  
}
console.log(fact);


let arr=[1,2,3,4,5,6,7,8,10]
arr.reverse()
console.log(arr);


let number=20
let n1=0,n2=1,nextterm;
console.log('fibonacci series');
console.log(n1);
console.log(n2);
nextterm=n1+n2;
while(nextterm<=number){
    console.log(nextterm);
    n1=n2;
    n2=nextterm;
    nextterm=n1+n2;
}

let n=153
let f=0
let d=n
while(d>0){
    c=d%10
    f=f+c**3
    d=Math.floor(d/10)

}
if(n==f){
    console.log(true);
}
else{
    console.log(false);
}




