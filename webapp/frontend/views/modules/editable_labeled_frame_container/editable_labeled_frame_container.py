import os
import tornado.web

from typing import Iterable, Optional, List


class EditableLabeledFrameContainer(tornado.web.UIModule):
    
    def css_files(self):
        return [os.path.join("css", "editable_labeled_frame_container.css")]
    
    def javascript_files(self) -> Optional[Iterable[str]]:
        return [os.path.join("js", "editable_labeled_frame_container.js")]

    def render(self, labeled_frames:List[object], key:str):
        return self.render_string(
            "editable_labeled_frame_container.html",
            labeled_frames=labeled_frames)