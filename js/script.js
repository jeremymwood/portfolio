"use strict";
$('.codeup-icon').hover(function() {
    $(this).addClass("d-none");
    $('.codeup-icon-hover').removeClass("d-none");
});

$('.codeup-icon-hover').mouseleave(function() {
    $(this).addClass("d-none");
    $('.codeup-icon').removeClass("d-none");
});

