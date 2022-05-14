class parent {
    constructor(){
        this.fatherName = "MD. Ful Miah"
        this.motherName = "Shah Salma Jahan";
    }
}

class Child extends parent{
    constructor(name){
        super();
        this.name = name;
        }
}
getFullName(ex){
    return this.name + " " + this.fatherName;
}

const baby = new Child ("Fahim");
const baby2 = new Child ("Rahim")
console.log(baby);
console.log(baby2);
getFullName(baby2);