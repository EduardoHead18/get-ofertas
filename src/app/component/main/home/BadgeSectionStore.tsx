import Link from "next/link";
import React from "react";
import { SiMercadopago } from "react-icons/si";
import { FaAmazon } from "react-icons/fa";
export const BadgeSectionStore = () => {
  return (
    <div className="flex flex-row justify-center gap-7 p-4">
      {ListStore.map((store, id) => {
        return (
          <a
            href="#"
            key={id}
            className={store.className}
          >
            <div className="flex flex-row gap-5">
              <p>{store.name}</p>
              {store.icon}
            </div>
        
          </a>
        );
      })}
    </div>
  );
};

const ListStore = [
  {
    id: "1",
    name: "Mercado Libre",
    icon: <SiMercadopago size={30} color="black"/>,
    className: "bg-yellow-300 text-black py-1 px-4 rounded shadow hover:opacity-70 transition ",
    path: "/",
  },
  {
    id: "2",
    name: "Amazon",
    icon: <FaAmazon size={30} color="black" />,
    className: "bg-blue-300 text-black py-1 px-4 rounded shadow hover:opacity-70 transition",
    path: "/",
  },
];
