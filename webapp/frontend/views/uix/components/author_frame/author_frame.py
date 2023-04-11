import os
import tornado.web

from typing import List, Dict


class AuthorFrame(tornado.web.UIModule):
    def css_files(self):
        return [os.path.join("css", "author_frame.css")]

    def render(self, key:str, profile_image_path:str, full_name:str, role:str, about:str, profile_link:str, social_media_buttons_details:List[Dict[str, str]]=[]):
        return self.render_string(
            "author_frame.html",
            profile_image_path = profile_image_path,
            full_name = full_name,
            role = role,
            about = about,
            profile_link = profile_link,
            social_media_buttons_details = [
                {"icon_path": os.path.join("images", "facebook-icon-2.webp"), 'alt':'facebook', 'title':'Facebook', 'link':'#'},
                {"icon_path": os.path.join("images", "twitter-icon-2.webp"), 'alt':'twitter', 'title':'Twitter', 'link':'#'},
                {"icon_path": os.path.join("images", "linkedin-icon-2.webp"), 'alt':'linkedin', 'title':'LinkedIn', 'link':'#'},
                {"icon_path": os.path.join("images", "youtube-icon-2.webp"), 'alt':'youtube', 'title':'YouTube', 'link':'#'}
            ],
        )