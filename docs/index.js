// CHECK MOBILE
let mobileBrowser = checkMobile()
let loadText = "";
let loadTextArray = [];

// MOBILE WINDOW SIZE RESET

function resetHeight() {
    document.body.style.height = window.innerHeight + "px";
}
window.addEventListener("resize", resetHeight);
resetHeight();


// RANDOM POETIC COMPUTATION

    var babalarpress = [
        "BABALAR PRESS is a Qazaq experimental research, writing and publishing initiative for relearning, reclaiming and reimagining our ancestral knowledge(s)."
        , "BABALAR PRESS – бұл бабаларымыздан қалған білімді зерттеп, түсіну және (қайта) қарауға бағытталған қазақ эксперименттік зерттеу, жазу және басылым бастамасы."
        , "BABALAR PRESS — это казахстанская экспериментальная исследовательская, писательская и издательская инициатива для (пере)осмысления и возвращения себе знаний наших предков."
        ];
    
        randDef = babalarpress[Math.floor(Math.random() * babalarpress.length)];
        $('#definition').text(randDef);
        $('#marquee-definition').text(randDef);
    
        $(".def-div").click(function() {
            $('#definition').text(babalarpress[Math.floor(Math.random() * babalarpress.length)]);
        });
    
    

// MOBILE MENU

    $(".mobile-menu").click(function() {
        $(".mobile-menu-content").toggleClass('mobile-menu-content-show');

        if ($(".mobile-menu").text() == "Menu") {
            $(".mobile-menu").text("Close");
        } else {
            $(".mobile-menu").text("Menu");
        }
        ;

    });

// ADD UNDERLINE TO MENU BASED ON LINK


    if ($('.breadcrumb:contains("about")').length > 0) {
        $('a#link-about').addClass('underline');
    }

  
