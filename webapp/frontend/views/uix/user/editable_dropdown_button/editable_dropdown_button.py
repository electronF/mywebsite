import os
import tornado.web

from typing import List 


class EditableDropDownButton(tornado.web.UIModule):

    def css_files(self):
        return [os.path.join("css", "editable_dropdown_button.css")]

    def javascript_files(self):
        return [os.path.join("js", "editable_dropdown_button.js")]

    def render(self, key:str, items:List[str], default_value:str = "", placeholder:str = "", alt:str = "", title:str = ""):
        return self.render_string(
                "editable_dropdown_button.html", key=key, 
                icon_path=os.path.join("images", "dropdown-icon.webp"), alt=alt,
                default_value= default_value, placeholder = placeholder,
                title=title, items=items
            )