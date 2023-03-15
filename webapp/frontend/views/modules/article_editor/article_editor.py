import os
import tornado.web

import frontend.constants.python.path as frontend_path


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
            ],
            text_styles = [
                'Text body',
                'Title',
                'Title 1',
                'Title 2',
                'Title 3',
                'Title 4',
                'Title 5',
                'Title 6',
            ],
            font_sizes = [
                            "6 pt", "7pt", "8 pt", "9 pt",
                            "10 pt", "10.5 pt", "11pt", "12 pt",
                            "13 pt", "14 pt", "15 pt", "16 pt",
                            "18 pt", "20 pt", "21 pt", "22 pt",
                            "24 pt", "26 pt", "28 pt", "32 pt",
                            "36 pt", "40 pt", "42 pt", "44 pt",
                            "48 pt", "54 pt", "60 pt", "66pt",
                            "72 pt", "80 pt", "88 pt", "96 pt"
                        ],
            font_weights = [
                            "light", "regular", "medium", "bold", 
                            "black"
                        ]
        )