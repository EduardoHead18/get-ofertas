"use client"
import {useState, useEffect} from "react";
import Image from "next/image";

const fakeData = [
  {
    title: "Tenis adidas",
    description: "idk",
    store: "adidas mx",
    price: 500,
    descuento: "15%",
    imageUrl:
      "https://imgs.search.brave.com/9CEjhLVc7fz2A6v3aYPiXyazCpQCfdcbOuRH2VnJkwo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDE0RmZyc1RvQkwu/anBn",
    url: "",
  },
  {
    title: "Tenis adidas",
    description: "idk",
    store: "adidas mx",
    price: 500,
    descuento: "15%",
    imageUrl:
      "https://imgs.search.brave.com/9CEjhLVc7fz2A6v3aYPiXyazCpQCfdcbOuRH2VnJkwo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDE0RmZyc1RvQkwu/anBn",
    url: "",
  },
  {
    title: "Tenis adidas",
    description: "idk",
    store: "adidas mx",
    price: 500,
    descuento: "15%",
    imageUrl:
      "https://imgs.search.brave.com/9CEjhLVc7fz2A6v3aYPiXyazCpQCfdcbOuRH2VnJkwo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDE0RmZyc1RvQkwu/anBn",
    url: "",
  },
];
export const ListProducts = () => {
  const [puppeteerTitle, setPuppeteerTitle] = useState('');

  // Fetch Puppeteer data on mount
  useEffect(() => {
    const fetchPuppeteerData = async () => {
      const response = await fetch('/api/puppeteer');
      const data = await response.json();

      console.log(data)
      setPuppeteerTitle(data.title);
    };

    fetchPuppeteerData();
  }, []);
  return (
    <>
      <h1>Resultados:</h1>
      <div className="grid grid-flow-col gap-4">
        {fakeData.map((product, Index) => {
          return (
            <div
              key={Index}
              className="w-full h-60 bg-slate-600 rounded-lg p-6 mt-10"
            >
              <Image
                className="w-full h-20 object-cover"
                src={product.imageUrl}
                alt={product.title}
                width={0}
                height={0}
              ></Image>
              <h1>{product.title}</h1>
            </div>
          );
        })}
      </div>

       
    </>
  );
};
