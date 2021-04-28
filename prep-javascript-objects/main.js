
var person = {firstName: "danally", lastName: "ly", hobby: "cars", job: "mechanic", previousJob: "apprentice",};
var fullName = person.firstName + " " + person.lastName
var myCar = {make: "subaru", model: "wrx sti", year: "2019", owner: fullName, color: "world rally blue",}

console.log (person)
console.log ("The person's name is: " + fullName)
console.log ("The person's current job is: " + person.job)
console.log ("The person's previous job is: " + person.previousJob)
console.log ("The complete person info:", person)
console.log ("Car information", myCar)
console.log ("My name is " + myCar.owner +" and I drive a " + myCar.year + " " + myCar.make + " " + myCar.model +".")
console.log ("My full car info:", myCar)
