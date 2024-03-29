(function() {
    "use strict";

    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }

    /**
     * Easy on scroll event listener
     */
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
        let header = select('#header')
        let offset = header.offsetHeight

        if (!header.classList.contains('fixed-top')) {
            offset += 70
        }

        let elementPos = select(el).offsetTop
        window.scrollTo({
            top: elementPos - offset,
            behavior: 'smooth'
        })
    }





    /**
     * Scroll with ofset on page load with hash links in the url
     */
    window.addEventListener('load', () => {
        if (window.location.hash) {
            if (select(window.location.hash)) {
                scrollto(window.location.hash)
            }
        }
    });

    /**
     * Preloader
     */
    let preloader = select('#preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.remove()
        });
    }


    /**
     * Animation on scroll
     */
    window.addEventListener('load', () => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        })
    });

})()



// search icon

// $(".fa-search").click(function () {
//     $(".togglesearch").toggle();
//     $("input[type='text']").focus();
// });


// search icon END
/**
 * Back to top button
 */
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('#back-to-top').addClass('active');
    } else {
        $('#back-to-top').removeClass('active');
    }

});

// var bact_to_top = $('#back-to-top');
// bact_to_top.on('click', function(e) {
//     e.preventDefault();
//     $('html, body').animate({ scrollTop: 0 });
// });

// contact form 1
$(document).ready(function() {

    $(window).resize(function() {
        if ($(window).width() <= 767) {
            $(".form-group #contact_submit_btn").appendTo("#contact_textarea");
            // $(".contact_txtarea").append(".form-group #contact_submit_btn");
        } else {
            $(".form-group #contact_submit_btn").appendTo("#contact_btn_div");

        }
    });
});
// contact form 2
$(document).ready(function() {

    $(window).resize(function() {
        if ($(window).width() <= 767) {
            $(".form-group #contact_submit_btn_1").appendTo("#contact_textarea_1");
            // $(".contact_txtarea").append(".form-group #contact_submit_btn");
        } else {
            $(".form-group #contact_submit_btn_1").appendTo("#contact_btn_div_1");

        }
    });
});

$(document).ready(function() {
    var swiper = new Swiper(".your_class_top_arrow", {

        autoplay: {
            delay: 3000,
        },
        autoplayDisableOnInteraction: true,
        spaceBetween: 15,
        slidesPerView: 3,
        loop: true,
        // cssMode: true, //this property disabled drag mouse effect
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        // pagination: {
        //     el: '.swiper-pagination',
        //     type: 'bullets',
        //     clickable: true,
        //     mousewheel: true,
        //     dynamicBullets: true,
        //     keyboard: true,
        // },
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
        breakpoints: {
            // when window width is <= 499px
            0: {
                slidesPerView: 1,
                spaceBetweenSlides: 30
            },
            // when window width is <= 999px
            576: {
                slidesPerView: 2,
                spaceBetweenSlides: 40
            },
            992: {
                slidesPerView: 3,
                spaceBetweenSlides: 40
            }
        }
        // paginationClickable: true,
        // paginationHide: true,
    });

});

$(document).ready(function() {
    var swiper = new Swiper(".your_class_demo", {

        autoplay: {
            delay: 3000,
        },
        autoplayDisableOnInteraction: true,
        spaceBetween: 15,
        slidesPerView: 3,
        loop: true,
        // cssMode: true, //this property disabled drag mouse effect







        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        // pagination: {
        //     el: '.swiper-pagination',
        //     type: 'bullets',
        //     clickable: true,
        //     mousewheel: true,
        //     dynamicBullets: true,
        //     keyboard: true,
        // },
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
        breakpoints: {
            // when window width is <= 499px
            0: {
                slidesPerView: 1,
                spaceBetweenSlides: 30
            },
            // when window width is <= 999px
            576: {
                slidesPerView: 2,
                spaceBetweenSlides: 40
            },
            992: {
                slidesPerView: 3,
                spaceBetweenSlides: 40
            }
        }
        // paginationClickable: true,
        // paginationHide: true,
    });

});

$(document).ready(function() {
    var swiper = new Swiper(".your_class_one", {

        autoplay: {
            delay: 3000,
        },
        autoplayDisableOnInteraction: true,
        spaceBetween: 15,
        slidesPerView: 3,
        loop: true,
        // cssMode: true, //this property disabled drag mouse effect

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
            mousewheel: true,
            dynamicBullets: true,
            keyboard: true,
        },
        breakpoints: {
            // when window width is <= 499px
            0: {
                slidesPerView: 1,
                spaceBetweenSlides: 30
            },
            // when window width is <= 999px
            576: {
                slidesPerView: 2,
                spaceBetweenSlides: 40
            },
            992: {
                slidesPerView: 3,
                spaceBetweenSlides: 40
            }
        }
        // paginationClickable: true,
        // paginationHide: true,
    });

});
$(document).ready(function() {
    var swiper = new Swiper(".clients_slider", {
        autoplay: {
            delay: 3000,
        },
        // autoplayDisableOnInteraction: true,
        spaceBetween: 25,
        slidesPerView: 3,
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },

        loop: true,
        // cssMode: true, //this property disabled drag mouse effect

        // navigation: false,
        // navigation: {
        //     nextEl: ".swiper-button-next",
        //     prevEl: ".swiper-button-prev",
        // },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
            mousewheel: true,
            dynamicBullets: true,
            keyboard: true,
        },
        breakpoints: {
            // when window width is <= 499px
            0: {
                slidesPerView: 2,
                spaceBetweenSlides: 30
            },
            // when window width is <= 999px
            576: {
                slidesPerView: 4,
                spaceBetweenSlides: 40
            },
            992: {
                slidesPerView: 6,
                spaceBetweenSlides: 40
            }
        },
        // paginationClickable: true,
        // paginationHide: true,
    });

});

