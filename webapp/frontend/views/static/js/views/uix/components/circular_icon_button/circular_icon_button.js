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
var _GenerateCircularIconButton_icon, _GenerateCircularIconButton_alt, _GenerateCircularIconButton_title, _GenerateCircularIconButton_key;
class GenerateCircularIconButton {
    constructor(icon_path, key, alt = '', title = '') {
        _GenerateCircularIconButton_icon.set(this, '');
        _GenerateCircularIconButton_alt.set(this, '');
        _GenerateCircularIconButton_title.set(this, '');
        _GenerateCircularIconButton_key.set(this, '');
        __classPrivateFieldSet(this, _GenerateCircularIconButton_icon, icon_path, "f");
        __classPrivateFieldSet(this, _GenerateCircularIconButton_key, key, "f");
        __classPrivateFieldSet(this, _GenerateCircularIconButton_alt, alt, "f");
        __classPrivateFieldSet(this, _GenerateCircularIconButton_title, title, "f");
    }
    render() {
        return $(`\
        <button type="menu" class="circular-icon-button" key='${__classPrivateFieldGet(this, _GenerateCircularIconButton_key, "f")}'>
            <img src="${__classPrivateFieldGet(this, _GenerateCircularIconButton_icon, "f")}" alt="${__classPrivateFieldGet(this, _GenerateCircularIconButton_alt, "f")}" title="${__classPrivateFieldGet(this, _GenerateCircularIconButton_title, "f")}"/>
        </button>`);
    }
}
_GenerateCircularIconButton_icon = new WeakMap(), _GenerateCircularIconButton_alt = new WeakMap(), _GenerateCircularIconButton_title = new WeakMap(), _GenerateCircularIconButton_key = new WeakMap();
export default GenerateCircularIconButton;
