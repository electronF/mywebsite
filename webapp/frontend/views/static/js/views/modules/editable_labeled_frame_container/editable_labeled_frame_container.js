$(".editable-labeled-frame-container").on('keyup', (event) => {
    // event.currentTarget.innerHTML = event.currentTarget.innerHTML
    // const selection = window.getSelection()
    // const range = document.createRange()
    // selection.removeAllRanges()
    // range.selectNodeContents(event.currentTarget)
    // range.collapse(false)
    // selection.addRange(range)
    // event.currentTarget.focus()
    var displayList = false;
    if (event.currentTarget.innerHTML.trim().length > 0) {
        displayList = true;
    }
    var divs = event.currentTarget.parentElement.getElementsByClassName("proposed-list-items");
    if (divs.length > 0) {
        //filter result before displaying list
        divs[0].style.setProperty('display', (displayList == true) ? 'flex' : 'none');
    }
});
var editableLabeledFrameContainerOnBlur = function (event) {
    var divs = event.currentTarget.parentElement.getElementsByClassName("proposed-list-items");
    if (divs.length > 0) {
        divs[0].style.setProperty('display', 'none');
    }
};
