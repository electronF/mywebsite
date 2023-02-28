$(".datime-picker .date-picker-button").on('click', function(event){
    var inputs = event.currentTarget.parentElement.nextElementSibling.getElementsByClassName('date-picker')
    if(inputs.length > 0)
    {
        (inputs[0] as any)?.showPicker()
    }

})

$("input.date-picker").on('change', function(event){
    var dateFields = (
        event.currentTarget.parentElement.previousElementSibling.getElementsByClassName("date-field") as 
        HTMLCollectionOf<HTMLInputElement>
    )

    if(dateFields.length > 0)
    {
        var splited_date = (""+(event.currentTarget as HTMLInputElement).value).split('-')
        dateFields[0].value = `${splited_date[2]}/${splited_date[1]}/${splited_date[0]}`
    }
})