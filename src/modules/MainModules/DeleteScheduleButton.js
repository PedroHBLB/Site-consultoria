export { DeleteScheduleButton }

var DeleteScheduleButton = (scheduleScrollbar)=>{
    for (var i = scheduleScrollbar.children.length - 1; i >= 0; i--) {
        scheduleScrollbar.removeChild(scheduleScrollbar.children[i]);
    }
}