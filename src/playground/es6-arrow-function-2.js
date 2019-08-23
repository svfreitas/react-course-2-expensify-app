const ass =  (a, b) => {
    //console.log(arguments)
    return a + b;
}


console.log(55,1,1000);

const user = {
    name : 'Sergio',
    cities : ['Rio de Janeiro', 'California'],
    printPlacesLived () {
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        })
    }
}

user.printPlacesLived();

const multiplier = {
    numbers : [1,2,4],
    multiplyBy : 2,
    multiply() {
        return (this.numbers.map((num => num * this.multiplyBy)))
    }
}

console.log(multiplier.multiply())