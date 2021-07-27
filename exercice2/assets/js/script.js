let checkForm = () => {
    pass1.classList.remove("colorGreen", "colorRed");
    pass2.classList.remove("colorGreen", "colorRed");
    //On ajoute .value car on compare la valeur du champ HTML
    if (pass1.value === pass2.value) {
        pass1.classList.add("colorGreen");
        pass2.classList.add("colorGreen");
    }
    else {
        pass1.classList.add("colorRed");
        pass2.classList.add("colorRed");
    }
}

//On affecte à la variable pass1 l'élément HTML qui contient  l'id passone
let pass1 = document.getElementById(`passone`);
let pass2 = document.getElementById(`passtwo`);

let button = document.getElementById(`button1`);

button.addEventListener("click", checkForm);



