//  MY FORM
// 1st Assignment

// var arr = [];
// var user = document.getElementById("user");
// var last = document.getElementById("last");
// var email = document.getElementById("email");
// var pass = document.getElementById("pass");
// var userError = document.getElementById("userError");
// var lastNameError = document.getElementById("lastError");
// var emailError = document.getElementById("emailError");
// var passError = document.getElementById("passError");


// function getValue(){
// var a = user.value;
// var b = last.value;
// var c = email.value;
// var d = pass.value;


// if(a == ""){
//     user.style.borderColor="red";
//     userError.innerHTML = "Enter First Name";
//     last.style.borderColor="red";
//     lastError.innerHTML = "Enter Last Name";
//     email.style.borderColor="red";
//     emailError.innerHTML = "Enter Email Name";
//     pass.style.borderColor="red";
//     passError.innerHTML = "Enter Password Name";
// }
// else if(a == ""){
//     user.style.borderColor="red";
//     userError.innerHTML = "Enter First Name";
// }
// else if(b == ""){
//     last.style.borderColor="red";
//     lastError.innerHTML = "Enter Last Name";
// }
// else if(c == ""){
//     email.style.borderColor="red";
//     emailError.innerHTML = "Enter Email Name";
// }
// else if(d == ""){
//     pass.style.borderColor="red";
//     passError.innerHTML = "Enter Pass Name";
// }

// else{
//     user.style.border = "2px solid goldenrod";
//     userError.innerHTML = "";

//     last.style.border = "2px solid goldenrod";
//     lastError.innerHTML = "";

//     email.style.border = "2px solid goldenrod";
//     emailError.innerHTML = "";

//     pass.style.border = "2px solid goldenrod";
//     passError.innerHTML = "";


   
//     console.log(a,b,c,d)
//     arr.push(a,b,c,d)
//     console.log(arr)
// }
// }



// 2nd Assignment
// =======    PDF ASSIGNMENT     ========
// changing case

//  1.

// var a = prompt("Enter Your Name");
// var name = a.toUpperCase();
// console.log(name)

//  2.

// var a = prompt("Enter Your Name");
// var b = alert("hello "+""+a)
// console.log(b);


//  Strings: measuring length and extracting parts 


//  1.

// var user = prompt("Enter your favorite mobile phone model");
// var length = user.length;
// console.log(user, length)

//  2.
 
// var user = prompt("Enter suggestion","last Value");
// var first = user.charAt(0);
// var last = user.slice(5,10);
// console.log(last)

// == Strings: finding segments ==

//  1. 

// var word = "Pakistani";
// var find = word.slice(7,8)
// console.log(find)

//  2.

// var user = prompt("Enter UserName");
// var code = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

// if(user.match(code)){
//     console.log("Not use any special symbol")
// }else{
//     console.log(user)
// }

//  3.

// var a = "The quick brown fox jumps over the lazy dog”.";
// var count = 0
// for (var i = 0; i < a.length; i++) {
//             var word = a.slice(i, i + 3);    
//             if(word.toLowerCase() == "the"){
//                 count++;
               
//             }
//         }
// console.log(count)


//  == Strings: finding a character at a location ==
   
// var word = "pakistani";
// var copy = word.indexOf("i")
   
// console.log(copy)

//  ==  Strings: replacing characters  ==

//  1.

// var city = "Islamabad"
// var rep = city.replace("Islamabad" , "Hydrabad");
// console.log(rep)

// var word = "and"
// var rep = word.replace("and" , "&");
// console.log(rep)

// var message = "“Ali and Sami are best friends. They play cricket and football together.”;"

//   ====   Rounding numbers   ====

//  1.

// value is .5 then equal 1 

// var Number = prompt("Enter number in integer")
// Number = Math.round(Number);
// console.log(Number)

// any integer value is not read

// var Number = prompt("Enter number in integer")
// Number = Math.floor(Number);
// console.log(Number)

// any integer value is  then equal 1 

// var Number = prompt("Enter number in integer")
// Number = Math.ceil(Number);
// console.log(Number)

//  2.

// value is .5 then equal 1 
// var Number = prompt("Enter number in integer")
// Number = Math.round(Number);
// console.log(Number)

// any integer value is  then equal 1 
// var Number = prompt("Enter number in integer")
// Number = Math.floor(Number);
// console.log(Number)

// any integer value not read
// var Number = prompt("Enter number in integer")
// Number = Math.ceil(Number);
// console.log(Number)


//  ====   Generating random numbers   ===

//  1.

// var number = Math.random();
// var toss = Math.round(number+1)
// console.log(toss)

//  2.

// var number = Math.random();
// var dies = Math.ceil(number*6)
// console.log(dies)


//  3.

// var number = Math.random();
// var user = Math.ceil(number*10);
// if(user == prompt("Enter num in 1 to 10")){
//     alert("congratulate You win")
// }else{
//     alert("Try again")
// }
// console.log(user)




// var arr = [];
// var user = document.getElementById("user");
// var last = document.getElementById("last");
// var email = document.getElementById("email");
// var pass = document.getElementById("pass");
// var userError = document.getElementById("userError");
// var lastNameError = document.getElementById("lastError");
// var emailError = document.getElementById("emailError");
// var passError = document.getElementById("passError");


// function getValue(){
// var a = user.value;
// var b = last.value;
// var c = email.value;
// var d = pass.value;


// if(a == ""){
//     user.style.borderColor="red";
//     userError.innerHTML = "Enter First Name";
//     last.style.borderColor="red";
//     lastError.innerHTML = "Enter Last Name";
//     email.style.borderColor="red";
//     emailError.innerHTML = "Enter Email Name";
//     pass.style.borderColor="red";
//     passError.innerHTML = "Enter Password Name";
// }
// if(a == ""){
//     user.style.borderColor="red";
//     userError.innerHTML = "Enter First Name";
// }else if(a == user.value){
//     user.style.border = "2px solid goldenrod";
// }
// if(b == ""){
//     last.style.borderColor="red";
//     lastError.innerHTML = "Enter Last Name";
// }else if(b == last.value){
//     last.style.border = "2px solid goldenrod";
// }
// if(c == ""){
//     email.style.borderColor="red";
//     emailError.innerHTML = "Enter Email Name";
// }else if(c == email.value){
//     email.style.border = "2px solid goldenrod";
// }
// if(d == ""){
//     pass.style.borderColor="red";
//     passError.innerHTML = "Enter Pass Name";
// }else if(d == pass.value){
//     pass.style.border = "2px solid goldenrod";
// }

// else{
//     user.style.border = "2px solid goldenrod";
//     userError.innerHTML = "";

//     last.style.border = "2px solid goldenrod";
//     lastError.innerHTML = "";

//     email.style.border = "2px solid goldenrod";
//     emailError.innerHTML = "";

//     pass.style.border = "2px solid goldenrod";
//     passError.innerHTML = "";


   
//     console.log(a,b,c,d)
//     // arr.push(a,b,c,d)
//     // console.log(arr)
// }
// console.log(a,b,c,d)
// }
