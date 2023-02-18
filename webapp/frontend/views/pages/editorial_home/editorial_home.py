import os
import tornado.ioloop
import tornado.web

import frontend.constants.path as frontend_path


class EditorialHomeHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("editorial_home.html", title="Editoiral Home")
