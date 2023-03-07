"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ArticleWriter_instances, _ArticleWriter_eventListenner, _ArticleWriterDispositionActionBar_instances, _ArticleWriterDispositionActionBar_removeActivateMarkerOnAllDispositionElements, _ArticleWriterDispositionActionBar_addActiveMarkerOnADispositionElement;
Object.defineProperty(exports, "__esModule", { value: true });
const article_1 = require("../../../types/article");
class ArticleWriter {
    constructor() {
        _ArticleWriter_instances.add(this);
        this.article = new article_1.default();
    }
    listen() {
        __classPrivateFieldGet(this, _ArticleWriter_instances, "m", _ArticleWriter_eventListenner).call(this);
    }
}
_ArticleWriter_instances = new WeakSet(), _ArticleWriter_eventListenner = function _ArticleWriter_eventListenner() {
    // $(".actions-bar div.labeled-icon-button").on('click', function (event) {
    //     var key = event.currentTarget.getAttribute('key');
    //     console.log(key)
    //     switch (key) {
    //         case "labeled-icon-button-file":
    //             console.log('clicked on file button');
    //             break;
    //         case "labeled-icon-button-save":
    //             console.log('clicked on save button');
    //             break;
    //         case "labeled-icon-button-export":
    //             console.log('clicked on export button');
    //             break;
    //         case "labeled-icon-button-delete":
    //             console.log('clicked on delete button');
    //             break;
    //     }
    // });
    $("div.article-title input").on("keyup", (event) => {
        var field = event.currentTarget;
        var temp_max_length = $(field).prop("maxlength");
        var max_length = 0;
        if (isNaN(temp_max_length)) {
            max_length = 100;
        }
        else {
            max_length = parseInt(temp_max_length);
        }
        var value = "" + ($(field).val());
        if (value.length > max_length) {
            $(field).val(value.substring(0, max_length));
        }
        $("div.article-title span.character-counter").text((value.length) + "/" + max_length);
    });
    $("div.article-short-description textarea").on("keyup", (event) => {
        var field = event.currentTarget;
        var temp_max_length = $(field).prop("maxlength");
        var max_length = 0;
        if (isNaN(temp_max_length)) {
            max_length = 250;
        }
        else {
            max_length = parseInt(temp_max_length);
        }
        var value = "" + ($(field).val());
        if (value.length > max_length) {
            $(field).val(value.substring(0, max_length));
        }
        $("div.article-short-description span.character-counter").text((value.length) + "/" + max_length);
    });
};
class ArticleWriterDispositionActionBar {
    constructor() {
        _ArticleWriterDispositionActionBar_instances.add(this);
        this._this = this;
        this.editorInTop = (event) => {
            event.stopPropagation();
            $('.article-editor').css({ "display": "flex" });
            $('.article-renderer').css({ "display": "flex" });
            $('.article-content').css({ "flex-direction": "column" });
            __classPrivateFieldGet(this, _ArticleWriterDispositionActionBar_instances, "m", _ArticleWriterDispositionActionBar_removeActivateMarkerOnAllDispositionElements).call(this);
            __classPrivateFieldGet(this, _ArticleWriterDispositionActionBar_instances, "m", _ArticleWriterDispositionActionBar_addActiveMarkerOnADispositionElement).call(this, event.originalTarget);
        };
        this.editorInBottom = (event) => {
            $('.article-editor').css({ "display": "flex" });
            $('.article-renderer').css({ "display": "flex" });
            $('.article-content').css({ "flex-direction": "column-reverse" });
            __classPrivateFieldGet(this, _ArticleWriterDispositionActionBar_instances, "m", _ArticleWriterDispositionActionBar_removeActivateMarkerOnAllDispositionElements).call(this);
            __classPrivateFieldGet(this, _ArticleWriterDispositionActionBar_instances, "m", _ArticleWriterDispositionActionBar_addActiveMarkerOnADispositionElement).call(this, event.originalTarget);
        };
        this.editorInLeft = (event) => {
            $('.article-editor').css({ "display": "flex" });
            $('.article-renderer').css({ "display": "flex" });
            $('.article-content').css({ "flex-direction": "row" });
            __classPrivateFieldGet(this, _ArticleWriterDispositionActionBar_instances, "m", _ArticleWriterDispositionActionBar_removeActivateMarkerOnAllDispositionElements).call(this);
            __classPrivateFieldGet(this, _ArticleWriterDispositionActionBar_instances, "m", _ArticleWriterDispositionActionBar_addActiveMarkerOnADispositionElement).call(this, event.originalTarget);
        };
        this.editorInRight = (event) => {
            $('.article-editor').css({ "display": "flex" });
            $('.article-renderer').css({ "display": "flex" });
            $('.article-content').css({ "flex-direction": "row-reverse" });
            __classPrivateFieldGet(this, _ArticleWriterDispositionActionBar_instances, "m", _ArticleWriterDispositionActionBar_removeActivateMarkerOnAllDispositionElements).call(this);
            __classPrivateFieldGet(this, _ArticleWriterDispositionActionBar_instances, "m", _ArticleWriterDispositionActionBar_addActiveMarkerOnADispositionElement).call(this, event.originalTarget);
        };
        this.editorOnly = (event) => {
            $('.article-editor').css({ "display": "flex" });
            $('.article-renderer').css({ "display": "none" });
            $('.article-content').css({ "flex-direction": "row" });
            __classPrivateFieldGet(this, _ArticleWriterDispositionActionBar_instances, "m", _ArticleWriterDispositionActionBar_removeActivateMarkerOnAllDispositionElements).call(this);
            __classPrivateFieldGet(this, _ArticleWriterDispositionActionBar_instances, "m", _ArticleWriterDispositionActionBar_addActiveMarkerOnADispositionElement).call(this, event.originalTarget);
        };
        this.editorHide = (event) => {
            $('.article-editor').css({ "display": "none" });
            $('.article-renderer').css({ "display": "flex" });
            $('.article-content').css({ "flex-direction": "row" });
            __classPrivateFieldGet(this, _ArticleWriterDispositionActionBar_instances, "m", _ArticleWriterDispositionActionBar_removeActivateMarkerOnAllDispositionElements).call(this);
            __classPrivateFieldGet(this, _ArticleWriterDispositionActionBar_instances, "m", _ArticleWriterDispositionActionBar_addActiveMarkerOnADispositionElement).call(this, event.originalTarget);
        };
    }
    showArticleReference(event) {
        var element = event.originalTarget.nextElementSibling;
        if (element.classList.contains("bg-secondary-color")) {
            element.classList.remove("bg-secondary-color");
        }
        event.originalTarget.classList.add("bg-secondary-color");
        $(".article-reference").css({ "display": "flex" });
    }
    hideArticleReference(event) {
        var element = event.originalTarget.previousElementSibling;
        if (element.classList.contains("bg-secondary-color")) {
            element.classList.remove("bg-secondary-color");
        }
        event.originalTarget.classList.add("bg-secondary-color");
        $(".article-reference").css({ "display": "none" });
    }
}
_ArticleWriterDispositionActionBar_instances = new WeakSet(), _ArticleWriterDispositionActionBar_removeActivateMarkerOnAllDispositionElements = function _ArticleWriterDispositionActionBar_removeActivateMarkerOnAllDispositionElements() {
    for (var element of $('.editor-disposition .icon-button')) {
        if (element.classList.contains("active-disposition-icon-button")) {
            element.classList.remove("active-disposition-icon-button");
            element.classList.add("unactive-disposition-icon-button");
        }
    }
}, _ArticleWriterDispositionActionBar_addActiveMarkerOnADispositionElement = function _ArticleWriterDispositionActionBar_addActiveMarkerOnADispositionElement(element) {
    if (element.tagName.toLowerCase() === "img") {
        element = element.parentElement;
    }
    if (element.classList.contains("unactive-disposition-icon-button")) {
        element.classList.remove("unactive-disposition-icon-button");
    }
    element.classList.add("active-disposition-icon-button");
};
class ArticleWriterActionsBar {
    new() {
        console.log('new article');
    }
    saveInDraft() {
        console.log('save article');
    }
    export() {
        console.log('export article');
    }
    delete() {
        console.log('delete article');
    }
    publish() {
        console.log('publish article');
    }
}
// Note: It is not good to directly access to the ArticleWriterActionBar class because
// a context can exist. Also a mapping object is better because it help to escape overwriting
// a variale if this one is use to save function link
var articleWriterActionsBar = new ArticleWriterActionsBar();
var articleWriterDispositionActionBar = new ArticleWriterDispositionActionBar();
var articleWriterFunctions = {
    'resetArticle': articleWriterActionsBar.new,
    'saveArticle': articleWriterActionsBar.saveInDraft,
    'exportArticle': articleWriterActionsBar.export,
    'deleteArticle': articleWriterActionsBar.delete,
    'publishArticle': articleWriterActionsBar.publish,
    'showLeftPaned': articleWriterDispositionActionBar.showArticleReference,
    'hideLeftPaned': articleWriterDispositionActionBar.hideArticleReference,
    'editorInTop': articleWriterDispositionActionBar.editorInTop,
    'editorInBottom': articleWriterDispositionActionBar.editorInBottom,
    'editorInLeft': articleWriterDispositionActionBar.editorInLeft,
    'editorInRight': articleWriterDispositionActionBar.editorInRight,
    'editorOnly': articleWriterDispositionActionBar.editorOnly,
    'rendererOnly': articleWriterDispositionActionBar.editorHide
};
$($(".editor-disposition .icon-button")[4]).trigger('click');
