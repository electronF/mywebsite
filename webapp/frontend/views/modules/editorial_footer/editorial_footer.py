import os
import tornado.web

import frontend.constants.path as frontend_path


class EditorialFooter(tornado.web.UIModule):

    def css_files(self):
        #if the css file is in the same path as the python file, 
        # don't use full path give only the name of the css file
        return [os.path.join("css", "editorial_footer.css")]

    # def embedded_javascript(self):
    #     return f"console.log(1+{self.data});"

    def render(self):
        
        return self.render_string(
            "editorial_footer.html", 
            root_url = "#",
            copyright = "Copyright © 2023 Blog name . All right reserved",
            website_name = "Blog name",
            alert_message = "This site is governed by express terms of use. By using this site, \
you signify your agreement to be bound by these Universal Terms of Use." ,
            social_media_buttons_details = [
                {"icon_path": os.path.join("images", "facebook-icon.webp"), 'alt':'facebook', 'title':'Facebook', 'link':'#'},
                {"icon_path": os.path.join("images", "twitter-icon.webp"), 'alt':'twitter', 'title':'Twitter', 'link':'#'},
                {"icon_path": os.path.join("images", "linkedin-icon.webp"), 'alt':'linkedin', 'title':'LinkedIn', 'link':'#'},
                {"icon_path": os.path.join("images", "youtube-icon.webp"), 'alt':'youtube', 'title':'YouTube', 'link':'#'}
            ],
            links_details = [
                {"name": "Agreements and Policies", "href":"#"},
                {"name": "Privacy Policy", "href":"#"},
                {"name": "About us", "href":"#"},
                {"name": "Contact", "href":"#"},
                {"name": "Cookies", "href":"#"},
            ]

        )