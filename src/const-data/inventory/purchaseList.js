function createData(
  billNo,
  supplierName,
  purchaseStatus,
  paymentStatus,
  purchaseDate,
  netPayable,
  paid,
  due,
  remarks
) {
  return {
    billNo,
    supplierName,
    purchaseStatus,
    paymentStatus,
    purchaseDate,
    netPayable,
    paid,
    due,
    remarks,
  };
}

const getPurchaseListData = () => {
  const purchaseList = [];

  for (let i = 1; i <= 9; i++) {
    const data = createData(
      i,
      `Supplier Name ${i}`,
      `Recived`,
      `Unpaid`,
      `2024/01/13`,
      7000,
      0,
      7000,
      `bul in reference`
    );

    purchaseList.push(data);
  }

  return purchaseList;
};

const rows = getPurchaseListData();

export { rows };
