import React from "react";

export const NavbarComponent = () => {
  return (
    <div className="navbar bg-orange-200">
      <div className="flex-1">
        <a className="btn btn-ghost hover:bg-white text-xl">Get Ofertas</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Link</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};
