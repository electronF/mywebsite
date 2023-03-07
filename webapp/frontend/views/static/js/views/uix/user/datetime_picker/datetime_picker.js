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
var _DateTimePicker_clickOnDateOrTime, _DateTimePicker_eventListenner;
class DateTimePicker {
    constructor() {
        _DateTimePicker_clickOnDateOrTime.set(this, false);
        _DateTimePicker_eventListenner.set(this, () => {
            $(".datime-picker .date-picker-button").on('click', function (event) {
                var inputs = event.currentTarget.parentElement.nextElementSibling.getElementsByClassName('date-picker');
                if (inputs.length > 0) {
                    inputs[0]?.showPicker();
                }
            });
            $("input.date-picker").on('change', function (event) {
                var dateFields = event.currentTarget.parentElement.previousElementSibling.getElementsByClassName("date-field");
                if (dateFields.length > 0) {
                    var splited_date = ("" + event.currentTarget.value).split('-');
                    dateFields[0].value = `${splited_date[2]}/${splited_date[1]}/${splited_date[0]}`;
                }
            });
            $(".time-picker-button").on("click", function (event) {
                var timeDisplayer = event.currentTarget.parentElement.nextElementSibling.getElementsByClassName('time-picker');
                if (timeDisplayer.length > 0) {
                    if ($(timeDisplayer[0]).css('display').toLocaleLowerCase() == 'flex') {
                        $(timeDisplayer[0]).css({ 'display': 'none' });
                    }
                    else {
                        $(timeDisplayer[0]).css({ 'display': 'flex' });
                    }
                }
            });
            $(".time-picker-button").on("blur", (event) => {
                // if(this.#clickOnDateOrTime == false)
                // {
                //     var timeDisplayer = event.currentTarget.parentElement.nextElementSibling.getElementsByClassName('time-picker')
                //     if(timeDisplayer.length > 0)
                //     {
                //         $(timeDisplayer[0] as HTMLElement).css({'display': 'none'})
                //     }
                // }
                // this.#clickOnDateOrTime = false
            });
            $('.hour-picker ul li a').on('click', (event) => {
                var hour = event.currentTarget.innerText.trim();
                __classPrivateFieldSet(this, _DateTimePicker_clickOnDateOrTime, true, "f");
                if (!isNaN(parseInt(hour)) && parseInt(hour) > -1 && parseInt(hour) < 24) {
                    var timeFields = event.currentTarget.parentElement
                        .parentElement.parentElement
                        .parentElement.parentElement
                        .previousElementSibling.getElementsByClassName("time-field");
                    if (timeFields.length > 0) {
                        var [_, minute] = timeFields[0].value.split(":");
                        timeFields[0].value = `${hour}:${minute}`;
                    }
                }
            });
            $('.minute-picker ul li a').on('click', (event) => {
                var minute = event.currentTarget.innerText.trim();
                __classPrivateFieldSet(this, _DateTimePicker_clickOnDateOrTime, true, "f");
                if (!isNaN(parseInt(minute)) && parseInt(minute) > -1 && parseInt(minute) < 60) {
                    var timeFields = event.currentTarget.parentElement
                        .parentElement.parentElement
                        .parentElement.parentElement
                        .previousElementSibling.getElementsByClassName("time-field");
                    if (timeFields.length > 0) {
                        var [hour, _] = timeFields[0].value.split(":");
                        timeFields[0].value = `${hour}:${minute}`;
                    }
                }
            });
        });
    }
    listen() {
        __classPrivateFieldGet(this, _DateTimePicker_eventListenner, "f").call(this);
    }
}
_DateTimePicker_clickOnDateOrTime = new WeakMap(), _DateTimePicker_eventListenner = new WeakMap();
(new DateTimePicker()).listen();
