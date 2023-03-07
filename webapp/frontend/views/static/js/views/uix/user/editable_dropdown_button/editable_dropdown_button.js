var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _EditableDropdownButton_instances, _EditableDropdownButton_value, _EditableDropdownButton_eventListenner;
class EditableDropdownButton {
    constructor() {
        _EditableDropdownButton_instances.add(this);
        _EditableDropdownButton_value.set(this, '');
    }
    listen() {
        __classPrivateFieldGet(this, _EditableDropdownButton_instances, "m", _EditableDropdownButton_eventListenner).call(this);
    }
}
_EditableDropdownButton_value = new WeakMap(), _EditableDropdownButton_instances = new WeakSet(), _EditableDropdownButton_eventListenner = function _EditableDropdownButton_eventListenner() {
    $(".editable-dropdown-button .field button").on("click", function (event) {
        var dropdown = event.currentTarget.parentElement.parentElement;
        var list_item = dropdown.getElementsByClassName('list-item');
        if (list_item.length > 0) {
            if ($(list_item[0]).css('display').trim().toLowerCase() === 'none') {
                $('.editable-dropdown-button .dropdown-menu').css({ 'display': 'none' });
                $(list_item[0]).css({ 'display': 'flex' });
            }
            else {
                $(list_item[0]).css({ 'display': 'none' });
            }
        }
    });
    document.addEventListener('click', function (event) {
        var element = event.target;
        if (element.tagName.trim().toLowerCase() === 'img') {
            element = element.parentElement;
        }
        var condition = ((['input', 'button']).includes(element.tagName.trim().toLowerCase())
            && element.parentElement.parentElement.classList.contains("editable-dropdown-button"));
        if (!condition) {
            $('.editable-dropdown-button .dropdown-menu').css({ 'display': 'none' });
        }
    });
    document.readyState;
};
(new EditableDropdownButton()).listen();
