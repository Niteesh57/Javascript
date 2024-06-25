class student {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    welcome(){
        console.log(`Welcome ${this.name}! You are ${this.age} years old.`);
    }
}
class Teacher extends student{
    constructor(name,age,subject){
        super(name,age);
        this.subject = subject;
    }
}

class School extends Teacher{
    constructor(name,age,subject,roll){
        super(name,age,subject);
        this.roll = roll;
    }
}

let students = new student("Wellcome",17);
let teacher = new Teacher("Mr. Smith", 30, "Math");
let school = new School("Mr. Smith", 30, "Math", 12345);
students.welcome();
teacher.welcome();
school.welcome();