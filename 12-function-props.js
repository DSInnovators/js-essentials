// Function properties

function calculateAgeAtPresent(dob) {
    const now = new Date();
    const nowMonths = (now.getUTCFullYear() - 1900) * 12 + now.getUTCMonth();
    const dobMonths = (dob.getUTCFullYear() - 1900) * 12 + dob.getUTCMonth();
    const diffMonths = nowMonths - dobMonths;
    const years = Math.floor(diffMonths / 12);

    if (calculateAgeAtPresent.yearOnly) {
        return years;
    }

    const months = diffMonths - (years * 12);
    return [years, months];
}

calculateAgeAtPresent.yearOnly = false;

// const dob1 = new Date(Date.UTC(1978, 3, 17));
// console.log(calculateAgeAtPresent(dob1));
//
// calculateAgeAtPresent.yearOnly = true;
// console.log(calculateAgeAtPresent(dob1));
