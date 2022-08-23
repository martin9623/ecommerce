// Banner Carousel
const Carousel = document.querySelector('.carousel__container')
const BtnScrollIzq = document.querySelector('.btn__scr__izq')
const BtnScrollDer = document.querySelector('.btn__scr__der')

BtnScrollIzq.addEventListener('click', () => scrollCarousel(1440))
BtnScrollDer.addEventListener('click', () => scrollCarousel(0))

setInterval(() => {
    if (Carousel.scrollLeft === 0) {
        scrollCarousel(1440)
    } else {
        scrollCarousel(0)
    }
}, 2500)

const scrollCarousel = (pixel) => Carousel.scrollLeft = pixel

let i = 0

setInterval(() => {
    i++
    console.log(i)
}, 1000);