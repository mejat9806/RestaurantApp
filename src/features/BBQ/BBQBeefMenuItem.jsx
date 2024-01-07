/* eslint-disable no-unused-vars */

import { formatCurrency } from "../../utils/helper";

function BBQBeefMenuItem({ item }) {
  const { name, price, weight } = item;
  return (
    <div className="flex justify-between mx-10 space-y-2 items-center border-black/20 border-b-2 ">
      <h1 className="capitalize font-semibold text-black text-left">{name}</h1>

      <p className="text-black">{`${formatCurrency(price)}`}</p>
    </div>
  );
}

export default BBQBeefMenuItem;
