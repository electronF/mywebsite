import os
import tornado.web


class AudioPlayer(tornado.web.UIModule):
    def css_files(self):
        return [os.path.join("css", "audio_player.css")]

    def render(self, key:str):
        return self.render_string(
            "audio_player.html")