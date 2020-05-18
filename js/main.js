/**
 * Projeto Pizza Delicious versão 1.1
 * @author Artur Da Silva Rezende
 */

'use strict';

$(document).ready(function () {

    const about_pizza_delicious = window.matchMedia("(max-width: 1023px)");
    const aboutContainer = $("#about-index-content");
    const aboutHall = $("#about-index");

    abount_control_show();

    function abount_control_show() {

        aboutHall.mouseenter(function () {

            if (about_pizza_delicious.matches) {
                aboutContainer.css('display', 'block');
            }

        });

    }

});