/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

function weightConverter(event) {
    const kilogramsInputValue = event.target.value;
    const outputElement = document.getElementById('output');
    const weightkg = +document.querySelector("#output-weight").value;
   
    if(kilogramsInputValue) {
        const kilograms = Number (kilogramsInputValue);
        const pounds = ((kilograms * 2.2046).toFixed(1)) 
        const gram = ((kilograms / 0.0010000).toFixed(1))
        const ounces = ((kilograms * 35.274).toFixed(1))

        outputElement.innerText = pounds;
        
    } else {
        outputElement.innerText = '';
    } 
};

document.addEventListener('submit-btn',weightConverter);

console.log(kilogramsInputValue);


