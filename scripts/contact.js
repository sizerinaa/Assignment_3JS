// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

myForm = document.getElementById('myForm');
formClass = document.getElementById('form');
submitMessage = document.getElementById('submission-message');

myForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    formClass.hidden = true;
    submitMessage.hidden = false;
});