// String methods concat(), includes(), startsWith(), endsWith(), indexOf(), lastIndexOf(), match(), replace(), search(), slice(), split(), substring(), toLowerCase(), toUpperCase(), trim() and valueOf()

let str1 = "Hello, World!";
// concat()
let str2 = " How are you?";
let resultConcat = str1.concat(str2);
console.log(resultConcat); // Output: Hello, World! How are you?

let str3 = "JavaScript is awesome!";
// includes()
console.log(str3.includes("awesome")); // Output: true
console.log(str3.includes("Python")); // Output: false

let arr = ["apple", "banana", "cherry"];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let employees = {
    "John": 30,
    "Jane": 25,
    "Bob": 35,
    "Nick": 28,
};

for (let employee in employees) {
    console.log(employee + ": " + employees[employee]);
}