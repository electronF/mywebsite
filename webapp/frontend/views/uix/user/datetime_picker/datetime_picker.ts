class DateTimePicker
{
    #clickOnDateOrTime = false

    #eventListenner = () =>
    {
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

        $(".time-picker-button").on("click", function(event){
            var timeDisplayer = event.currentTarget.parentElement.nextElementSibling.getElementsByClassName('time-picker')
            if(timeDisplayer.length > 0)
            {
                if($(timeDisplayer[0]).css('display').toLocaleLowerCase() == 'flex')
                {
                    $(timeDisplayer[0] as HTMLElement).css({'display': 'none'})
                }
                else
                {
                    $(timeDisplayer[0] as HTMLElement).css({'display': 'flex'})
                }
            }
        }) 

        $(".time-picker-button").on("blur", (event) => {
            // if(this.#clickOnDateOrTime == false)
            // {
            //     var timeDisplayer = event.currentTarget.parentElement.nextElementSibling.getElementsByClassName('time-picker')
            //     if(timeDisplayer.length > 0)
            //     {
            //         $(timeDisplayer[0] as HTMLElement).css({'display': 'none'})
            //     }
            // }

            // this.#clickOnDateOrTime = false
        })

        $('.hour-picker ul li a').on('click', (event) => {
            var hour = (event.currentTarget as HTMLLinkElement).innerText.trim()
            this.#clickOnDateOrTime = true


            if(!isNaN(parseInt(hour)) && parseInt(hour) > -1 && parseInt(hour) < 24)
            {
                var timeFields = (event.currentTarget.parentElement
                .parentElement.parentElement
                .parentElement.parentElement
                .previousElementSibling.getElementsByClassName("time-field") as 
                HTMLCollectionOf<HTMLInputElement>)

                if(timeFields.length > 0)
                {
                    var [_, minute]  = timeFields[0].value.split(":")
                    timeFields[0].value =  `${hour}:${minute}`
                }

            }
        })

        $('.minute-picker ul li a').on('click', (event) => {
            var minute = (event.currentTarget as HTMLLinkElement).innerText.trim()
            this.#clickOnDateOrTime = true
            

            if(!isNaN(parseInt(minute)) && parseInt(minute) > -1 && parseInt(minute) < 60)
            {
                
                var timeFields = (event.currentTarget.parentElement
                .parentElement.parentElement
                .parentElement.parentElement
                .previousElementSibling.getElementsByClassName("time-field") as 
                HTMLCollectionOf<HTMLInputElement>)

                if(timeFields.length > 0)
                {
                    var [hour, _]  = timeFields[0].value.split(":")
                    timeFields[0].value =  `${hour}:${minute}`
                }

            }
        })
    }

    listen()
    {
        this.#eventListenner()
    }
}


(new DateTimePicker()).listen()