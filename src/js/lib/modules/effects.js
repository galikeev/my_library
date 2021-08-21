import $ from '../core';

$.prototype.animateOverTime = function(duration, callback, final) { /* техническая функция с аргументами */
    let timeStart; /* будет ориентир на нее */

    function _animateOverTime(time) {
        if (!timeStart) { /* если еще нет данных */
            timeStart = time; /* то присваиваем */
        }

        let timeElapsed = time - timeStart; /* время, которое каждый раз изменяется отнимаем время начала анимации */
        let complection = Math.min(timeElapsed / duration, 1);

        callback(complection);

        if (timeElapsed < duration) {
            requestAnimationFrame(_animateOverTime);
        } else {
            if (typeof final === 'function') {
                final();
            }
        }
    }
    return _animateOverTime;
};

$.prototype.fadeIn = function(duration, display = 'block', final) {
    for (let i = 0; i < this.length; i++) {
        this[i].style.display = display;

        const _fadeIn = (complection) => {
            this[i].style.opacity = complection;
        };

        const ani = this.animateOverTime(duration, _fadeIn, final);

        requestAnimationFrame(ani);
    }
    return this;
};

$.prototype.fadeOut = function(duration, final) {
    for (let i = 0; i < this.length; i++) {
        
        const _fadeOut = (complection) => {
            this[i].style.opacity = 1 - complection;
            if (complection === 1) {
                this[i].style.display = 'none';
            }
        };

        const ani = this.animateOverTime(duration, _fadeOut, final);

        requestAnimationFrame(ani);
    }
    return this;
};

$.prototype.fadeToggle = function(duration, display, final) {
    for (let i = 0; i < this.length; i++) {
        if (window.getComputedStyle(this[i]).display === 'none') {
            $(this[i]).fadeIn(duration, display, final);
        } else {
            $(this[i]).fadeOut(duration, final);
        }
    }
    return this;
};    