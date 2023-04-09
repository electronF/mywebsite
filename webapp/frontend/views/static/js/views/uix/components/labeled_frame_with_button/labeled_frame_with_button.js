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
var _GenerateLabeledFrameWithButton_label, _GenerateLabeledFrameWithButton_key, _GenerateLabeledFrameWithButton_alt, _GenerateLabeledFrameWithButton_title;
import GenerateCircularIconButton from "../circular_icon_button/circular_icon_button.js";
class GenerateLabeledFrameWithButton {
    constructor(label, key, alt, title) {
        _GenerateLabeledFrameWithButton_label.set(this, void 0);
        _GenerateLabeledFrameWithButton_key.set(this, void 0);
        _GenerateLabeledFrameWithButton_alt.set(this, '');
        _GenerateLabeledFrameWithButton_title.set(this, '');
        __classPrivateFieldSet(this, _GenerateLabeledFrameWithButton_label, label, "f");
        __classPrivateFieldSet(this, _GenerateLabeledFrameWithButton_key, key, "f");
        __classPrivateFieldSet(this, _GenerateLabeledFrameWithButton_alt, alt, "f");
        __classPrivateFieldSet(this, _GenerateLabeledFrameWithButton_title, title, "f");
    }
    render() {
        return (`
        <div class="labeled-frame-with-button">
            <span>${__classPrivateFieldGet(this, _GenerateLabeledFrameWithButton_label, "f")}</span>
            ${(new GenerateCircularIconButton('./../static/images/delete-icon.webp', __classPrivateFieldGet(this, _GenerateLabeledFrameWithButton_key, "f"), __classPrivateFieldGet(this, _GenerateLabeledFrameWithButton_alt, "f"), __classPrivateFieldGet(this, _GenerateLabeledFrameWithButton_title, "f"))).render()}
        </div>
        `);
    }
}
_GenerateLabeledFrameWithButton_label = new WeakMap(), _GenerateLabeledFrameWithButton_key = new WeakMap(), _GenerateLabeledFrameWithButton_alt = new WeakMap(), _GenerateLabeledFrameWithButton_title = new WeakMap();
export default GenerateLabeledFrameWithButton;
