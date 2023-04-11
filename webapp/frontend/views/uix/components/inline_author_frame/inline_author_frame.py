import os
import tornado.web


class InlineAuthorFrame(tornado.web.UIModule):
    def css_files(self):
        return [os.path.join("css", "inline_author_frame.css")]

    def render(self, key:str, profile_image_path:str, full_name:str, role:str, profile_link:str=''):
        return self.render_string(
            "inline_author_frame.html",
            profile_image_path = profile_image_path,
            name = full_name,
            role = role,
            on_click = profile_link
        )