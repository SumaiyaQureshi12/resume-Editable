// Form ke elements ko select karna
var generateResumeButton = document.getElementById("generateResume");
var resumeOutput = document.getElementById("resumeOutput");
generateResumeButton.addEventListener("click", generateResume);
function generateResume() {
    var _a;
    // Form inputs se values lena aur unhe trim karna
    var name = document.getElementById("name").value.trim();
    var contactNumber = document.getElementById("contactNumber").value.trim();
    var email = document.getElementById("email").value.trim();
    var address = document.getElementById("address").value.trim();
    var education = document.getElementById("education").value.trim();
    var experience = document.getElementById("experience").value.trim();
    var skills = document.getElementById("skills").value.trim();
    // Zaroori fields ko check karna
    if (!name || !contactNumber || !email) {
        alert('Zaroori fields ko bharain');
        return;
    }
    // Generated resume display karna
    resumeOutput.innerHTML = "\n        <h2>Generated Resume</h2>\n        <div><strong>Name:</strong> <span id=\"displayName\" contenteditable=\"true\">".concat(name, "</span></div>\n        <div><strong>Contact Number:</strong> <span id=\"displayContact\" contenteditable=\"true\">").concat(contactNumber, "</span></div>\n        <div><strong>Email:</strong> <span id=\"displayEmail\" contenteditable=\"true\">").concat(email, "</span></div>\n        <div><strong>Address:</strong> <span id=\"displayAddress\" contenteditable=\"true\">").concat(address, "</span></div>\n        <div><strong>Education:</strong> <span id=\"displayEducation\" contenteditable=\"true\">").concat(education, "</span></div>\n        <div><strong>Experience:</strong> <span id=\"displayExperience\" contenteditable=\"true\">").concat(experience, "</span></div>\n        <div><strong>Skills:</strong> <span id=\"displaySkills\" contenteditable=\"true\">").concat(skills, "</span></div>\n    ");
    // Agar profile picture upload ki hai toh usay display karna
    var profilePicture = (_a = document.getElementById("profilePicture").files) === null || _a === void 0 ? void 0 : _a[0];
    if (profilePicture) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            var img = document.createElement("img");
            img.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            img.alt = "Profile Picture";
            img.style.width = "100px";
            img.style.height = "100px";
            resumeOutput.prepend(img);
        };
        reader.readAsDataURL(profilePicture);
    }
}
