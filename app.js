"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const jspdf_1 = require("jspdf");
// Handle form submission
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Ensure the event is a SubmitEvent
    const submitEvent = event;
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    const area = document.getElementById('area').value;
    const currentJob = document.getElementById('currentJob').value;
    const skills = document.getElementById('skills').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    // Generate resume content
    const resumeContent = `
        <h2>${name}</h2>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Address: ${address}</p>
        <p>City: ${city}</p>
        <p>Country: ${country}</p>
        <p>Area: ${area}</p>
        <p>Currently Working: ${currentJob}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
        <h3>Education</h3>
        <p>${education}</p>
    `;
    // Display generated resume
    const resumeOutput = document.getElementById('resumeOutput');
    if (resumeOutput) {
        resumeOutput.innerHTML = resumeContent;
    }
    // Generate a unique URL for sharing (placeholder)
    const username = prompt('Enter your username:');
    const uniqueLink = `https://${username}.vercel.app/resume`;
    // Display the shareable link
    const resumeLink = document.getElementById('resumeLink');
    if (resumeLink) {
        resumeLink.innerHTML = `Share your resume: <a href="${uniqueLink}" target="_blank">${uniqueLink}</a>`;
    }
    // Download PDF
    (_a = document.getElementById('downloadPdf')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        const doc = new jspdf_1.jsPDF();
        // Split the resumeContent into lines for jsPDF
        const lines = doc.splitTextToSize(resumeContent, 190); // Adjust width as needed
        doc.text(lines, 10, 10);
        doc.save('resume.pdf');
    });
});
