//Chapter 1
// TASK : 1
//alert("Error! Please enter a valid password");

//TASK : 2
/*
var a = "Welcome to JS Land"
var b = "Happy Coding!"
alert(a + "<br>" + b);
*/

//TASK : 3
//alert("Welcome to JS Land...");

//TASK : 4


//TASK : 5
//alert("Hello...I can run JS through my web browser's console");

//Chapter 2
//task 1
//alert("Jhone Doe");

//task 2
//alert("15 Years Old"); 

// TASK : 3
//alert("Certified Mobile Application Development");

/*Task : 4 
Error Not Running
for (var a = 4; a >= 0; a--){
    for(var b = 4; a > b; b--){
        document.write("PIZZA");
    }
    document.write("<br>");
}
*/

//TASK : 5
/*
var a = "My email address is";
var b = "aliaamir333@gmail.com";
alert(a +" "+ b);
*/

// TASK : 6
/*
var book = "I am trying to learn from the book A smarter way to learn JavaScript."
alert(book);
*/

//TASK : 7
//document.write("Yah! I can write HTML content through JavaScript");

// TASK : 8
/*
var line = "==================ஜ۩۞۩ஜ=====================";
alert(line);
*/

// CHAPTER # 3
// TASK : 1
/*
var age = 18;
alert("I am "+ age + " years old");
*/

// TASK : 2
/*
for(var a = 0; a < 15; a++){
    alert("You have visited on this site "+ a +" times");
}
*/

// TASK : 3
/*
var a = "Enter your age";
var b = "Your Age"
var c = +prompt(a,b);
document.write("My birth year is"+ " "+c);
*/

// TASK : 4
/*
var a = "How much Quantity";
var b = "Enter your order"
var d = "Laptops on Dell Merchandize Store.";
var e = +prompt(a,b);
document.write("Aamir Chandio ordered "+ e + " " + d);
*/

// CHAPTER # 4
// TASK : 1
/*
var rulesApp = "Rules for naming JS Variables";
var firstName = "Variable names can only contains";
var dashes = "_________, ____________ and __________.";
document.write(rulesApp + "<br>"+ firstName + dashes);
*/

// CHAPTER # 5
// TASK : 1
/*
var a = 5;
var b = 3;
var c = a+b;
document.write("Sum of your Addition value is "+c+"<br>");
*/

// TASK : 2
/*
var a = 5;
var b = 3;
var c = a-b;
document.write("Sum of your Subtraction value is "+c+"<br>");

var a = 5;
var b = 3;
var c = a*b;
document.write("Sum of your Multiplication value is "+c +"<br>");

var a = 5;
var b = 3;
var c = a/b;
document.write("Sum of your Division value is "+c+"<br>");

var a = 5;
var b = 3;
var c = a%b;
document.write("Sum of your Modulus value is "+c);
*/

// TASK : 3
/*
var a = 5;
var b = ++a;
var c = b+7;
var d = --c;
var e = d/4;
var f = e%3;
document.write("Initial value "+ a +"<br>");
document.write("Value after Increment is "+ b +"<br>");
document.write("Value after Addition is "+ c +"<br>");
document.write("Value after Decrement is "+ d +"<br>");
document.write("Value remainder after dividing is "+ e +"<br>");
document.write("The remainder output is "+ f +"<br>");
*/

// TASK : 4
/*
var ticket = 600;
var a = "How many Ticket's you want to buy";
var b = "Enter your booking tickets"
var c = +prompt(a,b);
var d = ticket*c;
document.write("Total Cost to buy the movie ticket's is "+ d + " PKR")
*/

// TASK : 5 
/*
for (var t=1; t <= 10; t++){
document.write("4" + "X" + t + "=" + 4*t + "<br>");
}
*/

// TASK : 6
// Not understanding

// TASK : 7
/*
var mobile = 650;
var a = "Each Mobile Price is 650";
var b = "Enter your booking order Quantity"
var c = +prompt(a,b);
var d = mobile*c;
document.write(a);
document.write("Total Quantity Mobile's  is "+ d + "<br>")
*/


