import os
import tornado.web

from typing import List


class LessDescriptiveArticleFrame(tornado.web.UIModule):
    def css_files(self):
        return [os.path.join("css", "less_descriptive_article_frame.css")]

    def render(self, key:str, author_full_name:str, author_image_path:str, article_title:str, article_image_path:str, categories:List[str]):
        return self.render_string(
            "less_descriptive_article_frame.html",
            author_full_name = author_full_name,
            categories = categories,
            article_title = article_title,
            author_image_path = author_image_path,
            article_image_path = article_image_path
        )