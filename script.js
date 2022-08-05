let heightInput = document.querySelector(".height-input");
let weightInput= document.querySelector(".weight-input");
let calculateButton = document.querySelector(".calculate");
let result = document.querySelector("#result");
let statement = document.querySelector("#result-statement");
let BMI, height, weight;

calculateButton.addEventListener("click", ()=>{

    height = heightInput.value;
    weight = weightInput.value;
    BMI = (weight / Math.pow( (height/100), 2 )).toFixed(1);
    result.innerText = BMI;


if(BMI < 18.5){
        statement.innerText = "Berat Badan Kamu kurang. Yuuk Tambah !!";    
    }else if((BMI > 18.5) && (BMI < 24.9)){
        statement.innerText = "Berat Badan Kamu Normal loo, Yuk Pertahankan!!";
    }else if((BMI > 25) && (BMI < 29.9 )){
        statement.innerText = "Berat Badan Kamu sedikit kegemukan, yukk turunin sedikit !!";
    }else{
        statement.innerText = "Berat Badan Kamu sangat Kegemukan, Yukkk Diet dan Hidup Sehat !!";
    }
});