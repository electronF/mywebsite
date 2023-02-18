import os
import random
import tornado.web

from typing import List


class LabeledFrameWithImage(tornado.web.UIModule):
    
    def css_files(self):
        return [os.path.join("css", "labeled_frame_with_image.css")]

    def render(self, label:str, image_path:str, key:str, alt:str = "", title:str = ""):
        return self.render_string(
            "labeled_frame_with_image.html",
            label = label,
            image_path = image_path,
            icon_path= os.path.join("images", "delete-icon.webp"),
            key=key, 
            alt=alt,
            title = title)