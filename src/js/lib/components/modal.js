import $ from '../core';

$.prototype.modal = function(created) {
    let scroll = calcScroll();
    for (let i = 0; i < this.length; i++) {
        const target = $(this[i]).getAttr('data-target');
        $(this[i]).clickEvent((e) => {
            e.preventDefault();
            $(target).fadeIn(500);
            document.body.style.marginRight = `${scroll}px`;
            document.body.style.overflow = 'hidden';
        });

        const closeElements = document.querySelectorAll(`${target} [data-close]`);
        closeElements.forEach(elem => {
            $(elem).clickEvent(() => {
                $(target).fadeOut(300);
                setTimeout(() => {
                    document.body.style.marginRight = `0px`;
                    document.body.style.overflow = '';
                }, 300);
                setTimeout(() => {
                    if (created) {
                        document.querySelector(target).remove();
                    }
                }, 300);
            });
        });
    
        $(target).clickEvent(e => {
            if (e.target.classList.contains('modal')) {
                $(target).fadeOut(300);
                setTimeout(() => {
                    document.body.style.marginRight = `0px`;
                    document.body.style.overflow = '';
                }, 300);
                setTimeout(() => {
                    if (created) {
                        document.querySelector(target).remove();
                    }
                }, 300);
            }
        });
    }

    function calcScroll() {
        let div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';
        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        return scrollWidth;
    }
};

$('[data-toggle="modal"]').modal();

$.prototype.createModal = function({text, btns} = {}) {
    for (let i = 0; i < this.length; i++) {
        let modal = document.createElement('div');
        $(modal).addClass('modal');
        $(modal).setAttr('id', $(this[i]).getAttr('data-target').slice(1));

        // btns = {count: num, settings: [[text, classNames=[], close, callback]]}
        const buttons = []; /* в массиве будут храниться каждые отдельные кнопки (ноды) */
        for (let j = 0; j < btns.count; j++) {
            let [text, className, close, callback] = btns.settings[j];
            let btn = document.createElement('button');
            $(btn).addClass('btn', ...className);
            btn.textContent = text;
            if (close) {
                $(btn).setAttr('data-close', 'true');
            }
            if (callback && typeof(callback) === 'function') {
                $(btn).clickEvent(callback);
            }

            buttons.push(btn);
        }

        $(modal).html(`
            <div class="modal-dialog">
                <div class="modal-content">
                    <button class="close" data-close>
                        <span>&times;</span>
                    </button>
                    <div class="modal-header">
                        <div class="modal-title">
                            ${text.title}
                        </div>
                    </div>
                    <div class="modal-body">
                        ${text.body} 
                    </div>
                    <div class="modal-footer">
                        
                    </div>
                </div>
            </div>
        `);

        modal.querySelector('.modal-footer').append(...buttons);
        document.body.appendChild(modal);
        $(this[i]).modal(true);
        $($(this[i]).getAttr('data-target')).fadeIn(500);
    }
};