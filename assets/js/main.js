




const formImc = document.forms.imcForm;

formImc.addEventListener("submit", function(event){
    // ajout de if condition une fois le math est fait
    event.preventDefault();

    const height = formImc.height.value;
    const weight = formImc.weight.value;

    
   const isValid = isValidForm();
   if (isValid){
    const result = calculateImc(height,weight);
    
    createElement(result.toFixed(2));
   }else if(){
    
   }

    
} )

 function isValidForm(){

    let result = true;
    return result;
 }

 function calculateImc(height,weight){
        const calcul = weight/Math.pow(height/100, 2);
        return calcul;
    }

 function createElement(x){
    const message = document.createElement('div');
    message.textContent = `Votre IMC est de ${x}`;
    message.classList.add('message');
    formImc.insertAdjacentElement('afterend', message)

    formImc.reset();
 }   









// *correction Rachid

// const formImc = document.forms.imcForm;

// formImc.addEventListener("submit", function (event) {
//     event.preventDefault();

//     const weight = formImc.weight.value;
//     const size = formImc.size.value;

// const isGood = isValidForm(weight, size)
// if(isGood){
    //     const result = calculateImc(weight,size)
    //     createElement(result.toFixed(2))

// }

    
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