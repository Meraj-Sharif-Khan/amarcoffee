import React from "react";
import getMenuItems from "../../mockData/getMenuItems.js";
import MenuItemCard from "./MenuItemCard.jsx";

const MenuSection = () => {
  const menuItems = getMenuItems();
  return (
    <>
      {menuItems.length > 0 &&
        menuItems.map((item, i) => <MenuItemCard key={i} item={item} i={i} />)}
    </>
  );
};

export default MenuSection;
