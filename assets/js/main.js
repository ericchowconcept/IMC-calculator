
const poids = document.querySelector('#weight').value;
const taille = document.querySelector('#height').value;



const form = document.querySelector('.formulaire')

form.addEventListener('submit', function(e){
    e.preventDefault()
   
})

function displayResult(taille, poids){
   
    let mutiply = taille*2;
    
}


// console.log(mutiply);
const forms = document.forms.imcForm
console.log(forms.height.value);
// *correction Rachid

// const formImc = document.forms.imcForm;

// formImc.addEventListener("submit", function (event) {
//     event.preventDefault();

//     const weight = formImc.weight.value;
//     const size = formImc.size.value;
const isGood = isValidForm(weight, size)
if(isGood){
    //     const result = calculateImc(weight,size)
    //     createElement(result.toFixed(2))

}

    
// });    

// function calculateImc(weight, size){
//   const result = weight / Math.pow(size/100, 2)
//   return result
// }

// function createElement(imc){
//     const messageResult = document.createElement('div')
//     messageResult.textContent = `Votre IMC est de ${imc}`
//     messageResult.classList.add('result')
//     formImc.insertAdjacentElement('afterend', messageResult)
//     formImc.weight.value = ""
//     formImc.size.value = ""
// }

function isValidForm(weight, size){
    let result = true

    return result
}