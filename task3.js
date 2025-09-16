let a =[]
a.push(10,20,30)
console.log(a)

a.pop()
console.log(a)

a.unshift(5)
console.log(a)

a.shift()
console.log(a)

let b = [5,6]
b.reverse()
console.log(b)

let c = ["Fun","City"]
console.log(c.reverse())

let d = "Fun"
let revstr = ""
for (let i=d.length-1; i>=0 ; i--){
revstr+= d[i]
}
console.log(revstr)