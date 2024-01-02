function createData(
  id,
  name,
  image,
  category,
  gender,
  gurdian,
  bloodGroup,
  email,
  mobileNo
) {
  return {
    id,
    name,
    image,
    category,
    gender,
    gurdian,
    bloodGroup,
    email,
    mobileNo,
  };
}

// const rows = [
//   createData(
//     1,
//     "Enam Ahmed",
//     "https://www.planetsport.com/image-library/land/700/d/david-beckham-england-profile.webp",
//     "Investigation",
//     "Male",
//     "Kalam Chowdhury",
//     "B-",
//     "Ahamedrafy@gmail.com",
//     "01864299319"
//   ),
// ];

const getPatientData = () => {
  const patientsList = [];

  for (let i = 1; i <= 100; i++) {
    const data = createData(
      i,
      `Patient ${i}`,
      "https://www.planetsport.com/image-library/land/700/d/david-beckham-england-profile.webp",
      `Category ${i}`,
      i % 2 === 0 ? "Male" : "Female",
      `Doctor ${i}`,
      i % 2 === 0 ? "A+" : "B-",
      `patient${i}@example.com`,
      `0${Math.floor(Math.random() * 9000000000) + 1000000000}`
    );

    patientsList.push(data);
  }

  return patientsList;
};

const rows = getPatientData();

export { rows };
