function ass(){
    let a = 100
    let b = 20
    console.log(a-=b)
}
ass()

function bss(){
    let a = 100
    let b = 20
    console.log(a/=b)
}
bss()

function bs(){
    let a = 100
    let b = 20
    console.log(a**=b)
}
bs()

function as(){
    let a = 100
    let b = 2
    console.log(a%=b)
}
as()

function bas(){
    let a = 100
    let b = 2
    console.log(a+=b)
}
bas()



function area(length,width){
    console.log("Area :",length*width)
}
area(20,5);

function Result(Tamil,English,Maths,Science,SS){
    console.log("Percentage :",(Tamil+English+Maths+Science+SS)/500*100)
}
Result(97,99,99,97,98);

function area2(length,width){
    return length*width
}
console.log("Area :",area2(20,5));

function Result2(Tamil,English,Maths,Science,SS){
    return (Tamil+English+Maths+Science+SS)/500*100
}
console.log("Percentage :",Result2(97,99,99,97,98));


function Mark(){
    let M = 28
    
    let mark=(M>=35) ? "PASS" : "FAIL"
}
console.log(mark)

let M = 28
    
    let mark=(M>=35) ? "PASS" : "FAIL"

console.log(mark)