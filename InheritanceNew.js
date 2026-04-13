class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

class Student extends Person{
    constructor(grade,marks){
        super("John",20);
        this.grade=grade;
        this.marks=marks;
    }
    showDetails(){
        return `Grade: ${this.grade}, Marks: ${this.marks}`;
    }
}

let student1=new Student("A",95);
console.log(student1);
console.log(student1.getDetails());
console.log(student1.showDetails());