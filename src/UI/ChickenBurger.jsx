import MenuItem from "./MenuItem";

function ChickenBurger() {
  return (
    <div>
      <h1 className="font-menu sm:text-6xl font-extrabold sm:mb-5 text-4xl">
        Chicken
      </h1>
      <div className="px-6">
        <section className="grid grid-cols-1 w-[100%]  gap-y-5 gap-x-2">
          <MenuItem
            title="Normal Chicken Burger"
            imagesrc="/public/meat/chicken burger.jpg"
            description="Breaded chicken with our homemade seasoning  flour,Brioche bun, special ranch sauce,pickle,lettuce"
          />
          <MenuItem
            title="Spicy Chicken Burger"
            imagesrc="/public/meat/spicy chicken burger.jpg"
            description="breaded chicken with our homemade seasoning  flour,Brioche bun, special hot spicy sauce,pickle"
          />
        </section>
      </div>
    </div>
  );
}

export default ChickenBurger;
