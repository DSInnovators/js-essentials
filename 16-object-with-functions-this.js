const cars = [
    {
        brand: 'Toyota',
        model: 2012,
    },
    {
        brand: 'Lexus',
        model: 2014,
    },
    {
        brand: 'Nissan',
        model: 2016,
    },
];

for (let c of cars) {
    console.log(c.brand + ":" + c.model);
}





// function printName() {
//     console.log(this.brand + ":" + this.model);
// }
//
// for (let c of cars) {
//     c.printName();
// }
