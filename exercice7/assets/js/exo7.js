let text = document.getElementById('text');
let oldValue = 0
let newValue = 0
let size = 16

window.addEventListener('scroll', function () {
  newValue = window.pageYOffset
  if (oldValue < newValue){
    console.log('down')
    size += 1
    text.style.fontSize = `${size}px`
  }else if (oldValue > newValue){
    console.log('up')
    size -= 1
    text.style.fontSize = `${size}px`
  }
  oldValue = newValue
  
  // if (document.documentElement.scrollTop > 50 && document.documentElement.scrollTop < 1000) {
  //   text.style.fontSize = "30px";
  // } else if (document.documentElement.scrollTop > 1000) {
  //   text.style.fontSize = "45px";
  // } else {
  //   text.style.fontSize = "15px";
  // }
})




// agrandir la taille du texte en scrollant
// function scrollFunction() {
//   if (document.body.scrollTop > 50 && document.body.scrollTop < 1000  || document.documentElement.scrollTop > 50 && document.documentElement.scrollTop < 1000) {
//     text.style.fontSize = "30px";
//   } else if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){
//     text.style.fontSize = "45px";
//   }else{
//     text.style.fontSize = "15px";
//   }
// }

// window.onscroll = function() {scrollFunction()};



