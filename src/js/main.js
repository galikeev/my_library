import './lib/lib';
import $ from './lib/lib';

$('#first').onEvent('click', () => {
    $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').clickEvent(() => {
    $('div').eq(2).fadeToggle(800);
});

$('button').eq(2).onEvent('click', () => {
    $('.w-500').fadeToggle(800);
});