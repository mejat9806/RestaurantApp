import Menu from "../pages/menu";
import MenuHeader from "./MenuHeader";
import ShowMenu from "./ShowMenu";

function MenuLayout() {
  return (
    <div className="flex flex-col items-center  ">
      <MenuHeader />
      <Menu />

      <ShowMenu />
    </div>
  );
}

export default MenuLayout;
