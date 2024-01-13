function createData(
  id,
  name,
  code,
  category,
  purchaseUnit,
  saleUnit,
  unitRatio,
  purchasePrice,
  salesPrice,
  remarks
) {
  return {
    id,
    name,
    code,
    category,
    purchaseUnit,
    saleUnit,
    unitRatio,
    purchasePrice,
    salesPrice,
    remarks,
  };
}

const getChemicalListData = () => {
  const chemicalList = [];

  for (let i = 1; i <= 20; i++) {
    const data = createData(
      i,
      `Name ${i}`,
      `${i * i}`,
      `Category ${i}`,
      `Litter`,
      `ml`,
      `10`,
      `1${Math.floor(Math.random() * 2) + i}`,
      `1${Math.floor(Math.random() * 9) + i}`,
      `Buy form vendor`
    );

    chemicalList.push(data);
  }

  return chemicalList;
};

const rows = getChemicalListData();

export { rows };
