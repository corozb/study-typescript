abstract class Vehicle {
    // private brandName: string
    // private model: number
    // private color: string

    // constructor(b: string, model: number, color: string) {
    //     this.brandName = b,
    //     this.model = model,
    //     this.color = color
    // }

    constructor (
        protected readonly brandName: string, 
        private model: number, 
        private color: string,
        private price: number
        ) {}
    
    // getter
    get getPrice() {
        return `The current price is ${this.price}`
    }

    // setter
    set setPrice(value: number) {
        this.price = value
    }

    static PriceToCurrency(value: number, typeOfCurrency: string) {
        let result = ''

        switch (typeOfCurrency) {
            case 'USD':
                result = `US ${value} dolares`
                return result

            case 'COP':
                result = `$ ${value} pesos colombianos`
                return result

            }

            return result
    }

    drive() {
        console.log(`I'm driving a ${this.brandName} model ${this.model} and color ${this.color}`)
    }

    abstract abstractMethod(): void
}

// const vehicle = new Vehicle('mazda', 2020, 'black', 50000)
// vehicle.brandName = 'Renault' // creamos atributos privados para que no puedan ser modificados sino a traves de su propia clase
// console.log(vehicle)
// vehicle.drive()

// let motocycle = {
//     brandName: 'Royal Enfield',
//     drive : vehicle.drive
// }

// console.log(motocycle.drive())

// prototype inheritance
class Car extends Vehicle {
   abstractMethod(): void {
       console.log('abstract method')
   }
//    super(brandName, model, color) {}
   drive(): void {
    console.log(`I'm driving a ${this.brandName}`)
   } 
}

const car = new Car('Range Rover', 2018, 'green', 80000)
// getter
console.log(car.getPrice)

// setter
car.setPrice = 150000
console.log(car.getPrice)

console.log(car)
car.drive()

// static
console.log(Car.PriceToCurrency(1000, 'USD'))

console.log('-----------astract------------')
class Airplane extends Vehicle {
    abstractMethod() : void {
        console.log('this is an abstract method')
    }
}

const avion = new Airplane('hercules', 2020, 'dark', 1000000)

console.log(avion)
console.log(avion.abstractMethod())

console.log(' ')
console.log(' ')
console.log('-----------clases e interfaces------------')

interface Billable {
    currentBillable(): string
}

interface Speed {
    maxSpeed(): number
}

class Bike extends Vehicle implements Billable, Speed {
    abstractMethod(): void {
        console.log(`I'm driving a bike call ${this.brandName}`)
    }
    currentBillable(): string {
        return 'The bike const 20M'
    }

    maxSpeed(): number {
        return 180
    }
}

const royal = new Bike('Royal', 2021, 'blue', 22)
console.log(royal)
console.log(royal.abstractMethod())
console.log(royal.currentBillable())
console.log(royal.maxSpeed())