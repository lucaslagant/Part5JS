

let inputForm1 = document.getElementById('name');
let inputForm2 = document.getElementById('mail');
let inputForm3 = document.getElementById('Age');
let regMessage_a = document.getElementById('regMessage1');
let regMessage_b = document.getElementById('regMessage2');
let regMessage_c = document.getElementById('regMessage3');
let error = 'Caractère non pris en compte';

var RegName = /^([a-zA-Zéèêàâä\-\' ]+)$/;
var RegMail = /^([a-zA-Z0-9\-_\.]+)@([a-zA-Z0-9\-_]+)\.([a-z]{2,5})$/;
var RegAge = /^([0-9]){1,3}$/;


// Cette instruction véfirie la regex du nom

/*L'évènement keyup se déclenche lorsque
 qu'une touche du clavier qui a été pressée est relâchée.*/

inputForm1.onkeyup = () => {
   
    if(RegName.test(inputForm1.value)){
        regMessage_a.innerHTML='';
    }else{
        regMessage_a.innerHTML=error;
        // regMessage_a.classList.add('red_message'); ← inutile si la class existe déja dans le HTML
    }
} 

// Cette instruction vérifie la regex de l'adresse email
inputForm2.onkeyup = () => {
   
    if(RegMail.test(inputForm2.value)){
        regMessage_b.innerHTML='';
    }else{
        regMessage_b.innerHTML=error;
    }
}
//   Cette instruction vérifie la regex de l'âge
inputForm3.onkeyup = () => {
   
    if(RegAge.test(inputForm3.value)){
        regMessage_c.innerHTML='';
    }else{
        regMessage_c.innerHTML=error;
    }
} 

/* -------------------------------------------------------------------------------------
                                Méthode alternative   
---------------------------------------------------------------------------------------*/


// // Cette instruction véfirie la regex du nom
// inputForm1.onkeyup = () => {

//     if(RegName.test(inputForm1.value)){
//         regMessage_a.innerHTML=('')
      
//     }else{
//           regMessage_a.innerHTML=(`<div class="red_message">${error}</div>`)
//     }
// }


// // Cette instruction vérifie la regex de l'adresse email
// inputForm2.onkeyup = () => {
   
    
//     if(RegMail.test(inputForm2.value)){
//         regMessage_b.innerHTML=('')
      
//     }else{
//           regMessage_b.innerHTML=(`<div class="red_message">${error}</div>`)
//     }
// }

// //   Cette instruction vérifie la regex de l'âge
// inputForm3.onkeyup = () => {
    
//     if(RegAge.test(inputForm3.value)){
//         regMessage_c.innerHTML=('')  

//     }else{
//           regMessage_c.innerHTML=(`<div class="red_message">${error}</div>`)
//     }
// }



/* -------------------------------------------------------------------------------------
                     NE PAS PRENDRE EN COMPTE LES COMMENTAIRES CI-DESSOUS
---------------------------------------------------------------------------------------*/


                    


// var RegMail = /^([a-z\-\_\.]+)([a-z]+)\@([a-z]+)\.([a-z]{2,3})$/;





//     button.onclick() => {
//     if(inputForm1.match(^([a-z]+)(\-|\_|\.+)([a-z]+)\@([a-z]+)\.([a-z]{2,3})$){
//         alert('La régExp du nom est correcte');
//     }else{
//         document.write(`<div class="red_message">Caractère non pris en charge</div>`)

//         }
// }



// RegExp('[a-zA-Z]')
// RegExp('^([a-z]+)(\-|\_|\.+)([a-z]+)\@([a-z]+)\.([a-z]{2,3})$')
// RegExp('/d')



// // Ceci est la regex que j'ai crée
// ^([a-z]+)([\-|\_|\.]+)([a-z]+)\@([a-z]+)\.([a-z]{2,3})$

// // Cela est une regex d'internet pour la comparer à la mienne
// /^([a-zA-Z0-9-.]+)@([a-zA-Z0-9-.]+).([a-zA-Z]{2,5})$/