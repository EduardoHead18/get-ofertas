"use client"
import {useState, useEffect} from 'react'

export const SearchComponent = () => {
  const [searchInput, setSearchInput] = useState("");

  // Manejador del cambio en el input
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value); 
  };

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <>
      <h1 className="text-center text-2xl font-bold">
        Busca nuevas ofertas!!!
      </h1>

      <form className="flex justify-center mt-10 space-x-2">
        <input
          className="border-2 px-4 py-2 w-96 rounded-full focus:outline-none"
          type="text"
          name="username"
          placeholder="iphone 15 pro..."
          value={searchInput} // El valor del input está vinculado al estado
          onChange={handleInputChange}
        />
        <button
          onClick={handleSearch}
          type="submit"
          className="btn btn-neutral px-6 py-2 rounded-md"
        >
          Buscar
        </button>
      </form>

    </>
  );
}
