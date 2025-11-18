import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu, X } from "lucide-react";
import ToggleButton from "./common/ToggleButton";

const Sidebar = () => {
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#" },
    { name: "Shop", href: "/#" },
    { name: "Contact", href: "/#" },
  ];

  return (
    <Drawer direction="right" snapPoints={[]}>
      <DrawerTrigger>
        <Menu />
      </DrawerTrigger>
      <DrawerContent className="w-[50vw] bg-background border-l-0!">
        <DrawerHeader>
          <DrawerTitle></DrawerTitle>
          <div className="absolute top-6 left-6">
            <ToggleButton />
          </div>
          <DrawerClose className="absolute top-6 right-6 text-foreground hover:text-gray-700 transition-colors">
            <X size={24} />
          </DrawerClose>
        </DrawerHeader>
        <DrawerDescription>
        </DrawerDescription>
        <div className="mt-10 ml-10 flex flex-col items-start gap-8 text-white font-medium">
          {menuItems.map((item, index) => (
            <DrawerClose key={index}>
              <a href={item.href} className="hover:text-amber-200 transition">
                {item.name}
              </a>
            </DrawerClose>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
