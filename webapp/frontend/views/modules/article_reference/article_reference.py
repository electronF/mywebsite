import os
import tornado.web

from typing import Dict, Iterable, List, Optional


class ArticleReference(tornado.web.UIModule):
    
    def css_files(self) -> Optional[Iterable[str]]:
        return [os.path.join("css", "article_reference.css")]
    
    def javascript_files(self) -> Optional[Iterable[str]]:
        return [os.path.join("js", "article_reference.js")]
    
    def render(
            self, 
            key:str, 
            display_new_article_button:bool=False,  
            list_authors:List=[], 
            list_categories:List=[], 
            list_tags:List=[], 
            datetimes:Dict={"from":"", "to":""},
            display_datetime_picker:bool=False, 
        ):

        return self.render_string(
            "article_reference.html",
            key = key,
            display_new_article_button = display_new_article_button,
            list_authors=list_authors,
            list_categories=list_categories,
            list_tags=list_tags,
            datetimes = datetimes,
            display_datetime_picker = display_datetime_picker
            )