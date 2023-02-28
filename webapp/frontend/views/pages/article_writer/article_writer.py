import os
import tornado.ioloop
import tornado.web

from api.modelsDTO.authors import AuthorDTO


class ArticleWriterHandler(tornado.web.RequestHandler):

    def get(self, author_:AuthorDTO = None):
        self.render(
            "article_writer.html", 
            title="Article Writer", 
            title_placeholder = "Write a title of the article here",
            description_placeholder = "Write a short description of the article here",
            title_maxlength = 100,
            description_maxlength = 250,

            toolsbar_button_description = [
                {
                    "key": 1,
                    "button_name": "file",
                    "title": "Click here to start a new article",
                    "alt": "", 
                    "icon_path": [
                                    os.path.join("images", "file-icon-primary.webp"), 
                                    os.path.join("images", "file-icon-secondary.webp")
                                ]
                },
                {
                    "key": 2,
                    "button_name": "save",
                    "title": "Click here to save the article on drift",
                    "alt": "", 
                    "icon_path": [
                                    os.path.join("images", "save-icon-primary.webp"), 
                                    os.path.join("images", "save-icon-secondary.webp")
                                ]
                },
                {
                    "key": 3,
                    "button_name": "export",
                    "title": "Click here to export the article",
                    "alt": "", 
                    "icon_path": [
                                    os.path.join("images", "download-icon-primary.webp"), 
                                    os.path.join("images", "download-icon-secondary.webp")
                                ]
                },
                {
                    "key": 4,
                    "button_name": "delete",
                    "title": "Click here to delete the article",
                    "alt": "", 
                    "icon_path": [
                                    os.path.join("images", "trash-icon-primary.webp"), 
                                    os.path.join("images", "trash-icon-secondary.webp")
                                ]
                }
                
            ],

            disposition_button_details = [
                {
                    'icon_path':os.path.join("images", "disposition-horizontal-icon.webp"),
                    'key':'horizontal',
                    'title':'Put editor in left of renderer',
                    'alt':'editor in left of rendered'
                },
                {
                    'icon_path':os.path.join("images", "disposition-horizontal-reversed-icon.webp"),
                    'key':'horizontal-reversed',
                    'title':'Put editor in right of renderer',
                    'alt':'editor in right of renderer'
                },
                {
                    'icon_path':os.path.join("images", "disposition-horizontal-unactivated-icon.webp"), 
                    'key':'horizontal-unactivated',
                    'title':'Hide renderer',
                    'alt':'hide renderer'
                },
                {
                    'icon_path':os.path.join("images", "disposition-horizontal-reversed-unactivated-icon.webp"),
                    'key':'horizontal-reversed-unactivated',
                    'title':'Hide editor',
                    'alt':'hide editor'
                },
                {
                    'icon_path':os.path.join("images", "disposition-vertical-icon.webp"),
                    'key':'vertical',
                    'title':'Puut editor in top of render',
                    'alt':'editor in top of renderer'
                },
                {
                    'icon_path':os.path.join("images", "disposition-vertical-reversed-icon.webp"),
                    'key':'vertical-reversed',
                    'title':'Put editor in bottom of render',
                    'alt':'editor in bottom of renderer'
                },
            ],

            current_author = AuthorDTO(
                name = "Author name",
                surname = "Author surname",
                profile_image = "",
                miniature = os.path.join("images", "avatar-image.webp")
            ),

            list_authors = [
                AuthorDTO(
                    name = "Author name",
                    surname = "Author surname",
                    profile_image= "",
                    miniature = os.path.join("images", "avatar-image.webp")
                ),
                AuthorDTO(
                    name = "Author name 1",
                    surname = "Author surname 1",
                    profile_image= "",
                    miniature = os.path.join("images", "avatar-image-kids-1.webp")
                )
            ],

            list_categories = [
                "Data science", 'machine learning', 'Python'
            ],

            list_tags = [
                'programming', 'coding' ,'data science'
            ]
        )