// CHAPTER # 6-9
// TASK : 1
/*
var a = 10;
document.write("The value of a is: "+ a + "<br>");

var b = ++a;
document.write("......................................<br><br>");
document.write("The value of ++a is: "+ b + "<br>");
document.write("Now the value of a is: "+ b + "<br><br>");

var c = b++;
document.write("The value of a++ is: "+ c + "<br>");
document.write("Now the value of a is: "+ b + "<br><br>");

var d = --b;
document.write("The value of --a is: "+ d + "<br>");
document.write("Now the value of a is: "+ d + "<br><br>");

var e = b--;
document.write("The value of a-- is: "+ e + "<br>");
document.write("Now the value of a is: "+ b + "<br>");
*/

// TASK : 2
/*
a = 2;
b = 1;
var result = --a - --b + ++b + b--;
document.write(result);
*/

// TASK : 3
/*
var a = "Enter Your Full Name";
var b = "Enter Here"
var c = prompt(a,b);
document.write("Welcome to JS Land "+ c);
*/

// TASK : 4


// TASK : 5
/*
var a = "Enter Your Subjects";
var b = "Enter Here"
var c = prompt(a,b);
var d = prompt(a,b);
var e = prompt(a,b);

var a = "Enter Your Total Marks";
var b = "Enter Here"
var f = +prompt(a,b);
var g = +prompt(a,b);
var h = +prompt(a,b);

var a = "Enter Your Obtained Marks";
var b = "Enter Here"
var i = +prompt(a,b);
var j = +prompt(a,b);
var k = +prompt(a,b);

var l = f*100/i;
var m = g*100/j;
var n = h*100/k;
document.write("Subject Total Marks Obt Marks Per% <br>")
document.write(c+"  "+ f+ "  "+ i + "  "+l + "<br>");
document.write(d+"  "+ g+ "  "+ j + "  "+m +"<br>");
document.write(e +"  "+ h+ "  "+ k +"  "+ n);

*/

// CHAPTER # 9-11
// TASK : 1
/*
var a = "Enter Your City";
var b = "Enter Here"
var c = prompt(a,b);
if (c == "karachi" || c== "Karachi"){
    document.write("Karachi is the city of light's");
}
else {
    document.write("City is not updated");
}
*/

// TASK : 2
/*
var a = "Enter You Gender";
var b = "Enter Here";
var c = prompt(a,b);
if (c == "male" || c== "Male"){
    document.write("Good Morning Sir");
}
else if(c == "female" || c== "Female"){
    document.write("Good Morning Ma'am");
}
*/

// TASK : 3
/*
var a = "Enter the Signal Light's Color";
var b = "Enter Here";
var c = prompt(a,b);
document.write("Signal  Message <br>")
if (c == "red" || c== "Red"){
    document.write(c + "  " + "Must Stop!");
}
else if (c == "yellow" || c== "Yellow"){
    document.write(c + "  " + "Ready to Move");
}
if (c == "green" || c== "Green"){
    document.write(c + "  " + "Move Now");
}
*/

// TASK : 4
/*
var a = "Know the Fuel";
var b = "Enter Here Fuel litre";
var c = +prompt(a,b);
if (c <= 0.25){
    document.write("Please refill the fuel in your vehicle!");
}
else {
    document.write("In Your Vehicle fuel is more than have 1 Litre");
}
*/

// TASK : 5
/*
var a = 4; 
if (++a === 5){ 
    alert("given condition for variable a is true"); 
}   
var b = 82; 
if (b++ === 83){ 
    alert("given condition for variable b is true"); 
}  
var c = 12; 
if (c++ === 13){ 
    alert("condition 1 is true"); 
} 
if (c === 13){ 
    alert("condition 2 is true"); 
} 
if (++c < 14){ 
    alert("condition 3 is true"); 
} 
if(c === 14){ 
    alert("condition 4 is true"); 
}  
var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ 
    alert("The cost equals"); 
}  
if (true){ 
    alert("True"); 
} 
if (false){ 
    alert("False"); 
}
*/
/*
if("car" < "cat"){ 
    alert("car is smaller than cat"); 
}
*/

