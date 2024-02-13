function createData(sl, title, position, publish) {
  return { sl, title, position, publish };
}
const rows = [
  createData(1, "Home", 1, true),
  createData(2, "Appointment", 2, true),
  createData(3, "Doctors", 3, true),
  createData(4, "About Us", 4, false),
  createData(5, "FAQ", 5, true),
  createData(6, "Contact Us", 6, false),
];
export default rows;
