// Milestone5
var dynamicForm = document.getElementById('form');
var displayElement = document.getElementById('resumeOutput');
var shareableElement = document.getElementById('link');
var link = document.getElementById('shareable_link');
var downloadlink = document.getElementById('download_button');
//Handling
dynamicForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var myName = document.getElementById("name").value;
    var myEmail = document.getElementById("email").value;
    var myContact = document.getElementById("phone")
        .value;
    var myEducation = document.getElementById("education")
        .value;
    var myExperience = document.getElementById("Experience").value;
    var mySkills = document.getElementById("Skills")
        .value;
    var resumeData = {
        myName: myName,
        myEmail: myEmail,
        myContact: myContact,
        myEducation: myEducation,
        myExperience: myExperience,
        mySkills: mySkills
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); //saving data
    var resume = "\n<h2><b> Shareable Resume</b></h2>\n<h3><i>Personal Information<i></h3>\n<p><b>Name:</b><span contenteditable=\"tue\">".concat(myName, "</span></p>\n<p><b>Email:</b><span contenteditable=\"tue\">").concat(myEmail, "</span></p>\n<p><b>Contact:</b><span contenteditable=\"tue\">").concat(myContact, "</span></p>\n\n<h3>Education</h3>\n<p contenteditable=\"tue\">").concat(myEducation, "</p>\n\n<h3>Experience</h3>\n<p contenteditable=\"tue\">").concat(myExperience, "</p>\n\n<h3>Skills</h3>\n<p contenteditable=\"tue\">").concat(mySkills, "</p>");
    //Display
    displayElement.innerHTML = resume;
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    shareableElement.style.display = 'block';
    link.href = shareableURL;
    downloadlink.textContent = shareableURL;
});
downloadlink.addEventListener('click', function () {
    window.print();
});
window.addEventListener('DOMContentLoaded', function () {
    var urllink = new URLSearchParams(window.location.search);
    var userlink = urllink.get('username');
    if (userlink) {
        var deta = localStorage.getItem(userlink);
        if (deta) {
            var detaresume = JSON.parse(deta);
            document.getElementById('username').value =
                userlink;
            document.getElementById('name').value =
                detaresume.name;
            document.getElementById('email').value =
                detaresume.email;
            document.getElementById('phone').value =
                detaresume.phone;
            document.getElementById('education').value =
                detaresume.education;
            document.getElementById('experience').value
                = detaresume.experience;
            document.getElementById('skills').value
                = detaresume.skills;
        }
    }
});
