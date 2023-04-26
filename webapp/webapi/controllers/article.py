import tornado

from typing import Dict, Union

from ..models.article import Article
from ..models.author import Author
from ..models.articlesauthors import ArticlesAuthors
from ..models.articlescategories import ArticlesCategories
from ..models.articlescoversimages import ArticlesCoversImages
from ..models.articlesmedia import ArticlesMedia
from ..models.articlesmediareferences import ArticlesMediaReferences
from ..models.articlesreferences import ArticlesReferences

from .basecontroller import BaseController

from ..configs import db, ma



class ArticleController(BaseController, tornado.web.RequestHandler):
    def get(self):
        pass

    def update(self, id:int, article:Dict[str, Union[str, int, bool]]):
        pass

    def post(self, article:Dict[str, Union[str, int, bool]]):
        pass

    def delete(self, id:int):
        #ToDo: fively delete all the corresponfing rows in article authors


        #ToDo: first delete all the corresponding rows in article categories
        #ToDo: second delete all the corresponding rows in article references
        #ToDo: thirdly delete all the corresponding rows in article media
        #ToDo: fourtly delete all the corresponding rows in article media reference

        pass
        
    