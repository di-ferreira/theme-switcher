const inputList = document.querySelectorAll("input[type='radio']");

inputList.forEach((input) => {
    input.onclick = () => {
        document.documentElement.classList.add(input.id);
    }
});