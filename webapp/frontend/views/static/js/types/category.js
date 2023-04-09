class ArticleCategory {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
    fromJson(category) {
        this.id = category['id'];
        this.name = category['name'];
        this.description = category['description'];
        return this;
    }
    toJson() {
        return {
            'id': this.id,
            'name': this.name,
            'description': this.description
        };
    }
}
export default ArticleCategory;
