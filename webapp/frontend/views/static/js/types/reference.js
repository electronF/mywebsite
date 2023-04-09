class ArticleReference {
    constructor(authorsNames, title, edition, publishAt, pages, source) {
        this.authorsName = authorsNames;
        this.title = title;
        this.edition = edition;
        this.publishAt = new Date(Date.parse(publishAt));
        this.pages = pages;
        this.source = source;
    }
    fromJson(reference) {
        this.authorsName = reference['authors_names'];
        this.title = reference['title'];
        this.edition = reference['edition'];
        this.publishAt = new Date(Date.parse(reference['publish_at']));
        this.pages = reference['pages'];
        this.source = reference['source'];
        return this;
    }
    toJson() {
        return {
            'authors_names': this.authorsName,
            'title': this.title,
            'edition': this.edition,
            'publish_at': this.publishAt.toISOString(),
            'pages': this.pages,
            'source': this.source
        };
    }
}
export default ArticleReference;
