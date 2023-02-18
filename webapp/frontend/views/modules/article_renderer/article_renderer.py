import os
import tornado.web


class ArticleRenderer(tornado.web.UIModule):
    
    def css_files(self):
        return [os.path.join("css", "article_renderer.css")]
    
    def render(self):
        return self.render_string(
            "article_renderer.html", title="Article renderer")