import $ from '../core';

$.prototype.onEvent = function(eventName, callback) {
    if (!eventName || !callback) {
        return this; /* возвращаем объект по цепочке */
    }
    for (let i = 0; i < this.length; i++) {
        this[i].addEventListener(eventName, callback);
    }
    return this;
};

$.prototype.offEvent = function(eventName, callback) { /* !!! Чтобы удалить обработчик события, коллбэк должен быть оформлен в переменную */
    if (!eventName || !callback) {
        return this;
    }
    for (let i = 0; i < this.length; i++) {
        this[i].removeEventListener(eventName, callback);
    }
    return this;
};

$.prototype.clickEvent = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback) {
            this[i].addEventListener('click', callback);
        } else {
            this[i].click();
        }
    }
    return this;
};