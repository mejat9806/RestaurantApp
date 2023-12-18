import { useContext } from "react";
import { createContext } from "react";

const itemsContext = createContext();
function ItemProvider({ children }) {
  const PromoData = [
    {
      id: 1,
      item: "Burger",
      desc: "fresh burger with Homemade Sauce",
      button: "Burger Menu",
      reversed: false,
      image: "/public/burger1.jpg",
      video: "/public/production_id-4131833 (1080p).mp4",
    },
    {
      id: 2,
      item: "Pizza",
      desc: "fresh baked Pizza in woodBurning Oven ",
      button: "Pizaa Menu",
      reversed: true,
      image: "/public/pizza image.jpg",
      video: "/public/pizza oven.mp4",
    },
  ];
  return (
    <itemsContext.Provider
      value={{
        PromoData,
      }}
    >
      {children}
    </itemsContext.Provider>
  );
}

function useItems(itemType) {
  const context = useContext(itemsContext);
  if (context === undefined) {
    throw new Error("context is at the Wrong Place");
  }
  // If itemType is provided, filter PromoData based on the item type
  if (itemType) {
    const filteredData = context.PromoData.filter(
      (item) => item.item === itemType,
    );

    return { PromoData: filteredData };
  }
  return context;
}
export { useItems, itemsContext, ItemProvider };
