const formEl = document.querySelector('.form')
const nameEl = document.querySelector('.name')
const emailEl = document.querySelector('.email')
const messageEl = document.querySelector('.message')



formEl.addEventListener("submit", function(event) {
    event.preventDefault(); 
    alert('Feedback form - success!');
}
)



export const formData = {
    name: nameEl,
    email: emailEl,
    message: messageEl
}



