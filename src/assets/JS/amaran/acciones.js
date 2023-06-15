function Successfulnotification(Mensaje) {
    if (!$(".amaran-wrapper .amaran.awesome").is(":visible")) {
        $.amaran({
            'theme': 'awesome ok',
            'content': {
                title: "",
                info: "",
                message: Mensaje,
                icon: 'icofont-check'
            },
            'cssanimationIn': 'bounceInRight',
            'cssanimationOut': 'zoomOutUp',
            'position': 'top right',
            'delay': '4000'
        });
    }
}
function Failednotification(Mensaje) {
    if (!$(".amaran-wrapper .amaran.awesome").is(":visible")) {
        $.amaran({
            'theme': 'awesome error',
            'content': {
                title: "",
                info: "",
                message: Mensaje,
                icon: 'icofont-close'
            },
            'cssanimationIn': 'bounceInRight',
            'cssanimationOut': 'zoomOutUp',
            'position': 'top right',
            'delay': '5500'
        });
    }
}
function Warningnotificacion(Titulo, Mensaje, Informacion) {
    if (!$(".amaran-wrapper .amaran.awesome").is(":visible")) {
        $.amaran({
            'theme': 'awesome warning',
            'content': {
                title: Titulo,
                message: Mensaje,
                info: Informacion,
                icon: "fa-sharp fa-solid fa-exclamation"
            },
            'cssanimationIn': 'bounceInRight',
            'cssanimationOut': 'zoomOutUp',
            'position': 'top right',
            'delay': '4000'
        });
    }
}
function Informationnotification(Titulo, Mensaje, Informacion) {
    if (!$(".amaran-wrapper .amaran.awesome").is(":visible")) {
        $.amaran({
            'theme': 'awesome blue',
            'content': {
                title: Titulo,
                message: Mensaje,
                info: Informacion,
                icon: "fa-duotone fa-question"
            },
            'cssanimationIn': 'bounceInRight',
            'cssanimationOut': 'zoomOutUp',
            'position': 'top right',
            'delay': '4000'
        });
    }
}