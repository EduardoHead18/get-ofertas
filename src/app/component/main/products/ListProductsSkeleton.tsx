import React from "react";

export const ListProductsSkeleton = () => {
  return (
    <>
      <div className="flex w-52 flex-col gap-2 mt-10">
        <div className="skeleton h-56 w-80"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    </>
  );
};
