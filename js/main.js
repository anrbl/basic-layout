$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');
    });


    $('.main_slide').on('init afterChange', function (e, s, c) {
        const current = $('.main_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');

        $('.main_visual .slide_num span').text(c ? (c + 1) : 1);
        $('.main_visual .slide_num strong').text(s.slideCount);
        $('.main_visual .menu_slide li').eq(0).addClass('on');
        $('.main_visual .menu_slide li').eq(c).addClass('on').siblings().removeClass('on');
    })

    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        pauseOnHover: false,
        fade: true
    });

    $('.main_visual .menu_slide li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index(); //0,1,2
        $('.main_slide').slick('slickGoTo', idx);
    });

    $('.main_visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev')
    });

    $('.main_visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext')
    });

    $('.product_slide').slick({
        slidesToShow: 3,
        asNavFor: ".pic_slide",
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }],
        focusOnSelect: true,
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
    });

    $('.pic_slide').slick({
        vertical: true,
        arrows: false,
        asNavFor: ".product_slide",
    });


    $('.main_big_product .arrows .left').on('click', function () {
        $('.product_slide2').slick('slickPrev')
    });

    $('.main_big_product .arrows .right').on('click', function () {
        $('.product_slide2').slick('slickNext')
    });

    $('.product_slide2').slick({
        slidesToShow: 3,
        focusOnSelect: true,
        arrows: false,
        dots: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }],
    });

    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        // sct > 1000 ? $('.to_top').fadeIn() : $('.to_top').fadeOut();
        sct > 700 ? $('.to_top').addClass('on') : $('.to_top').removeClass('on');
    });


    $('.scr').on('click', function (e) {
        e.preventDefault();
        const st = $(this.hash).offset().top;
        console.log(st);
        $('html, body').animate({ scrollTop: st }, 600);
    });



    $('.history_menu li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.history_content li').eq(idx).addClass('on').siblings().removeClass('on');
    });



    $('.portfolio_slide').on('init afterChange', function (e, s, c) {
        console.log(c);
        $('.main_portfolio .itm').eq(c).addClass('on').siblings().removeClass('on');
    });
    $('.portfolio_slide').slick({
        centerMode: true,
        centerPadding: "100px",
        variableWidth: true,
        isFinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        dots: true
    });



    $('#fl').on('change', function () {
        const lnk = $(this).val();
        // console.log(lnk, '바뀌넹');
        //val()이 있을 때만.....
        // if (lnk) { window.open(lnk); }
        lnk && window.open(lnk);
    });

    // class 각각에 scroll event에 따라 toggle Class 하기.
    // offset().top --> Y축 위치값 구하기.

    // $(window).on('load scroll', function () {
    //     let sct = $(window).scrollTop();
    //     console.log(sct);
    //     $('.sec').each(function () {
    //         if (sct > $(this).offset().top - 200) {
    //             $(this).addClass('on');
    //         } else {
    //             $(this).removeClass('on');
    //         }
    //     });
    // });


    $('.family_link2 span').on('click', function () {
        $(this).toggleClass('on');
        $(this).next().toggleClass('on');
    })

    $('.main_portfolio .tab_arrows .left').on('click', function () {
        $('.portfolio_slide').slick('slickPrev')
    })
    $('.main_portfolio .tab_arrows .right').on('click', function () {
        $('.portfolio_slide').slick('slickNext')
    })

});