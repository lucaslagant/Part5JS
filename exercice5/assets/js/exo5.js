// Variables

let btnPink = document.querySelector('#pink');
let btnBlue = document.querySelector('#blue');
let btnPurple = document.querySelector('#purple');
let btnBold= document.querySelector('#bold');
let btnItalic = document.querySelector('#italic');
let text = document.querySelector('#text');

// instructions

btnPink.addEventListener('click' , () =>text.style.color='#ff69b4')
btnBlue.addEventListener('click' , () =>text.style.color='#0000ff')
btnPurple.addEventListener('click' , () =>text.style.color='#800080')
btnBold.addEventListener('click' , () =>text.style.fontWeight='bold')
btnItalic.addEventListener('click' , () =>text.style.fontStyle='italic')