function openMenu() {
    var x = document.getElementById("mobile-menu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

$(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
        $("#fixed-bg").addClass("is-fixed");
    } else {
        $("#fixed-bg").removeClass("is-fixed");
    }
});

var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 3) {
        counter = 1;
    }
}, 4000);

$(document).ready(function () {
    $('.demo').slick({
        dots: true,
        zIndex: 1000,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 4000,
    });
});