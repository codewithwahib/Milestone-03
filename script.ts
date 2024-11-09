// Ensure the form is accessible by its ID
const resumeForm = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement;

// Event listener for the form submission
resumeForm.addEventListener('submit', function(event: Event): void {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Get the values from the form fields
    const name: string = (document.getElementById('name') as HTMLInputElement).value;
    const email: string = (document.getElementById('email') as HTMLInputElement).value;
    const phone: string = (document.getElementById('phone') as HTMLInputElement).value;
    const education: string = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience: string = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills: string = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Create the resume content
    const resumeContent: string = `
        <h2>${name}'s Resume</h2>
        <h3>Contact Information</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>

        <h3>Education</h3>
        <p>${education}</p>

        <h3>Work Experience</h3>
        <p>${experience}</p>

        <h3>Skills</h3>
        <p>${skills}</p>
    `;

    // Display the resume content in the resume-display div
    resumeDisplay.innerHTML = resumeContent;
});
