// Regular functions
const actors = [
    {
        name: 'Salman Shah',
        dob: new Date(Date.UTC(1971, 8, 19))
    },
    {
        name: 'Abdur Razzak',
        dob: new Date(Date.UTC(1942, 0, 23))
    },
    {
        name: 'Ananta Jalil',
        dob: new Date(Date.UTC(1978, 3, 17))
    },
];

function calculateAgeAtPresent(dob) {
    const now = new Date();
    const nowMonths = (now.getUTCFullYear() - 1900) * 12 + now.getUTCMonth();
    const dobMonths = (dob.getUTCFullYear() - 1900) * 12 + dob.getUTCMonth();
    const diffMonths = nowMonths - dobMonths;
    const years = Math.floor(diffMonths / 12);
    const months = diffMonths - (years * 12);
    return [years, months];
}

for (let actor of actors) {
    console.log(actor.name, calculateAgeAtPresent(actor.dob));
}

// anonymous
