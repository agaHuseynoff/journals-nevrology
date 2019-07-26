$('document').ready(function () {

    $('.article-more-details .copyright').prepend('<div class="panel-heading">Copyright Information</div>');

    $('.article-more-details .panel-heading').append('<span style="float:right"><i class="fa fa-angle-down" aria-hidden="true"></i></span>')


    $('.article-more-details .panel-heading').on('click', function () {

        $(this).next('.panel-body').slideToggle();
    })
    
    $('.article-more-details .panel-body').hide();

    $('.commentBlock').on('click', function () {
        $('.comment_outer_box').slideToggle();
    });

    var container = $('.modal-journals img');


    $('.modal-open').on('click', function (e) {
        e.preventDefault();
        $('.modal-journals').fadeIn();

        $(document).mouseup(function (e) {
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $('.modal-journals').fadeOut();
            }
        });
    });

    $('.close-modal').on('click', closeModal);

    function closeModal() {
        $('.modal-journals').fadeOut();
    }
});

$(function () {

    setTimeout(function () {
        var currLang = $('.languages .currentLanguage').text();
        if (currLang == "العربية" || currLang == "العربية") {
            $('body').css('direction', 'rtl');
            $('.pkp_structure_content').css('direction', 'ltr');
            $('.pkp_structure_main').css('direction', 'rtl');
            $('.journals').css('direction', 'rtl');
            $('#sidebar').css('direction', 'rtl');

            $('.homepage-image + .journal-description').css({
                'margin-right': '220px',
                'margin-left': '0px'
            });
            $('.homepage-image, .issue-toc .thumbnail').css({
                'margin-left': '20px',
                'float': 'right'
            });

            $('#homeTabWrp .nav-tabs').css({
                'float': 'right'
            });
            $('#homeTabWrp .tab-content').css({
                'padding': '49px 0px',
                'position': 'inherit'
            });




            $('.issueTocPublishArticles .media-body .galleryLinksWrp').css({
                'top': 'initial',
                'margin': '10px'
            });

            $('.issueTocPublishArticles .article-summary .media-heading, .issueTocPublishArticles .article-summary .meta')
                .css({
                    'margin-right': '20px'
                });



            $('#searchWrpNav').css({
                'float': 'left',
                'position': 'sticky',
                'right': '0px',
                'top': '50%',
                'margin-top': '0px'
            });
            $('.navbar-nav').css('float', 'right ');
            $('.navbar-nav>li').css('float', 'right');

            $('#showTopLinks').css('float', 'left');


            $('#social-icons').removeClass('pull-right');
            $('#social-icons .menu > li').css('float', 'right');
            $('.WrpMediaCnt').css('width', '70%');


            $('#main-navigation').css({
                'padding-right': '0px'
            });
            $('.mainNavigation').css({
                'float': 'right',
                'z-index': '0'
            });
            $('#primaryMenuWrp').css('float', 'right');


            $('.site-name').css('float', 'right');
            $('#nav-menu').css('float', 'right');
            $('#nav-menu > ul > li').css('float', 'right');

            $('.bread_left').css('float', 'right');
            $('.social_links').css('float', 'left');
            $('.footer-widget h4 .head-line').css('left', 'inherit');
            $('.social-widget h4').css('margin-right', '40px');
            $('.social-icons').css('margin-right', '29px');


            $('.checkbox #remember').css('margin-right', '-20px');
            $('.checkbox label, .radio label').css('padding', '22px');


            $('.form-group ').css({
                "padding-left": "150px"
            });
            $('.form-group label').css({
                "float": "right"
            });


            $('.form-group .col-sm-offset-3').css({
                "margin-left": "0px"
            });


            $('.journals .media-left').css({
                "padding-left": "20px"
            });
            $('.form-group .col-sm-9').css({
                "margin-top": "10px",
                "width": "100%"
            });

            $('.journals .media-list .nav-pills').css({
                "float": "right"
            });

            $('.newDropDown ul li a').css({
                "float": "right",
                "text-align": "right",
                "width": "100%"
            });
            $('#main-navigation .dropdown .dropdown-menu a').css({
                "text-align": "right",
                "width": "100%"
            });

            $('.newDropDown ul li:first-child').css({
                "float": "right"
            });
            $('.article-sidebar ').css({
                "float": "right"
            });

            if (window.matchMedia('(max-width: 960px)').matches) {
                $('.mainNavigation .navbar-header').css({
                    "float": "right"
                });
                $('#primaryMenuWrp #main-navigation li a').css({
                    "float": "right"
                });
                $('#main-navigation .dropdown .dropdown-menu li').css({
                    "border-bottom": "0px solid #ececec"
                });

            }

        }
    }, 1000)



    $('#sliderInner').carousel();
    var pathName = location.pathname;
    var baseUrl = $('#baseUrl').val();
    pathName = pathName.toString();
    var headerBackground = [{
            "pageUrl": "index",
            "background": "galleryLinksWrp"
                },
        {
            "pageUrl": "about",
            "background": "aboutHeader.jpg"
                },
        {
            "pageUrl": "about/editorialTeam",
            "background": "editorialTeamHeader.jpg"
                },
        {
            "pageUrl": "about/contact",
            "background": "contactHeader.jpg"
                },
        {
            "pageUrl": "information/readers",
            "background": "readersHeader.jpg"
                },
        {
            "pageUrl": "information/authors",
            "background": "authorsHeader.jpg"
                },
        {
            "pageUrl": "information/librarians",
            "background": "librariansHeader.jpg"
                },
        {
            "pageUrl": "issue/view",
            "background": "viewHeader.jpg"
                },
        {
            "pageUrl": "issue/archive",
            "background": "archiveHeader.jpg"
                }
            ];

    $(window).scroll(function () {
        var st = $(this).scrollTop();
        if (st > 100) {
            $('html').addClass('scrollNow');
        } else {
            $('html').removeClass('scrollNow');
        }
    });

    var Ncount = 0;



    var news = $('#customblock-newssection p > a').length;

    if (news > 0) {

        var __OBJECTS = [];

        $('#newsslide').show();

        $('#customblock-newssection p > a').each(function () {

            __OBJECTS.push($(this));

        });

        addPositioningClasses();


        var timer = 4000;

        var finaltimer = news * timer;

        function addPositioningClasses() {

            var card = __OBJECTS.pop();

            innHTml = $(card).wrap('<div>').parent().html();

            $('#latestnews-content').html(innHTml)

            $(card).unwrap();

            if (__OBJECTS.length) {

                setTimeout(addPositioningClasses, timer)

            }

        }


        setInterval(function () {

            $('#customblock-newssection p > a').each(function () {

                __OBJECTS.push($(this));

            });

            addPositioningClasses()

        }, finaltimer);

    }

    $('.searchBarWrp input').focusin(function () {

        $(this).closest('.searchBarWrp').addClass('activeState');

    }).focusout(function () {

        $(this).closest('.searchBarWrp').removeClass('activeState');

    });



    $('#sidebar > div .title').click(function () {

        $(this).closest('.pkp_block').toggleClass('showHide');

    });


    var baseUrl = window.location;

    $('#main-navigation a[href="' + baseUrl + '"]').addClass('active');



    $('body').on('click', '.show-search', function (e) {

        var flag = $('#seachCheckFlag').prop('checked');



        if (flag == true) {

            $('#seachCheckFlag').prop('checked', false);


            setTimeout(function () {

                $('#searchWrpNav button[type="submit"]').click();

            }, 1000);



        } else {

            $('#seachCheckFlag').prop('checked', true);

        }

    });


    function makeSlider(id) {
        var images = '';
        var Icount = 0;
        $(id + ' img').each(function (i) {
            Icount++;
            var activeClass = "";
            if (i == 0) {
                activeClass = "active";
            }

            images += '<div class="item ' + activeClass + '">\
                              <img src="' + $(this).attr('src') + '"/>\
                            </div>';
        });
        if (Icount == 0) return;

        var slidertemplate = '<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">\
                              <!-- Indicators -->\
                              <ol class="carousel-indicators">\
                                <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>\
                                <li data-target="#carousel-example-generic" data-slide-to="1"></li>\
                                <li data-target="#carousel-example-generic" data-slide-to="2"></li>\
                              </ol>\
                              <!-- Wrapper for slides -->\
                              <div class="carousel-inner" role="listbox">\
                                ' + images + '\
                              </div>\
                              <!-- Controls -->\
                              <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">\
                               <i class="fa fa-chevron-left" aria-hidden="true"></i>\
                                <span class="sr-only">Previous</span>\
                              </a>\
                              <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">\
                                <i class="fa fa-chevron-right" aria-hidden="true"></i>\
                                <span class="sr-only">Next</span>\
                              </a>\
                            </div>';
        $(id).html(slidertemplate);
        $('.carousel').carousel();

    }

    makeSlider('#customblock-Slider .content .content');

});