// TASK : 6
/*
var a = "Enter Your Percentage";
var b = "Please Enter Here";
var percent = +prompt(a,b);
if(percent >= 90 && percent <= 100){
    document.write("Your Grade is A1 Excellent")
}

else if(percent >= 80 && percent <= 90){
    document.write("Your Grade is A GOOD")
}
else if(percent >= 70 && percent <= 80){
    document.write("Your Grade is B AVERAGE")
}
else if(percent >= 60 && percent <= 70){
    document.write("Your Grade is C NEED IMPROVEMENT")
}
else if(percent >= 34 && percent <= 59){
    document.write("You Are PASSED Need to Work Hard")
}
else if(percent >= 1 && percent <= 33){
    document.write("Sorry You Are Fail Try Next Time")
}
*/

// TASK : 10
/*
var temperature = +prompt("Enter the Temperature Degree");
if(temperature >40){
    document.write("It is too hot outside.")
}
else if(temperature > 30){
    document.write("The Weather today is Normal.")
}
else if(temperature > 20){
    document.write("Today’s Weather is cool.")
}
else if(temperature > 10){
    document.write("OMG! Today’s weather is so Cool.")
}
*/

// TASK : 11
/* 
var value1 = prompt("Enter Your First Value")
var sign = prompt("Enter Your Operator")
var value2 = prompt("Enter Your Second Value")

 console.log(value1+sign+value2)
if (sign === '+'){
     alert((+value1)+(+value2))
 }
else if(sign === '-'){
     alert(value1-value2)
 }
else if(sign === '*'){
    alert(value1*value2)
} 
else if(sign === '/'){
    alert(value1/value2)
} 
else if(sign === '%'){
    alert(value1%value2)
}
*/

// CHAPTER # 12-13
// TASK : 4
/*
var a = prompt("Enter Your Choice Word");
if (a === a || a === e || a === i || a === o || a === u){
    alert("TRUE")
}
else{
    alert("FALSE");
}
*/

// TASK : 6
/*
var hour = 13; 
if (hour < 18) { 
    alert("Good Day");
} 
else {
    alert ("Good evening"); 
}
*/

// TASK : 7
/*
var a = "What's Time Now ?";
var b = "Enter Here";
var c = prompt(a,b);
if(c == 1300){
    document.write("It's 1 O'Clock Good Afternoon")
}
else if (c == 1400){
    document.write("It's 2 O'Clock Good Afternoon")
}
else if (c == 1500){
    document.write("It's 3 O'Clock Good Afternoon")
}
else if (c == 1600){
    document.write("It's 4 O'Clock Good Afternoon")
}
else if (c == 1700){
    document.write("It's 5 O'Clock Good Evening")
}
else if (c == 1800){
    document.write("It's 6 O'Clock Good Evening")
}
else if (c == 1900){
    document.write("It's 7 O'Clock Good Evening")
}
else if (c == 2000){
    document.write("It's 8 O'Clock Good Evening")
}
else if (c == 2100){
    document.write("It's 9 O'Clock Good Evening")
}
else if (c == 2200){
    document.write("It's 10 O'Clock Good Night")
}
else if (c == 2300){
    document.write("It's 11 O'Clock Good Night")
}
else if (c == 2400){
    document.write("It's 12 O'Clock Good Night")
}
*/

// CHAPTER # 14 - 16
// TASK : 1
/* 
var students = []
students[0]= "aamir";
students[1]= "ali";
console.log(students)

*/

/*
// TASK : 3
var students = ["aamir","ali"]
alert("Hello Mr: " +students[0])

// TASK : 4
var students = ["aamir","ali",454]
alert("Hello Mr: " +students[0])
*/