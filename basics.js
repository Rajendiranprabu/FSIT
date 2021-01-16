const students = [
    {
        student_id: 101,
        studentName: "Jai",
        completed: true
    },

    {
        student_id: 101,
        studentName: "Ganesh",
        completed: true
    },

    {
        student_id: 101,
        studentName: "Karthi",
        completed: false
    }

]

for (let i = 0; i < students.length; i++) {
    console.log(students[i].studentName);
}

console.log("--------------------------------------");
const completed_students = students.filter(function (student) {
    return student.completed === true;
})

console.log(completed_students);


const student_Names = students.map(function (student) {
    console.log(typeof student)
    console.log(typeof student.studentName)
    return student.studentName;

})
console.log(student_Names);


const completed_students_name = students.filter(function (student) {
    return student.completed === true;
}).map(function (student) {
    return student.studentName;
})
console.log(completed_students_name)
