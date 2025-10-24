let str = "Madam"
let rts = ""
str = str.toLowerCase()
for( i=str.length-1;i>=0;i--){
    rts += str[i]
}
if( str===rts){
    console.log("It is Palindrome")
}
else{
    console.log("It is not Palindrome")
}