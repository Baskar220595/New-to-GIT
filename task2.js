/*let StudentDetails = function (name,age,Tamil,English,Maths,Science,SS){
    let marks = [Tamil, English, Maths, Science, SS];
    for (let i = 0; i < marks.length; i++) {
        if (marks[i] < 0 || marks[i] > 100) {
            console.log("Error: Marks should be between 0 and 100. Invalid value:", marks[i]);
            return; 
    }
}
    let total = Tamil+English+Maths+Science+SS
let percentage = total/500*100
let status = ""
console.log("Name :",name.toUpperCase())
console.log("Age :",age)
console.log("Total :",total)
console.log("Percentage :",percentage,"%")
if (percentage>=91 && percentage<=100){
    status = ("Excellent")
}
else if (percentage>=71 && percentage<=90){
    status =("Very good")
}
else if (percentage>=51 && percentage<=70){
    status =("Good")
}
else if (percentage>=35 && percentage<=50){
    status =("Average")
}
else if (percentage>=34 && percentage<=0){
    status =("Fail")
}
console.log("Status :", status)
}
StudentDetails("Baskar",29,99,98,97,91,100)*/


let num = function(a,b,c){
let Operation = c
switch (Operation){
    case "Add":
    console.log(a+b)
    break;
    case "Sub":
    console.log(a-b)
    break;
    case "Div":
    console.log(a/b)
    break;
    case "Mod":
    console.log(a%b)
    break;
    case "Pow":
    console.log(a**b)
    break;
    default:
        console.log("Select correct operation")
}
}
num(100,50,"Sub")