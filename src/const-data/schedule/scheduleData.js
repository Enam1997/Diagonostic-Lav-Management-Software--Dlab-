function createData(
  id,
  doctor,
  consultationFees,
  weekDay,
  timeStart,
  timeEnd,
  perPatientDuration
) {
  return {
    id,
    doctor,
    consultationFees,
    weekDay,
    timeStart,
    timeEnd,
    perPatientDuration,
  };
}

const getScheduleData = () => {
  const scheduleList = [];

  for (let i = 1; i <= 20; i++) {
    const data = createData(
      i,
      `Doctor ${i}`,
      `${i * i}`,
      `Sunday`,
      `09:15 AM`,
      `06:15 PM`,
      `15`
    );

    scheduleList.push(data);
  }

  return scheduleList;
};

const rows = getScheduleData();

export { rows };
