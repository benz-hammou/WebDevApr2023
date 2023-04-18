// Exercise - OOP

// Create Car class that takes 3 parameters: brand, model, color and returns an object with the following properties:
// brand, model, color, speed, maxSpeed, isOn, distance, speedUp, brake, turnOn, turnOff, drive

// Create a method speedUp that increases the speed by 5

// Create a method brake that decreases the speed by 5

// Create a method turnOn that sets the isOn property to true

// Create a method turnOff that sets the isOn property to false

// Create a method drive that increases the distance by the speed

// Create a method displayInfo that displays the car's brand, model, color, speed, maxSpeed, isOn, distance

// Create a method displayDistance that displays the car's distance

// Create a method displaySpeed that displays the car's speed

// Create a method displayMaxSpeed that displays the car's maxSpeed

// Create a method displayIsOn that displays the car's isOn

// Create a method displayBrand that displays the car's brand

// Create a method displayModel that displays the car's model

// Create a method displayColor that displays the car's color

// Create a new car object with the following properties: brand: 'Tesla', model: 'Model-s', color: 'red', maxSpeed: 300

// Create a new car object with the following properties: brand: 'Audi', model: 'A6', color: 'black', maxSpeed: 220

// Create a new car object with the following properties: brand: 'Mercedes', model: 'C200', color: 'white', maxSpeed: 180

// Create a new car object with the following properties: brand: 'Opel', model: 'Astra', color: 'blue', maxSpeed: 160

// Create a new car object with the following properties: brand: 'Ford', model: 'Focus', color: 'green', maxSpeed: 180

class Car {
    constructor(brandOfCar, modelOfCar, colorOfCar, maxSpeedOfCar) {
        this.brand = brandOfCar
        this.model = modelOfCar
        this.color = colorOfCar
        this.maxSpeed = maxSpeedOfCar
        this.speed = 0
        this.isOn = false
        this.distance = 0
    }
    turnOn() {
        // Run de the engine!
        console.log("Run engine now !");
        return this.isOn = true
    }
    turnOff() {
        // Turn engine off!
        console.log("Stop engine !")
        return this.isOn = false
    }
    speedUp() {
        //incrase the speed !
        if (this.isOn) {
            if (this.speed < this.maxSpeed) {
                return this.speed += 5
            }
        } else {
            console.log("Turned the engine on befor you speedUp !")
        }
    }
    drive() {
        // increase distance by this.speed > 0+=this.speed
        return this.distance += this.speed
    }

    displayInfo() {
        const obj = {
            Brand: this.brand,
            Model: this.model,
            Color: this.color,
            MaxSpeed: this.maxSpeed,
            EngineStatus: this.isOn,
            Speed: this.speed,
            Distance: this.distance,
            isOn: this.isOn,
        }
        return obj
    }
}


let auto = new Car("BMW", "X3", 'Green', 280)
auto.turnOn()
auto.turnOff()
auto.speedUp()
auto.turnOn()
auto.speedUp()
auto.speedUp()
auto.drive()
auto.drive()
console.log(auto.displayInfo());

let auto_2 = new Car("Tesla", "Model-S", 'red', 300)
auto_2.turnOn()
auto_2.speedUp()
auto_2.drive()
console.log(auto_2.displayInfo());

let auto_3 = new Car('Audi', 'A6', 'black', 220)
auto_3.turnOn()
auto_3.speedUp()
auto_3.speedUp()
auto_3.speedUp()
auto_3.speedUp()
auto_3.speedUp()
auto_3.speedUp()
auto_3.drive()
auto_3.speedUp()
auto_3.speedUp()
auto_3.speedUp()
auto_3.speedUp()
auto_3.drive()
auto_3.turnOff()
console.log(auto_3.displayInfo());

let auto_4 = new Car('Mercedes', 'C200', 'white', 180)
auto_4.turnOn()
auto_4.speedUp()
auto_4.speedUp()
auto_4.drive()
auto_4.turnOff()
auto_4.speedUp()
console.log(auto_4.displayInfo());

let auto_5 = new Car('Opel', 'Astra', 'blue', 160)
auto_5.speedUp()
auto_5.speedUp()
auto_5.drive()
auto_5.turnOn()
auto_5.speedUp()
auto_5.drive()
console.log(auto_5.displayInfo());

let auto_6 = new Car('Ford', 'Focus', 'green', 180)
auto_6.turnOn()
auto_6.turnOff()
auto_6.speedUp()
auto_6.turnOn()
auto_6.speedUp()
auto_6.speedUp()
auto_6.speedUp()
auto_6.speedUp()
auto_6.drive()
console.log(auto_6.displayInfo());