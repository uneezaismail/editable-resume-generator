const editButton = document.getElementById('edit-id') as HTMLButtonElement;
const editButtonDiv = document.getElementById('edit-div') as HTMLButtonElement;
// Set up event listener for "Edit" button to show form with previous data and hide resume
editButton.addEventListener('click', () => {
    const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
    const resumeTemplate = document.getElementById('container') as HTMLDivElement;

    // Show the form to allow editing
    resumeForm.style.display = 'block';
    editButtonDiv.style.display = 'none';

    // Hide the generated resume to switch back to form view
    resumeTemplate.style.display = 'none';

    // Populate form fields with previous data for personal information
    (document.getElementById('Fname') as HTMLInputElement).value = 
        (document.getElementById('f-name') as HTMLElement).textContent || '';
    (document.getElementById('Lname') as HTMLInputElement).value = 
        (document.getElementById('l-name') as HTMLElement).textContent || '';
    (document.getElementById('contact') as HTMLInputElement).value = 
        (document.getElementById('contact-no') as HTMLElement).textContent || '';
    (document.getElementById('address') as HTMLTextAreaElement).value = 
        (document.getElementById('adrs') as HTMLElement).textContent || '';
    (document.getElementById('objective') as HTMLTextAreaElement).value = 
        (document.getElementById('objective-b') as HTMLElement).textContent || '';
    (document.getElementById('facebook') as HTMLInputElement).value = 
        (document.getElementById('fb') as HTMLParagraphElement).innerHTML || '';
    (document.getElementById('linkedin') as HTMLInputElement).value = 
        (document.getElementById('link') as HTMLParagraphElement).innerHTML || '';
    (document.getElementById('email') as HTMLInputElement).value = 
        (document.getElementById('g-mail') as HTMLParagraphElement).innerHTML || '';

    // Populate Work Experience section
    const workExperience = document.getElementById("work-li") as HTMLElement;
    const workExperienceFields = document.querySelectorAll(".weField") as NodeListOf<HTMLTextAreaElement>;
    const workItems = workExperience.querySelectorAll("li");
    workExperienceFields.forEach((textarea, index) => {
        if (workItems[index]) {
            textarea.value = workItems[index].textContent || ''; // Ensure you are pulling textContent
        }
    });

    // Populate Academic Qualification section
    const academicQualification = document.getElementById("aq-li") as HTMLElement;
    const academicFields = document.querySelectorAll(".aqField") as NodeListOf<HTMLTextAreaElement>;
    const academicItems = academicQualification.querySelectorAll("li");
    academicFields.forEach((textarea, index) => {
        if (academicItems[index]) {
            textarea.value = academicItems[index].textContent || ''; // Ensure you are pulling textContent
        }
    });

    // Populate Skills section
    const skills = document.getElementById("sk-li") as HTMLElement;
    const skillFields = document.querySelectorAll(".skField") as NodeListOf<HTMLTextAreaElement>;
    const skillItems = skills.querySelectorAll("li");
    skillFields.forEach((textarea, index) => {
        if (skillItems[index]) {
            textarea.value = skillItems[index].textContent || ''; // Ensure you are pulling textContent
        }
    });
});
