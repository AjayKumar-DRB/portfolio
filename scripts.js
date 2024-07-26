document.addEventListener('DOMContentLoaded', function () {
    const toggleModeBtn = document.getElementById('toggle-mode-btn');
    const icon = toggleModeBtn.querySelector('i'); // Ensure correct targeting of the icon
    const darkModeToggler = document.querySelector('.dark-mode-toggler');
    const typingAnimation = document.querySelector('.typing-animation');
    const divider = document.querySelector('.divider');
    const aboutMe = document.querySelector('.about-me');
    const aboutMeTitle = document.querySelector('.about-me-title');
    const timelineYear = document.querySelectorAll('.timeline-year');
    const timelineStart = document.querySelector('.timeline-start');
    const timelineEnd = document.querySelector('.timeline-end');
    const timelineText = document.querySelectorAll('.timeline-box');    
    const timelineIcon = document.querySelectorAll('.timeline-icon');      
    const timelineDate = document.querySelectorAll('.timeline-date');     
    const timelineContinue = document.querySelector('.timeline-continue');
    const myJourneyTitle = document.querySelector('.my-journey-title');    
    const journeySubheading = document.querySelectorAll('.journey-sideheading');
    const progressBar = document.querySelectorAll('.bar-color');    
    const projectTitle = document.querySelector('.project-title');
    const skillsTitle = document.querySelector('.skills-title');
    const footer = document.querySelector('.footer');
    const seperator = document.querySelector('.seperator');
    const button = document.querySelectorAll('.btn');
    const card = document.querySelectorAll('.card-body');

    toggleModeBtn.addEventListener('click', function (event) {
        event.preventDefault();

        document.body.classList.toggle('dark-mode');
        darkModeToggler.classList.toggle('dark-mode');
        typingAnimation.classList.toggle('dark-mode');
        aboutMe.classList.toggle('dark-mode');
        divider.classList.toggle('dark-mode');
        aboutMeTitle.classList.toggle('dark-mode');
        timelineStart.classList.toggle('dark-mode');
        timelineEnd.classList.toggle('dark-mode');        
        timelineContinue.classList.toggle('dark-mode');   
        myJourneyTitle.classList.toggle('dark-mode'); 
        projectTitle.classList.toggle('dark-mode');         
        skillsTitle.classList.toggle('dark-mode');
        footer.classList.toggle('dark-mode');
        seperator.classList.toggle('dark-mode');
        
        
        timelineText.forEach(timeline => {
            timeline.classList.toggle('dark-mode');
        });

        timelineIcon.forEach(timeline => {
            timeline.classList.toggle('dark-mode');
        });

        timelineYear.forEach(timeline => {
            timeline.classList.toggle('dark-mode');
        });

        timelineDate.forEach(timeline => {
            timeline.classList.toggle('dark-mode');
        });

        journeySubheading.forEach(journey => {
            journey.classList.toggle('dark-mode');
        });

        progressBar.forEach(progress => {
            progress.classList.toggle('dark-mode');
        });

        button.forEach(btn => {
            btn.classList.toggle('dark-mode');
        });

        card.forEach(crd => {
            crd.classList.toggle('dark-mode');
        });
        

        if (document.body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }

        // Store dark mode preference in localStorage
        localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
    });

    // Initial check for dark mode preference
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        darkModeToggler.classList.add('dark-mode');
        typingAnimation.classList.add('dark-mode');
        aboutMe.classList.add('dark-mode');
        divider.classList.add('dark-mode');
        aboutMeTitle.classList.add('dark-mode');
        timelineStart.classList.add('dark-mode');
        timelineEnd.classList.add('dark-mode'); 
        timelineContinue.classList.add('dark-mode');
        myJourneyTitle.classList.add('dark-mode');
        projectTitle.classList.add('dark-mode'); 
        skillsTitle.classList.add('dark-mode');
        footer.classList.add('dark-mode');
        seperator.classList.add('dark-mode');
        

        timelineText.forEach(timeline => {
            timeline.classList.add('dark-mode');
        });

        timelineIcon.forEach(timeline => {
            timeline.classList.add('dark-mode');
        });

        timelineYear.forEach(timeline => {
            timeline.classList.add('dark-mode');
        });

        timelineDate.forEach(timeline => {
            timeline.classList.add('dark-mode');
        });

        journeySubheading.forEach(journey => {
            journey.classList.add('dark-mode');
        });

        progressBar.forEach(progress => {
            progress.classList.add('dark-mode');
        });

        button.forEach(btn => {
            btn.classList.add('dark-mode');
        });

        card.forEach(crd => {
            crd.classList.add('dark-mode');
        });

        icon.classList.add('fa-sun'); // Ensure icon reflects dark mode
    } else {
        icon.classList.add('fa-moon'); // Ensure icon reflects light mode
    }
});


// document.addEventListener('DOMContentLoaded', function() {
//     // Get the navbar element
//     const navbar = document.getElementById('navbarNav');
    
//     // Get the computed height of the navbar
//     const navbarHeight = navbar.clientHeight;
    
//     // Set padding-top of the body to match navbar height
//     document.body.style.paddingTop = navbarHeight + 'px';
// });

const textElement = document.getElementById('textAnimation');
const words = ['Developer', 'Designer', 'Gamer']; // Words to be animated
let wordIndex = 0; // Index of current word being animated
let letterIndex = 0; // Index of current letter in the word being animated

function typeText() {
    const currentWord = words[wordIndex];
    textElement.textContent = currentWord.slice(0, letterIndex + 1);
    letterIndex++;

    if (letterIndex < currentWord.length) {
        setTimeout(typeText, 200); // Adjust typing speed here (milliseconds)
    } else {
        setTimeout(eraseText, 1000); // Wait before erasing text
    }
}

function eraseText() {
    const currentWord = words[wordIndex];
    textElement.textContent = currentWord.slice(0, letterIndex);
    letterIndex--;

    if (letterIndex >= 0) {
        setTimeout(eraseText, 100); // Adjust erasing speed here (milliseconds)
    } else {
        wordIndex = (wordIndex + 1) % words.length; // Move to the next word
        setTimeout(typeText, 500); // Wait before typing the next word
    }
}

typeText(); // Start typing animation
