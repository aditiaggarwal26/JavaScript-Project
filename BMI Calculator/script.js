const form = document.querySelector("form");

form.addEventListener('submit' ,function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#result");

    if(height <= 0 || isNaN(height)){
        result.innerHTML = "Please enter a valid height";
    }else if(weight <= 0 || isNaN(weight)){
        result.innerHTML = "Please enter a valid weight";
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if(bmi<18.6){
            const res = "Under weight";
        }else if(bmi>18.6 && bmi<24.9){
            res = "Normal Range";
        }else{
            res = "Over weight";
        }
        
        result.innerHTML = `<span>${bmi} ${res}</span>`;
    }
});
