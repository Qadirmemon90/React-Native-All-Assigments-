
function startMarksheet() {

    // Taking marks from the user

    let english = Number(prompt("Enter English Marks (Out of 100):"));
    let mathematics = Number(prompt("Enter Mathematics Marks (Out of 100):"));
    let physics = Number(prompt("Enter Physics Marks (Out of 100):"));
    let chemistry = Number(prompt("Enter Chemistry Marks (Out of 100):"));
    let computerScience = Number(prompt("Enter Computer Science Marks (Out of 100):"));

    // Calculating total and obtained marks

    let totalMarks = 500;

    let obtainedMarks = english + mathematics + physics + chemistry + computerScience;

    // Calculating percentage

    let percentage = (obtainedMarks / totalMarks) * 100;

    // Calculating grade using if...else

    let grade;

    if (percentage >= 90) {
        grade = "A";
    }
    else if (percentage >= 80) {
        grade = "B";
    }
    else if (percentage >= 70) {
        grade = "C";
    }
    else if (percentage >= 60) {
        grade = "D";
    }
    else if (percentage >= 50) {
        grade = "E";
    }
    else {
        grade = "Fail";
    }

    // Displaying final result

    alert(
        "STUDENT MARKSHEET\n\n" +
        "Total Marks: " + totalMarks + "\n" +
        "Obtained Marks: " + obtainedMarks + "\n" +
        "Percentage: " + percentage + "%\n" +
        "Your Grade: " + grade
    );

}
