import './lib/lib';
import $ from './lib/lib';

$('button').onEvent('click', function() {
    $('div').eq(1).toggleClass('active');
});

// console.log($('div').eq(2).find('.some'));
// console.log($('.some').closestEl('.fiwndme').addClass('ggg'));
console.log($('.findme').siblings());





