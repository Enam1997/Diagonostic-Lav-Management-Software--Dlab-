function createData(
  id,
  category,
  name,
  testCode,
  patientPrice,
  productionCost,
  createdBy,
  date
) {
  return {
    id,
    category,
    name,
    testCode,
    patientPrice,
    productionCost,
    createdBy,
    date,
  };
}

const getTestListData = () => {
  const testList = [];

  for (let i = 1; i <= 20; i++) {
    const data = createData(
      i,
      `Category ${i}`,
      `Name ${i}`,
      `${i * i}`,
      `1${Math.floor(Math.random() * 9) + i}`,
      `1${Math.floor(Math.random() * 2) + i}`,
      `Enam ${i}`,
      "02/01/1998"
    );

    testList.push(data);
  }

  return testList;
};

const rows = getTestListData();

export { rows };
