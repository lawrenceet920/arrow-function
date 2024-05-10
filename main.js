// Student name
// Current date
// JS Arrow Functions Practice

// View the markdown (.md) file in VS Code for instructions

// Function prep

document.getElementById('prep').addEventListener('click', funPrep);
document.getElementById('function1').addEventListener('click', fun1);
document.getElementById('function2').addEventListener('click', fun2);
document.getElementById('function3').addEventListener('click', fun3);

function funPrep() {
    const functName = (parameter1, parameter2) => parameter1 + parameter2;
    const para1 = 'X';
    const para2 = 'Y';
    console.log(functName(para1,para2));
    document.getElementById('output').innerHTML = functName(para1,para2);
};



// Function 1
function fun1() {
    const welcomeUser = (homeSchool = 'Bellaire High School', firstName) => firstName + ' of '+ homeSchool;

    const school = prompt('What school do you attend?');
    const fName = prompt('What is your first name?');
    
    console.log (`Hello, ${welcomeUser(school, fName)} welcome to my site!`);
    document.getElementById('output').innerHTML = `Hello, ${welcomeUser(school, fName)} welcome to my site!`;
};

// Function 2
function fun2() {
    const totalCost = (cost1, cost2, cost3) => Math.floor(cost1 + cost2 + cost3);

    const price1 = 4.00;
    const price2 = 74.99;
    const price3 = 9.99;
    
    document.getElementById('output').innerHTML = `Your total cost is \"\$${totalCost(price1, price2, price3)}\" thank you for your buisness!`;
};

// Function 3

function fun3() {
    squares = (number = '4') => number * number;

    num = prompt("QUICK PICK A NUMBER!!1!1!!");
    
    if (num < 9) {
        alert(`Phew the square of ${num} is only ${squares(num)}.`);
    } else {
        alert(`Oh no! the counter can only hold 2 digits and the square of ${num} is ${squares(num)} which holds more!`);
    };
}