// Sticky Menu
$(window).scroll(function() {
    var height = $('.top-header').innerHeight();
    if ($('header').offset().top > 10) {
        $('.top-header').addClass('hide');
        $('.navigation').addClass('nav-bg');
        $('.navigation').css('margin-top', '-' + height + 'px');
    } else {
        $('.top-header').removeClass('hide');
        $('.navigation').removeClass('nav-bg');
        $('.navigation').css('margin-top', '-' + 0 + 'px');
    }
});
// contact captcha responsive append
$(document).ready(function() {

    $(window).resize(function() {
        if ($(window).width() <= 767) {
            $("#contact_submit_btn_captcha").appendTo("#contact_textarea");
            // $(".contact_txtarea").append("#contact_submit_btn_captcha");
        } else {
            $("#contact_submit_btn_captcha").appendTo("#contact_btn_div");

        }
    });
});
// contact captcha responsive append END

//  sub menu accordiaon in mobile men

$(document).ready(function() {
    /* Check width on page load*/
    if ($(window).width() < 992) {

        $(".drop_acc1>a").appendTo("#headingOne button");
        $(".drop_acc1>ul.sub_menu_main").appendTo("#collapseOne .accordion-body");
        $("#collapseOne .accordion-body ul.sub_menu_main").removeClass("dropdown-menu");
        $(".drop_acc2>a").appendTo("#headingTwo button");
        $(".drop_acc2>ul.sub_menu_main").appendTo("#collapseTwo .accordion-body");
        $("#collapseTwo .accordion-body ul.sub_menu_main").removeClass("dropdown-menu");
    } else {}
});


//  sub menu accordiaon in mobile men

// menu fixed on top
document.addEventListener("DOMContentLoaded", function() {

    window.addEventListener('scroll', function() {

        if (window.scrollY > 200) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            $(".same_height_banner").addClass("banner_margin_top");

            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            // document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
            $(".same_height_banner").removeClass("banner_margin_top");

        }
    });
});
// DOMContentLoaded  end
// menu fixed on top END


function darken_screen(yesno) {
    if (yesno == true) {
        document.querySelector('.screen-darken').classList.add('active');
    } else if (yesno == false) {
        document.querySelector('.screen-darken').classList.remove('active');
    }
}

function close_offcanvas() {
    darken_screen(false);
    document.querySelector('.mobile-offcanvas.show').classList.remove('show');
    document.body.classList.remove('offcanvas-active');
}

function show_offcanvas(offcanvas_id) {
    darken_screen(true);
    document.getElementById(offcanvas_id).classList.add('show');
    document.body.classList.add('offcanvas-active');
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('[data-trigger]').forEach(function(everyelement) {

        let offcanvas_id = everyelement.getAttribute('data-trigger');

        everyelement.addEventListener('click', function(e) {
            e.preventDefault();
            show_offcanvas(offcanvas_id);

        });
    });

    document.querySelectorAll('.btn-close').forEach(function(everybutton) {

        everybutton.addEventListener('click', function(e) {
            e.preventDefault();
            close_offcanvas();
        });
    });

    document.querySelector('.screen-darken').addEventListener('click', function(event) {
        close_offcanvas();
    });

});
// DOMContentLoaded  end

window.addEventListener("resize", function() {
    "use strict";
    window.location.reload();
});


document.addEventListener("DOMContentLoaded", function() {

    // make it as accordion for smaller screens
    if (window.innerWidth > 992) {

        document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem) {

            everyitem.addEventListener('mouseover', function(e) {

                let el_link = this.querySelector('a[data-bs-toggle]');

                if (el_link != null) {
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.add('show');
                    nextEl.classList.add('show');
                }

            });
            everyitem.addEventListener('mouseleave', function(e) {
                let el_link = this.querySelector('a[data-bs-toggle]');

                if (el_link != null) {
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.remove('show');
                    nextEl.classList.remove('show');
                }


            })
        });

    }
    // end if innerWidth
});
// DOMContentLoaded  end

//	window.addEventListener("resize", function() {
//		"use strict"; window.location.reload(); 
//	});


