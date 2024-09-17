const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else if (weight < 18.6) {
        results.innerHTML = `Under weight,please give valid weight `;
    }
    else if (weight > 24.9) {
        results.innerHTML = `over weight,please give valid weight `;
    }



    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show the result
        results.innerHTML = `<span>${bmi}</span>`;
    }
});

