var languagesArray=["html","css","javascript","react","node.js"];
console.log (languagesArray);

languagesArray.length
console.log (languagesArray.length);

languagesArray.push('c#')
languagesArray.push('php')

console.log ('added c# & php', languagesArray)

languagesArray.pop();

console.log ('removed last element', languagesArray)

languagesArray.splice (0,0, 'c++')

console.log ('added c++ element to start', languagesArray)

languagesArray.shift();

console.log ('remove element at start', languagesArray)

var thirdElement = languagesArray[2];

console.log ('display third element', thirdElement);

var arrayLength  = languagesArray.length

console.log ('new length for array', arrayLength);

var lastItem = languagesArray[arrayLength-1];

console.log ('displays last item in array', lastItem);
