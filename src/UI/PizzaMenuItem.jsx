import MenuItem from "./MenuItem";

function PizzaMenuItem() {
  return (
    <div className="sm:grid sm:grid-cols-2 flex flex-col">
      <MenuItem
        title="Classic BBQ Delight Pizza"
        imagesrc="/public/meat/pizza bbq.jpg"
        description="Hand stretch pizza  with tomato sauce and Parmesan Cheese ,topping with fresh barbecue meat and homemade barbecue sauce with fresh arugula"
      />
      <MenuItem
        title="Beef Pepperoni"
        imagesrc="/public/meat/pepperoni pizza.jpg"
        description="Pizza  topping with tomato sauce and Parmesan Cheese,topping with beef pepperoni "
      />
      <MenuItem
        title="BBQ Chicken Pizza"
        imagesrc="/public/meat/bbq-chicken-pizza-1-1200x675.jpg"
        description="Pizza topping with Barbecue chicken,Tomato sauce,Smoked Cheddar,mozzarella cheese and red onion"
      />
      <MenuItem
        title="White Pizza"
        imagesrc="/public/meat/white pizza2.jpg"
        description="Made with 3 different cheeses  and drizzled with extra-virgin olive oil, and a lot of garlic"
      />
    </div>
  );
}

export default PizzaMenuItem;
