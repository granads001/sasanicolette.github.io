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


////https://codepen.io/search/pens/?q=joostf
//
//var knop = document.querySelector('h3'); // first section element
//var like = document.querySelector('h3 > .like');
//
//var likedance = function () {
//
//    like.classList.toggle('like')
//}

//knop.addEventListener('click', likedance);
