import os
import tornado.web


class ArticleRenderer(tornado.web.UIModule):
    
    def css_files(self):
        return [os.path.join("css", "article_renderer.css")]
    
    def render(self, key:str, content:str=""):
        return self.render_string(
            "article_renderer.html",
            key = key, 
            content=content,
            title="Article renderer"
        )