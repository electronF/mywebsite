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
        __classPrivateFieldGet(this, _ArticleViewer_instances, "m", _ArticleViewer_eventListenner);
    }
}
_ArticleViewer_instances = new WeakSet(), _ArticleViewer_eventListenner = function _ArticleViewer_eventListenner() {
};
class ArticleViewerActions {
    readDocument(element) {
        var images = element.getElementsByTagName('img');
        if (images.length > 0) {
            var src = images[0].getAttribute('src');
            var icon = images[0].getAttribute('icon');
            images[0].setAttribute('src', icon);
            images[0].setAttribute('icon', src);
            //call function to start or stop reading
            if (this.isReading) {
                //stop reading
            }
            else {
                //start reading
            }
        }
    }
}
var articleViewerActions = new ArticleViewerActions();
var articlesViewerFunctions = {
    "readDocument": articleViewerActions.readDocument
};
let a = (new ArticleViewer()).listen();
