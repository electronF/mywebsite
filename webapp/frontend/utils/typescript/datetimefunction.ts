
class DateTimeFormater
{
    static months:String[] = [
        "January", "Febuary", "March", 
        "April", "May", "Jun", 
        "Jully", "August", "September",
        "October", "November", "December"
    ]

    static weekDays:String[] = [
        "Sunday",
        "Monday", 
        "Tuesday", 
        "Wednesday", 
        "Thursday", 
        "Friday", 
        "Saturday"
    ]
    
    static datetime_formater_1(dateTime:Date):String {
        var dateTimeString:String = `${this.weekDays[dateTime.getUTCDay()]},`
        dateTimeString += ` ${dateTime.getUTCDate()} ${this.months[dateTime.getUTCMonth()-1].substring(0, 3)}`
        dateTimeString += ` ${dateTime.getFullYear()}`
        dateTimeString +=  `at ${dateTime.getUTCHours()}:${dateTime.getUTCMinutes}:${dateTime.getUTCSeconds()}`
        return dateTimeString
    }
}