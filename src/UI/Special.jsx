import SpecialItem from "./specialItem";

const specialStuff = [
  {
    tittle: "BBQ",
    desc: "We also served a bunch of BBQ meat like Beef Brisket,Steak,Back Ribs,Short Ribs and homemade sausages but ONLY for weekends",
    img: "/public/meat/brisket.jpg",
  },
  {
    tittle: "HOTDOG",
    desc: "We also sold hotdog with variety of topping from Homemade Ranch ,special sauce ,gravy ,korean spicy sauce and many more",
    img: "/public/meat/hotdog.jpg",
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
    <div className=" h-full flex sm:justify-center flex-col mb-11 w-full sm:flex-row">
      {specialStuff.map((special) => (
        <SpecialItem special={special} key={special.tittle} />
      ))}
    </div>
  );
}

export default Special;
