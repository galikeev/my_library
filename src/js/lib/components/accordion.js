import $ from '../core';

$.prototype.accordion = function(headingActive = 'accordion-heading--active', blockActive = 'accordion-block--active', paddings = 40) {
    for (let i = 0; i < this.length; i++) {
        $(this[i]).clickEvent(() => {
            $(this[i]).toggleClass(headingActive);
            $(this[i].nextElementSibling).toggleClass(blockActive)/* .fadeToggle(300) */;

            if (this[i].classList.contains(headingActive)) {
                this[i].nextElementSibling.style.maxHeight = this[i].nextElementSibling.scrollHeight + paddings + 'px';
            } else {
                this[i].nextElementSibling.style.maxHeight = "0px";
            }
            /* можнно обойтись без уловия и двух последних аргументов, если анимацию через fadeToggle */
        });
    }
};

$('.accordion-heading').accordion();