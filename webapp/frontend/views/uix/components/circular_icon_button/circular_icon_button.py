import os
import random
import tornado.web

from typing import List


class CircularIconButton(tornado.web.UIModule):
    
    def css_files(self):
        return [os.path.join("css", "circular_icon_button.css")]

    def render(self, icon_path:str, key:str, alt:str = "", title:str = ""):
        return self.render_string(
            "circular_icon_button.html",
            icon_path=icon_path,
            key=key, 
            alt=alt,
            title = title)