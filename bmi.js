window.onload = () => {
    const button = document.querySelector("#btn")
    button.addEventListener('click', calculatebmi)

}

function calculatebmi() {
    const height = document.querySelector('#height').value * 0.305;
    const weight = document.querySelector('#weight').value;
    const result = document.querySelector('#result');

    if (!height || height < 0) {
        result.innerTEXT = "Please provide a valid height";
        return;
    }
    else if (!weight || weight < 0) {
        result.innerTEXT = "Please provide a valid weight";
        return;
    }

    result.innerHTML = 'Your Calculated BMI is = ' + Math.round(weight / (height * height))

}









