class ArticleViewer
{
    #eventListenner(){

    }

    listen(){
        this.#eventListenner
    }
}


class ArticleViewerActions
{
    isReading:boolean

    readDocument(element:HTMLElement)
    {
       var images = (element!.getElementsByTagName('img') as  HTMLCollectionOf<HTMLImageElement>)
       if(images!.length > 0)
       {
        var src = images[0].getAttribute('src')
        var icon = images[0].getAttribute('icon')
        images[0].setAttribute('src', icon) 
        images[0].setAttribute('icon', src)

        //call function to start or stop reading
        if(this.isReading){
            //stop reading
        }
        else{
            //start reading
        }
       }
    }
}


var articleViewerActions = new ArticleViewerActions()

var articlesViewerFunctions = {
    "readDocument": articleViewerActions.readDocument
}


let a = (new ArticleViewer()).listen()