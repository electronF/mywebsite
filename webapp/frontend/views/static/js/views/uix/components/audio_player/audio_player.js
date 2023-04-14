var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AudioPlayer_instances, _AudioPlayer_evenListenner;
class AudioPlayer {
    constructor() {
        _AudioPlayer_instances.add(this);
    }
    listen() {
        __classPrivateFieldGet(this, _AudioPlayer_instances, "m", _AudioPlayer_evenListenner).call(this);
    }
}
_AudioPlayer_instances = new WeakSet(), _AudioPlayer_evenListenner = function _AudioPlayer_evenListenner() {
    document.addEventListener('scroll', (event) => {
        var audioPlayer = document.getElementsByClassName('audio-player')[0];
        if (audioPlayer.style.getPropertyValue('position') == 'sticky'
            && (this.audioPlayerTop - audioPlayer.getBoundingClientRect().top) < 0
            && audioPlayer.getBoundingClientRect().top > 10) {
            audioPlayer.style.setProperty('border', 'none');
            audioPlayer.style.setProperty('box-shadow', 'none');
            audioPlayer.style.setProperty('transition', 'all .1s');
        }
        else if (audioPlayer.style.getPropertyValue('position') == 'sticky') {
            audioPlayer.style.setProperty('top', '10px');
            audioPlayer.style.setProperty('border', '2px solid #606C38');
            audioPlayer.style.setProperty('box-shadow', '0 3px 3px 0px #606C38');
            audioPlayer.style.setProperty('transition', 'all .2s');
        }
        this.audioPlayerTop = audioPlayer.getBoundingClientRect().top;
    });
};
class AudioPlayerActions {
    constructor() {
        this.secondsIteration = 10;
        this.secondToDuration = (duration) => {
            var hours = Math.floor(duration / 3600);
            duration = duration % 3600;
            var minutes = Math.floor(duration / 60);
            duration = duration % 60;
            var seconds = Math.floor(duration);
            if (hours > 0)
                return (((hours > 0) ? `${hours}:` : '') + ((minutes < 10) ? '0' : '') + `${minutes}:` + ((seconds < 10) ? '0' : '') + `${seconds.toFixed()}`);
            else
                return (((minutes < 10) ? '0' : '') + `${minutes}:` + ((seconds < 10) ? '0' : '') + seconds.toFixed());
        };
        this.changePosition = (element) => {
            var div = element.parentElement.parentElement;
            var position = div.style.getPropertyValue('position');
            var image = div.getElementsByTagName('img')[0];
            if (position == 'sticky') {
                div.style.setProperty('position', 'relative');
                div.style.setProperty('border', 'none');
                div.style.setProperty('box-shadow', 'none');
                div.style.setProperty('transition', 'all .1s');
                image.src = image.getAttribute('icon2');
            }
            else {
                div.style.setProperty('position', 'sticky');
                div.style.setProperty('top', '10px');
                div.style.setProperty('border', '2px solid #606C38');
                div.style.setProperty('box-shadow', '0 3px 3px 0px #606C38');
                div.style.setProperty('transition', 'all .2s');
                image.src = image.getAttribute('icon1');
            }
        };
        this.changeVoice = (element) => {
            console.log(' Change voice ');
        };
        this.readPrevious = (element) => {
            this.audioElement.currentTime = this.audioElement.currentTime - this.secondsIteration;
        };
        this.playPause = (element) => {
            var image = element.getElementsByTagName('img')[0];
            if (this.soundIsLoaded == false) {
                this.audioElement = document.createElement('audio');
                this.audioElement.src = "/static/sounds/Christophe Mae - 40 ans demain.mp3";
                var timerBarDiv = element.parentElement.parentElement.previousElementSibling;
                var progressBarDiv = element.parentElement.parentElement.previousElementSibling.getElementsByClassName("progress-bar");
                if (progressBarDiv.length > 0) {
                    var elements = progressBarDiv[0].getElementsByClassName("progress-indicator");
                    var elements1 = timerBarDiv?.getElementsByClassName("passed-time");
                    var elements2 = timerBarDiv?.getElementsByClassName("duration");
                    this.audioElement.oncanplay = (event) => {
                        if (elements2?.length > 0) {
                            elements2[0].innerHTML = `${this.secondToDuration(this.audioElement.duration)}`;
                        }
                        if (elements?.length > 0) {
                            elements[0].setAttribute('max', '' + (isNaN(this.audioElement.duration) ? 1 : this.audioElement.duration));
                        }
                    };
                    this.audioElement.onended = (event) => {
                        image.src = "/static/images/cicle-filled-play-icon-1.webp";
                    };
                    if (elements?.length > 0) {
                        this.audioElement.ontimeupdate = (event) => {
                            elements[0].setAttribute('value', `${this.audioElement.currentTime}`);
                            // elements[0].setAttribute('max', `${Math.max(this.audioElement.currentTime, 1)}`)
                            // if(isNaN(this.audioElement.duration))
                            // {
                            //     if(elements2?.length > 0)
                            //     {
                            //         console.log('here 2')
                            //         elements2[0].innerHTML = `${this.secondToDuration(this.audioElement.currentTime)}`
                            //     }
                            // }
                            if (elements1?.length > 0) {
                                elements1[0].innerHTML = `${this.secondToDuration(this.audioElement.currentTime)}`;
                            }
                        };
                    }
                }
                this.soundIsLoaded = true;
            }
            if (this.audioElement.paused == true) {
                this.audioElement.play();
                image.src = "/static/images/cicle-filled-pause-icon-1.webp";
            }
            else {
                this.audioElement.pause();
                image.src = "/static/images/cicle-filled-play-icon-1.webp";
            }
        };
        this.readNext = (element) => {
            this.audioElement.currentTime = this.audioElement.currentTime + this.secondsIteration;
        };
        this.changeSpeed = (element) => {
            var speed = parseFloat(element.getAttribute('value'));
            speed = Math.max((speed + 1) % 4, 1);
            element.setAttribute('value', `${speed}`);
            element.textContent = `${speed}.0×`;
            this.audioElement.playbackRate = speed;
        };
        this.onThumbsMove = () => {
            $('.progress-indicator').on('mouseup', (event) => {
                var value = event.currentTarget.valueAsNumber;
                if (this.soundIsLoaded) {
                    this.audioElement.currentTime = value;
                }
            });
            $('.progress-indicator').on('mouseup', (event) => {
                var value = event.currentTarget.valueAsNumber;
                if (this.soundIsLoaded) {
                    this.audioElement.currentTime = value;
                }
            });
            $('.progress-indicator').on('mousedown', (event) => {
                var value = event.currentTarget.valueAsNumber;
                if (this.soundIsLoaded) {
                    this.audioElement.currentTime = value;
                }
            });
        };
        this.soundIsLoaded = false;
        this.audioElement = null;
    }
}
var audioPlayerActions = new AudioPlayerActions();
audioPlayerActions.onThumbsMove();
var audioPlayerFunctions = {
    'changePosition': audioPlayerActions.changePosition,
    'changeVoice': audioPlayerActions.changeVoice,
    'readPrevious': audioPlayerActions.readPrevious,
    'playPause': audioPlayerActions.playPause,
    'readNext': audioPlayerActions.readNext,
    'changeSpeed': audioPlayerActions.changeSpeed,
};
var audioListenner = (new AudioPlayer()).listen();
