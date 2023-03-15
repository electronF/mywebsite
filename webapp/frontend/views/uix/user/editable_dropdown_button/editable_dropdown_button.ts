class EditableDropdownButton
{

    #value:string=''

    #eventListenner()
    {
        $(".editable-dropdown-button .field button").on("click", function(event){
            var dropdown = event.currentTarget.parentElement.parentElement as HTMLDivElement
            var list_item = dropdown.getElementsByClassName('list-item') as HTMLCollectionOf<HTMLDivElement>

            if(list_item.length > 0)
            {
                if($(list_item[0]).css('display').trim().toLowerCase() === 'none' )
                {
                    $('.editable-dropdown-button .dropdown-menu').css({'display': 'none'})
                    $(list_item[0]).css({'display': 'flex'})
                }
                else
                {
                    $(list_item[0]).css({'display': 'none'})
                }
            }

        })


        document.addEventListener('click', function(event){
            var element = event.target as HTMLElement

            if(element.tagName.trim().toLowerCase() === 'img')
            {
                element = element.parentElement
            }

            var condition = (
                (['input', 'button']).includes(element.tagName.trim().toLowerCase())
                && element.parentElement.parentElement.classList.contains("editable-dropdown-button"))

            if(!condition)
            {
                $('.editable-dropdown-button .dropdown-menu').css({'display': 'none'})
            }
        })

        $('.editable-dropdown-button .dropdown-menu .dropdown-item').on('click', (event)=>{
            var spans = event.currentTarget.getElementsByTagName('span') as HTMLCollectionOf<HTMLSpanElement>
            if(spans.length > 0)
            {
                var inputs = (
                    event.currentTarget.parentElement.parentElement.getElementsByTagName('input') 
                )

                if(inputs.length > 0)
                {
                    for(var parentElement of $(event.currentTarget).parent().children('.dropdown-item'))
                    {
                        for(var element of $(parentElement).children('div'))
                        {
                            element.classList.remove('checked');
                            try {
                                element.removeAttribute('title');
                            }
                            catch (error) { }
                        }
                    }
                    
                    $(event.currentTarget).parent().children('.dropdown-item div').removeClass('checked')
                    try {
                        $(event.currentTarget).parent().children('.dropdown-item div').removeAttr('title')   
                    } catch (error) {}
                    event.currentTarget.getElementsByTagName('div')[0]?.getElementsByTagName('div')[0]?.classList.add('checked')
                    event.currentTarget.getElementsByTagName('div')[0]?.getElementsByTagName('div')[0]?.setAttribute('title', 'selected')
                    inputs[0].value = spans[0].textContent 
                }
            }
        })
    }

    listen()
    {
        this.#eventListenner()
    }
}


(new EditableDropdownButton()).listen()

