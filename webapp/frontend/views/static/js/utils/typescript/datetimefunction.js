class DateTimeFormater {
    static datetime_formater_1(dateTime) {
        var dateTimeString = `${this.weekDays[dateTime.getUTCDay()]},`;
        dateTimeString += ` ${dateTime.getUTCDate()} ${this.months[dateTime.getUTCMonth() - 1].substring(0, 3)}`;
        dateTimeString += ` ${dateTime.getFullYear()}`;
        dateTimeString += `at ${dateTime.getUTCHours()}:${dateTime.getUTCMinutes}:${dateTime.getUTCSeconds()}`;
        return dateTimeString;
    }
    static secondToDuration(duration) {
        var hours = Math.ceil(duration / 3600);
        var minutes = Math.ceil((duration - hours * 3600) / 60);
        var seconds = duration - (hours * 60 + minutes) * 60;
        return (hours > 0) ? `${hours}:` : '' + `${minutes}` + (seconds < 10) ? '0' : '' + `${seconds}`;
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
