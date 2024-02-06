function createData(id, name, image, designation, department, email, mobileNo) {
    return {
      id,
      name,
      image,
      designation,
      department,
      email,
      mobileNo,
    };
  }
  
  const getDeactivateEmployeeListData = () => {
    const deactivateEmployeeList = [];
  
    for (let i = 1; i <= 20; i++) {
      const data = createData(
        i + "na",
        `Name ${i}`,
        "https://www.planetsport.com/image-library/land/700/d/david-beckham-england-profile.webp",
        `Designation ${i}`,
        `Department`,
        `mdenamahmedchowdhury@gmail.com`,
        `01864299319`
      );
  
      deactivateEmployeeList.push(data);
    }
  
    return deactivateEmployeeList;
  };
  
  const rows = getDeactivateEmployeeListData();
  
  export { rows };
  