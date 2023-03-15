import os
import tornado.ioloop
import tornado.web

import frontend.constants.python.path as frontend_path

from api.modelsDTO.authors import AuthorDTO



class EditorialHomeHandler(tornado.web.RequestHandler):
    def get(self, author_:AuthorDTO = None):
        self.render(
            "editorial_home.html", 
            title="Editoiral Home", 
            title_placeholder = "Write a title of the article here",
            description_placeholder = "Write a short description of the article here",
            title_maxlength = 100,
            description_maxlength = 250,

            toolsbar_articles_buttons_description = [
                {
                    "key": "labeled-icon-button-article",
                    "on_click": 'articleWriterFunctions.resetArticle();', #This is from the associated ts file
                    "button_name": "Articles",
                    "title": "Click here to see all the articles",
                    "alt": "", 
                    "icon_path": [
                                    os.path.join("images", "article-icon-primary.webp"), 
                                    os.path.join("images", "article-icon-secondary.webp")
                                ]
                },
                {
                    "key": "labeled-icon-button-draft",
                    "on_click": 'articleWriterFunctions.saveArticle();', #This is from the associated ts file
                    "button_name": "Draft",
                    "title": "Click to see all the drafts",
                    "alt": "", 
                    "icon_path": [
                                    os.path.join("images", "draft-icon-primary.webp"), 
                                    os.path.join("images", "draft-icon-secondary.webp")
                                ]
                },
                {
                    "key": "labeled-icon-button-trash",
                    "on_click": 'articleWriterFunctions.deleteArticle();', #This is from the associated ts file
                    "button_name": "Trash",
                    "title": "Click open the trash",
                    "alt": "", 
                    "icon_path": [
                                    os.path.join("images", "filled-trash-icon-primary.webp"), 
                                    os.path.join("images", "filled-trash-icon-secondary.webp")
                                ]
                } 
            ],

            search_options = [
                "most recent",
                "most old",
                "most view",
            ],

            toolsbar_dispositions_buttons_description = [
                {
                    "key": "labeled-icon-button-list-disposition",
                    "on_click": 'articleWriterFunctions.resetArticle();', #This is from the associated ts file
                    "title": "Show list",
                    "alt": "", 
                    "icon_path": [
                                    os.path.join("images", "list-disposition-icon-primary.webp"), 
                                    os.path.join("images", "list-disposition-icon-secondary.webp")
                                ]
                },
                {
                    "key": "labeled-icon-button-grid-disposition",
                    "on_click": 'articleWriterFunctions.saveArticle();', #This is from the associated ts file
                    "title": "Show grid",
                    "alt": "", 
                    "icon_path": [
                                    os.path.join("images", "grid-disposition-icon-primary.webp"), 
                                    os.path.join("images", "grid-disposition-icon-secondary.webp")
                                ]
                }
            ],

            list_articles = [],
            list_drafts = [],
            list_deleted_articles = [],
            
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
                # LabeledFrameWithButton(
                #     label=label, 
                #     key=f"label-frame-with-button-category-{label}",
                #     all="",
                #     title="Click here to delete this category"
                # ) 
                # for label in ["Data science", 'machine learning', 'Python']
            ],

            list_tags = [
                # LabeledFrameWithButton(
                #     label=label, 
                #     key=f"label-frame-with-button-tags-{label}",
                #     alt="",
                #     title="Click here to delete this tag" 
                # ) 
                # for label in ['programming', 'coding' ,'data science']
            ]
        )
