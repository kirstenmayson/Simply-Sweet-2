
let intro = document.querySelector('.intro');
let lg = document.querySelector('.lg-header');
let lgspan = document.querySelectorAll('.lg');

window.addEventListener('DOMContentLoaded', ()=>{

  setTimeout(()=>{

    lgspan.forEach((span,idx)=>{
      setTimeout(()=>{
        span.classList.add('active');
      }, (idx + 1) * 400)
    });

    setTimeout(()=>{
      lgSpan.forEach((span,idx)=>{

        setTimeout(()=>{
          span.classList.remove('active');
          span.classList.add('fade');
        }, (idx + 1) * 50)
      })
    }, 2000);

    setTimeout(()=>{
      intro.style.top = '-100vh';
    }, 2300)
  })
})



var mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


