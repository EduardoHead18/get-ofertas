"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { mercadoPuppeteer } from "@/app/api/mercado-libre-puppeteer";
import { IProducts } from "@/app/types/products";

export const ListProducts = () => {
  const [productState, setProductState] = useState<IProducts[]>([]);

  const getProducts = async () => {
    const responseProducts = await mercadoPuppeteer();
    setProductState(responseProducts);
  };
  console.log(productState);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <h1 className="text-lg font-bold">Productos de hoy 🙂‍↕️</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productState.map((product, Index) => {
          return (
            <a
              key={Index}
              href={product.productUrl}
              target="_blank"
              className="w-full h-full bg-white drop-shadow-md rounded-lg p-3 mt-10"
            >
              <Image
                className="w-full object-cover"
                src={product.imageUrl}
                alt={product.title}
                width={900}
                height={40}
              ></Image>

              <div className="flex flex-row justify-between">
                <h1 className="text-lg font-bold">{product.title}</h1>
                <span className=" bg-green-400 p-1 px-2 rounded-sm">
                  ${product.priceNow}
                </span>
                <span>{product.discount}</span>
              </div>
              <div className="flex flex-row mt-2">
                <p className="mr-10">{product.description}</p>
                <span className="text-red-800 line-through p-1 px-2 rounded-sm">
                  ${product.priceBefore}
                </span>
              </div>
              <span>Tienda: {product.store}</span>
            </a>
          );
        })}
      </div>
    </>
  );
};
