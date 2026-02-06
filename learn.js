// function fun (){
    
// var a = 10;
// var a = 20;
// console.log(a);

// let b = 10;
//  b = 20;
// console.log(b);

// const c = 500;
// const v = 20;
// console.log(c);
// }
// fun();


// function fu (a,b,c){
//     console.log(a+b+c);
// }
// fu(1,2,3)

function frc(str) {
let a = str.toLowerCase();

let maxCount = 0;
let maxChar = "";

for(let i=0; i < a.length; i++){
    let count = 0;
    for (let j=0;j < a.length; j++){
        if (a[i]===a[j]){
   count++;
 }
}
if ( count > maxCount) {
    maxCount = count;
    maxChar = a[i];
}
}
//console.log("Most repeated letter:", maxChar,"occur",maxCount,"times" )
console.log(`Most repeated letter: ${maxChar} occurs ${maxCount} times`);
}
frc("Baskar");
frc("Hello World");