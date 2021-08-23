import $ from '../core';

$.prototype.carousel = function() {
    for (let i = 0; i < this.length; i++) {
        const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width; /* ширина каждого отдельного слайда */
        const slides = this[i].querySelectorAll('.carousel-item');
        const slidesField = this[i].querySelector('.carousel-slides'); /* главное поле (обертка) */
        const dots = this[i].querySelectorAll('.carousel-indicators li');

        slidesField.style.width = 100 * slides.length + '%';
        slides.forEach(slide => {
            slide.style.width = width;
        });

        let offset = 0; /* переменная отвечает за смещение главного блока slidesField */
        let slideIndex = 0; /* активный слайд */


        $(this[i].querySelector('[data-slide="next"]')).clickEvent((e) => {
            e.preventDefault();
            if (offset == (+width.replace(/\D/g, '') * (slides.length - 1))) {
                offset = 0;
            } else {
                offset += +width.replace(/\D/g, '');
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == slides.length - 1) {
                slideIndex = 0;
            } else {
                slideIndex++;
            }

            dots.forEach(dot => $(dot).removeClass('active'));
            $(dots[slideIndex]).addClass('active');
        });

        $(this[i].querySelector('[data-slide="prev"]')).clickEvent((e) => {
            e.preventDefault();
            if (offset == 0) {
                offset = +width.replace(/\D/g, '') * (slides.length - 1);
            } else {
                offset -= +width.replace(/\D/g, '');
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == 0) {
                slideIndex = slides.length - 1;
            } else {
                slideIndex--;
            }

            dots.forEach(dot => $(dot).removeClass('active'));
            $(dots[slideIndex]).addClass('active');
        });

        const sliderId = $(this[i]).getAttr('id');
        $(`#${sliderId} .carousel-indicators li`).clickEvent(e => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = +width.replace(/\D/g, '') * slideTo;

            slidesField.style.transform = `translateX(-${offset}px)`;

            dots.forEach(dot => $(dot).removeClass('active'));
            $(dots[slideIndex]).addClass('active');
        });
    }
};

// $('.carousel').carousel();

$.prototype.createCarousel = function (sliderSet) {
    for (let i = 0; i < this.length; i++) {

        const sliderCount = sliderSet.slides.length;

        $(this[i]).html(
            `
            <ol class="carousel-indicators"></ol>
            <div class="carousel-inner">
                <div class="carousel-slides">
                    
                </div>
            </div>
            <a href="#" class="carousel-prev" data-slide="prev">
                <span class="carousel-prev-icon">&lt;</span>
            </a>
            <a href="#" class="carousel-next" data-slide="next">
                <span class="carousel-prev-icon">&gt;</span>
            </a>
            `
        );

        for (let j = 0; j < sliderCount; j++ ) {
            const dotsItem = document.createElement('li');
            const slideItem = document.createElement('div');
            const slideImage = document.createElement('img');

            $(dotsItem).setAttr('data-slide-to', `${j}`);
            this[i].querySelector('.carousel-indicators').appendChild(dotsItem);

            this[i].querySelector('.carousel-slides').appendChild(slideItem);
            $(slideItem).addClass('carousel-item');
            slideItem.appendChild(slideImage);
            $(slideImage).setAttr('src', sliderSet.slides[j]['name']);
            $(slideImage).setAttr('src', sliderSet.slides[j]['url']);
        }
    }
    return this;
};




