import os
import tornado.web

import frontend.constants.path as frontend_path


class ArticleEditor(tornado.web.UIModule):

    def css_files(self):
        #if the css file is in the same path as the python file, 
        # don't use full path give only the name of the css file
        return [os.path.join("css", "article_editor.css")]

    # def embedded_javascript(self):
    #     return f"console.log(1+{self.data});"

    def render(self):
        
        return self.render_string(
            "article_editor.html", 
            title="Article editor",
            buttons_of_style_details = [
                {"icon_path": os.path.join("images", "bold-icon.webp")},
                {"icon_path": os.path.join("images", "italic-icon.webp")},
                {"icon_path": os.path.join("images", "underline-icon.webp")},
                {"icon_path": os.path.join("images", "strikethrough-icon.webp")}
            ],
            buttons_of_text_alignment_details = [
                {"icon_path": os.path.join("images", "align-left-icon.webp")},
                {"icon_path": os.path.join("images", "align-center-icon.webp")},
                {"icon_path": os.path.join("images", "align-right-icon.webp")},
            ],
            buttons_of_blocks_details = [
                {"icon_path": os.path.join("images", "block-icon.webp")},
            ],
            buttons_of_media_details = [
                {"icon_path": os.path.join("images", "smiley-icon.webp")},
                {"icon_path": os.path.join("images", "filled-image-icon.webp")},
                {"icon_path": os.path.join("images", "video-icon.webp")}
            ]
        )