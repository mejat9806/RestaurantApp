import MenuItem from "./MenuItem";

function BeefBurger() {
  return (
    <div>
      <h1 className="font-menu sm:text-6xl font-extrabold sm:mb-5 text-4xl">
        BEEF
      </h1>
      <div className=" px-6">
        <section className="grid grid-cols-1 w-[100%]  gap-y-5 gap-x-1">
          <MenuItem
            title="Normal Burger"
            imagesrc="/public/meat/burgerBeef.jpg"
            description="100g Beef patty ,brioche bun , Onions, Tomatoes, Pickles, Lettuce,
              Homemade Sauce and optional cheese"
          />
          <MenuItem
            title="Smash burger"
            imagesrc="/public/meat/smash burger.jpg"
            description="2x100g Beef patty , Onions, Tomatoes, Pickles, Lettuce,brioche bun, Homemade
              Sauce and optional cheese"
          />

          <MenuItem
            title=" Slow Roasted Beef brisket burger"
            imagesrc="/public/meat/slow roast brisket burger.jpg"
            description=" 151g Roasted beef brisket meat,Toasted brioche buns,Sliced
              pickles,Onion,Secret barbeque sauce "
          />
        </section>
      </div>
    </div>
  );
}

export default BeefBurger;
