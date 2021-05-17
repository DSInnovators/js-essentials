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
    mother: {
        name: 'Arju Begum',
        nid: '197023456',
        occupation: 'Housewife',
        age: 55
    },
    'ssc-year': 2010
};

// CASE: 1
// We want to extract two properties into variables
const { name, married } = student;

console.log('Name: ' + name);
console.log('Is married?: ' + married);

// CASE: 2
// We want to extract a property into a variable of a different name
const { age: studentAge } = student;
console.log("Student's age: " + studentAge);

// CASE: 3
// Extract a nested property
const { grade, mother: { nid } } = student;
console.log("Student's grade: " + grade + ", mother's NID: " + nid);

// CASE: 4
// Extract a nested property with a different variable name
const { father: {occupation: fatherOccupation}} = student;
console.log("Father's occupation: " + fatherOccupation);


