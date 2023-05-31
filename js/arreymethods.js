let size=[10,20,30,40];
size.reverse(size)
console.log(size);
console.log(size);

size.push(50)
console.log(size);

size.unshift(5)
console.log(size);

size.shift(5)
console.log(size);

size.pop(50)
console.log(size);

let names=["priyanka","rahul","sonia","modi"]
console.log(names.indexOf("modi"));
console.log(names.indexOf("rajini"));


let marks=[34,35,36,37,38,39,40]
let total=0
for(let i=0;i<=marks.length-1;i++){
    total=total+marks[i]
}
console.log(total);

let emp={
    id:101,
    name:"kevika",
    salary:55000
}
console.log(Object.keys(emp));
console.log(Object.values(emp));
emp.name="Rahul Gandi"
console.log(emp);
emp.name="rahul gandhi jodo yatra"
console.log(emp);
