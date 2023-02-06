export {  CreateScheduleList }

var  CreateScheduleList = (schedules)=>{
    schedules = schedules.split(";");
    for (var i = 0; i < schedules.length; i++) {
        schedules[i] = schedules[i].split(",");
        schedules[i][0] = schedules[i][0].substring(16);
    }
    return schedules
}