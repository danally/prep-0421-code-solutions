function sum(num1, num2) {
  return num1 + num2;
}

var sum = sum(2, 2)
console.log('addTwoNumbersResult = ', sum)

function convertHoursToMinutes(hours) {
  return hours * 60
}

var convertHoursToMinutes = convertHoursToMinutes (2)
console.log('convertHoursToMinutesResult = ', convertHoursToMinutes)

function getGreeting(name) {
  return "hello " + name + "!"
}

var getGreeting = getGreeting ("world")
console.log('helloWorld!Result = ', getGreeting)

function addAndMultiplyBy5(num1, num2) {
  var num1 = 10
  var num2 = 5
  return (num1 + num2) * num2
}

var addAndMultiplyBy5 = addAndMultiplyBy5 (10, 5)
console.log ('addThenMultiplyResult = ', addAndMultiplyBy5)


function subractTwoNumbers(num1, num2) {
  return num1 - num2
}

var difference = subractTwoNumbers (22, 7)
console.log('subtractTwoNumbersResult = ', difference)

function getCircleCircumference(radius) {
  return radius / (2 * 3.14)
}

var getCircleCircumference = getCircleCircumference (5)
console.log('circumferenceResult = ', getCircleCircumference)

function getFullName(firstName, lastName) {
  return firstName + " " + lastName
}

var fullName = getFullName ("Juan","Ramirez")
console.log('fullNameResult = ', fullName)

function cube(number) {
  return number * number * number
}

var cube = cube (5)
console.log('cubeResult = ', cube)
