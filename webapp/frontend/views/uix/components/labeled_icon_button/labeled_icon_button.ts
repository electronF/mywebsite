class LabeledIconButton
{
    #eventListenner()
    {
        $('div.labeled-icon-button').on("mouseenter mouseleave", function(event){
            var imageElement = (
                (event.currentTarget as HTMLDivElement).getElementsByTagName('img') as
                HTMLCollectionOf<HTMLImageElement>
            )[0]

            var currentImage = imageElement.src
            var imageToDisplay = imageElement.getAttribute('data-icon') as string
            imageElement.src = imageToDisplay
            imageElement.setAttribute('data-icon', currentImage)
        })

        $('div.labeled-icon-button').on("click", function(event){
            //Lock the parent of this element to see the onclick function
        })
    }

    #labeledIconButton()
    {

    }

    listen()
    {
        this.#eventListenner()
    }
}

(new LabeledIconButton()).listen()