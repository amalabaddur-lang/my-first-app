class Person{
    constructor(id,name,phonenumber){
        this.id=id;
        this.name=name;
        this.phonenumber=phonenumber;
    
    }
    getDetails(){
        return `ID: ${this.id}, Name: ${this.name}, Phone Number: ${this.phonenumber}`;
    }
    setDetails(id,name,phonenumber){
        this.id=id;
        this.name=name;
        this.phonenumber=phonenumber;
    }
}

let person1=new Person(1,"John",1234567890);
console.log(person1);
console.log(person1.getDetails());

person1.setDetails(2,"Jane",9876543210);
console.log(person1.getDetails());


