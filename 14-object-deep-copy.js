const student = {
    name: 'Murad Takla',
    grade: 10,
    age: 34,
    married: false,
    father: {
        name: 'Hasan Takla',
        nid: '19659876',
        occupation: 'Private Service',
        age: 60
    },
};
console.log("student:", student);

// Make a copy of the student object
const studentCopy = {...student};
studentCopy.age = 40;

console.log("studentCopy.age:", studentCopy.age);
console.log("student.age:", student.age);

// nested
studentCopy.father.age = 80;
console.log("studentCopy.age:", studentCopy.father.age);
console.log("student.age:", student.father.age);


