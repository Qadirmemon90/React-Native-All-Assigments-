// Array containing 5 student names
var students = ["Nimra", "Ayesha", "Ali", "Ahmed", "Sara","AbdulQadir"];

// Ask the user to enter their name
var studentName = prompt("Enter your name:");

var found = false;
var studentIndex = -1;

// Check student names using a for loop
for (var i = 0; i < students.length; i++) {
    if (studentName === students[i]) {
        found = true;
        studentIndex = i;
        break;
    }
}

// Check access permission
if (found === true) {
    alert("Welcome! You are allowed.");
    console.log("Access Granted");
    console.log("Student Index: " + studentIndex);
} else {
    alert("Sorry! You are not allowed.");
    console.log("Access Denied");
}