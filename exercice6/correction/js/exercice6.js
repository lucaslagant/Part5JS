let firstname = document.getElementById('firstname');
let lastname = document.getElementById('lastname');

firstname.addEventListener('focus', function(){
    firstname.style.border = "solid black 5px";
});
lastname.addEventListener('focus', function(){
    lastname.style.border = "solid black 5px"
});
