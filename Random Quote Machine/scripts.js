function getQuote() {
    $.ajax({
        url: "https://api.quotable.io/random",
        success: function (data) {
            $("#text").text(data.content);
            $("#author").text(data.author);
        }
    });
}

function tweetQuote() {
    var text = $("#text").text();
    var author = $("#author").text();
    var url = "https://twitter.com/intent/tweet?text=" + encodeURIComponent('"' + text + '" - ' + author);
    window.open(url, "_blank");
}

function tumblrQuote() {
    var text = $("#text").text();
    var author = $("#author").text();
    var url = "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=" + encodeURIComponent(author) + "&content=" + encodeURIComponent(text) + "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button";
    window.open(url, "_blank");
}

function newQuote() {
    getQuote();
}

$(document).ready(function () {
    $("#new-quote").on("click", newQuote);
    $("#tweet-quote").on("click", tweetQuote);
    $("#tumblr-quote").on("click", tumblrQuote);
});

$(document).ready(function () {
    getQuote();
});