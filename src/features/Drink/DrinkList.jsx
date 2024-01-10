import { formatCurrency } from "../../utils/helper";

function DrinkList({ drink: { name, price } }) {
  console.log(name, price);

  return (
    <div className=" mx-5 ">
      <p className="flex justify-between text-xl capitalize  text-left">
        <span className="font-menuTitle">{name}</span>
        <span>{formatCurrency(price)}</span>
      </p>
    </div>
  );
}

export default DrinkList;
