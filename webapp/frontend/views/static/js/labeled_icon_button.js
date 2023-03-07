var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _LabeledIconButton_instances, _LabeledIconButton_eventListenner, _LabeledIconButton_labeledIconButton;
class LabeledIconButton {
    constructor() {
        _LabeledIconButton_instances.add(this);
    }
    listen() {
        __classPrivateFieldGet(this, _LabeledIconButton_instances, "m", _LabeledIconButton_eventListenner).call(this);
    }
}
_LabeledIconButton_instances = new WeakSet(), _LabeledIconButton_eventListenner = function _LabeledIconButton_eventListenner() {
    $('div.labeled-icon-button').on("mouseenter mouseleave", function (event) {
        var imageElement = event.currentTarget.getElementsByTagName('img')[0];
        var currentImage = imageElement.src;
        var imageToDisplay = imageElement.getAttribute('data-icon');
        imageElement.src = imageToDisplay;
        imageElement.setAttribute('data-icon', currentImage);
    });
}, _LabeledIconButton_labeledIconButton = function _LabeledIconButton_labeledIconButton() {
};
(new LabeledIconButton()).listen();
