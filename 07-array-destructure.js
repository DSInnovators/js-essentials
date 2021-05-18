// Declare an array
const roles = ['ADMIN', 'USER', 'GUEST', 'BILLING'];

// Take the first role, indexed
const firstRole = roles[0];
console.log('firstRole: ' + firstRole);
console.log();

// Destructure to extract the first two roles
const [adminRoleName, userRoleName] = roles;
console.log("adminRoleName: " + adminRoleName );
console.log("userRoleName: " + userRoleName );
console.log();

// Destructure in parameters
function printFirstRoleName([roleName]) {
    console.log("in-printFirstRoleName");
    console.log(roleName);
    console.log();
}
printFirstRoleName(roles);

