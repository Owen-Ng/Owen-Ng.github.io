// const closeMenu = document.querySelector(".closeMenu");
// const openMenu = document.querySelector(".openMenu");

// openMenu.addEventListener('click', show);
// closeMenu.addEventListener('click', close);
"use strict";

function show() {
    const mainMenu = document.querySelector(".mainMenu");
    // mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close() {
    const mainMenu = document.querySelector(".mainMenu");
    mainMenu.style.top = '-150%';


}

//#region
function state(str) {

    const array = ['.main', '.projects', ".work", ".contact", ".about"];
    $(str).show();
    array.forEach(e => {
        if (e != str) {

            $(e).hide();
        }

    });

    // $(str).show();
}

function sessionPage(str) {
    // Store
    sessionStorage.setItem("page", str);
}

function launch() {
    $("#hoverdog").hide();
    if (sessionStorage.getItem("page") == null) {
        sessionPage(".main");
    }
    state(sessionStorage.getItem("page"));
    


}

function main() {

    state(".main");
    sessionPage(".main");
    $("#hoverdog").hide();

}

function doggyon() {
    $('#doggyText').html('OUFF OUFF!!!')

    $(".doggy").hide()
    $("#hoverdog").fadeIn()
}

function doggyout() {
    $('#doggyText').html('Hello')
    $("#hoverdog").hide()
    $(".doggy").fadeIn()
    

}

function gotoprojects() {
    state(".projects");
    sessionPage(".projects");
    close();
}

function gotowork() {
    state(".work");
    sessionPage(".work");

    close()
}

function gotocontact() {
    state(".contact");
    sessionPage(".contact");
    close()
}

function gotoabout() {
    state(".about");
    close()
}
//endregion

function emailcopied() {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val("nigel.ngyanhing@mail.utoronto.ca").select();
    document.execCommand("copy");
    $temp.remove();
    $("#copy").fadeIn()
    $("#copy").fadeOut(2000)

    // setInterval(function() {
    //     $("#copy").hide()
    // }, 3000);

}
$(function() {
    launch();
    $(".closeMenu").on('click', close);
    $(".openMenu").on('click', show);
    const mainMenu = $(".mainMenu");
    $(".doggy").on("mouseover", doggyon)
    $("#hoverdog").on("mouseout", doggyout)
    $("#Projects").on('click', gotoprojects)
    $("#Work").on('click', gotowork)
    $("#Contact").on('click', gotocontact)
    $("#About").on('click', gotoabout)
    $(".logo").on('click', main)
    $("#email").on("click", emailcopied)
    $("#copy").hide()
})