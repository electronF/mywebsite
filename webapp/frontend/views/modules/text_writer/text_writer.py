import os
import tornado.web

import frontend.constants.path as frontend_path


class TextWriter(tornado.web.UIModule):

    def css_files(self):
        #if the css file is in the same path as the python file, 
        # don't use full path give only the name of the css file
        return [os.path.join("css", "article_editor.css")]

    def javascript_files(self):
        return [os.path.join("js", "text_writer.js")]

    def render(self, article_content:str):
        
        return self.render_string(
            "text_writer.html", article_content=article_content, placeholder="Write your article here" 
        )