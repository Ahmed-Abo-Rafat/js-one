
/* Problem 1
*********************/

var user = prompt("Enter Number?");

alert(user);

/* Problem 2 
********************/
var num = prompt("Enter Number?");
if(num % 3 === 0 && num % 4 === 0) {
    alert("Yes");
} else {
    alert("No");
};

/* Problem 3
*******************/
var num1 = prompt("Enter Num 1");
var num2 = prompt("Enter Num 2");
if(num1 > num2)
    alert(num1);
else
    alert(num2);


/* Problem 4
*******************/

var negative = prompt("Enter Num ?");

if(negative > 0) {
    alert("Positive");
} else {
    alert("negative");
}

/* Problem 5
*******************/

var num1 = prompt("Enter Num 1");
var num2 = prompt("Enter Num 2");
var num3 = prompt("Enter Num 3");

var max_elemnt = num1;
var min_elemnt = num1;

if(num2 > max_elemnt)
    max_elemnt = num2;
if(num3 > max_elemnt)
    max_elemnt = num3;

if(num2 < min_elemnt)
    min_elemnt = num2;
if(num3 < min_elemnt)
    min_elemnt = num3;

alert(`Max Element ${max_elemnt}`);
alert(`Min Element ${min_elemnt}`);

/* Problem 6
*******************/
var num = prompt("Enter num");
if(num % 2 === 0)
    alert("even");
else
    alert("Odd")

/* Problem 8
*******************/
var character = prompt("Enter Character");

if(character.toLowerCase() === 'a' || character.toLocaleLowerCase() === 'e' || character.toLocaleLowerCase() === 'i' || character.toLocaleLowerCase() === 'o' || character.toLocaleLowerCase() === 'u') {
    alert("vowel");
}else {
    alert("Consonant");
}


/* Problem 9
*******************/
var num = prompt("Enter num");
var counter = 1;
var mynumber = Number(num);
while(number) {
    alert(counter);
    counter++;
    number--;
}

/* Problem 10
*******************/
var multieNum = prompt("Enter Num");
var numberMulti = Number(multieNum);
for(var i = 1; i <= 12; i++) {
    alert(numberMulti * i);
}


/* Problem 11
*******************/
var even = prompt("Enter Num");
var evenNumber = Number(even);
for(i = 1; i <= evenNumber; i++ ) {
    if(i % 2 === 0) {
        alert(i);
    }
}

/* Problem 12
*******************/
var num_one = prompt("Enter Num1"); 
var num_two = prompt("Enter Num2"); 
var power = Number(num_one);
var count = Number(num_two)
while(--num_two) {
    power *= num_one;
}
alert(power);


/* Problem 12
*******************/
var subject1 = Number(prompt("Enter marks for Subject 1:"));
var subject2 = Number(prompt("Enter marks for Subject 2:"));
var subject3 = Number(prompt("Enter marks for Subject 3:"));
var subject4 = Number(prompt("Enter marks for Subject 4:"));
var subject5 = Number(prompt("Enter marks for Subject 5:"));

var total = subject1 + subject2 + subject3 + subject4 + subject5;

var average = total / 5;

var percentage = (total / 500) * 100;

alert(`Total Marks: ${total}`);
alert(`Average Marks: ${average}`);
alert(`Percentage: ${percentage}%`); 

/* Problem 13
*******************/
var month = Number(prompt("Enter your Month"));

switch(month) {
    case 1:    
    case 3:    
    case 5:    
    case 7:    
    case 8:    
    case 10:    
    case 12:
        alert("Days in Month " + 31);
        break;
    case 2:
        alert( "Days in Month " + 28 + " OR " +  30);
        break;
    default:
        alert("Days in Month " + 30);
}

/* Problem 14
*******************/
var physic= Number(prompt("Enter marks for Pyysic:"));
var chemist = Number(prompt("Enter marks for Chemist:"));
var biology = Number(prompt("Enter marks for Biology:"));
var math = Number(prompt("Enter marks for Math:"));
var computer = Number(prompt("Enter marks for Computer:"));

var total = physic + chemist + biology + math + computer;

var percentage = (total / 500) * 100;

if(percentage >= 90 ){
    alert("Grad A");
} else if (percentage >= 80) {
    alert("Grad B");
} else if (percentage >= 70) {
    alert("Grad c");
} else if(percentage >= 60 ) {
    alert("Grad D");
} else if (percentage >= 40) {
    alert("Grad E");
} else if (percentage < 40) {
    alert("Grad F");
}

/* Problem 15
*******************/

var monthTotal = prompt("Entr month");


switch(monthTotal) {
    case 1:    
    case 3:    
    case 5:    
    case 7:    
    case 8:    
    case 10:    
    case 12:
        alert("Number of Days in Month " + 31);
        break;
    case 2:
        alert( "Number of Days in Month " + 28 + " OR " +  30);
        break;
    default:
        alert("Number of Days in Month " + 30);
}
/* Problem 16
*******************/
var alph = prompt("Entr weather");

switch(true) {
    case alph == 'a':    
    case alph == 'e':    
    case alph == 'o':    
    case alph == 'i':    
    case alph == 'u':    
    case alph == 'a':    
        alert("Vowel");
        break;
    default:
        alert( "Consonant");
        break;
}

/* Problem 17
*******************/

var numOne = Number(prompt('Enter Number 1'));
var numTwo = Number(prompt('Enter Number 1'));

switch(true) {
    case (numOne > numTwo):
        alert(numOne);
        break;
    case (numTwo > numOne):
        alert(numTwo);
        break;
}

/* Problem 18
*******************/

var checkNum = Number(prompt('Enter Number'));

switch(checkNum % 2) {
    case 0:
        alert("Even");
        break;
    case 1:
        alert("odd");
        break;
    default:
        alert("Odd");
}

/* Problem 19
*******************/
var typNum = Number(prompt('Enter Type Number'));
switch(true) {
    case typNum > 0 :
        alert("Positve");
        break;
    case typNum === 0:
        alert("Zero");
        break;
    default:
        alert("Negtive");
}

/* Problem 20
*******************/

var el1 = Number(prompt("Enter num 1"));
var char = prompt("Enter Signe");
var el2 = Number(prompt("Enter num 2"));

switch(true) {
    case char == '+':
        alert(el1 + el2);
        break;
    case char == '-':
        alert(el1 - el2);
        break;
    case char == '/':
        alert(el1 / el2);
        break;
    case char == '/':
        alert(el1 / el2);
        break;
    case char == '*':
        alert(el1 * el2);
        break;
}