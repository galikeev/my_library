import $ from '../core';

$.prototype.show = function() { /* метод по открытию display */
    for(let i = 0; i < this.length; i++) { /* this.length - количество элементов */
        if (!this[i].style) { /* если нет свойства style у каждого элемента по порядку */
            continue; /* то продолжаем */
        }
        this[i].style.display = ''; /* каждому элементу по порядку назначаем пустое свойство display */
    }
    return this; /* возвращаем объект */
};

$.prototype.hide = function() { /* метод по скрытию display */
    for(let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }
        this[i].style.display = 'none';
    }
    return this;
};

$.prototype.toggleDisplay = function() {
    for(let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }
        if (this[i].style.display === 'none') {
            this[i].style.display = '';
        } else {
            this[i].style.display = 'none';
        }
    }
    return this;
};