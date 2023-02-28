import os
import tornado.web


class LabeledFrame(tornado.web.UIModule):
    
    def css_files(self):
        return [os.path.join("css", "labeled_frame.css")]

    def render(self, label:str, key:str, alt:str = "", title:str = ""):
        return self.render_string(
            "labeled_frame.html",
            label = label,
            key=key)