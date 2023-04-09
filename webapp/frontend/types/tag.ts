class ArticleTag
{
    tagName: String
    constructor(tagName?: String){
        this.tagName = tagName
    }

    setTagName(tagName:String){
        this.tagName = tagName
    }

    getTagName()
    {
        return this.tagName
    }
}

export default ArticleTag