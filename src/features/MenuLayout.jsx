import MenuNav from "../pages/MenuNav";
import MenuHeader from "./MenuHeader";
import ShowMenu from "./ShowMenu";

function MenuLayout() {
  return (
    <div className="flex flex-col items-center w-full ">
      <MenuHeader />
      <div className="" id="gotoMenu">
        <MenuNav />
      </div>
      <ShowMenu />
    </div>
  );
}

export default MenuLayout;
