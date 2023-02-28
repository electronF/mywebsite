import os
import datetime as dt
import tornado.web


class DateTimePicker(tornado.web.UIModule):

    def css_files(self):
        return [os.path.join("css", "datetime_picker.css")]

    def javascript_files(self):
        return [os.path.join("js", "datetime_picker.js")]

    def render(self, datetime:str, key:str):
        try:
            datetime_obj = dt.datetime.fromisoformat(datetime)
            # YYYY-MM-DD HH:MM:SS.mmmmmm
            day = datetime_obj.day
            month = datetime_obj.month
            year = datetime_obj.year
            hour = datetime_obj.hour
            minute = datetime_obj.minute
        except:
            day = "dd"
            month = "mm"
            year = "YYYY"
            hour = "hh"
            minute = "mm"

        return self.render_string(
                "datetime_picker.html", 
                key=key, 
                date = f"{day}/{month}/{year}",
                time = f"{hour}:{minute}",
                date_icon_path = os.path.join("images", "calendar-icon.webp"),
                time_icon_path = os.path.join("images", "clock-icon.webp")
            )