//$('.nav').addClass('original').clone().insertAfter('.nav').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();

const imgCount = [0, 3];
const newsCount = [0, 1];
const colored = 3;
const colors = ['', 'blue', 'red'];

var version = 1, news = 1, image = 1;

scrollIntervalID = setInterval(stickIt, 10);
scrollIntervalID = setInterval(switchImg, 10000);
scrollIntervalID = setInterval(loaded, 100);

window.onload = loaded;


function stickIt() {

    var orgElementPos = $('.content-wrapper').offset();
    orgElementTop = orgElementPos.top;

    if ($(window).scrollTop() >= (orgElementTop)) {
        // scrolled past the original position; now only show the cloned, sticky element.

        // Cloned element should always have same left position and width as original element.
        orgElement = $('.content-wrapper');
        coordsOrgElement = orgElement.offset();
        leftOrgElement = coordsOrgElement.left;
        widthOrgElement = orgElement.css('width');
        $('.menu').css('left', leftOrgElement + 'px').css('top', 0).css('width', widthOrgElement).show();
    } else {
        // not scrolled past the menu; only show the original menu.
        $('.menu').hide();
    }
}

function resizeIframe(obj) {
    obj.style.height = (parseInt(obj.contentWindow.document.body.scrollHeight) + 50) + 'px';
}

$("#newspaper").load(function() {
    $(this).height( $(this).contents().find("body").height() + 50);
});

function scroll1() {
    $('html,body').animate({
            scrollTop: 0
        },
        'slow');
}

function scroll2() {
    $('html,body').animate({
            scrollTop: $("#div2").offset().top - 43
        },
        'slow');
}

function scroll3() {
    $('html,body').animate({
            scrollTop: $("#div3").offset().top - 43
        },
        'slow');
}

function scroll4() {
    $('html,body').animate({
            scrollTop: $("#div4").offset().top - 43
        },
        'slow');
}

function scroll5() {
    $('html,body').animate({
            scrollTop: $("#div5").offset().top - 43
        },
        'slow');
}

function loaded() {
    if(version === newsCount.length - 1 && news === newsCount[version]) $('#leftButton').css('z-index', 0);
    if(version === 1 && news === 1) $('#rightButton').css('z-index', 0);
}

function warpR() {
    var np = $('#newspaper').attr('src');
    var nm = $('#splash-head').attr('src');
    var ximg = document.getElementById('splash-background'),
        style = ximg.currentStyle || window.getComputedStyle(ximg, false),
        img = style.backgroundImage.slice(4, -1);
    var newnp = np, newnm = nm, newimg = img;

    if(news === 1) {
        newnp = np.replace(version + "." + news + ".html", (parseInt(version) - parseInt(1)) + "." + (parseInt(newsCount[version-1])) + ".html");
        newnm = nm.replace(version + ".html", (parseInt(version) - parseInt(1)) + ".html");
        newimg = img.replace(version + "." + image + ".jpg", (parseInt(version) - parseInt(1)) + "." + 1 + ".jpg");

        news = newsCount[version-1];

        for(i = 1; i <= colored; i++) {
            $('#colored' + i).removeClass(colors[version]);
        }
        version = version - 1;
        for(i = 1; i <= colored; i++) {
            $('#colored' + i).addClass(colors[version]);
        }

        image = 1;

        $('#splash-background').css('background-image', 'url(' + newimg + ')');
        $('#splash-head').attr('src', newnm);
        if(version === 1 && news === 1) $('#rightButton').css('z-index', 0);
    }
    else {
        newnp = np.replace(news + ".html", (parseInt(news) - parseInt(1)) + ".html");
        news = news - 1;
    }
    $('#newspaper').attr('src', newnp);
    $('#leftButton').css('z-index', 3);
}

function warpL() {
    var np = $('#newspaper').attr('src');
    var nm = $('#splash-head').attr('src');
    var ximg = document.getElementById('splash-background'),
        style = ximg.currentStyle || window.getComputedStyle(ximg, false),
        img = style.backgroundImage.slice(4, -1);
    var newnp = np, newnm = nm, newimg = img;
    newnp = np.replace(version + "." + news + ".html", (parseInt(version) + parseInt(news / newsCount[version])) + "." + (parseInt(news % newsCount[version]) + parseInt(1)) + ".html");
    if(news / newsCount[version] === 1) {
        newnm = nm.replace(version + ".html", (parseInt(version) + parseInt(1)) + ".html");
        newimg = img.replace(version + "." + image + ".jpg", (parseInt(version) + parseInt(1)) + "." + 1 + ".jpg");
        news = 1;

        for(i = 1; i <= colored; i++) {
            $('#colored' + i).removeClass(colors[version]);
        }
        version = version + 1;
        for(i = 1; i <= colored; i++) {
            $('#colored' + i).addClass(colors[version]);
        }

        image = 1;

        $('#splash-background').css('background-image', 'url(' + newimg + ')');
        $('#splash-head').attr('src', newnm);
        if(version === newsCount.length - 1 && news === newsCount[version]) $('#leftButton').css('z-index', 0);
    }
    else {
        news = news + 1;
    }
    $('#newspaper').attr('src', newnp);
    $('#rightButton').css('z-index', 3);
}

function switchImg() {
//    $('#splash-container').css('background-image', 'url(' + url + ')');
    $('#splash-background').fadeTo('slow', 0.3, function () {
        var img = document.getElementById('splash-background'),
            style = img.currentStyle || window.getComputedStyle(img, false),
            bi = style.backgroundImage.slice(4, -1);
        var url;
        url = bi.replace(image + ".jpg", (parseInt(image % imgCount[version]) + parseInt(1)) + ".jpg");
        image = image % imgCount[version] + 1;
        $(this).css('background-image', 'url(' + url + ')');
    }).fadeTo('slow', 1);

}



