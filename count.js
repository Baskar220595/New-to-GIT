let a = "Javascript";
a = a.toLowerCase();

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