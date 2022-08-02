const slides = document.querySelectorAll('.slide')




const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')

let i =0;

if(i>= slides.length){
  i = 0
}




nextBtn.addEventListener("click",function(){

  slides.forEach(function(slide){
    slide.classList.remove('active')
  })
  i++

  if(i>= slides.length){
    i = 0
  }

  const currentSlide = slides[i]
  currentSlide.classList.add('active')
})

prevBtn.addEventListener("click",function(){

  slides.forEach(function(slide){
    slide.classList.remove('active')
  })
  i--

  if(0 > i){
    i = slides.length - 1
  }

  const currentSlide = slides[i]
  currentSlide.classList.add('active')
})