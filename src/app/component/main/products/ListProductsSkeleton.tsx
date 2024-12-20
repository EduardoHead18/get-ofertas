import React from "react";

export const ListProductsSkeleton = () => {
  return (
    <>
      <div className="flex flex-col gap-4 mt-10">
        <div className="skeleton h-[10rem] "></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    </>
  );
};
