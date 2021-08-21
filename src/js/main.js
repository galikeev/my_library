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

console.log($('div').find('.modal-footer'));

// $('.wrap').html(
//     `
//     <div class="dropdown">
//         <button class="btn btn-primary dropdown-toggle" id="droddownMenuButton">Dropdown button</button>
//         <div class="dropdown-menu" data-toggle-id="droddownMenuButton">
//             <a href="#" class="dropdown-item">Action #1</a>
//             <a href="#" class="dropdown-item">Action #2</a>
//             <a href="#" class="dropdown-item">Action #3</a>
//         </div>
//     </div>
//     `
// );

// $('.dropdown-toggle').dropdown();

$('#trigger').clickEvent(() => {
    $('#trigger').createModal({
        text: {
            title: 'Modal title',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eos dolorum hic labore asperiores quisquam eaque quaerat culpa minus, repudiandae totam rem molestiae sunt laboriosam cupiditate ullam et impedit. Et?'
        },
        btns: {
            count: 3,
            settings: [
                [
                    'Close',
                    ['btn-danger', 'mr-10'],
                    true
                ],
                [
                    'Save changes',
                    ['btn-success'],
                    false,
                    () => {
                        alert('Данные сохранены');
                    }
                ],
                [
                    'Another button',
                    ['btn-warning', 'ml-10'],
                    false,
                    () => {
                        alert('Hello ept');
                    }
                ]
            ]
        }
    });
});