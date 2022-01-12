// const $ = _test => { };

$(function () {
    $('._product-block').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // hieu ung header va nut backtotop
    $('#backtotop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 400);
    });

    $(window).scroll(function () {
        if ($('body,html').scrollTop() > 150) {
            $('.navbar').addClass('fixed-top');
        } else {
            $('.navbar').removeClass('fixed-top');
        }
    });

    $(window).scroll(function () {
        if ($('body,html').scrollTop() > 500) {
            $('.rollUp-btn').addClass('_display');
        } else {
            $('.rollUp-btn').removeClass('_display');
        }
    });

    // header form signIn signUp
    $('.signIn-button').click(function (e) {
        $('ul.tabs .signIn-tab').addClass('active');
    });
    $('.signUp-button').click(function (e) {
        $('ul.tabs .signUp-tab').addClass('active');
    });

    $('ul.tabs .signIn-tab').click(function (e) {
        $('ul.tabs .signIn-tab').addClass('active');
        $('ul.tabs .signUp-tab').removeClass('active');
    });

    $('ul.tabs .signUp-tab').click(function (e) {
        $('ul.tabs .signUp-tab').addClass('active');
        $('ul.tabs .signIn-tab').removeClass('active');
    });

    // form signIn signUp
    $('.signUp-tab').click(function (e) {
        $('#signIn-form').removeClass('fade');
        $('#signUp-form').removeClass('fade');
        $('#signIn-form').modal('hide');
        $('#signUp-form').modal('show');
    });
    $('.signIn-tab').click(function (e) {
        $('#signIn-form').removeClass('fade');
        $('#signUp-form').removeClass('fade');
        $('#signUp-form').modal('hide');
        $('#signIn-form').modal('show');
    });
    $('.close').click(function (e) {
        $('.modal').addClass('fade');
        $('ul.tabs .signIn-tab').removeClass('active');
        $('ul.tabs .signUp-tab').removeClass('active');
    });

    // thumb-img
    $('.thumb-img.thumb1').addClass('yellow-border');
    $('.thumb-img').click(function (e) {
        $('.product-image').attr('src', this.src);
    });

    $('.thumb-img').click(function (e) {
        $('.thumb-img:not(:hover)').removeClass('yellow-border');
        $(this).addClass('yellow-border');
    });

    // btn-spin
    $('.btn-inc').click(function (e) {
        const strval = $(this).parent().prev().val();
        const val = parseInt(strval) + 1;
        $(this).parent().prev().attr('value', val);
    });
    $('.btn-dec').click(function (e) {
        const strval = $(this).parent().next().val();
        const val = parseInt(strval) - 1;
        if (val < 1) {
            $(this).parent().next().attr('value', 1);
        } else {
            $(this).parent().next().attr('value', val);
        }
    });

    // gui danh gia
    $('.review-form').hide(200);
    $('.write-review').click(function (e) {
        $('.review-form').toggle(200);
    });

    // rotate chevron
    $('#step1content-id').on('show.bs.collapse', function () {
        $(this).prev().addClass('active');
    });
    $('#step1content-id').on('hide.bs.collapse', function () {
        $(this).prev().removeClass('active');
    });
    $('#step2content-id').on('show.bs.collapse', function () {
        $(this).prev().addClass('active');
    });
    $('#step2content-id').on('hide.bs.collapse', function () {
        $(this).prev().removeClass('active');
    });

    // nut btn-shopping-without-signup
    $('#step1content-id').collapse('show');
    
    // validate
    $('#form-signUp').validate({
        rules: {
            name: {
                required: true
            },
            phone: {
                required: true,
                minlength: 10
            },
            password: {
                required: true,
                minlength: 6
            },
            confirmPassword: {
                required: true,
                minlength: 6
                // equalTo: '#inputPassword'
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: 'Vui lòng nhập họ và tên'
            },
            phone: {
                required: 'Vui lòng nhập số điện thoại',
                minlength: 'Số máy quý khách vừa nhập là số không có thực'
            },
            password: {
                required: 'Vui lòng nhập mật khẩu',
                minlength: 'Vui lòng nhập ít nhất 6 kí tự'
            },
            confirm_password: {
                required: 'Vui lòng nhập lại mật khẩu',
                minlength: 'Vui lòng nhập ít nhất 6 kí tự',
                equalTo: 'Mật khẩu không trùng'
            },
            email: {
                required: 'Vui lòng nhập email',
                minlength: 'Email không hợp lệ',
                email: 'Vui lòng nhập email'
            }
        }
    });

    $('#form-signIn').validate({
        rules: {
            password: {
                required: true,
                minlength: 6
            },
            // email: {
            //     required: true,
            //     email: false
            // }
        },
        messages: {
            password: {
                required: 'Vui lòng nhập mật khẩu',
                minlength: 'Vui lòng nhập ít nhất 6 kí tự'
            },
            email: {
                required: 'Vui lòng nhập email',
                minlength: 'Email không hợp lệ',
                email: 'Vui lòng nhập email'
            }
        }
    });

    $('#form-delivery-address').validate({
        rules: {
            name: {
                required: true
            },
            phone: {
                required: true,
                minlength: 10
            },
            email: {
                required: true,
                email: true
            },
            address: {
                required: true
            }
        },
        messages: {
            name: {
                required: 'Vui lòng nhập họ và tên'
            },
            phone: {
                required: 'Vui lòng nhập số điện thoại',
                minlength: 'Số máy quý khách vừa nhập là số không có thực'
            },
            email: {
                required: 'Vui lòng nhập email',
                minlength: 'Email không hợp lệ',
                email: 'Vui lòng nhập email'
            },
            address: {
                required: 'Vui lòng nhập địa chỉ giao hàng'
            }
        }
    });

    // add to cart
    const product = {
        name: $('.info-block .ten').text(),
        tag: $('.product-image').attr('alt'),
        price: parseFloat($('.gia span.new-price').text()),
        old_price: parseFloat($('.gia span.old-price').text()),
        inCart: 0
    };

    const carts = document.querySelector('.buy-btn');
    if (carts) {
        carts.addEventListener('click', () => {
            cartNumbers(product);
            totalCost(product);
        });
    }

    function onLoadCartNumbers() {
        const productNumbers = localStorage.getItem('cartNumbers');
        if (productNumbers) {
            document.querySelector('.cart .cart-amount').textContent = productNumbers;
        }
    }

    function cartNumbers(product) {
        let productNumbers = localStorage.getItem('cartNumbers');
        productNumbers = parseInt(productNumbers);

        if (productNumbers) {
            localStorage.setItem('cartNumbers', productNumbers + parseInt($('.product-number').val()));
            document.querySelector('.cart .cart-amount').textContent = productNumbers + parseInt($('.product-number').val());
        } else {
            localStorage.setItem('cartNumbers', parseInt($('.product-number').val()));
            document.querySelector('.cart .cart-amount').textContent = parseInt($('.product-number').val());
        }
        setItem(product);
    }

    function setItem(product) {
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);

        if (cartItems != null) {
            if (cartItems[product.tag] === undefined) {
                cartItems = {
                    ...cartItems,
                    [product.tag]: product
                };
            }
            cartItems[product.tag].inCart += parseInt($('.product-number').val());
        } else {
            product.inCart = parseInt($('.product-number').val());
            cartItems = {
                [product.tag]: product
            };
        }

        localStorage.setItem('productsInCart', JSON.stringify(cartItems));
    }

    function totalCost(product) {
        let cartCost = localStorage.getItem('totalCost');

        if (cartCost != null) {
            cartCost = parseFloat(cartCost);
            localStorage.setItem('totalCost', cartCost + parseInt($('.product-number').val()) * product.price);
        } else {
            localStorage.setItem('totalCost', parseInt($('.product-number').val()) * product.price);
        }
    }

    $('.btn-checkout').click(function (e) {
        localStorage.clear();
        location.reload(true);
        alert('cảm ơn đã mua hàng');
    });

    onLoadCartNumbers();

    // $('.items .row').isotope({
    //     itemSelector: '.item',
    // })

    $('.tag a').click(function (e) {
        const author = $(this).data('author');

        if (author === 'all') {
            $('.items .row').isotope({ filter: '*' });
        } else {
            $('.items .row').isotope({ filter: author });
        }
        return false;
    });

    $('.thay-doi-mk').hide();
    $('#changepass').click(function (e) {
        $('.thay-doi-mk').toggle(200);
    });
});
