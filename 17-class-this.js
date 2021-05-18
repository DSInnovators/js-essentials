// class in JS

class Car {

    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    printName() {
        console.log(this.brand + ":" + this.model);
    }

}

const c1 = new Car('Toyota', 2012);
const c2 = new Car('Nissan', 2016);

c1.printName();
c2.printName();




// EXHIBIT 1
// setTimeout(c1.printName, 2000);

// EXHIBIT 2
// setTimeout(function() {
//     c1.printName()
// }, 2000);

// EXHIBIT 3
// show bind in constructor
// show class fields
// show bind in class field
// show arrow function
