import $ from '../core';

$.prototype.setAttr = function(name, value) {
    for (let i = 0; i < this.length; i++) {
        if (!name && !value) {
            return this;
        } else if (name && !value) {
            this[i].setAttribute(name, '');
        } else {
            this[i].setAttribute(name, value);
        }
    }
    return this;
};

$.prototype.removeAttr = function(name) {
    for (let i = 0; i < this.length; i++) {
        this[i].removeAttribute(name);
    }
    return this;
};

$.prototype.getAttr = function(name) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].getAttribute(name)) {
            continue;
        }
        return this[i].getAttribute(name);
    }
    return this;
};

$.prototype.toggleAttr = function(name, value) {
    for (let i = 0; i < this.length; i++) {
        if (this[i].hasAttribute(name)) {
            this[i].removeAttribute(name);
        } else if (name && !value) {
            this[i].setAttribute(name, '');
        } else {
            this[i].setAttribute(name, value);
        }
    }
    return this;
};