import os
import tornado.web


class AudioPlayer(tornado.web.UIModule):
    def javascript_files(self):
        return [os.path.join("js", "views", "uix", "components", "audio_player", "audio_player.js")]

    def css_files(self):
        return [os.path.join("css", "audio_player.css")]

    def render(self, key:str):
        return self.render_string(
            "audio_player.html",
            position_on_click = "audioPlayerFunctions.changePosition(this);",
            voice_on_click = "audioPlayerFunctions.changeVoice(this);",
            previous_on_click = "audioPlayerFunctions.readPrevious(this);",
            play_pause_on_click = "audioPlayerFunctions.playPause(this);",
            next_on_click = "audioPlayerFunctions.readNext(this);",
            speed_on_click = "audioPlayerFunctions.changeSpeed(this);",
            reading_duration = "10:29"
        )