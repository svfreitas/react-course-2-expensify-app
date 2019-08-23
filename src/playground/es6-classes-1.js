class Person{
     constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hi, I am ${this.name}.`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    }

}

class Traveller extends Person {
    constructor(name, age, homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }
    getGreeting(){
        let greeting = super.getGreeting();
        if (this.hasLocation()){ 
            greeting += `I'm visiting from ${this.homeLocation}.`
        }
        return greeting
    }
    hasLocation(){
        return !!this.homeLocation;
    }
}

const p1 = new Person('Sergio Viana', 47)
console.log(p1.getGreeting());
console.log(p1.getDescription());

const p2 =  new Person();
console.log(p2.getGreeting());
console.log(p2.getDescription());

const t1 = new Traveller('Sergio Viana',47,'Rio de Janeiro');

console.log(t1.getGreeting());

const t2 = new Traveller();

console.log(t2.getGreeting());