// IF STATEMENT

var Age = 23;

if (Age >= 18) {
    document.write("You are eligible to VOTE.");
}
document.write("<br>");
// IF ELSE STATEMENT

var Number = 20;

if (Number % 2 == 0) {
    document.write("EVEN");
} else {
    document.write("ODD");
}
document.write("<br>");
// IF ELSE IF STATEMENTS

var Num1 = 82;
var Num2 = 45;

var operator = "+";

if (operator == "+") {
    document.write("Num1 + Num2 = ", Num1 + Num2);
} else if (operator == "-") {
    document.write("Num1 - Num2 = ", Num1 - Num2);
} else if (operator == "*") {
    document.write("Num1 * Num2 = ", Num1 * Num2);
} else if (operator == "/") {
    document.write("Num1 / Num2 = ", Num1 / Num2);
} else if (operator == "%") {
    document.write("Num1 % Num2 = ", Num1 % Num2);
} else {
    document.write("INVALID OPERATOR");
}

document.write("<br>");
// SWITCH CASE
var date = new Date();
var day = date.getDay();
var dayOfMonth = date.getDate();

console.log(date);
console.log(day);
console.log(dayOfMonth);

switch (day) {
    case 0:
        document.write("Sunday");
        break;
    case 1:
        document.write("Monday");
        break;
    case 2:
        document.write("Tuesday");
        break;
    case 3:
        document.write("Wednesday");
        break;
    case 4:
        document.write("Thrusday");
        break;
    case 5:
        document.write("Friday");
        break;
    case 6:
        document.write("Saturday");
        break;
    default:
        document.write("Invalid");
        break;
}

document.write("<br>");
// WHILE LOOP

var i = 0;

while(i <= 10){

    document.write("Value of I = ",i,"<br>");
    i++;

}

document.write("<br>");

// do WHILE LOOP

var a = 1;

do{
    document.write("Value of A = ",a,"<br>");
    a++;
}while(a <= 10);

// FOR LOOP
document.write("<br>");

for(var b = 0;b <= 10;b++){
    document.write("Value of B = ",b,"<br>");

}