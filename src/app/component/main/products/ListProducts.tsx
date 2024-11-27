"use client"
import {useState, useEffect} from "react";
import Image from "next/image";
import { mercadoPuppeteer } from "@/app/api/mercado-libre-puppeteer";

// const [products, setProducts] = useState();



export const ListProducts = () => {
  const getProducts = async()=>{
    const responseProducts = await mercadoPuppeteer();
    console.log(responseProducts)
  }
  
  useEffect(() =>{
    getProducts();
  },[])
  return (
    <>
    hola
      {/* <h1 className="text-lg font-bold">Resultados en oferta:</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {fakeData.map((product, Index) => {
          return (
            <a
              key={Index}
              href="#"
              className="w-full h-60 bg-white drop-shadow-md rounded-lg p-6 mt-10"
            >
              <Image
                className="w-full h-20 object-cover"
                src={}
                alt={}
                width={0}
                height={0}
              ></Image>
              <h1>{}</h1>
            </a>
          );
        })}
      </div> */}

       
    </>
  );
};
