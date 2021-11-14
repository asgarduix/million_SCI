var $canvas = document.getElementById("canvas");
var $menu = document.getElementById("left_menu");
var $aside = document.getElementById("aside_func");
var $cont = document.getElementById("right_content");

// menu-show/hide //
function menuToggle() {
    if ($menu.classList) {
        $menu.classList.toggle("menu-close");
    }

    if ($cont.classList) {
        $cont.classList.toggle("right-fluid");
    }
}

function asideToggle() {
    if ($aside.classList) {
        $aside.classList.toggle("aside-open");
        $aside.style.display = 'block';
    }
}

$('.aside-btn').click(function() {
    $(this).toggleClass('aside-active');
});

$('.menu-btn a').click(function() {
    $(this).toggleClass('menu-active');
});

// bootstrap-tooltip //
$(document).ready(function() {
    $('.tabulator-cell').each(function() {
        $(this).attr('data-toggle', 'tooltip');
        $(this).attr('data-placement', 'left');
    });
    $('[data-toggle="tooltip"]').tooltip();
});

// card-detail-show/hide //
// $('.detail-title').each(function() {
//     $(this).click(function() {
//         $(this).closest('.card-detail').find('.detail-board').stop(true, true).slideToggle();
//         $(this).toggleClass('detail-title-close');
//     });
// });

// table-detail-col-focus //
$('.table-col-detail').each(function() {
    $(this).click(function() {
        $(this).css('background', '#F6EFE6');
        $(this).closest('.table-col').siblings().find('.table-col-detail').css('background', 'none');
    });
});

