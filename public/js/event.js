$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    animateIn: 'flipInX',
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2,
            // nav:true
        },
        600: {
            items: 2,
            // nav:true
        },
        1000: {
            items: 4,
            // nav:true,
            loop: true
        }
    }
})
