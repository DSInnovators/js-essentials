const student = {
    name: 'Murad Takla',
    age: 34,
    married: false,
    father: {
        name: 'Hasan Takla',
        age: 60
    },
    mother: {
        name: 'Arju Begum',
        age: 55
    },
    'ssc-year': 2010
};

// When the property name is dynamic
const selectedParent = 'mother';
console.log("Student's parent's name: " + student[selectedParent].name);

// When the property name is not a valid JS variable name
console.log("SSC pass year: " + student['ssc-year']);
