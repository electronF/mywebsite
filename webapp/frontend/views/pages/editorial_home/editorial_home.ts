import Author from "../../../types/author"
import ArticleCategory from "../../../types/category"
import ArticleTag from "../../../types/tags"
import GenerateLabeledFrameWithButton from "../../uix/components/labeled_frame_with_button/labeled_frame_with_button"


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

            $(btn.render()).appendTo(".list-articles")
            // $('.').append()
        })
    }

    listen()
    {
        this.eventListenner()
    }
}


(new EditorialHome()).listen()

