## Project Files

Add these files to a new GitHub repo: ***arrow-functions-js***
- index.html
- main.js

Share the link to your online GitHub repo on Google Classroom.

## Functions 101

> ***function:*** A named block of code that:
> - performs a specific action or task or returns a value
> - is reusable
> - makes your scripts shorter and more *modular* (customizable like Lego blocks)



In modern JavaScript, you can create an *arrow function*, a shorter, simpler way of wrting a function.

If your traditional function is fairly simple, consider rewriting it as an arrow function.

## Overview

In this activity, you'll learn how to rewrite a traditional function as an arrow function.

**Step 1:** Review the comments and examples shown below.

**Step 2:** Rewrite the traditional functions outlined at the bottom of this markdown (.md) file as arrow functions.

**Step 3:** Run your script to make sure your arrow functions work as expected.

**Step 4:** Upload your code to your repository on the GitHub website.

## Sample Traditional Functions

### Function 1:
```javascript
// calcProduct written as a traditional function
function calcProduct (num1, num2) {
    // Calculate the product of two numbers
    return num1 * num2;
}
```
### calcProduct ( ) Rewritten as an Arrow Function:
```javascript
// Converting traditional function to the more modern arrow function
const product = (num1, num2) => num1 * num2;


// Call the function and show the answer in the browser console
const firstNum = 4;
const secondNum = 5;
console.log(`The product of ${firstNum} and ${secondNum} is: ${product(firstNum, secondNum)}`);
```

### Function 2:
```javascript
function welcomeUser (fName) {
    // Welcome the user by his/her first name
    return `Welcome to Career Tech, ${fName}!`;
}
```

### welcomeUser ( ) Rewritten as an Arrow Function:
```javascript
// Converting traditional function to the more modern arrow function
// Technique #1
const welcomeMsg = (fName) => `Welcome to Career Tech, ${fName}!`;

// Technique #2
// If the function has just ONE parameter, the ( ) that enclose the parameter are optional:
const welcomeMsg = fName => `Welcome to Career Tech, ${fName}!`;

// Call the function and show the welcome message in the browser console
const firstName = 'Mikey';
console.log(welcomeMsg(firstName));
```

### Function 3:
```javascript
function showBiography (fName, lName, userAge) {
    // Build a template string containing the user's full name and age
    return `Hello! My name is ${fName} ${lName} and I am ${userAge} years old.`;
}
// Call the showBiography function and display the info
// about the user in the browser console
const firstName = 'Tania';
const lastName = 'Rascia';
const age = 17;
console.log(showBiography(firstName, lastName, age));
```

### showBiography ( ) Rewritten as an Arrow Function:
```javascript
// Converting traditional function to the modern arrow function
const studentBio = (fName, lName, userAge) => `Hello! My name is ${fName} ${lName} and I am ${userAge} years old.`;

// Call the function and display the user info in the browser console
const firstName = 'Tania';
const lastName = 'Rascia';
const age = 17;
console.log(studentBio(firstName, lastName, age));
```

### Rewrite The Three Functions Below As Arrow Functions:

## Function 1
Write an arrow function that:
- asks the user which school they attend
- takes two parameters (firstName, schoolName)
- uses a default value of 'Bellaire High School' for the parameter schoolName
- displays in the browser console a sentence that includes the user's first name and school name


## Function 2
Write an arrow function that:
- takes three parameters (cost1, cost2, cost3)
- displays in the browser console the total cost for the three items the user purchased on Amazon


## Function 3
Write an arrow function that:
- takes one parameter (num), and that parameter has a default value of 4
- displays **in an alert box** the original number and the square of the original number
> For example, the output string in your alert box might say: 

*3 squared is 9.*





