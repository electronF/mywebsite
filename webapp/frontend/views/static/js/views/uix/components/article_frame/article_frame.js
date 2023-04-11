var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ArticleFrame_article;
class ArticleFrame {
    constructor(article) {
        _ArticleFrame_article.set(this, void 0);
        __classPrivateFieldSet(this, _ArticleFrame_article, article, "f");
    }
    render() {
        return `
      <div class="article-frame">
        <div class="article-frame-header">
            <div class="article-authors">
                <div class="article-authors-images">
                    ${__classPrivateFieldGet(this, _ArticleFrame_article, "f").authors.slice(0, 3).map((author) => `<img \
                        src='${author.imagePath}'\ 
                        alt="author image" \ 
                        title="${author.surname.split(' ')[0]} ${author.name.split(' ')[0]}"/>`)}
                </div>
                <div class="article-authors-names">
                    <span>${__classPrivateFieldGet(this, _ArticleFrame_article, "f").authors[0].surname.split(' ')[0]} ${__classPrivateFieldGet(this, _ArticleFrame_article, "f").authors[0].name.split(' ')[0]}</span>
                    ${(__classPrivateFieldGet(this, _ArticleFrame_article, "f").authors.length > 1) ? '<span class="authors-et-al">et al.</span>' : ''}
                </div>
            </div>
            <div class="articles-categories">
                <ul>
                    ${__classPrivateFieldGet(this, _ArticleFrame_article, "f").categories.map((category) => `<li>${category.name}</li>`)}
                </ul>
            </div>
        </div>
        <div class="article-frame-content">
            <div class="article-image"><img src="${__classPrivateFieldGet(this, _ArticleFrame_article, "f").coverImage}}" alt="${__classPrivateFieldGet(this, _ArticleFrame_article, "f").title.substring(0, 20)}}..." title="${__classPrivateFieldGet(this, _ArticleFrame_article, "f").title}"></div>
            <div class="article-text-content">
                <div class="article-title"><span>${__classPrivateFieldGet(this, _ArticleFrame_article, "f").title}</span></div>
                <div class="article-description">${__classPrivateFieldGet(this, _ArticleFrame_article, "f").description}</div>
            </div>
        </div>
        <div class="article-frame-footer">
            <div class="article-actions"></div>
            <div class="article-datetime">
                <span>${DateTimeFormater.datetime_formater_1(__classPrivateFieldGet(this, _ArticleFrame_article, "f").updateAt)}</span>
            </div>
        </div>
    </div>
      `;
    }
}
_ArticleFrame_article = new WeakMap();
export default ArticleFrame;
