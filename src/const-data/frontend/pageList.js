function createData(sl, pageTitle, menuTitle, url) {
  return {
    sl,
    pageTitle,
    menuTitle,
    url,
  };
}
const rows = [
  createData(
    1,
    "Test Page",
    "Menus Title",
    "https://www.facebook.com/profile.php?id=100004805746435"
  ),
  createData(
    2,
    "Test Page ",
    "Menus Title 2",
    "https://www.facebook.com/profile.php?id=100004805746435"
  ),
];
export default rows;
