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
  const BBQdata = [
    {
      beef: {
        id: 1,
        title: "Beef",
        desc: "Smoked daily,all served with bread and vegetable.all sold by 100g",
        items: [
          {
            name: "Smoked brisket",
            weight: 100,
            price: 50,
          },
          {
            name: "rib",
            weight: 100,
            price: 40,
          },

          {
            name: "burned ends",
            weight: 100,
            price: 30,
          },
          {
            name: "Chopped beef",
            weight: 100,
            price: 20,
          },
          {
            name: "Beef sausages",
            weight: 100,
            price: 20,
          },
        ],
      },
    },

    {
      chicken: {
        id: 2,
        title: "Chicken",
        desc: "Deliciously grilled and served with care ",
        items: [
          {
            name: "BBQ Chicken wings ",
            piece: 6,
            price: 20,
          },
          {
            name: "Grilled BBQ Chicken ",
            price: 10,
          },
          {
            name: "BBQ Chicken Skewers",
            piece: 3,
            price: 15,
          },
          {
            name: "BBQ Chicken Tacos",
            piece: 2,
            price: 7,
          },
          {
            name: "BBQ Chicken Tenders ",
            piece: 5,
            price: 20,
          },
          {
            name: "BBQ Chicken Sliders",
            piece: "6",
            price: 20,
          },
          {
            name: "BBQ Chicken Caesar Salad",
            price: 14,
          },
        ],
      },
    },

    {
      fish: {
        id: 3,
        title: "fish",
        desc: "Succulent BBQ Grilled Fish Deligh",
        items: [
          {
            name: "Grilled BBQ Fish Tacos",
            piece: 3,
            price: 20,
          },
          {
            name: "BBQ Fish Skewers",
            piece: 3,
            price: 15,
          },
          {
            name: "BBQ Glazed Salmon",
            price: 25,
          },
          {
            name: "Grilled BBQ Fish Tacos",
            price: 20,
          },
        ],
      },
    },
  ];
  const SpecialItems = [
    {
      Sandwich: {
        id: 1,
        item: [
          {
            title: "pull beef sandwich",
            description:
              "Sandwich full of our delicous shredded beef with special spicy BBQ sauce,cheese and  pickle",
            imagesrc: "/meat/Slow-Cooker-Shredded-Beef-SQ.webp",
            price: 15,
          },
          {
            title: "Grilled cheese ",
            description: "Just a grill cheese",
            imagesrc: "/meat/grilled-cheese-sandwich.jpg",
            price: 7,
          },
          {
            title: "japanese style chicken katsu sandwichs",
            description:
              "Enjoy the worldwide hit: Classic Chicken Katsu Sandwich, a perfect fusion of crispy chicken, Japanese Milk Bread, veggies, and tangy BBQ sauce.",
            imagesrc: "/public/meat/katsu_sandwitch.jpg",
            price: 7,
          },
        ],
      },
    },
    {
      Beef: {
        id: 2,
        item: [
          {
            title: "Meat lover  ",
            description:
              "Plate of all of our BBQ meat products ,suitable for sharing with family and friends",
            imagesrc: "/meat/plate_of_meat.jpg",
            price: 199,
          },
          {
            title: "Smoke Short Rib",
            description:
              "delicous smoke for hours short rib with BBQ sauce glace  ",
            imagesrc: "/public/meat/BBQ_Beef_Short_Ribs_600x.jpg",
            price: 69,
          },
        ],
      },
    },
  ];
  const Sides = {
    title: "Sides",
    items: [
      {
        title: "Loaded BBQ French Fries ",
        description: "French Fries top with our BBQ meat and cheese sauce ",
        price: 5,
        imagesrc: "/public/meat/Loaded_French_fries.jpg",
      },
      {
        title: "Garlic  French Fries",
        description: "Crispy fries seasoned with garlic and parmesan ",
        price: 5,
        imagesrc: "/public/meat/garlic-parm-fries-7-scaled.jpg",
      },
      {
        title: "Smoky mac and chesse ",
        description:
          "Smoky mac and cheese, crowned with BBQ meat and cheese sauce.",
        price: 10,
        imagesrc: "/public/meat/Smoked-Mac-and-Cheese.jpg",
      },
      {
        title: "Crispy Jalapeno Poppers",
        description:
          "Jalapeno peppers stuffed with beef , cream cheese or other fillings .served with ranch sauce",
        price: 17,
        imagesrc:
          "/public/meat/jalapeno-poppers-478725-hero-01-abf0bf50489d44a2892b121a7532ceb0.jpg",
      },
    ],
  };

  return (
    <itemsContext.Provider
      value={{
        PromoData,
        BBQdata,
        SpecialItems,
        Sides,
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
