function createData(id, name, designation, department, percentege) {
  return {
    id,
    name,
    designation,
    department,
    percentege,
  };
}

const getSetReferalListData = () => {
  const setReferalList = [];

  for (let i = 1; i <= 20; i++) {
    const data = createData(
      i + "na",
      `Name ${i}`,
      `Designation ${i}`,
      `Department`,
      `${i + 2}`
    );

    setReferalList.push(data);
  }

  return setReferalList;
};

const rows = getSetReferalListData();

export { rows };
