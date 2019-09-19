// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

let arrowToTop = document.querySelector('#arrow_to_top');

function scrollFunction() { 

  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    arrowToTop.style.display = 'block';
  } else {
    arrowToTop.style.display = 'none';
  }
}

toTopFunc = () => window.scrollTo({
  top:0,
  behavior: 'smooth',
})

arrowToTop.addEventListener('click', toTopFunc);