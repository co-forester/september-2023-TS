const func = (josef:string): void => {
    console.log(josef.length)
};
func('masha');
let a: string ='333';
let b: number = 444;
let c: string = b.toString()
console.log(a, b, c);
a = b.toString() + c;
console.log(a);

interface IUser<T, D> {
    name: string,
    age: number,
    house?: boolean,
    animal?: string,
    box: T,
    data?: D
}

const user1 : IUser<boolean, number> = {
    name: 'Serhii',
    age: 51,
    house: true,
    animal: 'dog',
    box: true
};
const user2 : IUser<string, number> = {
    name: 'Oksana',
    age: 49,
    animal: 'cat',
    box: 'coat'
};
const user3 : IUser<string[], number> = {
  name: 'Daniil',
  age: 16,
  box: ['mathematics', 'physics' , '']
};
const user4 : Partial<IUser<number, number>> = {
    box: 666
};
const user5 : Partial<IUser<{}, number>> = {
    name: 'Daria',
    box: {name: 'Aleks', age: 37},
    data: 2559997700077999552.0088
};
console.log(user1, user2, user3, user4, user5);
class User {
    name: string;
    age: number

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getName(): string {
        return this.name
    }
}

const user6 = new User( 'Kokosische',  6);
const user7 = new User( 'Dima', 44);
console.log(user6, user7);
console.log(user6.age);
console.log(user7.getName());

class UserX {
    constructor(private name: string, private age: number){

    }
    getName(): string {
        return this.name
    }
    getInfo(): void{
        console.log(`*name: ${this.name} -- *age: ${this.age}`)
    }
    getAge(): number{
        return this.age
    }
}
const user8 = new UserX('Nona', 45);
console.log(user8, user8.getName());
const users: UserX[] = [
    new UserX('Nina', 67),
    new UserX('Masha', 74),
    new UserX('Alla', 81),
];
users.push(new UserX('Misha', 41));
console.log(users, users[1].getName(), users.length);
const userOk = new UserX('Genry', 55);
userOk.getInfo();
console.log(userOk.getAge());

console.log('****************************')
class Car {
    constructor(private seats: number, private brand: string, private year: number) {
    }
    start(): void {
        console.log('go')
    }
    getInfo(): void{
        console.log(`brand: ${this.brand} -- seats: ${this.seats} -- year: ${this.year}`)
    }
}

console.log(new Car(3, 'BMW', 2022));
const car01 = new Car(6, 'seat', 2019);
console.log(car01);
car01.getInfo();
car01.start();
class ElectroCar extends Car{
    constructor(seats: number, brand: string, year: number, enginePower: number) {
        super(seats, brand, year);
    }
}class ElectronicCar extends Car{
    constructor(seats: number, brand: string, year: number, enginePower: number, driver: {name?:string, age?: number}) {
        super(seats, brand, year);
    }
}
const car02 = new ElectroCar(5, 'yyy', 2023, 60);
const car03 = new ElectronicCar(7, 'rrr', 2023, 70, {} )
car02.getInfo();
car02.start();
car03.getInfo();
car03.start();



interface IElectric{
    enginePower: number;

    getLedStatus(): boolean;
}



class CarStar implements IElectric{
    enginePower: number
    constructor(private seats: number, private brand: string, private year: number, enginePower: number) {
        this.enginePower = enginePower
    }
    getLedStatus(): boolean {
        return true
    }

    start(): void {
        console.log('go')
    }
    getInfo(): void{
        console.log(`brand: ${this.brand} -- seats: ${this.seats} -- year: ${this.year}`)
    }
}

abstract class Shape {
    abstract perimeter(): number;

    abstract area(): number;
}

class Tringle extends Shape{

    constructor(private a: number, private b: number, private c: number) {
        super();
    }

    area(): number {
        return this.a*this.c/this.b;
    }

    perimeter(): number {
        return this.a + this.b + this.c;
    }
}

class Rectangle extends Shape{


    constructor(private  a: number, private b: number) {
        super();
    }

    area(): number {
        return this.b + this.a * 2;
    }

    perimeter(): number {
        return this.a * this.b;
    }
}

const shapes: Shape[] = [
    new Tringle(4, 5, 6),
    new Rectangle(3, 6),
    new Tringle(1, 3, 5)
]
console.log(shapes[0].area(), shapes[1].perimeter(), shapes[2].area(), shapes[2].perimeter());
console.log('********************');
for (const shape of shapes) {
    console.log(shape.area(), shape.perimeter())
}
console.log('****************************')