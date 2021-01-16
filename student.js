class Student {

    constructor(name, std, sect, birthdate) {
        this.name = name;
        this.std = std;
        this.sect = sect;
        this.birthdate = new Date(birthdate);
    }

    getStudents() {
        console.log(this.name)
        console.log(this.std);
    }
}
const std1 = new Student("Raj", 5, "A", "10-10-2010");
const std2 = new Student("Kumar", 10, "B", "08/05/2010");


// const student = {
//     firstName: "Krithi",
//     lastName: "Raj",
//     age: 12,
//     address: {
//         doorNo: 12,
//         street: "Gandhi St",
//         State: "MH"

//     }
// }

std1.getStudents();
std2.getStudents();