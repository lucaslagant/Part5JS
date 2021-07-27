let form = document.getElementById('form')
let btn = document.getElementById('button')
let field = document.getElementById('formClone')

btn.addEventListener('click', function(){
   let clone = form.cloneNode(true);
   field.insertAdjacentElement('beforeend',clone);
   console.log(clone);
})