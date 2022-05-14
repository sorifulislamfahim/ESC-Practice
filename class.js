class student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.village = "Abda";
    }

}

const student1 = new student(1, "Fahim");
const student2 = new student(2, "Rahim");
console.log(student1, student2);

const student3 = new student(3, "Tamim");
console.log(student3);