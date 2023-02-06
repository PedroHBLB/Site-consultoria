export { pushSchedule };

var pushSchedule = (schedules, agendas) => {
  schedules.forEach((schedule) => {
    agendas.push([
      schedule.IDOPER,
      schedule.IDTAREFA,
      schedule.DTPREV,
      schedule.DTINIC,
      schedule.DREXEC,
      schedule.STATUS,
      schedule.IDEMP,
      schedule.IDTAREFA,
      schedule.ID
    ]);
  });
};
