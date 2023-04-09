import os
import tornado.ioloop
import tornado.web


class ArticleViewer(tornado.web.RequestHandler):
    def get(self):
        self.render("index.html", title="Home")
