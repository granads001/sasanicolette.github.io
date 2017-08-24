var star = document.querySelector(".star");
var like = document.querySelector(".like");
star.onclick = function () {
    star.className += " anim";
    if (star.classList.contains("anim")) {
        return;
    } else {

    }
}

like.onclick = function () {
    if (like.classList.contains("anim-like")) {
        return;
    } else {
        like.className += " anim-like";
    }

}



