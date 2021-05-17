const name = "Murad Takla";
const profession = "Motivational Speaker";
const age = 34;

// Create an object with individual property assignment
const propStudent = {};
propStudent.name = name;            // simple
propStudent['job'] = profession     // string property name
const fieldName = 'age';
propStudent[fieldName] = age;       // dynamic property name
console.log(propStudent);

// Create an object
const student = {
    name: name,
    job: profession,
    age: age
};
console.log(student);

// Shorthand form
const quickStudent = {
    name,
    job: profession,
    age
}
console.log(quickStudent);

// Dynamic property name
const nameField = "name";
const jobField = "job";
const ageField = "age";

const dynamicStudent = {
    [nameField]: name,
    [jobField]: profession,
    [ageField]: age
};
console.log(dynamicStudent);
