import Author from "./author.js";
import ArticleCategory from "./category.js";
import ArticleReference from "./reference.js";
import ArticleTag from "./tag.js";
class Article {
    constructor(id, title, description, tags, content, status, createAt, publishAt, updateAt, coverImage, categories, authors, references) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.content = content;
        this.status = status;
        this.coverImage = coverImage;
        this.createAt = new Date(Date.parse(createAt));
        this.publishAt = new Date(Date.parse(publishAt));
        this.updateAt = new Date(Date.parse(updateAt));
        for (var tag of tags) {
            this.tags.push(new ArticleTag(tag));
        }
        for (var category of categories) {
            this.categories.push((new ArticleCategory()).fromJson(category));
        }
        for (var author of authors) {
            this.authors.push((new Author()).fromJson(author));
        }
        for (var reference of references) {
            this.references.push((new ArticleReference()).fromJson(reference));
        }
    }
    fromJson(article) {
        this.id = article['id'];
        this.title = article['title'];
        this.description = article['description'];
        this.content = article['content'];
        this.status = article['status'];
        this.coverImage = article['cover_image'];
        this.createAt = new Date(Date.parse(article['create_at']));
        this.publishAt = new Date(Date.parse(article['publish_at']));
        this.updateAt = new Date(Date.parse(article['update_at']));
        for (var tag of article['tags']) {
            this.tags.push(new ArticleTag(tag));
        }
        for (var category of article['categories']) {
            this.categories.push((new ArticleCategory()).fromJson(category));
        }
        for (var author of article['authors']) {
            this.authors.push((new Author()).fromJson(author));
        }
        for (var reference of article['references']) {
            this.references.push((new ArticleReference()).fromJson(reference));
        }
    }
    toJson() {
        return {
            'id': this.id,
            'title': this.title,
            'description': this.description,
            'tags': this.tags.map((tag) => tag.tagName),
            'content': this.content,
            'status': this.status,
            'cover_image': this.coverImage,
            'create_at': this.createAt.toISOString(),
            'publish_at': this.publishAt.toISOString(),
            'update_at': this.updateAt.toISOString(),
            'categories': this.categories.map((category) => category.toJson()),
            'authors': this.authors.map((author) => author.toJson()),
            'references': this.references.map((reference) => reference.toJson())
        };
    }
}
export default Article;
