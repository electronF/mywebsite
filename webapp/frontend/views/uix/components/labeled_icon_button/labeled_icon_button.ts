class LabeledIconButton
{
    #eventListenner()
    {
        $('div .labeled-icon-button').on("mouseenter mouseleave", function(event){
            var imageElement = (
                (event.currentTarget as HTMLDivElement).getElementsByTagName('img') as
                HTMLCollectionOf<HTMLImageElement>
            )[0]

            var currentImage = imageElement.src
            var imageToDisplay = $(imageElement).prop('data-icon') as string
            imageElement.src = imageToDisplay
            $(imageElement).prop('data-icon', currentImage)
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