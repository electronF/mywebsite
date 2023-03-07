$(".editable-dropdown-button .field button").on("click", function (event) {
    var dropdown = event.currentTarget.parentElement.parentElement;
    var list_item = dropdown.getElementsByClassName('list-item');
    if (list_item.length > 0) {
        if ($(list_item[0]).css('display').trim().toLowerCase() === 'none') {
            $('.editable-dropdown-button .dropdown-menu').css({ 'display': 'none' });
            $(list_item[0]).css({ 'display': 'flex' });
        }
        else {
            $(list_item[0]).css({ 'display': 'none' });
        }
    }
});
document.addEventListener('click', function (event) {
    var element = event.target;
    if (element.tagName.trim().toLowerCase() === 'img') {
        element = element.parentElement;
    }
    var condition = ((['input', 'button']).includes(element.tagName.trim().toLowerCase())
        && element.parentElement.parentElement.classList.contains("editable-dropdown-button"));
    if (!condition) {
        $('.editable-dropdown-button .dropdown-menu').css({ 'display': 'none' });
    }
});
