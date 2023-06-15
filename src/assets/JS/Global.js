function AddMascaraMoneda(Numero, index) {
    var _cantidadMoneda = "";
    if (!Numero || Numero == '') {
        return '';
    }
    else {
        Numero = Numero.toString();
    }
    Numero = replaceAll(Numero, ',', '');
    Numero = replaceAll(Numero, '$', '');
    if (index == 2 || index == 1 || index == 0) {
        _cantidadMoneda = formatter.format(Numero); //$12,000
    } else {
        if (index == 5 || index == 4 || index == 3) {
            _cantidadMoneda = formatter$.format(Numero);//$12,000.00
        }
    }
    if (index == 0 || index == 3) {
        _cantidadMoneda = replaceAll(_cantidadMoneda, '$', '');
    }
    if (index == 1 || index == 4) {
        _cantidadMoneda = replaceAll(_cantidadMoneda, '$', '');
        _cantidadMoneda = replaceAll(_cantidadMoneda, ',', '');
    }
    if (index == 2 || index == 5) {
        _cantidadMoneda = _cantidadMoneda;
    }

    return _cantidadMoneda;
}
function LetrasEspeciales(e) {
    tkey = e.keyCode || e.which;
    ttecla = String.fromCharCode(tkey).toLowerCase();
    tletras = " áéíóúäëïöüabcdefghijklmnñopqrstuvwxyz0123456789";
    tespeciales = [8, 9, 39, 44, 46];

    ttecla_especial = false
    for (var i in tespeciales) {
        if (tkey == tespeciales[i]) {
            ttecla_especial = true;
            break;
        }
    }

    if (tletras.indexOf(ttecla) == -1 && !ttecla_especial)
        return false;
}
function replaceAll(text, busca, reemplaza) {
    while (text.toString().indexOf(busca) != -1)
        text = text.toString().replace(busca, reemplaza);
    return text;
}
function TrasformMayusculas(Esto) {
    var Palabra = $(Esto).val();
    Palabra = Palabra.toUpperCase();
    $(Esto).val(Palabra.trim());
}
function Numeros(e) {
    var keynum = window.event ? window.event.keyCode : e.which;
    if ((keynum == 8 || keynum == 48 || keynum == 0))
        return true;
    if (keynum <= 47 || keynum >= 58)
        return false;
    return /\d/.test(String.fromCharCode(keynum));
}
function DeleteSpace(Esto) {
    var Palabra = $(Esto).val().trim();
    var _dat = Palabra.replace(/\s\s/g, '');
    $(Esto).val(DeleteSpaceletter(_dat).trim());
}
function DeleteSpaceletter(str) {
    str = str.split(" ");
    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toString() + str[i].substr(1);
    }
    return str.join(" ");
}
function CapitalizePalabra(Esto) {
    var Palabra = $(Esto).val().trim();
    Palabra = Palabra.toLowerCase();
    $(Esto).val(capital_letter(Palabra).trim());
}
function capital_letter(str) {
    str = str.split(" ");
    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str.join(" ");
}
function soloLetras(e) {
    key = e.keyCode || e.which || e.metaKey;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " áéíóúàèìòùäëïöüabcdefghijklmnñopqrstuvwxyz";
    especiales = [8, 9];

    tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial)
        return false;
}
function NumerosLetras(e) {
    var keynum = window.event ? window.event.keyCode : e.which;

    if ((keynum == 8 || keynum == 48 || keynum == 0))
        return true;

    if (keynum <= 47 || keynum >= 58) {
        if (keynum >= 65 && keynum <= 90) {

        } else {
            if (keynum >= 97 && keynum <= 122) {

            } else {
                return false;
            }
        }
    }
}
$('.numbers').each(function () { 
    jQuery(this).on('keypress input', function (event) { 
        var keynum = window.event ? window.event.keyCode : e.which;
        if ((keynum == 8 || keynum == 48 || keynum == 0))
            return true;
        if (keynum <= 47 || keynum >= 58)
            return false;
        return /\d/.test(String.fromCharCode(keynum));
    });

});
$(".capitalize").on('change').change(function () {
    if ($("#" + this.id).val() != "") {
        CapitalizePalabra(this);
    }
});
$('.onlyletters').each(function () { 
    jQuery(this).on('keypress input', function (event) { 
        if($("#"+this.id).val() !=""){
            if (event.type === 'input') { 
                const bufferValue = $(this).val().replace(/[^A-Za-zñÑáéíóúÁÉÍÓÚäëïöüÄËÏÖÜ ]/g, ''); 
                $(this).val(bufferValue); 
            } 
        }
    }); 
});
function OnlyLetter(e) {
    let key = e.keyCode || e.which;
    let tecla = String.fromCharCode(key).toLowerCase();
    let letras = " áéíóúàèìòùäëïöüabcdefghijklmnñopqrstuvwxyz";
    let especiales = [8, 9, 39, 44];

    let tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        return false;
    } else {
        return true;
    }
}
(function ($) {
    'use strict';
    function isValidPassword(X){
        X = X.trim();
        return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,16}$/.test(X);
    }
    function isValidEmail(X) {
        X = X.trim();
        return /^\w+([\w+\.\+\-\+\_]?[\w+]?)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(X);
    }
    function isValidLetters(X) {
        X = X.trim();
        return /^[A-Za-z]+$/.test(X);
    }
    function isValidNumbers(X) {
        X = X.trim();
        return /^\d{1,6}(\.\d{1,2})?/.test(X);
    }
    function isValidRFC(X) {
        X = X.trim();
        return /[a-zA-Z&]{4}(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01]))((\D|\d){3})/.test(X);
    }
    function isValidCURP(X) {
        X = X.trim();
        return /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/.test(X);
    }
    function isValidDate(X) {
        X = X.trim();
        return /^(?=\d{2}([-.,\/])\d{2}\1\d{4}$)(?:0[1-9]|1\d|[2][0-8]|29(?!.02.(?!(?!(?:[02468][1-35-79]|[13579][0-13-57-9])00)\d{2}(?:[02468][048]|[13579][26])))|30(?!.02)|31(?=.(?:0[13578]|10|12))).(?:0[1-9]|1[012]).\d{4}$/.test(X);
    }
    function isValidRFCMoral(X) {
        X = X.trim();
        return /^[a-zA-Z]{3}(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01]))((\D|\d){3})$/.test(X);
    }
    function IsValidNames(X) {
        X = X.trim();
        return /^([A-Za-zÑñÁáÉéÍíÓóÚú ]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/.test(X);
    }

    $.fn.ValidInputs = function (options) {
        var settings = $.extend({
            classvalid: "is-invalid",
            classErrorlabel: "is-invalidlabel",
        }, options);
        let valid = 0;
        let DatEspeciales = 0;

        this.filter(".password").each(function () {
            if (($(this).val().trim() == "" || $(this).val() == null) && $(this).is(":visible")) {
                $(this).removeClass(settings.classvalid);
                $("#"+this.id+"label").removeClass(settings.classErrorlabel);       

                valid++;
            } else {
                if (!isValidPassword($(this).val())) {
                    Failednotification('Contraseña debe ser de 8-16 caracteres,con al menos un dígito, una letra minúscula,una letra mayúscula, al menos y un caracter especial sin espacios en blanco');
                    valid++;
                }else{
                    $(this).removeClass(settings.classvalid);
                    $("#"+this.id+"label").removeClass(settings.classErrorlabel);    
                }
            }
        });
        this.filter(".phone").each(function () {
            if ($(this).val().trim() != "") {
                if ($("#" + this.id).val().length < 10 || $("#" + this.id).val().length == 0 || $("#" + this.id).val().length > 10) {
                    Failednotification('El número de teléfono debe ser de 10 dígitos');
                    DatEspeciales++;
                }else{
                    $(this).removeClass(settings.classvalid);
                    $("#"+this.id+"label").removeClass(settings.classErrorlabel);  
                }
            }
        });
        this.filter(".email").each(function () {
            if (($(this).val().trim() == "" || $(this).val() == null) && $(this).is(":visible")) {
                valid++;
            } else {
                if (!isValidEmail($(this).val()) && $(this).is(":visible")) {
                    Failednotification('La estructura del correo es incorrecta');
                    valid++;
                }else{
                    $(this).removeClass(settings.classvalid);
                    $("#"+this.id+"label").removeClass(settings.classErrorlabel);           
                }
            }
        });
        this.filter(".Names").each(function () {
            if (($(this).val().trim() == "" || $(this).val() == null) && $(this).is(":visible")) {
                $(this).addClass(settings.class);
                valid++;
            } else {
                if (!IsValidNames($(this).val()) && $(this).is(":visible")) {
                    $(this).addClass(settings.class);
                    valid++;
                }else{
                    $(this).removeClass(settings.classvalid);
                    $("#"+this.id+"label").removeClass(settings.classErrorlabel);
                }
            }
        });

        
        // this.filter("select").each(function () {
        //     if ($("#" + this.id).val() == 0 || $("#" + this.id).val() == "" || $("#" + this.id).val() == undefined || $("#" + this.id).val() == null || $("#" + this.id).val() == "null") {
        //         $(this).addClass(settings.class);
        //         $("#" + this.id + "-check").removeClass(settings.classok);
        //         $("#" + this.id + "-check").addClass(settings.classErrorok);
        //         valid++;
        //     } else {
        //         $(this).removeClass(settings.class);
        //         $("#" + this.id + "-check").removeClass(settings.classErrorok);
        //         $("#" + this.id + "-check").addClass(settings.classok);
        //     }
        // });
        // this.filter("textarea").each(function () {
        //     if (($(this).val().trim() == "" || $(this).val() == null) && $(this).is(":visible")) {
        //         $(this).addClass(settings.class);
        //         valid++;
        //     }
        // });
        // this.filter(".NoDir").each(function () {
        //     if (($(this).val().trim() == "" || $(this).val() == null) && $(this).is(":visible")) {
        //         $(this).addClass(settings.class);
        //         $("#" + this.id + "-check").removeClass(settings.classok);
        //         $("#" + this.id + "-check").addClass(settings.classErrorok);
        //         valid++;
        //     }
        // });
        // this.filter("input[type='text']").each(function () {
        //     if ((($(this).val().trim() == "" || $(this).val() == null) && $(this).is(":visible")) || $(this).val().length < 3) {
        //         $(this).addClass(settings.class);
        //         $("#" + this.id + "-check").removeClass(settings.classok);
        //         $("#" + this.id + "-check").addClass(settings.classErrorok);
        //         valid++;
        //     } else {
        //         $(this).removeClass(settings.class);
        //         $("#" + this.id + "-check").removeClass(settings.classErrorok);
        //         $("#" + this.id + "-check").addClass(settings.classok);
        //     }
        // });
        // this.filter("input[type='email']").each(function () {
        //     if (($(this).val().trim() == "" || $(this).val() == null) && $(this).is(":visible")) {
        //         $(this).addClass(settings.class);
        //         $("#" + this.id + "-check").removeClass(settings.classok);
        //         $("#" + this.id + "-check").addClass(settings.classErrorok);
        //         valid++;
        //     } else {
        //         if (!isValidEmail($(this).val()) && $(this).is(":visible")) {
        //             $(this).addClass(settings.class);
        //             $("#" + this.id + "-check").removeClass(settings.classok);
        //             $("#" + this.id + "-check").addClass(settings.classErrorok);
        //             if (!$(".amaran-wrapper .amaran.awesome").is(":visible")) {
        //                 NotificacionBanorte('awesome error', 'La estructura del correo es incorrecta');
        //             }
        //             DatEspeciales++;
        //         } else {
        //             $(this).removeClass(settings.class);
        //             $("#" + this.id + "-check").removeClass(settings.classErrorok);
        //             $("#" + this.id + "-check").addClass(settings.classok);
        //         }
        //     }
        // });
        // this.filter(".Celular").each(function () {
        //     if (($(this).val().trim() == "" || $(this).val() == null) && $(this).is(":visible")) {
        //         $(this).addClass(settings.class);
        //         $("#" + this.id + "-check").removeClass(settings.classok);
        //         $("#" + this.id + "-check").addClass(settings.classErrorok);
        //         valid++;
        //     } else {
        //         if ($("#" + this.id).val().length < 10 || $("#" + this.id).val().length == 0) {
        //             $(this).addClass(settings.class);
        //             $("#" + this.id + "-check").removeClass(settings.classok);
        //             $("#" + this.id + "-check").addClass(settings.classErrorok);
        //             if (!$(".amaran-wrapper .amaran.awesome").is(":visible")) {
        //                 NotificacionBanorte('awesome error', 'El número de celular debe ser de 10 dígitos');
        //             }
        //             DatEspeciales++;
        //         } else {
        //             $(this).removeClass(settings.class);
        //             $("#" + this.id + "-check").removeClass(settings.classErrorok);
        //             $("#" + this.id + "-check").addClass(settings.classok);
        //         }
        //     }
        // });

        // this.filter(".TelefonoOp").each(function () {
        //     if ($("#" + this.id).val().trim() != "" && $("#" + this.id).val().trim() != "null" && $("#" + this.id).val().trim() != undefined && $("#" + this.id).val().trim() != "undefined") {
        //         if ($("#" + this.id).val().length < 10 || $("#" + this.id).val().length == 0) {
        //             $(this).addClass(settings.class);
        //             $("#" + this.id + "-check").removeClass(settings.classok);
        //             $("#" + this.id + "-check").addClass(settings.classErrorok);
        //             if (!$(".amaran-wrapper .amaran.awesome").is(":visible")) {
        //                 NotificacionBanorte('awesome error', 'El número de teléfono debe ser de 10 dígitos');
        //             }
        //             DatEspeciales++;
        //         }
        //     }
        // });
        

        // this.filter(".CodigoPostal").each(function () {
        //     if (($(this).val().trim() == "" || $(this).val() == null) && $(this).is(":visible")) {
        //         $(this).addClass(settings.class);
        //         $("#" + this.id + "-check").removeClass(settings.classok);
        //         $("#" + this.id + "-check").addClass(settings.classErrorok);
        //         valid++;
        //     } else {
        //         if ($("#" + this.id).val().length < 5 || $("#" + this.id).val().length == 0) {
        //             $(this).addClass(settings.class);
        //             $("#" + this.id + "-check").removeClass(settings.classok);
        //             $("#" + this.id + "-check").addClass(settings.classErrorok);
        //             if (!$(".amaran-wrapper .amaran.awesome").is(":visible")) {
        //                 NotificacionBanorte('awesome error', 'Código postal incorrecto');
        //             }
        //             DatEspeciales++;
        //         }
        //     }
        // });
        // this.filter(".ValidRFC").each(function () {
        //     if (($(this).val().trim() == "" || $(this).val() == null) && $(this).is(":visible")) {
        //         $(this).addClass(settings.class);
        //         $("#" + this.id + "-check").removeClass(settings.classok);
        //         $("#" + this.id + "-check").addClass(settings.classErrorok);
        //         valid++;
        //     } else {
        //         if (!isValidRFC($(this).val())) {
        //             $(this).addClass(settings.class);
        //             $("#" + this.id + "-check").removeClass(settings.classok);
        //             $("#" + this.id + "-check").addClass(settings.classErrorok);
        //             if (!$(".amaran-wrapper .amaran.awesome").is(":visible")) {
        //                 NotificacionBanorte('awesome error', 'El RFC no corresponde al tipo de persona seleccionado');
        //             }
        //             DatEspeciales++;
        //         }
        //     }
        // });

        // this.filter(".ValidRFCMoral").each(function () {
        //     if (($(this).val().trim() == "" || $(this).val() == null) && $(this).is(":visible")) {
        //         $(this).addClass(settings.class);
        //         $("#" + this.id + "-check").removeClass(settings.classok);
        //         $("#" + this.id + "-check").addClass(settings.classErrorok);
        //         valid++;
        //     } else {
        //         if (!isValidRFCMoral($(this).val())) {
        //             $(this).addClass(settings.class);
        //             $("#" + this.id + "-check").removeClass(settings.classok);
        //             $("#" + this.id + "-check").addClass(settings.classErrorok);
        //             if (!$(".amaran-wrapper .amaran.awesome").is(":visible")) {
        //                 NotificacionBanorte('awesome error', 'El RFC no corresponde al tipo de persona seleccionado');
        //             }
        //             DatEspeciales++;
        //         }
        //     }
        // });
        // this.filter(".ValidCURP").each(function () {
        //     if (($(this).val().trim() == "" || $(this).val() == null) && $(this).is(":visible")) {
        //         $(this).addClass(settings.class);
        //         $("#" + this.id + "-check").removeClass(settings.classok);
        //         $("#" + this.id + "-check").addClass(settings.classErrorok);
        //         valid++;
        //     } else {
        //         if (!isValidCURP($(this).val()) && $(this).is(":visible")) {
        //             $(this).addClass(settings.class);
        //             $("#" + this.id + "-check").removeClass(settings.classok);
        //             $("#" + this.id + "-check").addClass(settings.classErrorok);
        //             if (!$(".amaran-wrapper .amaran.awesome").is(":visible")) {
        //                 NotificacionBanorte('awesome error', 'CURP inválido');
        //             }
        //             DatEspeciales++;
        //         }
        //     }
        // });
        // this.filter(".FechaBanorte").each(function () {
        //     if (!fncBanorte_ValidDate($("#" + this.id).val(), this.id)) {
        //         $("#" + this.id).addClass("BorderInput-error");
        //         $("#" + this.id + "-check").removeClass("select-form-ok");
        //         $("#" + this.id + "-check").addClass("ok_errorinput");
        //         valid++;
        //     } else {
        //         $("#" + this.id).removeClass("BorderInput-error");
        //         $("#" + this.id + "-check").removeClass("ok_errorinput");
        //         $("#" + this.id + "-check").addClass("select-form-ok");
        //     }
        // });
        // this.filter(".Input").each(function () {
        //     if ($("#" + this.id).val() == 0 || $("#" + this.id).val() == "" || $("#" + this.id).val() == undefined) {
        //         $(this).addClass(settings.class);
        //         $("#" + this.id + "-check").removeClass(settings.classok);
        //         $("#" + this.id + "-check").addClass(settings.classErrorok);
        //         valid++;
        //     } else {
        //         $(this).removeClass(settings.class);
        //         $("#" + this.id + "-check").removeClass(settings.classErrorok);
        //         $("#" + this.id + "-check").addClass(settings.classok);
        //     }
        // });
        if (valid == 0 && DatEspeciales == 0) {
            return true;
        } else {
            return false;
        }
    };
}(jQuery));
function DocumentReady(){
    $(document).ready(function () {
        $(".phone").attr('maxlength','10');
    });
}
DocumentReady();