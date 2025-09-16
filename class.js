class students{
    constructor(Name,Section,Tamil,English,Maths,Science,SS){
    this.name=Name
    this.section=Section
    this.tamil=Tamil
    this.english=English
    this.maths=Maths
    this.science=Science
    this.ss=SS
}
percentage(){
    let total= this.tamil+this.english+this.maths+this.science+this.ss
    let percent= total/500*100
    console.log("Name:",this.name)
    console.log("Section:",this.section)
    console.log("Percenage:",percent,"%")
}
}
let student1= new students("Surya","A",99,99,99,99,99)
student1.percentage()
let student2= new students("Venket","A",99,99,99,99,99)
student2.percentage()
let student3= new students("Baskar","A",99,98,99,98,98)
student3.percentage()
let student4= new students("Bhavya","A",98,99,98,98,98)
student4.percentage()
let student5= new students("Susmitha","A",98,99,99,98,99)
student5.percentage()