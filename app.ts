import { jsPDF } from 'jspdf';

// Handle form submission
document.getElementById('resumeForm')?.addEventListener('submit', function(event: Event) {
    event.preventDefault();
    
    // Ensure the event is a SubmitEvent
    const submitEvent = event as SubmitEvent;

    // Get form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const city = (document.getElementById('city') as HTMLInputElement).value;
    const country = (document.getElementById('country') as HTMLInputElement).value;
    const area = (document.getElementById('area') as HTMLInputElement).value;
    const currentJob = (document.getElementById('currentJob') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;

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
    document.getElementById('downloadPdf')?.addEventListener('click', () => {
        const doc = new jsPDF();

        // Split the resumeContent into lines for jsPDF
        const lines = doc.splitTextToSize(resumeContent, 190); // Adjust width as needed
        doc.text(lines, 10, 10);
        doc.save('resume.pdf');
    });
});
