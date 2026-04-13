class father{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}

class son extends father{
    constructor(name,age,school){
        super(name,age);
        this.school=school;
    }
}

let son1=new son("John",30,"ABC School");
console.log(son1);

