$("div.article-title input").on("keyup", (event) => {
    var field = event.currentTarget;
    var temp_max_length = $(field).prop("maxlength");
    var max_length = 0;
    if (isNaN(temp_max_length)) {
        max_length = 100;
    }
    else {
        max_length = parseInt(temp_max_length);
    }
    var value = "" + ($(field).val());
    if (value.length > max_length) {
        $(field).val(value.substring(0, max_length));
    }
    $("div.article-title span.character-counter").text((value.length) + "/" + max_length);
});
$("div.article-short-description textarea").on("keyup", (event) => {
    var field = event.currentTarget;
    var temp_max_length = $(field).prop("maxlength");
    var max_length = 0;
    if (isNaN(temp_max_length)) {
        max_length = 250;
    }
    else {
        max_length = parseInt(temp_max_length);
    }
    var value = "" + ($(field).val());
    if (value.length > max_length) {
        $(field).val(value.substring(0, max_length));
    }
    $("div.article-short-description span.character-counter").text((value.length) + "/" + max_length);
});
