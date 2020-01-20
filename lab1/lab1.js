//exercise 1

const gretter = (myArray, counter) => {
    var greetText = "Hello"
    for (const index of myArray){
        console.log(greetText + " " + index)
    }
}
gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3)

//exercise 2

const sUpper = (str) => {
    let first, second
    [first, ...second] = str.split("");
    first = first.toUpperCase();
    second = second.map(w => w.toLowerCase())

    let newStr = first

    for (var letter of second){
        newStr += letter
    }

    //console.log(newStr);
    return newStr
}

sUpper("tooL");

//exercise 3

const colors = ['red', 'green', 'blue']
capitalizedColors = colors.map(w => sUpper(w));
console.log(capitalizedColors);

//Exercise 4
var values = [1,60,34,30,20,5]


const filterLessThanTwenty = (arr) => {

    result = arr.filter(num => num < 20)

    return result
}

console.log(filterLessThanTwenty(values))

// Exercise 5

var array = [1,2,3,4]

const calculateSum = (array) => {

    reducer = (accumulator, currentValue) => accumulator + currentValue
    return array.reduce(reducer)

}

console.log(calculateSum(array))

const calculateProduct = (array) => {
    reducer = (accumulator, currentValue) => accumulator * currentValue
    return array.reduce(reducer)
}

console.log(calculateProduct(array))


class Car{
    constructor(model, year){
        this.model = model
        this.year = year
    }

    details(){
        return("Model: " + this.model + " Engine: " + this.year)
    }
}

class Sedan extends Car{
    constructor(model, year, balance){
        super(model, year)
        this.balance = balance
    }

    info(){
        return(this.model + " " + this.year + " has a balance of " + this.balance)
    }
}

const car2 = new Car('Pontiac Firebird', 1976)
console.log(car2.details())
const sedan = new Sedan('Volvo SD', 2018, 30000)
console.log(sedan.info())