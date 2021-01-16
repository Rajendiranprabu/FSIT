


const a = 24;
const b = 45;
const s = "Students Detail";

if (a === s) {
    console.log("Equal");
}
else {
    console.log("Not Equal")
}

//console.log(a + s + b);

console.log(`Hello ${s} Welcome to Java Course`)


//console.log(s.substring(2, 5).toLowerCase());

console.log(s.split(' '))

const students_list = ["Raj", "Ganesh", "Kumar"];

students_list.push("Krithik");

students_list.unshift("Chandrav");

console.log(students_list.indexOf("Raj"));

students_list.pop();

console.log(students_list);
