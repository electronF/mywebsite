import os
import tornado.ioloop
import tornado.web

from webapi.modelsDTO.authors import AuthorDTO

from webapi.models.article import Article


class ArticleViewer(tornado.web.RequestHandler):

    def get(self, author_:AuthorDTO = None):
        
        self.render(
            "article_viewer.html", 
            title="Aticle Viewer",
            current_author = AuthorDTO(
                name = "Author name",
                surname = "Author surname",
                profile_image = "",
                miniature = os.path.join("images", "avatar-image.webp")
            ),
            article_tags = ["Python", "Coding", "Algorithms"],
            player = {
                "duration": "6:56",
                "buttons":{
                    "play_button":
                    {
                        "icon1_path": os.path.join('images','cicle-filled-play-icon-2.webp'),
                        "icon2_path": os.path.join('images','cicle-filled-pause-icon-3.webp'),
                        "title": "Click here to start or stop reading",
                        "alt": "play-pause",
                        "on_click": "articlesViewerFunctions.readDocument(this);"
                    },
                    "previous_button":
                    {
                        "icon_path": os.path.join('images','previous-play-icon.webp'),
                        "title": "Click here to move back",
                        "alt": "previous",
                        "on_click": ""
                    },
                    "next_button":
                    {
                        "icon_path": os.path.join('images','next-play-icon.webp'),
                        "title": "Click here ti move next",
                        "alt": "next",
                        "on_click": ""
                    },
                    "speed_button":
                    {
                        "icon_path": "",
                        "title": "Click here to change to speed",
                        "alt": "speed",
                        "on_click": ""
                    },
                    "voice_button":
                    {
                        "icon_path": os.path.join('images','voice-recognition-icon.webp'),
                        "title": "Click here to change the voice",
                        "alt": "voice",
                        "on_click": ""
                    }
                }
            },
            author_actions_bar_button_details = {
                'back': {
                    "name": "",
                    "on_click":"articlesViewerFunctions.previous(this);",
                    "icon_path":os.path.join("images", "left-arrow-icon.webp"),
                    "title": "Click here to back to editorial page",
                    "alt":"back"
                },
                'edit': {
                    "name": "Edit",
                    "on_click":"articlesViewerFunctions.openEditor(this)",
                    "icon_path":"",
                    "title": "Click here to edit the article",
                    "alt":""
                },
                'delete':{
                    "name": "Delete",
                    "on_click":"",
                    "icon_path":"",
                    "title": "Click here to delete the article",
                    "alt":""
                }
            },
            dark_searh_icon_path = os.path.join("images", "dark-search-icon.webp"),
            categories = ["Data science"]
        )
