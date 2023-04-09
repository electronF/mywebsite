import Author from "../../../types/author.js"
import ArticleCategory from "../../../types/category.js"
import ArticleTag from "../../../types/tag.js"
import GenerateLabeledFrameWithButton from "../../uix/components/labeled_frame_with_button/labeled_frame_with_button.js"


class EditorialHome
{
    searchValue:string=''
    searchAuthors = Array<Author>()
    searchCategories = Array<ArticleCategory>()
    searchTags = Array<ArticleTag>()


    eventListenner()
    {
        $(".option-list-bar button, .option-list-bar input").on('click', (event)=>{
            var div = (
                event
                .currentTarget
                .parentElement
                .parentElement
                .getElementsByClassName('suggested-options-list') as HTMLCollectionOf<HTMLElement>
            )[0]

            if(div != undefined){
                if(['', 'none'].includes(div.style.getPropertyValue('display').trim().toLowerCase()))
                {
                    div.style.setProperty('display', 'flex')
                }
                else
                {
                    div.style.setProperty('display', 'none')
                }
            }
        })

        $('.suggested-options-list div').on('click', (event)=>{
            var input = (
                event
                .currentTarget
                .parentElement
                .parentElement
                .getElementsByTagName('input')
            )[0]

            if(input != undefined)
            {
                input.value = event.currentTarget.textContent
                event.currentTarget.parentElement.style.setProperty('display', 'none')
            }
        })

        document.addEventListener('click', function(event:MouseEvent){
            var element = (event.target as HTMLElement) 
            
            if(element.tagName.trim().toLocaleLowerCase()=='img')
            {
                element = element.parentElement
            }

            var condition = (
                element.tagName.trim().toLocaleLowerCase() === 'button' 
                && element.parentElement.classList.contains("option-list-bar"))
                
            if(!condition)
            {
                $('.suggested-options-list').css({"display":'none'})
            }

            var btn = new GenerateLabeledFrameWithButton('Super', 'cool', '', 'CLick here')
            $(btn.render()).appendTo(".list-articles");

            console.log('here', btn.render())
            // $('.').append()
        })
    }

    listen()
    {
        this.eventListenner()
    }
}


class EditorialHomeActionsBar
{
    displayPublishedArticles()
    {
        console.log('list of published articles')
    }

    displayArticlesInDraft()
    {
        console.log('list of articles in draft')
    }

    displayArticlesInTrash()
    {
        console.log('list of articles in trash')
    }

    displayArticlesAsGrid()
    {
        console.log('display articles as grid')
    }

    displayArticlesAsList()
    {
        console.log('display articles as list')
    }
}


var editorialHomeActionsBar = new EditorialHomeActionsBar();

var editorialHomeFunctions = {
    'displayPublishedArticles': editorialHomeActionsBar.displayPublishedArticles,
    'displayArticlesInDraft': editorialHomeActionsBar.displayArticlesInTrash,
    'displayArticlesInTrash': editorialHomeActionsBar.displayArticlesInTrash,
    'displayArticlesAsGrid': editorialHomeActionsBar.displayArticlesAsGrid,
    'displayArticlesAsList' : editorialHomeActionsBar.displayArticlesAsList
};




(new EditorialHome()).listen()

