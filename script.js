const aboutMe = document.getElementById("about-me")
const workExperience = document.getElementById("work-experience")
const workBox = document.getElementById("work-box")
const educationBox = document.getElementById("education-box")
const skillsBox = document.getElementById("skills-box")
const portfolioBox = document.getElementById("portfolio-box")
const arrow = document.getElementById("arrow")
const responsiveEducation = document.getElementById("responsive-education")
const skills = document.getElementById("skills")

workBox.addEventListener("click", function() {
    aboutMe.style.display = "none";
    skillsBox.style.display = "none";
    workBox.style.display = "none";
    educationBox.style.display = "none";
    portfolioBox.style.display = "none";
    workExperience.style.display = "initial";
    arrow.style.display = "initial";
})

educationBox.addEventListener("click", function() {
    aboutMe.style.display = "none";
    skillsBox.style.display = "none";
    workBox.style.display = "none";
    educationBox.style.display = "none";
    portfolioBox.style.display = "none";
    workExperience.style.display = "none";
    arrow.style.display = "initial";
    responsiveEducation.style.display = "initial";
})

skillsBox.addEventListener("click", function() {
    aboutMe.style.display = "none";
    skillsBox.style.display = "none";
    workBox.style.display = "none";
    educationBox.style.display = "none";
    portfolioBox.style.display = "none";
    workExperience.style.display = "none";
    arrow.style.display = "initial";
    responsiveEducation.style.display = "none";
    skills.style.display = "grid";
})

arrow.addEventListener("click", function() {
    aboutMe.style.display = "flex";
    skillsBox.style.display = "flex";
    workBox.style.display = "flex";
    educationBox.style.display = "flex";
    portfolioBox.style.display = "flex";
    workExperience.style.display = "none";
    arrow.style.display = "none";
    responsiveEducation.style.display = "none";
    skills.style.display = "none";
})
