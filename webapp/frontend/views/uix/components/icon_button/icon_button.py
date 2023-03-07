import os
import tornado.web


class IconButton(tornado.web.UIModule):
    
    def css_files(self):
        return [os.path.join("css", "icon_button.css")]

    def render(self, icon_path:str, key:str, on_click:str = "", alt:str = "", title:str = ""):
        return self.render_string(
            "icon_button.html",
            icon_path=icon_path,
            key=key, 
            on_click = on_click,
            alt=alt,
            title = title)