document.addEventListener('DOMContentLoaded', function() {
    // Interactive Employment Timeline
    const timelineData = [
        {
            date: 'Feb 2022 - Present',
            title: 'Chief Bug Creator',
            description: 'At Innovative Solutions Inc., I excel in generating creative and elusive bugs to keep our testing team busy and entertained. Regularly praised for crafting bugs that evade detection and defy logic.'
        },
        {
            date: 'Aug 2019 - Jan 2022',
            title: 'Freelance Sarcasm Specialist',
            description: 'Offered a wide range of sarcasm consulting services. Helped clients understand the fine line between a hilarious email and an HR issue.'
        },
        {
            date: 'May 2017 - Jul 2019',
            title: 'Amateur Coffee Brewer',
            description: 'Worked at JavaGenius, a tech startup where the code was less important than the coffee. Received the "Caffeine Innovator" award for my cold brew technique that kept coders awake for 72 hours straight.'
        }
    ];

    const timeline = document.getElementById('timeline');

    timelineData.forEach((item, index) => {
        let entry = document.createElement('div');
        entry.classList.add('timeline-entry');
        entry.setAttribute('id', 'entry-' + index);

        let dot = document.createElement('div');
        dot.classList.add('timeline-dot');

        let date = document.createElement('div');
        date.textContent = item.date;
        date.classList.add('timeline-date');

        let content = document.createElement('div');
        content.classList.add('timeline-content');
        content.setAttribute('id', 'content-' + index);

        let title = document.createElement('h3');
        title.textContent = item.title;

        let description = document.createElement('p');
        description.textContent = item.description;
        description.style.display = 'none'; // Initially hide the description

        // Click event to toggle the description visibility
        entry.addEventListener('click', function() {
            description.style.display = description.style.display === 'none' ? 'block' : 'none';
        });

        content.appendChild(title);
        content.appendChild(description);

        entry.appendChild(dot);
        entry.appendChild(date);
        entry.appendChild(content);

        timeline.appendChild(entry);
    });

    // Project Showcase with Modals
    const projectItems = document.querySelectorAll('.project-item');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const closeButton = document.querySelector('.close-button');

    projectItems.forEach(item => {
        item.addEventListener('click', () => {
            modalTitle.innerText = item.dataset.project;
            modalContent.innerText = item.querySelector('p').innerText;
            modal.style.display = 'block';
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Contact Form with Form Validation
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        // Add code for form validation and submission
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert(`Form submitted!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
            // Add code to send form data to server or perform other actions
        } else {
            alert('Please fill in all fields');
        }
    
    
    });
});
