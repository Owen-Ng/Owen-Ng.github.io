// const closeMenu = document.querySelector(".closeMenu");
// const openMenu = document.querySelector(".openMenu");

// openMenu.addEventListener('click', show);
// closeMenu.addEventListener('click', close);

function show() {
    const mainMenu = document.querySelector(".mainMenu");
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close() {
    const mainMenu = document.querySelector(".mainMenu");
    mainMenu.style.top = '-100%';
}

//#region

function start() {
    $(".home").show();
    $(".projects").hide()
    $("#hoverdog").hide()
    $(".work").hide()
    $(".contact").hide()
    $(".about").hide()
}

function doggyon() {
    $('#doggyText').html('OUFF OUFF!!!')

    $(".doggy").hide()
    $("#hoverdog").show()
}

function doggyout() {
    $('#doggyText').html('Hello')
    $(".doggy").show()
    $("#hoverdog").hide()

}

function gotoprojects() {
    $(".home").hide()
    $(".projects").show()
    $(".work").hide()
    $(".contact").hide()
    $(".about").hide()
    close()
}

function gotowork() {
    $(".home").hide()
    $(".projects").hide()
    $(".work").show()
    $(".contact").hide()
    $(".about").hide()
    close()
}

function gotocontact() {
    $(".home").hide()
    $(".projects").hide()
    $(".work").hide()
    $(".contact").show()
    $(".about").hide()
    close()
}

function gotoabout() {
    $(".home").hide()
    $(".projects").hide()
    $(".work").hide()
    $(".contact").hide()
    $(".about").show()
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
    start()
    $(".closeMenu").on('click', close);
    $(".openMenu").on('click', show);
    const mainMenu = $(".mainMenu");
    $(".doggy").on("mouseover", doggyon)
    $("#hoverdog").on("mouseout", doggyout)
    $("#Projects").on('click', gotoprojects)
    $("#Work").on('click', gotowork)
    $("#Contact").on('click', gotocontact)
    $("#About").on('click', gotoabout)
    $(".logo").on('click', start)
    $("#email").on("click", emailcopied)
    $("#copy").hide()





})