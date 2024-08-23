/* ===== Logic for creating fake Select Boxes ===== */
$('.sel').each(function () {
    $(this).children('select').css('display', 'none');

    var $current = $(this);

    $(this).find('option').each(function (i) {
        if (i == 0) {
            $current.prepend($('<div>', {
                class: $current.attr('class').replace(/sel/g, 'sel__box')
            }));

            var placeholder = $(this).text();
            $current.prepend($('<span>', {
                class: $current.attr('class').replace(/sel/g, 'sel__placeholder'),
                text: placeholder,
                'data-placeholder': placeholder
            }));

            return;
        }

        $current.children('div').append($('<span>', {
            class: $current.attr('class').replace(/sel/g, 'sel__box__options'),
            text: $(this).text()
        }));
    });
});

// Toggling the `.active` state on the `.sel`.
$('.sel').click(function () {
    $(this).toggleClass('active');
});

// Toggling the `.selected` state on the options.
$('.sel__box__options').click(function () {
    var txt = $(this).text();
    var index = $(this).index();

    $(this).siblings('.sel__box__options').removeClass('selected');
    $(this).addClass('selected');

    var $currentSel = $(this).closest('.sel');
    $currentSel.children('.sel__placeholder').text(txt);
    $currentSel.children('select').prop('selectedIndex', index + 1);
});

$(document).ready(function () {
    $('.tel').mask('+7 (999) 999 - 99 - 99');
});

$(document).scroll(function (e) {
    $(window).scrollTop() > 30 ? $('.header').addClass('alt_header') : $('.header').removeClass('alt_header');
});




$('.open_popup').click(function () {
    $('.popup__form').css('display', 'block');
    $('#mask').css('display', 'block');
    $('#popup').fadeToggle();
    $('body').css('overflow', 'hidden'); // Отключаем прокрутку
});

$('#mask').click(function () {
    $('#mask').css('display', 'none');
    $('#popup').fadeToggle();
    $('body').css('overflow', 'auto'); // Включаем прокрутку обратно
    $('.popup__success').css('display', 'none');
});

$('#popup-form').submit(function (event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    // Собираем данные формы
    const formData = new FormData(this);

    // Отправляем данные на сервер

    // Скрываем форму
    $('.popup__form').fadeOut();
    $('.popup__success').css('display', 'block');
});

