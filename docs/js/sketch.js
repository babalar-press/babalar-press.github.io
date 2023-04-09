



// RANDOM POETIC COMPUTATION

    var babalarpress = [
        "BABALAR PRESS is a Qazaq experimental publishing initiative for relearning, reclaiming and reimagining our ancestral knowledge(s).", "BABALAR PRESS – бұл бабаларымыздан қалған білімді зерттеп, түсіну және (қайта) қарауға бағытталған қазақ эксперименттік басылым бастамасы.", "BABALAR PRESS — это казахстанская экспериментальная издательская инициатива для (пере)осмысления и возвращения себе знаний наших предков."
        ];
    
        randDef = babalarpress[Math.floor(Math.random() * babalarpress.length)];
        $('#definition').text(randDef);
        $('#marquee-definition').text(randDef);
    
        $(".def-div").click(function() {
            $('#definition').text(babalarpress[Math.floor(Math.random() * babalarpress.length)]);
        });


    
    

// MOBILE MENU

    $(".mobile-menu").click(function() {
        $(".mobile-menu-content").toggleClass("mobile-menu-content-show");

        if ($(".mobile-menu").text() == "menu") {
            $(".mobile-menu").text("close");
        } else {
            $(".mobile-menu").text("menu");
        }
        

    });

// ADD UNDERLINE TO MENU BASED ON LINK


    if ($('.breadcrumb:contains("about")').length > 0) {
        $('a#link-about').addClass('underline');
    }

  
