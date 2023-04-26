import os
import tornado.web
import tornado.autoreload
import asyncio

from tornado_sqlalchemy import SQLAlchemy

from frontend.views.pages import IndexHandler
from frontend.views.pages import ArticleWriterHandler
from frontend.views.pages import EditorialHomeHandler
from frontend.views.pages import ArticleViewer

import frontend.constants.python.path as frontend_path
import settings


import mimetypes
mimetypes.add_type("application/javascript", ".js", True)

PORT = 8888

def make_app():
    return tornado.web.Application(
        [
            (r'.', IndexHandler),
            (r'/article/*', ArticleViewer),
            (r'/editorial/*', EditorialHomeHandler),
            (r'/editorial/viewer/*', ArticleViewer),
            (r'/editorial/home', EditorialHomeHandler),
            (r'/editorial/writer/*', ArticleWriterHandler),
            (r"/images/profiles/(.*)", 
                tornado.web.StaticFileHandler, 
                {'path': os.path.join(".", "data", "users", "images", "profiles")}
            ),
            (r"/images/miniatures/(.*)", 
                tornado.web.StaticFileHandler, 
                {'path': os.path.join(".", "data", "users", "images", "miniatures")}
            ),
            (r"/images/covers/(.*)", 
                tornado.web.StaticFileHandler, 
                {'path': os.path.join(".", "data", "users", "images", "covers")}
            ),

            (r"/sounds/(.*)", 
                tornado.web.StaticFileHandler, 
                {'path': os.path.join("sounds")}
            ),
            (r'/favicon.ico', tornado.web.StaticFileHandler, {'path': os.path.join(settings.SETTINGS["static_path"])})
        ],
        **(settings.SETTINGS))

async def main():
    app = make_app()
    app.listen(PORT)
    print(f"I am listen on port: {PORT}")

    shutdown_event = asyncio.Event()
    await shutdown_event.wait()


def autoreload_files():
    import glob

    files = glob.glob("**/*.*", recursive=True)
    for file in files:
        _, extension = os.path.splitext(file)
        if extension in [".py", ".js", ".css"]:
            tornado.autoreload.watch(file)


def watch_sass_files():
    import glob
    import subprocess

    files = glob.glob("**/*.*", recursive=True)
    for file in files:
        path, extension = os.path.splitext(file)
        if extension == ".sdss":
            filename = os.path.basename(path)
            subprocess.call([
                "sass", "--watch", 
                file, ":", 
                os.path.join(
                                ".", "frontend", 
                                "views", "static", 
                                "css", f"{filename}.css"
                            )
            ])   



if __name__ == "__main__":
    # app = make_app()

    # app.listen(PORT)
    # print(f"I am listen on port: {PORT}")

    watch_sass_files()
    
    asyncio.run(main())

    autoreload_files()

    # tornado.ioloop.IOLoop.current().start()
