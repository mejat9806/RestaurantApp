import { formatCurrency } from "../utils/helper";

function BBQfishMenuItem({ item }) {
  const { name, price, piece } = item;
  console.log(name);
  return (
    <div className="flex mx-5 lg:mx-0 justify-between space-y-2 text-center items-center border-black/20 border-b-2">
      <h1 className="capitalize font-semibold text-black">{name}</h1>

      <p className="text-black text-start">{`${
        piece !== undefined
          ? `${formatCurrency(price)} for ${piece} `
          : `${formatCurrency(price)}`
      }`}</p>
    </div>
  );
}

export default BBQfishMenuItem;
