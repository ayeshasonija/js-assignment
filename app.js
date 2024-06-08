// task # 01
// var userCity = prompt("Enter the city name (karachi, islamabad, lahore, peshawar, quetta, multan. faisalabad)")

// if(userCity === "karachi"){
//     console.log("welcome to city of lights")
// }else if(userCity ==="lahore"){
//     console.log("welcome to the city of Literature")
// }else if(userCity === "islamabad"){
//     console.log("welcome to the green city")
// }else if(userCity === "peshawar"){
//     console.log("welcome to the city of flowers")
// }else if(userCity === "quetta"){
//     console.log("welcome to the the Fruit Garden of Pakistan")
// }else if(userCity === "multan"){
//     console.log("welcome to the mango city ")
// }else if(userCity === "faisalabad"){
//     console.log("welcome to the The Manchester of Pakistan")
// }else{
//     console.log("not exist");
// }


// task # 02
// var userGender = prompt("Enter your gender (male, female)")
// if(userGender === "male"){
//     console.log("welcome sir!")
// }else if(userGender === "female"){
//     console.log("welcome ma'am!")
// }else{
//     console.log("Sorry");
// }


// task # 03
// var userColor = prompt("Enter color of road traffic signal (red, yellow, green)")
// if(userColor=== "red"){
//     console.log("Must stop")
// }else if(userColor === "yellow"){
//     console.log("Ready to move");
// }else if(userColor === "green"){
//     console.log("Move now")
// }else{
//     console.log("color does not exist");
// }


// task # 04
// var carFuel = +prompt("Enter your car's fuel")
// if(carFuel <= 0.25){
//     console.log("Please refill the fuel in your car");
// }else{
//     console.log("You may continue");
// }


// task # 05
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }else{
//     alert("given condition for variable b is false");
// }

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// if (true){
//     alert("True");
// }
// if (false){
//     alert("False");
// }

// if("car" < "cat"){
//     alert("car is smaller than cat");
// }


// task # 06
var totalMarks = +prompt("Enter total marks")
var obtMarks = +prompt("Enter your obtained marks")
var percentage = obtMarks/totalMarks*100

document.write("<h1>" + "Total marks: " + "</h1>" + totalMarks)
document.write("<h1>" + "Obtained marks: " + "</h1>" + obtMarks)
document.write("<h1>" + "Percentage: " + "</h1>" + percentage + "%")

if(percentage >= 80 && percentage <=100){
    document.write("<h1>" + "Grade: " + "</h1>" + "A-one" + "<br>" + "<h1>" + "Remarks: " + "</h1>" + "Excellent")
}else if(percentage >= 70 && percentage <=79){
    document.write("<h1>" + "Grade: " + "</h1>" + "A" + "<br>" + "<h1>" + "Remarks: " + "</h1>" + "Good")
}else if(percentage >= 60 && percentage <=69){
    document.write("<h1>" + "Grade: " + "</h1>" + "B" + "<br>" + "<h1>" + "Remarks: " + "</h1>" + "You need to improve")
}else if(percentage <= 59){
    document.write("<h1>" + "Grade: " + "</h1>" + "Fail" + "<br>" + "<h1>" + "Remarks: " + "</h1>" + "Sorry")
}else{
    document.write("<br>" + "Out of range")
}

// task # 07
// var a = 6
// var userGuess = +prompt("There is a secret number ranging from 1 to 10, guess the number")
// if(userGuess === a){
//     document.write("Bingo! Correct answer")
// }else if(userGuess === 7){
//     document.write("Close enough to the correct answer")
// }else if(userGuess === 5){
//     document.write("Close enough to the correct answer")
// }else{
//     document.write("oops! Your answer is wrong")
// }

