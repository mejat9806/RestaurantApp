function DrinkList({ drink: { name, price } }) {
  console.log(name, price);

  return (
    <div className=" mx-5 ">
      <p className="flex justify-between text-4xl capitalize font-menuTitle text-left">
        <span>{name}</span>
        <span>{price}</span>
      </p>
    </div>
  );
}

export default DrinkList;
