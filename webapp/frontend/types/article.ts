import Author from "./author.js"
import ArticleCategory from "./category.js"
import ArticleReference from "./reference.js"
import ArticleTag from "./tag.js"


class Article
{
    id: String|Number
    title: String
    description: String
    tags: ArticleTag[]
    content: String
    status: String
    createAt: Date
    publishAt: Date
    updateAt: Date
    coverImage: String
    categories: ArticleCategory[]
    authors: Author[]
    references: ArticleReference[]


    constructor(
        id?: String|Number, 
        title?: String,
        description?: String,
        tags?: String[],
        content?: String,
        status?: String,
        createAt?: string,
        publishAt?: string,
        updateAt?: string,
        coverImage?: String,
        categories?: Array<Map<String, Number|String>>,
        authors?: Array<Map<String, Number|String>>,
        references?: Array<Map<String, Number|String>>)
    {
        this.id = id
        this.title = title
        this.description = description
        this.content = content
        this.status = status
        this.coverImage = coverImage
        this.createAt = new Date(Date.parse(createAt))
        this.publishAt = new Date(Date.parse(publishAt))
        this.updateAt = new Date(Date.parse(updateAt))
        
        for(var tag of tags){
            this.tags.push(new ArticleTag(tag))
        }

        for(var category of categories){
            this.categories.push((new ArticleCategory()).fromJson(category) )
        }

        for(var author of authors){
            this.authors.push((new Author()).fromJson(author) )
        }

        for(var reference of references){
            this.references.push((new ArticleReference()).fromJson(reference) )
        }
    }

    fromJson(article:Map<String, Number|String|Array<String>|Array<Map<String, Number|String>>>){
        this.id = article['id'] as String|Number
        this.title = article['title'] as String
        this.description = article['description'] as String
        this.content = article['content'] as String
        this.status = article['status'] as String
        this.coverImage = article['cover_image'] as String
        this.createAt = new Date(Date.parse((article['create_at'] as string)))
        this.publishAt = new Date(Date.parse((article['publish_at'] as string)))
        this.updateAt = new Date(Date.parse((article['update_at'] as string)))
        
        for(var tag of (article['tags'] as Array<String>)){
            this.tags.push(new ArticleTag(tag))
        }

        for(var category of (article['categories'] as Array<Map<String, Number|String>>)){
            this.categories.push((new ArticleCategory()).fromJson(category) )
        }

        for(var author of (article['authors'] as Array<Map<String, Number|String>>)){
            this.authors.push((new Author()).fromJson(author) )
        }

        for(var reference of (article['references'] as Array<Map<String, Number|String>>)){
            this.references.push((new ArticleReference()).fromJson(reference) )
        }
    }

    toJson(){
        return {
            'id': this.id, 
            'title': this.title,
            'description': this.description,
            'tags': this.tags.map((tag)=>tag.tagName),
            'content': this.content,
            'status': this.status,
            'cover_image': this.coverImage,
            'create_at': this.createAt.toISOString(),
            'publish_at': this.publishAt.toISOString(),
            'update_at': this.updateAt.toISOString(),
            'categories': this.categories.map((category)=>category.toJson()),
            'authors': this.authors.map((author)=>author.toJson()),
            'references': this.references.map((reference)=> reference.toJson())
        }
    }
}

export default Article