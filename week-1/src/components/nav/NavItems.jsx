/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// export default function NavItem({ label, icon, active }) {
//   return (
//     <li
//       className={`flex p-2 justify-end items-center cursor-pointer${
//         active ? "bg-primary text-white" : ""
//       }`}
//     >
//       <h3 className="text-3xl mr-2">{label}</h3>
//       {icon}
//     </li>
//   );
// }

// JavaScript không có interface, bạn có thể dùng JSDoc để mô tả đối tượng nếu muốn

/**
 * @typedef {Object} Item
 * @property {string} label
 * @property {JSX.Element} icon
 * @property {boolean} active
 */

/**
 * @param {{ item: { label: string, icon: JSX.Element, active: boolean } }} props
 */
const NavItem = ({ item }) => {
  const { label, icon, active } = item;
  return (
    <li
      className={`flex p-2 justify-end items-center cursor-pointer ${
        active ? "bg-primary text-white" : ""
      }`}
    >
      <h3 className="text-2xl">{label}</h3>
      {icon}
    </li>
  );
};

export default NavItem;
