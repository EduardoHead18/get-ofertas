import React from "react";

export const HomePage = () => {
  return (
    <>
      <h1 className="text-center text-2xl">Busca nuevas ofertas!!!</h1>

      <div className="flex justify-center mt-10 space-x-2">
     
          <input
            className="border-2 px-4 py-2 w-96 rounded-md focus:outline-none"
            type="text"
            name="username"
            placeholder="iphone 15 pro"
          />
          <button className="btn btn-neutral px-6 py-2 rounded-md">Buscar</button>
   
      </div>
    </>
  );
};
