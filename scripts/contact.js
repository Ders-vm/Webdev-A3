// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
const form = document.querySelector('.contact form');
const submitButton = document.querySelector('#submit-button');

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
submitButton.addEventListener('click', (event) => {
    event.preventDefault(); // prevent default form submission
    const contactSection = document.querySelector('.contact');
    contactSection.innerHTML = '<p class="thank-you-message">Thank you for your message</p>';
    const thankYouMessage = document.querySelector('.thank-you-message');
    thankYouMessage.style.fontSize = '24px';
  });
