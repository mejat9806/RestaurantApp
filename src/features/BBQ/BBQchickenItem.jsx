import { formatCurrency } from "../../utils/helper";

function BBQchickenItem({ item }) {
  const { name, price, piece } = item;

  return (
    <div className="mx-10 flex justify-between space-y-2 text-left items-center border-black/20 border-b-2">
      <h1 className="font-semibold capitalize text-black">{name}</h1>
      <p className="text-black text-start">{`${
        piece !== null
          ? `${formatCurrency(price)} for ${piece} `
          : `${formatCurrency(price)}`
      }`}</p>
    </div>
  );
}

export default BBQchickenItem;
