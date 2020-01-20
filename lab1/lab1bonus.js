//exercise 1
const sUpper = (str) => {

    strings = str.split(" ");

    let first, second
    newstr = ""
    for(word in strings){
        [first, ...second] = strings[word].split("");
        first = first.toUpperCase();

        let newWord = first

        for (var letter of second){
            newWord += letter
        }
        newstr += newWord
        newstr += " "
    }
    
    return newstr
}

console.log(sUpper("the quick brown fox"))


const findMax = (num1, num2, num3) => {
    largest = num1

    if (num2 > largest){
        largest = num2
    }
    if (num3 > largest){
        largest = num3
    }

    return largest
}

console.log(findMax (1,0,1));
console.log(findMax (0,-10,-20));
console.log(findMax (1000,510,440));

const moveThree = (str) => {
    if(str.length > 3)
    {
        str1 = str.substring(0, str.length -3)
        str2 = str.substring(str.length -3, str.length)

        str = str2 + str1
    }

    return str
}

console.log(moveThree("Python"))
console.log(moveThree("Javascript"))
console.log(moveThree("Hi"))

const angle_Type = (angle) => {
    if (angle >= 0 && angle < 90)
    {
        str = "Acute"
    }
    if (angle == 90)
    {
        str = "Right" 
    }
    if (angle > 90 && angle < 180)
    {
        str = "Obtuse"
    }
    if (angle == 180)
    {
        str = "Straight"
    }

    return str + " angle"
}

console.log(angle_Type(47))
console.log(angle_Type(90))
console.log(angle_Type(145))
console.log(angle_Type(180))

const findMaxSum = (arr, count) =>{
    for (num in arr){
        
    }
}