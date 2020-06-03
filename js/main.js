/**
 * Projeto Pizza Delicious versão 1.1
 * @author Artur Da Silva Rezende
 */

'use strict';

//O bloco de código abaixo, faz o controle do show e hide do about-index
$(document).ready(() => {

    const about_pizza_delicious = window.matchMedia("(max-width: 1024px)");
    const aboutHall = $("#about-index");//Esta variável pega todo o container
    const aboutContainer = $("#about-index-content");//Esta variável o conteúdo da box

    abount_control_show();


    function abount_control_show() {

        aboutHall.mouseenter(() => {

            if (about_pizza_delicious.matches) {
                aboutContainer.css('display', 'block');
            }

        });

    }


})

