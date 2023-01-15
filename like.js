function like_it() {
    var likeCount = parseInt(localStorage.getItem("likes"));
    if(likeCount == null || isNaN(likeCount)) {
        likeCount = 0;
        localStorage.setItem("likes", likeCount.toString());
    }
    document.querySelector("#like-btn .count").innerHTML = likeCount.toString();
}

function like_like() {
    var likeCount = parseInt(localStorage.getItem("likes"));
    likeCount = likeCount + 1;
    localStorage.setItem("likes", likeCount.toString());
    document.querySelector("#like-btn .count").innerHTML = likeCount.toString();
}