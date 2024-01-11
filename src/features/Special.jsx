import SpecialItem from "./Special/SpecialItem";

const specialStuff = [
  {
    tittle: "Wave of Beef",
    desc: "Craft a savory tray of expertly seasoned meats to share with loved ones, turning every bite into a moment of shared joy and indulgence. From succulent skewers to slow-roasted delights, this meatful masterpiece is sure to become the highlight of your communal gatherings.",
    img: "/public/meat/plate_of_meat.webp",
  },
  {
    tittle: "Sandwichs",
    desc: " Savor our distinctive sandwiches, from the classic Philadelphia-style Cheesesteak to bold Korean and Japanese-inspired creations, offering a diverse culinary experience in every bite. Explore a variety of unique flavors that cater to all tastes and elevate your sandwich indulgence. ",
    img: "/public/meat/cheseesteak.webp",
  },
];
/* function Special() {
  return (
    <div className=" h-96 flex space-x-32 ">
      <SpecialItem
        text="We also served bunch of BBQ meat like Beef Brisket,Steak,Back Ribs,Short Ribs and homemade sausages"
        img=""
      >
        BBQ
      </SpecialItem>
      <SpecialItem>HOT DOG</SpecialItem>
    </div>
  );
} */
function Special() {
  return (
    <div className=" h-full flex sm:justify-center flex-col mb-11 w-full sm:flex-row ">
      {specialStuff.map((special) => (
        <SpecialItem special={special} key={special.tittle} />
      ))}
    </div>
  );
}

export default Special;
