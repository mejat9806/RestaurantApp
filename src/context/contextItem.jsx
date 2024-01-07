/* eslint-disable react-refresh/only-export-components */
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
      image: "/burger1.jpg",
      video: "/production_id-4131833 (1080p).mp4",
    },
    {
      id: 2,
      item: "BBQ",
      desc: "Embrace BBQ's Smoky Serenade.",
      button: "BBQ Menu",
      reversed: true,
      image: "/meat/BBQ.jpg",
      video: "/pizza oven.mp4",
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
  if (itemType) {
    const filteredData = context.PromoData.filter(
      (item) => item.item === itemType,
    );

    return { PromoData: filteredData };
  }
  return context;
}
export { useItems, itemsContext, ItemProvider };
