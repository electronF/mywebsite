var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ArticleReference_instances, _ArticleReference_eventListenner;
class ArticleReference {
    constructor() {
        _ArticleReference_instances.add(this);
    }
    listen() {
        __classPrivateFieldGet(this, _ArticleReference_instances, "m", _ArticleReference_eventListenner).call(this);
    }
}
_ArticleReference_instances = new WeakSet(), _ArticleReference_eventListenner = function _ArticleReference_eventListenner() {
    $('.author-search-bar input').on('keyup', (event) => {
        var input = event.currentTarget;
        var displayList = false;
        if (input.value.trim().length > 0) {
            displayList = true;
        }
        var divs = event
            .currentTarget
            .parentElement
            .parentElement
            .getElementsByClassName('suggested-authors-list');
        if (divs.length > 0) {
            //do research before
            divs[0].style.setProperty('display', ((displayList == true) ? 'flex' : 'none'));
        }
    });
    $('.suggested-authors-list div').on('click', function (event) {
        var div = event.currentTarget;
        console.log('value: ', div.textContent);
        if ($(div.parentElement).css('display').trim().toLowerCase() != 'none') {
            $(div.parentElement).css({ 'display': 'none' });
        }
    });
    $('.author-search-bar button').on('click', (event) => {
        var divs = event
            .currentTarget
            .parentElement
            .parentElement
            .getElementsByClassName('suggested-authors-list');
        if (divs.length > 0) {
            //do research before
            if (['none', ''].includes(divs[0].style.getPropertyValue('display').trim().toLowerCase())) {
                divs[0].style.setProperty('display', 'flex');
            }
            else {
                divs[0].style.setProperty('display', 'none');
            }
        }
    });
    document.addEventListener('click', function (event) {
        // try {
        // } catch (error) {
        // }
        var element = event.target;
        var condition = (element.tagName.trim().toLocaleLowerCase() === 'input'
            && element.parentElement.classList.contains("author-search-bar"));
        if (!condition) {
            var divs = element
                .parentElement
                .parentElement
                .getElementsByClassName('suggested-authors-list');
            if (divs.length > 0) {
                //do research before
                divs[0].style.setProperty('display', 'none');
            }
        }
    });
};
(new ArticleReference()).listen();
