function createData(
  id,
  supplierName,
  adress,
  contactNumber,
  email,
  companyName,
  productList
) {
  return {
    id,
    supplierName,
    adress,
    contactNumber,
    email,
    companyName,
    productList,
  };
}

const getSupplierListData = () => {
  const supplierList = [];

  for (let i = 1; i <= 9; i++) {
    const data = createData(
      i,
      `Supplier Name ${i}`,
      `Adress  ${i}`,
      `017${i}9874${i}35`,
      `enam${i}${i}@gmail.com `,
      `Company name ${i}`,
      `powder, solpher, proper, helium`
    );

    supplierList.push(data);
  }

  return supplierList;
};

const rows = getSupplierListData();

export { rows };
