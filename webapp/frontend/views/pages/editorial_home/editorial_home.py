import os
import datetime
import tornado.ioloop
import tornado.web

from webapi.modelsDTO.authors import AuthorDTO

from webapi.models.article import Article



class EditorialHomeHandler(tornado.web.RequestHandler):
    def get(self, author_:AuthorDTO = None):
        text_content = """On the contrary, the dominant cause of the independent knowledge impacts strongly on every constructive criticism. In respect of some features of the significant improvement this potential role models. This can eventually cause certain issues the sustainability of the project and The Project of Sweeping Software (Jessie Lindgren in The Book of the Operational System) 
Frankly speaking, the problem of after the completion of the linguistic approach is of a great interest. In addition, within the framework of the essential component gives an overview of the storage area. This seems to be a methodically obvious step towards the outline design stage. A solution might be in a combination of competitive development and manufacturing and key principles the proper architecture of the grand strategy.  
The majority of examinations of the standard impacts show that the lack of knowledge of the edge of the major area of expertise becomes extremely important for any integration prospects. This may be done through the relational approach.  
Whatever the case, criteria of some of the storage area this major decisions, that lie behind the resource management. This can eventually cause certain issues the risks of the preliminary action plan.  
As concerns the evolution of the content strategy, it can be quite risky. """
        description = """On the contrary, the dominant cause of the independent knowledge impacts strongly on every constructive criticism. In respect of some features of the significant improvement this potential role models. This can eventually cause certain issues the sustainability of the project and The Project of Sweeping Software (Jessie Lindgren in The Book of the Operational System) 
Frankly speaking, the problem of after the completion of the linguistic approach is of a great interest."""[:250]

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
                    "on_click": 'editorialHomeFunctions.displayArticlesAsList();', #This is from the associated ts file
                    "title": "Show list",
                    "alt": "", 
                    "icon_path": [
                                    os.path.join("images", "list-disposition-icon-primary.webp"), 
                                    os.path.join("images", "list-disposition-icon-secondary.webp")
                                ]
                },
                {
                    "key": "labeled-icon-button-grid-disposition",
                    "on_click": 'editorialHomeFunctions.displayArticlesAsGrid();', #This is from the associated ts file
                    "title": "Show grid",
                    "alt": "", 
                    "icon_path": [
                                    os.path.join("images", "grid-disposition-icon-primary.webp"), 
                                    os.path.join("images", "grid-disposition-icon-secondary.webp")
                                ]
                }
            ],

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
            ],
            list_articles = [
                Article(
                    title="Article name", 
                    description=description, 
                    content=text_content, 
                    update_at=datetime.datetime.now()
                ),
                Article(
                    title="Article name", 
                    description=description, 
                    content=text_content, 
                    update_at=datetime.datetime.now()
                ),
                Article(
                    title="Article name", 
                    description=description, 
                    content=text_content, 
                    update_at=datetime.datetime.now()
                ),
                Article(
                    title="Article name", 
                    description=description, 
                    content=text_content, 
                    update_at=datetime.datetime.now()
                ),
                Article(
                    title="Article name", 
                    description=description, 
                    content=text_content, 
                    update_at=datetime.datetime.now()
                ),
                Article(
                    title="Article name", 
                    description=description, 
                    content=text_content, 
                    update_at=datetime.datetime.now()
                ),
                Article(
                    title="Article name", 
                    description=description, 
                    content=text_content, 
                    update_at=datetime.datetime.now()
                ),
                Article(
                    title="Article name", 
                    description=description, 
                    content=text_content, 
                    update_at=datetime.datetime.now()
                ),
                Article(
                    title="Article name", 
                    description=description, 
                    content=text_content, 
                    update_at=datetime.datetime.now()
                )
            ]
        )
