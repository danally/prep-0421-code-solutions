var languagesArray = ["html", "css", "javascript", "react", "node.js",]
var thirdElement = languagesArray[2];
var arrayLength = languagesArray;
var lastItem = arrayLength[5];

languagesArray.length;
languagesArray.splice (5,0, "c#", "php",);
languagesArray.pop ();
languagesArray.unshift ("c++",);
languagesArray.shift();


console.log (languagesArray)
console.log (thirdElement)
console.log (arrayLength)
console.log (lastItem)
