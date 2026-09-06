const defaultStudents = [
    {
        roll: "101",
        name: "Ali Raza",
        email: "ali@example.com",
        phone: "0300-1234567",
        gender: "Male",
        courses: ["HTML"],
        batch: "Batch 01",
        status: "Active",
        address: "Karachi"
    },
    {
        roll: "102",
        name: "Sara Khan",
        email: "sara@example.com",
        phone: "0300-2345678",
        gender: "Female",
        courses: ["CSS"],
        batch: "Batch 01",
        status: "Active",
        address: "Karachi"
    },
    {
        roll: "103",
        name: "Ahmed Malik",
        email: "ahmed@example.com",
        phone: "0300-3456789",
        gender: "Male",
        courses: ["JavaScript"],
        batch: "Batch 02",
        status: "Active",
        address: "Lahore"
    },
    {
        roll: "104",
        name: "Hina Fatima",
        email: "hina@example.com",
        phone: "0300-4567890",
        gender: "Female",
        courses: ["Web Development"],
        batch: "Batch 02",
        status: "Active",
        address: "Karachi"
    },
    {
        roll: "105",
        name: "Usman Ali",
        email: "usman@example.com",
        phone: "0300-5678901",
        gender: "Male",
        courses: ["Python"],
        batch: "Batch 03",
        status: "Inactive",
        address: "Islamabad"
    }
];

function getRegisteredStudents() {
    return JSON.parse(localStorage.getItem("futureInstituteStudents")) || [];
}

function saveRegisteredStudents(students) {
    localStorage.setItem("futureInstituteStudents", JSON.stringify(students));
}

function setupRegistrationForm() {
    const form = document.getElementById("registrationForm");
    if (!form) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const phone = document.getElementById("phone").value.trim();
        const address = document.getElementById("address").value.trim();
        const genderInput = document.querySelector('input[name="gender"]:checked');
        const courseInputs = document.querySelectorAll('input[name="courses"]:checked');
        const error = document.getElementById("formError");

        if (!name || !email || !password || !phone || !address || !genderInput) {
            error.textContent = "Please fill all required fields.";
            return;
        }

        if (password.length < 5) {
            error.textContent = "Password must be at least 5 characters.";
            return;
        }

        if (courseInputs.length === 0) {
            error.textContent = "Please select at least one course.";
            return;
        }

        const students = getRegisteredStudents();
        const nextRoll = 106 + students.length;

        const newStudent = {
            roll: String(nextRoll),
            name: name,
            email: email,
            phone: phone,
            gender: genderInput.value,
            courses: Array.from(courseInputs).map(item => item.value),
            batch: "Batch 04",
            status: "Active",
            address: address
        };

        students.push(newStudent);
        saveRegisteredStudents(students);
        localStorage.setItem("latestStudent", JSON.stringify(newStudent));

        error.textContent = "";

        const overlay = document.getElementById("successOverlay");
        overlay.classList.add("show");

        setTimeout(function () {
            window.location.href = "profile.html";
        }, 1800);
    });
}

function renderStudents() {
    const body = document.getElementById("studentsBody");
    if (!body) return;

    const students = defaultStudents.concat(getRegisteredStudents());

    body.innerHTML = "";

    students.forEach(function (student) {
        const row = document.createElement("tr");

        const statusClass =
            student.status === "Active" ? "status-active" : "status-inactive";

        row.innerHTML = `
            <td>${student.roll}</td>
            <td>${student.name}</td>
            <td>${student.courses.join(", ")}</td>
            <td>${student.batch}</td>
            <td class="${statusClass}">${student.status}</td>
            <td>${student.phone}</td>
        `;

        body.appendChild(row);
    });
}

function renderProfile() {
    const profileArea = document.getElementById("profileArea");
    if (!profileArea) return;

    const student = JSON.parse(localStorage.getItem("latestStudent"));

    if (!student) {
        profileArea.innerHTML = `
            <div class="empty-message">
                <h2>No Profile Found</h2>
                <p>Please register first to create your student profile.</p>
                <a class="button-link" href="registration.html">Go to Registration</a>
            </div>
        `;
        return;
    }

    const firstLetter = student.name.charAt(0).toUpperCase();

    profileArea.innerHTML = `
        <div class="profile-card">
            <div class="profile-top">
                <div class="avatar">${firstLetter}</div>
                <h2>${student.name}</h2>
                <p>Student ID: ${student.roll}</p>
            </div>

            <table class="profile-details">
                <tr>
                    <td>Full Name</td>
                    <td>${student.name}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>${student.email}</td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td>${student.phone}</td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td>${student.gender}</td>
                </tr>
                <tr>
                    <td>Selected Courses</td>
                    <td>${student.courses.join(", ")}</td>
                </tr>
                <tr>
                    <td>Batch</td>
                    <td>${student.batch}</td>
                </tr>
                <tr>
                    <td>Status</td>
                    <td>${student.status}</td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td>${student.address}</td>
                </tr>
            </table>
        </div>
    `;
}

function setupContactForm() {
    const form = document.getElementById("contactForm");
    const message = document.getElementById("contactMessage");

    if (!form) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        message.textContent = "Your message has been submitted successfully.";
        form.reset();
    });
}

document.addEventListener("DOMContentLoaded", function () {
    setupRegistrationForm();
    renderStudents();
    renderProfile();
    setupContactForm();
});