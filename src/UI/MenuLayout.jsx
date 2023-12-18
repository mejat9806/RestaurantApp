import Menu from "../pages/menu";
import MenuHeader from "./MenuHeader";
import ShowMenu from "./ShowMenu";

function MenuLayout() {
  return (
    <div className="flex justify-center flex-col items-center mt-5 space-y-6">
      <MenuHeader />
      <Menu />
      <ShowMenu />
    </div>
  );
}

export default MenuLayout;
