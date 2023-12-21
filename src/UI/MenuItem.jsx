function MenuItem({ title, imagesrc, description }) {
  return (
    <div className="menuItem">
      <h1 className="menuItemTittle">{title}</h1>
      <img
        src={imagesrc}
        alt={title}
        className="w-[300px] flex shadow-xl shadow-black/20 mb-5 aspect-square object-cover"
      />
      <p className="menuItemWord ">{description}</p>
    </div>
  );
}

export default MenuItem;
