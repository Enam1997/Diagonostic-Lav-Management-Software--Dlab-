function createData(
  sl,
  photo,
  title,
  buttonTest1,
  buttonUrl1,
  buttonTest2,
  buttonUrl2,
  position
) {
  return {
    sl,
    photo,
    title,
    buttonTest1,
    buttonUrl1,
    buttonTest2,
    buttonUrl2,
    position,
  };
}
const rows = [
  createData(
    1,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/First_Aid_Kit_Flat_Icon_Vector.svg/1200px-First_Aid_Kit_Flat_Icon_Vector.svg.png",
    "Best Digital Experience",
    "View Services",
    "https://www.facebook.com/profile.php?id=100004805746435",
    "Learn More",
    "https://www.facebook.com/profile.php?id=100004805746435",
    "Center"
  ),
  createData(
    2,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/First_Aid_Kit_Flat_Icon_Vector.svg/1200px-First_Aid_Kit_Flat_Icon_Vector.svg.png",
    "Main Heading Some Caption Here",
    "Read More",
    "https://www.facebook.com/profile.php?id=100004805746435",
    "Get Started",
    "https://www.facebook.com/profile.php?id=100004805746435",
    "Center"
  ),
];
export default rows;
