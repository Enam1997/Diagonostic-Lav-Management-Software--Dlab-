function createData(sl, role, staffId, staffName, payout, paidBy, date) {
  return {
    sl,
    role,
    staffId,
    staffName,
    payout,
    paidBy,
    date,
  };
}

const getWithdrawalListData = () => {
  const withdrawalList = [];

  for (let i = 1; i <= 20; i++) {
    const data = createData(
      i,
      `Admin`,
      `${i * i}`,
      `Rahat`,
      `5000`,
      `rafiq`,
      `10/02/2024`
    );

    withdrawalList.push(data);
  }

  return withdrawalList;
};

const rows = getWithdrawalListData();

export { rows };
