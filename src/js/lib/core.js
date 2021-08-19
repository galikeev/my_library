const $ = function(selector) {
    return new $.prototype.init(selector); /* из функции возвращаем конструктор обращаемся к прототипу функции и запускаем метод инит (будет новый объект)*/
};

$.prototype.init = function(selector) {
    if (!selector) { /* если не был передан селектор */
        return this; /* то возвращем контекст вызова this нового объекта // {} - будет пустой объект */
    }

    if (selector.tagName) { /* если это тэг */
        this[0] = selector; /* на первую позицию помещаем селектор */
        this.length = 1; /* один элемент */
        return this; 
    }

    Object.assign(this, document.querySelectorAll(selector)); /* в пустой объект (this) добавляем document.querySelectorAll с переданным селектором */
    this.length = document.querySelectorAll(selector).length; /* в главный объект добавили свойство length которое будет отвечать за количество элементов */
    return this; /* в этом объекте this будут храниться прототипы и те элементы с которыми будем взаимодействовать */
};

$.prototype.init.prototype = $.prototype; /* прототип объекта из init записываем в прототип главной функции $ */

window.$ = $; /* pв глобальный объект window записываем функцию $ */

export default $;