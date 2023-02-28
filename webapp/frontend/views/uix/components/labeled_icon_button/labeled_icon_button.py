import os
import tornado.web

from typing import Iterable, List, Optional


class LabeledIconButton(tornado.web.UIModule):
    
    def css_files(self):
        return [os.path.join("css", "labeled_icon_button.css")]
    
    def javascript_files(self) -> Optional[Iterable[str]]:
        return [os.path.join("js", "labeled_icon_button.js")]

    def render(self, icons_paths:List[str], key:str, alt:str = "", button_name:str = "", title:str=""):
        icons_paths.append('')
        icons_paths.append('')

        return self.render_string(
            "labeled_icon_button.html",
            key=key, 
            icon_path1=icons_paths[0],
            icon_path2=icons_paths[2], 
            alt=alt,
            title = title,
            button_name=button_name)