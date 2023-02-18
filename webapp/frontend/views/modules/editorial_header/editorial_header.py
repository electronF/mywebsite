import os
import tornado.web

import frontend.constants.path as frontend_path

from api.modelsDTO.authors import AuthorDTO


class EditorialHeader(tornado.web.UIModule):

    def css_files(self):
        #if the css file is in the same path as the python file, 
        # don't use full path give only the name of the css file
        return [os.path.join("css", "editorial_header.css")]

    # def embedded_javascript(self):
    #     return f"console.log(1+{self.data});"

    def render(self, author:AuthorDTO):
        
        return self.render_string(
            "editorial_header.html", 
            root_link = "#",
            logo_details = {
                "logo_path": "", #os.path.join("images", "bold-icon.webp")
                "alt": "blog name",
                'title': 'blog name',
                "website_name": "Blog name"
            },
            author_details = author  
        )