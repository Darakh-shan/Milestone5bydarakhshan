// Milestone5

const dynamicForm = document.getElementById('form') as HTMLFormElement;
const displayElement = document.getElementById('resumeOutput') as HTMLDivElement;
const shareableElement = document.getElementById('link') as HTMLDivElement;
const link = document.getElementById('shareable_link') as HTMLAnchorElement;
const downloadlink =document.getElementById('download_button') as HTMLButtonElement;

//Handling
dynamicForm.addEventListener('submit', (event: Event) => {
  event.preventDefault();

  const username = (document.getElementById('username') as HTMLInputElement).value;
  const myName = (document.getElementById("name") as HTMLInputElement).value;
  const myEmail = (document.getElementById("email") as HTMLInputElement).value;
  const myContact = (document.getElementById("phone") as HTMLInputElement)
    .value;
  const myEducation = (document.getElementById("education") as HTMLTextAreaElement)
    .value;
  const myExperience = (
    document.getElementById("Experience") as HTMLTextAreaElement).value;
  const mySkills = (document.getElementById("Skills") as  HTMLTextAreaElement)
    .value;

    const resumeData = {
       myName,
       myEmail,
       myContact,
       myEducation,
       myExperience,
       mySkills
    };
    localStorage.setItem(username,JSON.stringify(resumeData));//saving data

  const resume = `
<h2><b> Shareable Resume</b></h2>
<h3><i>Personal Information<i></h3>
<p><b>Name:</b><span contenteditable="tue">${myName}</span></p>
<p><b>Email:</b><span contenteditable="tue">${myEmail}</span></p>
<p><b>Contact:</b><span contenteditable="tue">${myContact}</span></p>

<h3>Education</h3>
<p contenteditable="tue">${myEducation}</p>

<h3>Experience</h3>
<p contenteditable="tue">${myExperience}</p>

<h3>Skills</h3>
<p contenteditable="tue">${mySkills}</p>`;

//Display
    displayElement.innerHTML = resume;

const shareableURL =`${window.location.origin}?username=${encodeURIComponent(username)}`;
shareableElement.style.display = 'block';
link.href = shareableURL;
downloadlink.textContent = shareableURL;

  });

  downloadlink.addEventListener('click',()=>{
window.print();
  });

window.addEventListener('DOMContentLoaded',()=>{
  const urllink = new URLSearchParams(window.location.search);
  const userlink = urllink.get('username');

  if(userlink){
    const deta= localStorage.getItem(userlink);
if (deta) {
const dataresume = JSON.parse(deta);
(document.getElementById('username') as HTMLInputElement).value =
userlink;
(document.getElementById('name') as HTMLInputElement).value =
dataresume.name;
(document.getElementById('email') as HTMLInputElement).value =
dataresume.email;
(document.getElementById('phone') as HTMLInputElement).value =
dataresume.phone;
(document.getElementById('education') as HTMLTextAreaElement).value =
dataresume.education;
(document.getElementById('experience') as HTMLTextAreaElement).value
= dataresume.experience;
(document.getElementById('skills')  as HTMLTextAreaElement).value
= dataresume.skills;
  }
}
});