import $ from '../core';

$.prototype.tab = function() {
    for (let i = 0; i < this.length; i++) {
        $(this[i]).clickEvent(() => {
            $(this[i])
            .addClass('tab-item--active')
            .siblings()
            .removeClass('tab-item--active')
            .fadeIn(500)
            .closestEl('.tab')
            .find('.tab-content')
            .removeClass('tab-content--active')
            .eq($(this[i])
            .index())
            .addClass('tab-content--active');
        });
    }
};

$('[data-tab-panel] .tab-item').tab();