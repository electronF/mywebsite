var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ArticleViewer_instances, _ArticleViewer_eventListenner;
class ArticleViewer {
    constructor() {
        _ArticleViewer_instances.add(this);
    }
    listen() {
        __classPrivateFieldGet(this, _ArticleViewer_instances, "m", _ArticleViewer_eventListenner).call(this);
    }
}
_ArticleViewer_instances = new WeakSet(), _ArticleViewer_eventListenner = function _ArticleViewer_eventListenner() {
    $('.others-information .authors button').on('click', (event) => {
        var spans = event.currentTarget.getElementsByTagName('span');
        var images = event.currentTarget.getElementsByTagName('img');
        if (event.currentTarget.previousElementSibling.getAttribute('data-show-less') === "true") {
            event.currentTarget.previousElementSibling.setAttribute('data-show-less', 'false');
            $(event.currentTarget.previousElementSibling).css('height', '100%');
            if (spans.length > 0)
                spans[0].textContent = "View less";
            if (images.length > 0)
                images[0].style.setProperty('rotate', '180deg');
        }
        else {
            event.currentTarget.previousElementSibling.setAttribute('data-show-less', 'true');
            $(event.currentTarget.previousElementSibling).css('height', '800px');
            if (spans.length > 0)
                spans[0].textContent = "View more";
            if (images.length > 0)
                images[0].style.setProperty('rotate', '0deg');
        }
    });
};
class ArticleViewerActions {
    constructor() {
        this.readDocument = (element) => {
            var images = element.getElementsByTagName('img');
            var span = element.nextElementSibling;
            if (this.isReading == true) {
                if (images.length > 0)
                    images[0].src = "/static/images/cicle-filled-play-icon-2.webp";
                this.isReading = false;
                location.href = '/editorial/';
            }
            else {
                if (images.length > 0)
                    images[0].src = "/static/images/cicle-filled-pause-icon-3.webp";
                this.isReading = true;
            }
        };
        this.openEditorPage = (element) => {
            location.href = '/editorial/viewer';
        };
        this.goToPreviousPage = (element) => {
            location.href = '/editorial/';
        };
    }
}
var articleViewerActions = new ArticleViewerActions();
var articlesViewerFunctions = {
    "readDocument": articleViewerActions.readDocument,
    "previous": articleViewerActions.goToPreviousPage,
    "openEditor": articleViewerActions.openEditorPage
};
let a = (new ArticleViewer()).listen();
