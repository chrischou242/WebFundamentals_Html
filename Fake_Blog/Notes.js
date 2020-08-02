var foo =100; // integers
var name = "bob";// strings
var hungry = true;// boolean

var num1 = 10;
var num2 = 5;

var num3;

num3 = num1+num2; // 15

// Conditional Structures
if(num1> num2){
    console.log("yes vinson yes")
} else{
    console.log("NO")
}

//if (num1 < num2){
//    console.log("yes vinson yes")
//}

num1 == num2 // false
num1 ===num2 // false
num1 ===num2// true

10 == "10"// true
10 ==="10"// false


// double equal does care about data type
// tripple equal cares about the value and the data type


num1 != num2 // true
num1 !== num2 // true

i += 5
i ++

// Repetative Structures 

for (var i=0; i<5; i=i+1){
    console.log("Hi")
}

// function declaration

function sumTwoNumbers(){
    var a=10;
    var b=5;
    var c= a+b;
    console.log(c);
}

sumTwoNumbers()


function sum(a,b,z){
    var c = a+b,z;
    console.log(c);
}

sum(5,7,14)