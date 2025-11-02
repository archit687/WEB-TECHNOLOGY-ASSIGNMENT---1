// BUILT IN OBJECTS
 
// STRING OBJECTS

let word = "THIS IS JAVASCRIPT"

let word1 = "JAVA";
let word2 = "SCRIPT";

document.write("<br>"+word1.charAt(0));
document.write("<br>"+word1.concat(word2));
document.write("<br>"+word.indexOf("SCR"));
document.write("<br>"+word.toLowerCase());
document.write("<br>"+word.toUpperCase());
document.write("<br>"+word.slice(12,15));

// MATHS OBJECTS

// MATHS PROPERTIES
document.write("<br>"+Math.PI);
document.write("<br>"+Math.sqrt(25));
document.write("<br>"+Math.SQRT1_2);
document.write("<br>"+Math.LN2);
document.write("<br>"+Math.LN10);
document.write("<br>"+Math.LOG2E);
document.write("<br>"+Math.LOG10E);

// MATHS METHODS / FUNCTION

document.write("<br>"+Math.abs(10));
document.write("<br>"+Math.cos(8));
document.write("<br>"+Math);
document.write("<br>"+Math.log(45));
document.write("<br>"+Math.max(34304,34343));
document.write("<br>"+Math.min(38493,8938));
document.write("<br>"+Math.pow(5,2));
document.write("<br>"+Math.random());
document.write("<br>"+Math.round(45.3434));
document.write("<br>"+Math.sin(45));
document.write("<br>"+Math.sqrt(25));
document.write("<br>"+Math.tan(23));

// DATES

let dt = new Date("December 25,2016 23:15:00");

document.write("<br>"+dt.getDate());
document.write("<br>"+dt.getMonth());
document.write("<br>"+dt.getFullYear());
document.write("<br>"+dt.getHours());
document.write("<br>"+dt.getMinutes());
document.write("<br>"+dt.getSeconds());

//Boolean 

let b = new Boolean(false);

document.write("<br>"+b);

let object1 = new Boolean();
let object2 = new Boolean(0);
let object3 = new Boolean(null);
let object4 = new Boolean('');
let object5 = new Boolean(false);

document.write("<br>"+object1+" "+object2+" "+object3+" "+object4+" "+object5);
console.log(object1,object2,object3,object4,object5);

let object6 = new Boolean(true);
let object7 = new Boolean('true');
let object8 = new Boolean('false');
let object9 = new Boolean('hello');
let object10 = new Boolean([]);
let object11 = new Boolean({});

document.write("<br>"+object6+" "+object7+" "+object8+" "+object9+" "+object10+" "+object11);

var result = (1 > 2);

document.write("<br>",result.toString());

document.write("<br>",result.valueOf());

// NUMBER METHODS

var a = new Number(20.78);

document.write("<br>"+a.toString());
document.write("<br>"+a.valueOf());

x = 54;
y = 'archit';
z = 5.334;

document.write("<br>"+isFinite(x));
document.write("<br>"+Number.isInteger(x));
document.write("<br>"+Number.isNaN(x));
document.write("<br>"+Number.parseFloat(y));

document.write("<br>"+z.toExponential());
document.write("<br>"+z.toFixed(1));

document.write("<br>"+z.toPrecision(6));
