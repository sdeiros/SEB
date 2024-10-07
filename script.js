var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 0,
    speed: 1000, // Velocidade da transição mais suave (1 segundo)
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // quando a tela tem 1024px ou mais
        1024: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        // quando a tela tem entre 768px e 1023px
        720: {
            slidesPerView: 1.1,
            spaceBetween: 0,
        },
        // quando a tela tem menos de 768px
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        }
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false, // continua após interação
    },
    on: {
        init: function () {
            console.log('Swiper initialized');
        },
        slideChange: function () {
            updateButtonColors();
        }
    }
});

function updateButtonColors() {
    const prevButton = document.querySelector('.swiper-button-prev');
    const nextButton = document.querySelector('.swiper-button-next');

    if (swiper.isEnd) {
        prevButton.classList.add('black');
    } else {
        prevButton.classList.remove('black');
    }
}

document.querySelector('.swiper-button-next').addEventListener('click', () => {
    updateButtonColors();
});

// Obtém o ano atual
const currentYear = new Date().getFullYear();

// Atualiza o conteúdo do span com o ano atual
document.getElementById('current-year').textContent = currentYear;

