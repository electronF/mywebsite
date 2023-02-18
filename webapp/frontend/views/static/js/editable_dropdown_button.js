$(".editable-dropdown-button .field button").on("click", function(event){
    var list_item = $(event.currentTarget).parent().next()
    console.log(list_item)
    var button = $(list_item).children("button")
    console.log(button)
    button.click()
})