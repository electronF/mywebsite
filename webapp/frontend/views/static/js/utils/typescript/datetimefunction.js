class DateTimeFormater {
    static datetime_formater_1(dateTime) {
        var dateTimeString = `${this.weekDays[dateTime.getUTCDay()]},`;
        dateTimeString += ` ${dateTime.getUTCDate()} ${this.months[dateTime.getUTCMonth() - 1].substring(0, 3)}`;
        dateTimeString += ` ${dateTime.getFullYear()}`;
        dateTimeString += `at ${dateTime.getUTCHours()}:${dateTime.getUTCMinutes}:${dateTime.getUTCSeconds()}`;
        return dateTimeString;
    }
}
DateTimeFormater.months = [
    "January", "Febuary", "March",
    "April", "May", "Jun",
    "Jully", "August", "September",
    "October", "November", "December"
];
DateTimeFormater.weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
