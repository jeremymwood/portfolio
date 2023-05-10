$('.codeup-icon').hover(function() {
    $('.codeup-icon').addClass("d-none");
    $('.codeup-icon-hover').removeClass("d-none");
    }
);
$('.codeup-icon-hover').mouseleave(function() {
    $('.codeup-icon').removeClass("d-none");
    $('.codeup-icon-hover').addClass("d-none");
    }
);