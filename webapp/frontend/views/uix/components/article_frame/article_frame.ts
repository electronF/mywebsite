import Article from "../../../../types/article.js"

class ArticleFrame
{
    #article:Article
    constructor(article:Article)
    {
        this.#article = article
    }

    render()
    {
      return `
      <div class="article-frame">
        <div class="article-frame-header">
            <div class="article-authors">
                <div class="article-authors-images">
                    ${this.#article.authors.slice(0, 3).map((author)=>`<img \
                        src='${author.imagePath}'\ 
                        alt="author image" \ 
                        title="${author.surname.split(' ')[0]} ${author.name.split(' ')[0]}"/>`
                    )}
                </div>
                <div class="article-authors-names">
                    <span>${this.#article.authors[0].surname.split(' ')[0]} ${this.#article.authors[0].name.split(' ')[0]}</span>
                    ${(this.#article.authors.length > 1)?'<span class="authors-et-al">et al.</span>':''}
                </div>
            </div>
            <div class="articles-categories">
                <ul>
                    ${this.#article.categories.map((category)=>`<li>${category.name}</li>`)}
                </ul>
            </div>
        </div>
        <div class="article-frame-content">
            <div class="article-image"><img src="${this.#article.coverImage}}" alt="${this.#article.title.substring(0, 20)}}..." title="${this.#article.title}"></div>
            <div class="article-text-content">
                <div class="article-title"><span>${this.#article.title}</span></div>
                <div class="article-description">${this.#article.description}</div>
            </div>
        </div>
        <div class="article-frame-footer">
            <div class="article-actions"></div>
            <div class="article-datetime">
                <span>${DateTimeFormater.datetime_formater_1(this.#article.updateAt)}</span>
            </div>
        </div>
    </div>
      `  
    }
}


export default ArticleFrame