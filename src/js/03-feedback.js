import throttle from 'lodash.throttle';

window.localStorage.removeItem('videoplayer-current-time');

const STOREG_KEY = "feedback-form-state";
const reform = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea')
}

const formData = {}

localTextareaInput();
reform.form.addEventListener('submit', onFormSubmit);
reform.form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    formData[name] = value;

    localStorage.setItem(STOREG_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
    event.preventDefault();
    event.target.reset();
    window.localStorage.removeItem(STOREG_KEY);
}

function localTextareaInput(event) {
    const getData = localStorage.getItem(STOREG_KEY);
    if (getData) {
        reform.value = JSON.parse(getData);
        if (reform.value.email) {
            reform.email.value = reform.value.email;
        }
        if (reform.value.message) {
            reform.textarea.value = reform.value.message;
        }


    }

}