document.addEventListener("DOMContentLoaded", function() {


    /////// Prevent closing from click inside dropdown
    document.querySelectorAll('.dropdown-menu').forEach(function(element) {
        element.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    })



    // make it as accordion for smaller screens
    if (window.innerWidth < 992) {

        // close all inner dropdowns when parent is closed
        document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown) {
            everydropdown.addEventListener('hidden.bs.dropdown', function() {
                // after dropdown is hidden, then find all submenus
                this.querySelectorAll('.submenu').forEach(function(everysubmenu) {
                    // hide every submenu as well
                    everysubmenu.style.display = 'none';
                });
            })
        });

        document.querySelectorAll('.dropdown-menu a').forEach(function(element) {
            element.addEventListener('click', function(e) {

                let nextEl = this.nextElementSibling;
                if (nextEl && nextEl.classList.contains('submenu')) {
                    // prevent opening link if link needs to open dropdown
                    e.preventDefault();
                    console.log(nextEl);
                    if (nextEl.style.display == 'block') {
                        nextEl.style.display = 'none';
                    } else {
                        nextEl.style.display = 'block';
                    }

                }
            });
        })
    }
    // end if innerWidth

});
// DOMContentLoaded  end

$('.dropdown').on('show.bs.dropdown', function(e) {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
});

$('.dropdown').on('hide.bs.dropdown', function(e) {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
});


// pause on hover swiper all slider


$(".swiper").hover(function() {
    (this).swiper.autoplay.stop();
}, function() {
    (this).swiper.autoplay.start();
});
// pause on hover swiper all slider END



// Form validation
// var $form = $("#testimonial_form"),
//     $successMsg = $(".alert");
// $.validator.addMethod("letters", function(value, element) {
//     return this.optional(element) || value == value.match(/^[a-zA-Z\s]*$/);
// });
// $form.validate({
//     rules: {
//         name: {
//             required: true,
//             minlength: 3,
//             letters: true
//         },
//         email: {
//             required: true,
//             email: true
//         }
//     },
//     messages: {
//         name: "Please specify your name (only letters and spaces are allowed)",
//         email: "Please specify a valid email address"
//     },
//     submitHandler: function() {
//         $successMsg.show();
//     }
// });
// Wait for the DOM to be ready  


// Form validation END
jQuery.validator.addMethod("lettersonly", function(value, element) {
    return this.optional(element) || /^[a-z]+$/i.test(value);
});
jQuery.validator.addMethod("numberonly", function(value, element) {
    return this.optional(element) || /^[0-9]+$/i.test(value);
});

$(document).ready(function() {

    $("#contact").validate({

        rules: {
            name: {
                required: true,

                lettersonly: true,
            },
            message: {
                required: true,

                maxlength: 100,
                minlength: 10,
            },
            subject: "required",
            email: {
                required: true,
                email: true
            }



        },

        // Specify the validation error messages
        messages: {
            name: {
                required: "enter Your Name",

                lettersonly: "Letters only please",
            },

            subject: "Please enter message.",
            email: "Please enter your email",

            message: {
                required: "Please enter subject.",
                minlength: "Please Enter Minimum 20 letters",
                maxlength: "Please Enter Maximum 100 letters",
            }
        },
        submitHandler: function(form) {

            var $captcha = $('#recaptcha'),
                response = grecaptcha.getResponse();

            if (response.length === 0) {
                alert("Captcha is mandatory");
                if (!$captcha.hasClass("error")) {
                    $captcha.addClass("error");
                }
                return false
            } else {
                $("#submit_btn").attr('disabled', true);
                form.submit();
            }
        }
    });
});

$(document).ready(function() {

    $("#testimonial_form").validate({

        rules: {
            name: {
                required: true,

                lettersonly: true,
            },
            message: {
                required: true,

                maxlength: 100,
                minlength: 10,
            },
            mobile: {
                required: true,
                numberonly: true,
                maxlength: 10,
                minlength: 10,
            },
            subject: "required",
            email: {
                required: true,
                email: true
            }
        },

        // Specify the validation error messages
        messages: {
            name: {
                required: "enter Your Name",
                lettersonly: "Letters only please",
            },
            mobile: {
                required: "enter Your mobile number",
                numberonly: "number only allow",
                minlength: "Please Enter 10 digit",
                maxlength: "Please Enter 10 digit",
            },
            subject: "Please enter message.",
            email: "Please enter your email",
            message: {
                required: "Please enter subject.",
                minlength: "Please Enter Minimum 20 letters",
                maxlength: "Please Enter Maximum 100 letters",

            }
        },
        submitHandler: function(form) {

            var $captcha = $('#recaptcha'),
                response = grecaptcha.getResponse();

            if (response.length === 0) {
                alert("Captcha is mandatory");
                if (!$captcha.hasClass("error")) {
                    $captcha.addClass("error");
                }
                return false
            } else {
                $("#submit_btn").attr('disabled', true);
                form.submit();
            }
        }
    });
});
$(document).ready(function() {

    $(".fa-search").click(function() {
        $(".togglesearch").toggle();
        $("input[type='text']").focus();
    });
});
