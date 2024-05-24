function toggleMode() {
    const body = document.body;
    const header = document.querySelector('.header');
    const landing = document.querySelector('.landing');

    // Toggle body background color
    body.classList.toggle('night-mode');

    // Toggle header color
    header.classList.toggle('night-mode');

    // Toggle landing background color
    landing.classList.toggle('night-mode');
}


