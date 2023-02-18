import os
import random
import tornado.web

from typing import List


class LabeledFrameWithButton(tornado.web.UIModule):
    
    def css_files(self):
        return [os.path.join("css", "labeled_frame_with_button.css")]

    def render(self, label:str, key:str, alt:str = "", title:str = ""):
        return self.render_string(
            "labeled_frame_with_button.html",
            label = label,
            icon_path= os.path.join("images", "delete-icon.webp"),
            key=key, 
            alt=alt,
            title = title)