class Car {
    constructor(type, make, model, year, milage = 0) {
        this.type = type;
        this.make = make;
        this.model = model;
        this.year = year;
        this.milage = milage;
    }

    drive(distance) {
        if (typeof distance !== 'number' || distance < 0) {
            throw new Error('distance must be a non-negative number');
        }
        this.milage += distance; // update the instance's mileage
        return this.milage;
    }

    getDetails() {
        return `The vehicle you chose is a ${this.type}. A ${this.make} ${this.model} from ${this.year}. Current milage: ${this.milage}.`;
    }
}

const myCar = new Car('Car', 'Toyota', 'Camry', 2020, 4500);
const myTruck = new Car('Truck', 'Ford', 'F-150', 2018, 12000);
const myMotorcycle = new Car('Motorcycle', 'Harley-Davidson', 'Street 750', 2019, 3000);
// Function to make the log less cluttered 
function driveAndReport(vehicle, distance) {
    console.log('\n' + vehicle.getDetails());
    const newMilage = vehicle.drive(distance);
    console.log(`After driving ${distance} miles, ${vehicle.make} ${vehicle.model} new milage is ${newMilage}.`);
    console.log(vehicle.getDetails());
}

// Use the function for each vehicle
driveAndReport(myCar, 2000);
driveAndReport(myTruck, 500);
driveAndReport(myMotorcycle, 150);
