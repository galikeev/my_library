import $ from '../core';

$.prototype.html = function(content) { /* Меняем или получаем содержимое элемента */
    for (let i = 0; i < this.length; i++) {
        if (content) {
            this[i].innerHTML = content;
        } else {
            return this[i].innerHTML;
        }
    }

    return this;
};

$.prototype.eq = function(i) { /* Метод выбора конкретного элемента */
    const swap = this[i]; /* нужный элемент записывем в переменную */
    const objLength = Object.keys(this).length; /* получаем количество свойств(элементов) внутри объекта */

    for (let i = 0; i < objLength; i++) {
        delete this[i]; /* удаляем все элементы с объекта */
    }
    this[0] = swap; /* в первый элемент объекта помещаем переменную */
    this.length = 1; /* количество */
    return this; /* возвращащаем объект, в котором будет одно свойство и один элемент */
};

$.prototype.index = function() { /* Получение номера элемента по порядку у которых общий родитель */
    const parent = this[0].parentNode; /* получаем родителя одного элемента */
    const childs = [...parent.children]; /* получаем детей родителя */

    const findMyIndex = (item) => {
        return item == this[0];
    };

    return childs.findIndex(findMyIndex);
};

$.prototype.find = function(selector) { /* Получаем определенный элемент среди выбранного селектора */
    let numberOfitems = 0; /* Количество подходящих элементов по селектору в общем */
    let counter = 0; /* счетчик (количество новых записанных элементов) */

    const copyObj = Object.assign({}, this); /* Поверхностная копия главного объекта (this) */

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].querySelectorAll(selector); /* ищем подходящие элементы в копии по селектору и записываем в arr */
        if (arr.length == 0) { /* если не найдено ни одного такого элемента */
            continue; /* то пропускаем */
        }

        for (let j= 0; j < arr.length; j++) {
            this[counter] = arr[j]; /* справа каждый отдельный элемент найденный по селектору, слева общий объект в который записываем по порядкус 0 */
            counter++;
        }

        numberOfitems += arr.length;
    }

    this.length = numberOfitems;
    /* если вдруг останутся какие-то неподходящие свойства, то мы их удалим */
    const objLength = Object.keys(this).length;
    for (; numberOfitems < objLength; numberOfitems++) {
        delete this[numberOfitems]; /* удаляются остатки */
    }

    return this;
};

$.prototype.closestEl = function(selector) { /* Получаем ближайший блок по заданному селектору */
    let counter = 0; /* какое количество элементов мы нашли */

    for (let i = 0; i < this.length; i++) {
        if (!this[i].closest(selector)) { /* если нет  */
            return this; /* то возвращаем объект */
        } else {
            this[i] = this[i].closest(selector); /* внутри каждого элемента при помощи closest будем находить нужный селектор */
            counter++;
        }
    }
    /* если вдруг останутся какие-то неподходящие свойства, то мы их удалим */
    const objLength = Object.keys(this).length;
    for (; counter < objLength; counter++) {
        delete this[counter];
    }

    return this;
};

$.prototype.siblings = function() { /* метод получает все элементы, кроме выбранного элемента */
    let numberOfitems = 0;
    let counter = 0;

    const copyObj = Object.assign({}, this); /* Поверхностная копия главного объекта (this) */

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].parentNode.children; /* обращаемся к детям родителя  */

        for (let j= 0; j < arr.length; j++) {
            if (copyObj[i] === arr[j]) { /* если этот элемент равен тому элементу на котором произошло действие */
                continue; /* то мы его не добавляем в главный объект */
            }
            this[counter] = arr[j];
            counter++;
        }

        numberOfitems += arr.length - 1;
    }

    this.length = numberOfitems;
    /* если вдруг останутся какие-то неподходящие свойства, то мы их удалим */
    const objLength = Object.keys(this).length;
    for (; numberOfitems < objLength; numberOfitems++) {
        delete this[numberOfitems];
    }

    return this;
};