function greetHindi(person) {
    console.log(`Namaste ${person}!`)
}
function greetEnglish(person) {
    //write your code here
    console.log(`Hello ${person}!`)
}
function greetFrench(person) {
     //write your code here
     greetHindi(person);
     greetEnglish(person);
    console.log(`Bonjour ${person}!`)
}
function Greetings(person) {
    greetFrench(person)
}