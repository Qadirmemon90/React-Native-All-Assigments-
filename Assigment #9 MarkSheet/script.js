
// Open Modal
function openModal() {
    document.getElementById("studentModal").classList.add("active");
}

// Close Modal
function closeModal() {
    document.getElementById("studentModal").classList.remove("active");
}

// Generate Marksheet
function generateMarksheet() {

    // Student Information
    var studentName = document.getElementById("studentName").value;
    var rollNumber = document.getElementById("rollNumber").value;
    var studentClass = document.getElementById("studentClass").value;

    // Subject Marks
    var english = Number(document.getElementById("english").value);
    var mathematics = Number(document.getElementById("mathematics").value);
    var physics = Number(document.getElementById("physics").value);
    var chemistry = Number(document.getElementById("chemistry").value);
    var computer = Number(document.getElementById("computer").value);
    var urdu = Number(document.getElementById("urdu").value);
    var islamiat = Number(document.getElementById("islamiat").value);

    // Calculate Obtained Marks
    var obtainedMarks = english + mathematics + physics + chemistry + computer + urdu + islamiat;

    // Total Marks
    var totalMarks = 700;

    // Calculate Percentage
    var percentage = (obtainedMarks / totalMarks) * 100;

    // Display Result
    document.getElementById("result").innerHTML =

        "<h2>Student Marksheet</h2>" +

        "<div class='student-info'>" +

        "<p><b>Student Name:</b> " + studentName + "</p>" +
        "<p><b>Roll Number:</b> " + rollNumber + "</p>" +
        "<p><b>Class:</b> " + studentClass + "</p>" +

        "</div>" +

        "<h3>Subject Wise Marks</h3>" +

        "<div class='subject'><span>English</span><b>" + english + "/100</b></div>" +
        "<div class='subject'><span>Mathematics</span><b>" + mathematics + "/100</b></div>" +
        "<div class='subject'><span>Physics</span><b>" + physics + "/100</b></div>" +
        "<div class='subject'><span>Chemistry</span><b>" + chemistry + "/100</b></div>" +
        "<div class='subject'><span>Computer Science</span><b>" + computer + "/100</b></div>" +
        "<div class='subject'><span>Urdu</span><b>" + urdu + "/100</b></div>" +
        "<div class='subject'><span>Islamiat</span><b>" + islamiat + "/100</b></div>" +

        "<div class='summary'>" +

        "<p><b>Total Marks:</b> " + totalMarks + "</p>" +
        "<p><b>Obtained Marks:</b> " + obtainedMarks + "</p>" +
        "<p><b>Percentage:</b> <span class='percentage'>" + percentage.toFixed(2) + "%</span></p>" +

        "</div>";

    // Close Modal
    closeModal();

}
