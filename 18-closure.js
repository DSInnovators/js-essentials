function makeSequence(startingValue) {
    let currentValue = startingValue || 0;

    return function increment() {
        return currentValue++;
    }
}

const s1 = makeSequence();

console.log("s1 values:")
console.log( s1() );
console.log( s1() );
console.log( s1() );

const s2 = makeSequence(100);

console.log("\ns2 values:")
console.log( s2() );
console.log( s2() );
console.log( s2() );

console.log("\ns1 values:")
console.log( s1() );
console.log( s1() );
console.log( s1() );
