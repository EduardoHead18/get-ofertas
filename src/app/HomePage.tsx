import React from "react";
import { SearchComponent } from "./component/main/home/SearchComponent";
import { BadgeSectionStore } from "./component/main/home/BadgeSectionStore";

export const HomePage = () => {
  return (
    <>
      <SearchComponent></SearchComponent>
      <BadgeSectionStore></BadgeSectionStore>
    </>
  );
};
