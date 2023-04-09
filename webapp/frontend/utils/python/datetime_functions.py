import datetime

months = [
    "January", "Febuary", "March", 
    "April", "May", "Jun", 
    "Jully", "August", "September",
    "October", "November", "December"
]

week_days = [
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturday", 
    "Sunday"
]


class DateTime:
    
    @staticmethod
    def datetime_formater_1(date_time:datetime.datetime) -> (str):
        return "{}, {} {} {} at {}:{}:{}".format(
            week_days[date_time.weekday], 
            date_time.day, 
            months[date_time.month-1][:3], 
            date_time.year, 
            date_time.hour, 
            date_time.minute, 
            date_time.second
        )
