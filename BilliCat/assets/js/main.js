AOS.init();

$(".navbar-toggler").click(function () {
    if ($(".navbar").hasClass("navbar-bg")) {
        $(".navbar").removeClass("navbar-bg");
    } else {
        $(".navbar").addClass("navbar-bg");
    }
});

$(window).scroll(function () {
	let hero = $(window).scrollTop();
	if (hero > 1) {
        $(".hero-area").addClass("hero-scroll");
	} else {
		$(".hero-area").removeClass("hero-scroll");
	}
});

let clipboard = new ClipboardJS('.btn');
clipboard.on('success', function (e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
    e.clearSelection();
});
clipboard.on('error', function (e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});

$(".btn-community").click(function () {
    document.getElementById('copy').innerHTML = 'Copied!';
});

const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    mousewheel: true,
    keyboard: true,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

$('.count').countUp({
    delay: 10,
    time: 1500
});

let animation = bodymovin.loadAnimation({
    container: document.getElementById('particles'),
    path: 'data.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
});

const year = new Date().getFullYear();
document.getElementById("year").innerHTML = year;