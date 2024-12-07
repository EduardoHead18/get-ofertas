"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { IProducts } from "@/app/types/products";
import { ListProductsSkeleton } from "./ListProductsSkeleton";

export const ListProducts = () => {
  const [productState, setProductState] = useState<IProducts[]>([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    try {
      const responseProducts = await fetch('/api/mercado-libre-scraping/');
      const responseProductsJson = await responseProducts.json();
      setProductState(responseProductsJson);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <h1 className="text-lg font-bold">Productos de hoy 🙂‍↕️</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-7 gap-4">
        {loading ? (
          <>
            {[...Array(20)].map((_, index) => (
              <ListProductsSkeleton key={index} />
            ))}
          </>
        ) : (
          productState.map((product, index) => (
            <a
              key={index}
              href={product.productUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full bg-white drop-shadow-md rounded-lg p-3 mt-10"
            >
              <Image
                className="object-cover"
                src={product.imageUrl}
                alt={product.title}
                width={900}
                height={40}
              />
              <div className="flex flex-row justify-between">
                <h1 className="text-lg font-bold">{product.title}</h1>
                <span className="bg-green-400 p-1 px-2 rounded-sm">
                  MX${product.priceNow}
                </span>
              </div>

              <div className="mt-3">
                <p className="mr-10">{product.description}.</p>
                <h2 className="mt-2 font-bold">
                  Descuento: <span className="font-medium">{product.discount}</span>
                </h2>
                <h3 className="mt-3 font-bold">
                  Precio anterior:
                  <span className="text-red-800 line-through p-1 px-2 rounded-sm">
                    ${product.priceBefore}
                  </span>
                </h3>
                <h4 className=" mt-2 font-bold">Tienda: <span className="font-medium">{product.store}</span></h4>
              </div>
            </a>
          ))
        )}
      </div>
    </>
  );
};
