import os
import tornado.web
import datetime

from webapi.models.article import Article
from webapi.models.author import Author
from webapi.models.category import Category


class ArticleFrame(tornado.web.UIModule):
    
    def javascript_files(self):
        return [os.path.join("js", "views", "uix", "components", "article_frame", "article_frame.js")]

    def css_files(self):
        return [os.path.join("css", "article_frame.css")]

    def render(self, key:str, article:Article):

        article.authors = [
            Author(
                surname = "Surname 1",
                name = "Name 1",
                gender = "male",
                email = "surname1@domain.com",
                about_me = "About me, that is nice",
                account_status = "ACTIVE",
                register_at = datetime.datetime.now()
            ),
            Author(
                surname = "Surname 2",
                name = "Name 2",
                gender = "female",
                email = "surname2@domain.com",
                about_me = "About me, that is nice",
                account_status = "ACTIVE",
                register_at = datetime.datetime.now()
            ),
        ]
        for author in article.authors:
            author.miniature_path = ""

        article.categories = [
            Category(name="Machine learning"),
            Category(name="Natural Language Processing (NLP)"), 
        ]
        article.image = ""
        
        return self.render_string(
            "article_frame.html",
            key=key, 
            article=article)