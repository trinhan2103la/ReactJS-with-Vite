/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import { BiHomeAlt, BiInfoCircle, BiMoviePlay, BiMenu } from "react-icons/bi";
import { useState } from "react";
import NavItem from "./NavItems";

export default function Nav() {
  const defaultIconSize = "1.875rem";

  const items = [
    { label: "Home", icon: <BiHomeAlt size={defaultIconSize} />, active: true },
    {
      label: "Movie",
      icon: <BiMoviePlay size={defaultIconSize} />,
      active: false,
    },
    {
      label: "About",
      icon: <BiInfoCircle size={defaultIconSize} />,
      active: false,
    },
  ];
  const NavItemsContainer = () => (
    <>
      {items.map((item, index) => (
        <NavItem item={item} key={index} />
      ))}
    </>
  );

  const [isNavOpenMenu, setisNavOpenMenu] = useState(false);
  return (
    <nav className="col-span-1 bg-cyan-300">
      <div className=" flex mx-4 justify-between items-center md:block">
        <h4
          className="
          uppercase 
          font-bold 
          text-primary 
          py-4 
          border-b 
          border-primary
          text-right
          text-2xl
        "
        >
          Phimmoi.net
        </h4>
        <BiMenu
          className="cursor-pointer md:hidden"
          size={defaultIconSize}
          onClick={() => setisNavOpenMenu(!isNavOpenMenu)}
        />
      </div>
      <ul className={`mx-4 my-2${isNavOpenMenu ? "" : " hidden"} md:block`}>
        <NavItemsContainer />
      </ul>
    </nav>
  );
}
