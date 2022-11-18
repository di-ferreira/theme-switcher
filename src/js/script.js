const inputList = document.querySelectorAll("input[type='radio']");

const body = document.getElementById('body');

inputList.forEach((input) => {
    input.onclick = () => {
        body.removeAttribute('class');
        body.classList.add(input.id);
    }
});