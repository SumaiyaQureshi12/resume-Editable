// Form ke elements ko select karna
const generateResumeButton = document.getElementById("generateResume") as HTMLButtonElement;
const resumeOutput = document.getElementById("resumeOutput") as HTMLElement;

generateResumeButton.addEventListener("click", generateResume);

function generateResume(): void {
    // Form inputs se values lena aur unhe trim karna
    const name = (document.getElementById("name") as HTMLInputElement).value.trim();
    const contactNumber = (document.getElementById("contactNumber") as HTMLInputElement).value.trim();
    const email = (document.getElementById("email") as HTMLInputElement).value.trim();
    const address = (document.getElementById("address") as HTMLInputElement).value.trim();
    const education = (document.getElementById("education") as HTMLTextAreaElement).value.trim();
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value.trim();
    const skills = (document.getElementById("skills") as HTMLInputElement).value.trim();

    // Zaroori fields ko check karna
    if (!name || !contactNumber || !email) {
        alert('Zaroori fields ko bharain');
        return;
    }

    // Generated resume display karna
    resumeOutput.innerHTML = `
        <h2>Generated Resume</h2>
        <div><strong>Name:</strong> <span id="displayName" contenteditable="true">${name}</span></div>
        <div><strong>Contact Number:</strong> <span id="displayContact" contenteditable="true">${contactNumber}</span></div>
        <div><strong>Email:</strong> <span id="displayEmail" contenteditable="true">${email}</span></div>
        <div><strong>Address:</strong> <span id="displayAddress" contenteditable="true">${address}</span></div>
        <div><strong>Education:</strong> <span id="displayEducation" contenteditable="true">${education}</span></div>
        <div><strong>Experience:</strong> <span id="displayExperience" contenteditable="true">${experience}</span></div>
        <div><strong>Skills:</strong> <span id="displaySkills" contenteditable="true">${skills}</span></div>
    `;

    // Agar profile picture upload ki hai toh usay display karna
    const profilePicture = (document.getElementById("profilePicture") as HTMLInputElement).files?.[0];
    if (profilePicture) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.createElement("img");
            img.src = e.target?.result as string;
            img.alt = "Profile Picture";
            img.style.width = "100px";
            img.style.height = "100px";
            resumeOutput.prepend(img);
        };
        reader.readAsDataURL(profilePicture);
    }
}
