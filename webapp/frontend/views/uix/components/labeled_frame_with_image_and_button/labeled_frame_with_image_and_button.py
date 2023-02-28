import os
import tornado.web


class LabeledFrameWithImageAndButton(tornado.web.UIModule):
    
    def css_files(self):
        return [os.path.join("css", "labeled_frame_with_image_and_button.css")]

    def render(self, label:str, image_path:str, key:str, alt:str = "", title:str = ""):
        return self.render_string(
            "labeled_frame_with_image_and_button.html",
            label = label,
            image_path = image_path,
            icon_path= os.path.join("images", "delete-icon.webp"),
            key=key, 
            alt=alt,
            title = title)