class ArticleReference
{
    authorsName: String
    title: String
    edition: String
    publishAt: Date
    pages: String
    source: String

    constructor(
        authorsNames?: String, 
        title?: String, 
        edition?: String, 
        publishAt?: string, 
        pages?: String, 
        source?:String)
    {
        this.authorsName = authorsNames
        this.title = title
        this.edition = edition
        this.publishAt = new Date(Date.parse(publishAt))
        this.pages = pages
        this.source = source
    }

    fromJson(reference:Map<String, Number|String>)
    {
        this.authorsName = reference['authors_names']
        this.title = reference['title']
        this.edition = reference['edition']
        this.publishAt = new Date(Date.parse(reference['publish_at']))
        this.pages = reference['pages']
        this.source = reference['source']

        return this
    }

    toJson(){
        return {
            'authors_names': this.authorsName,
            'title': this.title,
            'edition': this.edition,
            'publish_at': this.publishAt.toISOString(),
            'pages': this.pages,
            'source': this.source
        }
    }
}

export default ArticleReference