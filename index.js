// Your code here
function createEmployeeRecord(array) {
    const record = {} 
    record.firstName = array[0];
    record.familyName = array[1];
    record.title = array[2];
    record.payPerHour = array[3];
    record.timeInEvents = []
    record.timeOutEvents = []
    return record;
}

function createEmployeeRecords(arrayofarrays) {
    return arrayofarrays.map((array) => createEmployeeRecord(array));

}

function createTimeInEvent(object, datetime){
    let [date, hour] = datetime.split(' ');
    object.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour),
        date
    })
    return object;
}

function createTimeOutEvent(object, datetime) {
    let [date, hour] = datetime.split(' ');
    object.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date
    })
    return object;
}

function hoursWorkedOnDate(object, date) {
    const inWork = object.timeInEvents.find((event) => {
        return event.date === date;

    })

    const outWork = object.timeOutEvents.find((event) => {
        return event.date === date;
    })

    return (outWork.hour - inWork.hour) / 100

}

function wagesEarnedOnDate(object, date) {
    
}