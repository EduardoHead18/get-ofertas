import React from "react";
import { SearchComponent } from "./component/main/home/SearchComponent";
import { BadgeSectionStore } from "./component/main/home/BadgeSectionStore";
import { ListProducts } from "./component/main/products/ListProducts";

export const HomePage = () => {
  return (
    <>
      <SearchComponent></SearchComponent>
      <BadgeSectionStore></BadgeSectionStore>
      <ListProducts></ListProducts>
    </>
  );
};
