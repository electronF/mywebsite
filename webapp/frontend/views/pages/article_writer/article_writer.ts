// import Article from "../../../types/article.js";

class ArticleWriter
{
    // article: Article = new Article()
    
    #eventListenner(){
        // $(".actions-bar div.labeled-icon-button").on('click', function (event) {
        //     var key = event.currentTarget.getAttribute('key');
        //     console.log(key)
        //     switch (key) {
        //         case "labeled-icon-button-file":
        //             console.log('clicked on file button');
        //             break;
        //         case "labeled-icon-button-save":
        //             console.log('clicked on save button');
        //             break;
        //         case "labeled-icon-button-export":
        //             console.log('clicked on export button');
        //             break;
        //         case "labeled-icon-button-delete":
        //             console.log('clicked on delete button');
        //             break;
        //     }
        // });

        $("div.article-title input").on("keyup", (event) => {
            var field = event.currentTarget;
            var temp_max_length = $(field).prop("maxlength");
            var max_length = 0;
            if (isNaN(temp_max_length)) {
                max_length = 100;
            }
            else {
                max_length = parseInt(temp_max_length);
            }
            var value = "" + ($(field).val());
            if (value.length > max_length) {
                $(field).val(value.substring(0, max_length));
            }
            $("div.article-title span.character-counter").text((value.length) + "/" + max_length);
        });

        $("div.article-short-description textarea").on("keyup", (event) => {
            var field = event.currentTarget;
            var temp_max_length = $(field).prop("maxlength");
            var max_length = 0;
            if (isNaN(temp_max_length)) {
                max_length = 250;
            }
            else {
                max_length = parseInt(temp_max_length);
            }
            var value = "" + ($(field).val());
            if (value.length > max_length) {
                $(field).val(value.substring(0, max_length));
            }
            $("div.article-short-description span.character-counter").text((value.length) + "/" + max_length);
        });
    }

    listen()
    {
        this.#eventListenner()
    }
}


class ArticleWriterDispositionActionBar
{
    _this = this

    #removeActivateMarkerOnAllDispositionElements()
    {
        for( var element of $('.editor-disposition .icon-button'))
        {
            if(element.classList.contains("active-disposition-icon-button"))
            {
                element.classList.remove("active-disposition-icon-button")
                element.classList.add("unactive-disposition-icon-button")
            }
        }
    }

    #addActiveMarkerOnADispositionElement(element:HTMLElement)
    {
        if(element?.tagName.toLowerCase() === "img")
        {
            element = element?.parentElement
        }

        if(element?.classList.contains("unactive-disposition-icon-button"))
        {
            element?.classList.remove("unactive-disposition-icon-button")
        }

        element?.classList.add("active-disposition-icon-button")
    }

    showArticleReference(event)
    {
        var element = (event?.originalTarget?.nextElementSibling as HTMLElement)
        if(element?.classList.contains("bg-secondary-color"))
        {
            element.classList.remove("bg-secondary-color")
        }
        (event?.originalTarget as HTMLElement).classList.add("bg-secondary-color")
        $(".article-reference").css({"display":"flex"})
    }

    hideArticleReference(event)
    {
        var element = (event?.originalTarget?.previousElementSibling as HTMLElement)
        if(element?.classList.contains("bg-secondary-color"))
        {
            element?.classList.remove("bg-secondary-color")
        }
        (event?.originalTarget as HTMLElement).classList.add("bg-secondary-color")
        $(".article-reference").css({"display":"none"})
    }

    editorInTop = (event) =>
    {  
        event.stopPropagation()
        
        $('.article-editor').css({"display": "flex"})
        $('.article-renderer').css({"display": "flex"})
        $('.article-content').css({"flex-direction": "column"})

        this.#removeActivateMarkerOnAllDispositionElements()
        this.#addActiveMarkerOnADispositionElement(event?.originalTarget)
    }

    editorInBottom = (event) =>
    {
        $('.article-editor').css({"display": "flex"})
        $('.article-renderer').css({"display": "flex"})
        $('.article-content').css({"flex-direction": "column-reverse"})

        this.#removeActivateMarkerOnAllDispositionElements()
        this.#addActiveMarkerOnADispositionElement(event?.originalTarget)
    }

    editorInLeft = (event) =>
    {
        $('.article-editor').css({"display": "flex"})
        $('.article-renderer').css({"display": "flex"})
        $('.article-content').css({"flex-direction": "row"})

        this.#removeActivateMarkerOnAllDispositionElements()
        this.#addActiveMarkerOnADispositionElement(event?.originalTarget)
    }

    editorInRight = (event) =>
    {
        $('.article-editor').css({"display": "flex"})
        $('.article-renderer').css({"display": "flex"})
        $('.article-content').css({"flex-direction": "row-reverse"})

        this.#removeActivateMarkerOnAllDispositionElements()
        this.#addActiveMarkerOnADispositionElement(event?.originalTarget)
    }

    editorOnly = (event) =>
    {
        $('.article-editor').css({"display": "flex"})
        $('.article-renderer').css({"display": "none"})
        $('.article-content').css({"flex-direction": "row"})

        this.#removeActivateMarkerOnAllDispositionElements()
        this.#addActiveMarkerOnADispositionElement(event?.originalTarget)
    }

    editorHide = (event) =>
    {
        $('.article-editor').css({"display": "none"})
        $('.article-renderer').css({"display": "flex"})
        $('.article-content').css({"flex-direction": "row"})

        this.#removeActivateMarkerOnAllDispositionElements()
        this.#addActiveMarkerOnADispositionElement(event?.originalTarget)
    }
}


class ArticleWriterActionsBar
{
    new()
    {
        console.log('new article')
    }

    saveInDraft()
    {
        console.log('save article')
    }

    export()
    {
        console.log('export article')
    }

    delete()
    {
        console.log('delete article')
    }

    publish()
    {
        console.log('publish article')
    }
}


// Note: It is not good to directly access to the ArticleWriterActionBar class because
// a context can exist. Also a mapping object is better because it help to escape overwriting
// a variale if this one is use to save function link

var articleWriterActionsBar = new ArticleWriterActionsBar()
var articleWriterDispositionActionBar = new ArticleWriterDispositionActionBar()

var articleWriterFunctions = {
    'resetArticle': articleWriterActionsBar.new,
    'saveArticle': articleWriterActionsBar.saveInDraft,
    'exportArticle': articleWriterActionsBar.export,
    'deleteArticle': articleWriterActionsBar.delete,
    'publishArticle': articleWriterActionsBar.publish,
    'showLeftPaned': articleWriterDispositionActionBar.showArticleReference,
    'hideLeftPaned': articleWriterDispositionActionBar.hideArticleReference,
    'editorInTop': articleWriterDispositionActionBar.editorInTop,
    'editorInBottom': articleWriterDispositionActionBar.editorInBottom,
    'editorInLeft': articleWriterDispositionActionBar.editorInLeft,
    'editorInRight': articleWriterDispositionActionBar.editorInRight,
    'editorOnly': articleWriterDispositionActionBar.editorOnly,
    'rendererOnly': articleWriterDispositionActionBar.editorHide
}

var bar = (new ArticleWriter()).listen()
$($(".editor-disposition .icon-button")[4]).trigger('click')
