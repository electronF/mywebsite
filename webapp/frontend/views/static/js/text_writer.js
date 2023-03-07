var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TextWriterWritingEvents_instances, _TextWriterWritingEvents_keyUpListenner, _TextWriterResizer_resizingDirectionListenner, _TextWriterResizer_canResizeListenner, _TextWriterResizer_resizerListenner;
class TextWriter {
    constructor() {
        this._selector = "div.text-writer";
    }
}
class TextWriterWritingEvents extends TextWriter {
    constructor() {
        super(...arguments);
        _TextWriterWritingEvents_instances.add(this);
    }
    listen() {
        __classPrivateFieldGet(this, _TextWriterWritingEvents_instances, "m", _TextWriterWritingEvents_keyUpListenner).call(this);
    }
}
_TextWriterWritingEvents_instances = new WeakSet(), _TextWriterWritingEvents_keyUpListenner = function _TextWriterWritingEvents_keyUpListenner() {
    $(this._selector).on('keyup', function (event) {
        var text = $(this).text();
    });
};
class TextWriterResizer extends TextWriter {
    constructor() {
        super(...arguments);
        this._canResize = false;
        this._rezisingDirection = 'none';
        this._detection_interval = 5;
        this._validResizingDirections = { est: 'e', south: 's', southEst: 'se' };
        _TextWriterResizer_resizingDirectionListenner.set(this, () => {
            $(this._selector).on('mousemove', (event) => {
                if (this._canResize == false) {
                    var mouse = event.originalEvent;
                    var x = mouse.pageX - event.currentTarget.offsetLeft;
                    var y = mouse.pageY - event.currentTarget.offsetTop;
                    //expand
                    if ((x > event.currentTarget.clientWidth / 2)
                        && (y > event.currentTarget.clientHeight / 2)
                        && (event.currentTarget.clientWidth - x <= this._detection_interval)
                        && (event.currentTarget.clientHeight - y <= this._detection_interval)) {
                        $(event.currentTarget).css("cursor", "se-resize");
                        this._rezisingDirection = this._validResizingDirections.southEst;
                    }
                    else if ((x > event.currentTarget.clientWidth / 2)
                        && (event.currentTarget.clientWidth - x <= this._detection_interval)) {
                        $(event.currentTarget).css("cursor", "e-resize");
                        this._rezisingDirection = this._validResizingDirections.est;
                    }
                    else if ((y > event.currentTarget.clientHeight / 2)
                        && (event.currentTarget.clientHeight - y <= this._detection_interval)) {
                        $(event.currentTarget).css("cursor", "s-resize");
                        this._rezisingDirection = this._validResizingDirections.south;
                    }
                    else {
                        $(event.currentTarget).css("cursor", "auto");
                        this._rezisingDirection = 'none';
                    }
                }
            });
        });
        _TextWriterResizer_canResizeListenner.set(this, () => {
            $(this._selector).on('mousedown', (event) => {
                if (Object.values(this._validResizingDirections).includes(this._rezisingDirection)) {
                    this._canResize = true;
                }
            });
            $(this._selector).on('mouseup', (event) => {
                if (Object.values(this._validResizingDirections).includes(this._rezisingDirection)) {
                    this._canResize = false;
                }
            });
            $(document).on('mouseup', (event) => {
                if (Object.values(this._validResizingDirections).includes(this._rezisingDirection)) {
                    this._canResize = false;
                }
            });
        });
        _TextWriterResizer_resizerListenner.set(this, () => {
            $(document).on('mousemove', (event) => {
                if (this._canResize == true) {
                    var mouse = event.originalEvent;
                    if (this._rezisingDirection == this._validResizingDirections.southEst) {
                        $(this._selector).css("width", (mouse.pageX - $(this._selector).offset().left) + "px");
                        $(this._selector).css("height", (mouse.pageY - $(this._selector).offset().top) + "px");
                    }
                    else if (this._rezisingDirection == this._validResizingDirections.est) {
                        $(this._selector).css("width", (mouse.pageX - $(this._selector).offset().left) + "px");
                    }
                    else if (this._rezisingDirection == this._validResizingDirections.south) {
                        $(this._selector).css("height", (mouse.pageY - $(this._selector).offset().top) + "px");
                    }
                }
            });
        });
        this.listen = () => {
            __classPrivateFieldGet(this, _TextWriterResizer_resizingDirectionListenner, "f").call(this);
            __classPrivateFieldGet(this, _TextWriterResizer_canResizeListenner, "f").call(this);
            __classPrivateFieldGet(this, _TextWriterResizer_resizerListenner, "f").call(this);
        };
    }
}
_TextWriterResizer_resizingDirectionListenner = new WeakMap(), _TextWriterResizer_canResizeListenner = new WeakMap(), _TextWriterResizer_resizerListenner = new WeakMap();
function textWriterEventListenner() {
    var textWriterResizer = (new TextWriterResizer());
    var textWriterEventListenner = (new TextWriterWritingEvents());
    textWriterResizer.listen();
    textWriterEventListenner.listen();
}
textWriterEventListenner();
