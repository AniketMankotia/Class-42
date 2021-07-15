1,2,3
3
"Aniket"
"Aniket"
var name = "Aniket";
undefined
name
"Aniket"
name.length
6
name.toUpperCase();
"ANIKET"
var name = 9;
undefined
name\
VM437:1 Uncaught SyntaxError: Invalid or unexpected token
name
"9"
parseInt("1000")
1000
100+2
102
5*5
25
5/2
2.5
5%2
1
"20"+"30"
"2030"
"20"+name
"209"
"a"/"b"
NaN
var x;
undefined
var x = true;
undefined
x
true
var x;
undefined
x
true
var y;
undefined
y
undefined
if(3+=2){}
VM1006:1 Uncaught SyntaxError: Invalid left-hand side in assignment
if(3+=3)
VM1054:1 Uncaught SyntaxError: Invalid left-hand side in assignment
if(3 === 2){
    console.log("happy");
}else{
    console.log("sad");
}
VM1281:4 sad
undefined
var name = "MyNmae";
undefined
switch(name){
        case "MyNmae";
VM1420:2 Uncaught SyntaxError: Unexpected token ';'
switch(name){
    case "MyNmae": console.log("condition1");
        break;
    case "MyName": console.log("condition2");
        break;
    default: console.log("none of the condition is true")
}
VM1868:2 condition1
undefined
var name = "MyName";
undefined
switch(name){
    case "MyNmae": console.log("condition1");
        break;
    case "MyName": console.log("condition2");
        break;
    default: console.log("none of the condition is true")
}
VM1889:4 condition2
undefined
for(var i = 0; i <= 5; i++){
    console.log(i);
}
VM2119:2 0
VM2119:2 1
VM2119:2 2
VM2119:2 3
VM2119:2 4
VM2119:2 5
undefined
var name = ["Aniket","Shiven","Aayush","Aryan"];
undefined
name[2];
"i"
var friends = ["Aniket","Shiven","Aayush","Aryan"];
undefined
friends[2];
"Aayush"
for(var index in friends){
    console.log(friends[index]);
}
VM2510:2 Aniket
VM2510:2 Shiven
VM2510:2 Aayush
VM2510:2 Aryan
undefined
friends.length
4
friends.push("Pranav");
5
friends
(5) ["Aniket", "Shiven", "Aayush", "Aryan", "Pranav"]
friends.pop();
"Pranav"
friends
(4) ["Aniket", "Shiven", "Aayush", "Aryan"]
function circumfrence(r){
    var a = 2*3.14*r 
    return a;
}
undefined
circumfrence(2);
12.56
var paddle = new Object();
undefined
paddle.length = 60
60
paddle.showLength = function (){
    console.log(paddle.length);
}
ƒ (){
    console.log(paddle.length);
}
paddle.showLength();
VM3464:2 60
undefined