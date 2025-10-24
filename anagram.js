let a = "Heart";
let b = "Earth";
a = a.toLowerCase().split("").sort().join("")
b = b.toLowerCase().split("").sort().join("")
if(a===b){
    console.log("This is Anagram")
}
else{
    console.log("This is Not Anagram")
}