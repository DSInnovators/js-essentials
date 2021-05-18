// Object iteration
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

for (let k in student) {
    console.log(k);
}
