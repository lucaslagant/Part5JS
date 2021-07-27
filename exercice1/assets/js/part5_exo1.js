// Exercice 1

// Cet algorhytme indique si le mot de passe correspond à sa confirmation


// On affecte à la variable pass1 l'élément HTML qui contient l'id passone
    let pass1 = document.getElementById('passone');
    let pass2 = document.getElementById('passtwo');
    let button = document.getElementById('button1');
    button.onclick= () => {
// On ajoute .value car on compare la valeur du champ HTML
        if(pass1.value===pass2.value){
            pass1.style.border = '1px solid green';
            pass2.style.border = '1px solid green';           
        }else{
            pass1.style.border = '1px solid red';
            pass2.style.border = '1px solid red';   
        }
    }
   
    





// Ne pas prendre en compte les commentaires ci-dessous




    // var pass1 = document.getElementById('passone');
// var pass2 = document.getElementById('passtwo');


// function passwordAlert(){

    // document.querySelector('input').style.borderColor = 'red';   ← (Ceci est un test)


 // return false;





// let passone = document.getElementById('passone').value
// let passtwo = document.getElementById('passtwo').value
// if(passone!=passtwo){
//     document.getElementById('passone').style.border = '1px solid red'
//     document.getElementById('passtwo').style.border = '1px solid red'
// return false;

//      // document.querySelector('input').style.borderColor = 'green';    
//  }else{
//      document.getElementById('passone').style.border = '1px solid green'
//      document.getElementById('passtwo').style.border = '1px solid green'
//  }return true;
// }