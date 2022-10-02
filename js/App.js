const windowWidth = window.innerWidth;
if(windowWidth < 480){
  document.getElementById('hero').style.backgroundImage = "url('images/bg-intro-mobile.svg')"
    document.getElementById('hero').style.backgroundPosition = "top";
}else{
    document.getElementById("hero").style.backgroundImage = "url('images/bg-intro-desktop.svg')"
    document.getElementById('hero').style.backgroundPosition = "right";
}

$(".navbar-toggler").click(function () {
    let result = $(".navbar-toggler").hasClass("collapsed");
    if (result) {
        $(".navbar-toggler").html(`<img src="./images/icon-hamburger.svg" alt="">`)
    } else {
        $(".navbar-toggler").html(`<img src="./images/icon-close.svg" alt="">`)
    }
});
