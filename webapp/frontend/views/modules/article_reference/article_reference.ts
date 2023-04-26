import Author from "../../../types/author";
import ArticleCategory from "../../../types/category";
import ArticleTag from "../../../types/tag";


class ArticleReference
{
    tagsList = new Array<ArticleTag>();
    categoriesList = new Array<ArticleCategory>()
    authorsList = new Array<Author>()

    #eventListenner()
    {
        $('.author-search-bar input').on('keyup', (event)=>{
            var input = event?.currentTarget as HTMLInputElement
            var displayList = false;
            if(input.value.trim().length > 0)
            {
                displayList = true
            }

            var divs = (   
                event
                ?.currentTarget
                ?.parentElement
                ?.parentElement
                ?.getElementsByClassName('suggested-authors-list') as HTMLCollectionOf<HTMLElement>
            )

            if(divs.length > 0)
            {
                //do research before
                divs[0].style.setProperty('display', ((displayList==true)?'flex':'none'))
            }
        })


        $('.suggested-authors-list div').on('click', function(event){
            var div = (event?.currentTarget as HTMLDivElement)
            console.log('value: ', div.textContent)

            if($(div.parentElement).css('display').trim().toLowerCase() != 'none')
            {
                $(div.parentElement).css({'display':'none'})
            }
        })


        $('.author-search-bar button').on('click', (event)=>{
            
            var divs = (   
                event
                ?.currentTarget
                ?.parentElement
                ?.parentElement
                ?.getElementsByClassName('suggested-authors-list') as HTMLCollectionOf<HTMLElement>
            )

            if(divs.length > 0)
            {
                //do research before
                if(['none', ''].includes(divs[0].style.getPropertyValue('display').trim().toLowerCase()))
                {
                    divs[0].style.setProperty('display', 'flex')
                }
                else
                {
                    divs[0].style.setProperty('display', 'none')
                }
            }

        })


        document.addEventListener('click', function(event:MouseEvent){
            var element = (event?.target as HTMLElement) 
            
            var condition = (
                element?.tagName.trim().toLocaleLowerCase() === 'input' 
                && element?.parentElement.classList.contains("author-search-bar"))
                
            if(!condition)
            {
                var divs = (   
                    element
                    ?.parentElement
                    ?.parentElement
                    ?.getElementsByClassName('suggested-authors-list') as HTMLCollectionOf<HTMLElement>
                )
            
                if(divs.length > 0)
                {
                    //do research before
                    divs[0].style.setProperty('display', 'none')
                }
            }
        })
    }

    listen()
    {
        this.#eventListenner()
    }
}


(new ArticleReference()).listen()