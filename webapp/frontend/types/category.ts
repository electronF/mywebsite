class ArticleCategory
{
    id: String|Number
    name: String
    description: String

    constructor (id?: String|Number, name?:String, description?:String){
        this.id = id
        this.name = name
        this.description = description
    }

    fromJson(category:Map<String, Number|String>)
    {
        this.id = category['id']
        this.name = category['name']
        this.description = category['description']

        return this
    }

    toJson(){
        return {
            'id': this.id,
            'name': this.name,
            'description': this.description
        }
    }
}

export default ArticleCategory