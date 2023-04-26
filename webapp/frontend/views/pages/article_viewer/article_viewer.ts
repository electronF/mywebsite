class ArticleViewer
{
    #eventListenner(){
        
        $('.others-information .authors button').on('click', (event)=>{
            var spans = event.currentTarget.getElementsByTagName('span')
            var images = event.currentTarget.getElementsByTagName('img')
            if(event.currentTarget.previousElementSibling.getAttribute('data-show-less')==="true"){
                event.currentTarget.previousElementSibling.setAttribute('data-show-less', 'false')
                $(event.currentTarget.previousElementSibling).css('height', '100%')
                if(spans.length > 0)
                    spans[0].textContent = "View less"
                if(images.length > 0)
                    images[0].style.setProperty('rotate', '180deg')
                
            }
            else{
                event.currentTarget.previousElementSibling.setAttribute('data-show-less', 'true')
                $(event.currentTarget.previousElementSibling).css('height', '800px')

                if(spans.length > 0)
                    spans[0].textContent = "View more"
                if(images.length > 0)
                    images[0].style.setProperty('rotate', '0deg')
                
            }
        })
    }

    listen(){
        this.#eventListenner()
    }
}


class ArticleViewerActions
{
    isReading:boolean

    readDocument = (element:HTMLElement)  =>
    {
       var images = (element!.getElementsByTagName('img') as  HTMLCollectionOf<HTMLImageElement>)
       var span = element.nextElementSibling

       if(this.isReading == true)
        {
            if(images!.length > 0)
                images[0].src = "/static/images/cicle-filled-play-icon-2.webp"
            this.isReading = false

            location.href = '/editorial/'
        }
        else
        {
            if(images!.length > 0)
                images[0].src = "/static/images/cicle-filled-pause-icon-3.webp"
            this.isReading = true
        }
       
    }

    openEditorPage = (element:HTMLElement) =>
    {
        location.href = '/editorial/viewer'
    }

    goToPreviousPage = (element:HTMLElement)  =>
    {
        location.href = '/editorial/'
    }
}


var articleViewerActions = new ArticleViewerActions()

var articlesViewerFunctions = {
    "readDocument": articleViewerActions.readDocument,
    "previous": articleViewerActions.goToPreviousPage,
    "openEditor": articleViewerActions.openEditorPage
}


let a = (new ArticleViewer()).listen()