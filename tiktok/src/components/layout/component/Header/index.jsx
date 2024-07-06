/* eslint-disable no-unused-vars */
import images from "../../../../assets/images";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";

export default function Header() {
  return (
    <header className="h-16 shadow-sm shadow-white flex justify-center w-full">
      <div className="h-full w-[71.875rem] flex items-center justify-between">
        <div className="logo">
          <img src={images.logo} alt="tikTok" />
        </div>
        <div className="flex w-[22.5625rem] h-[2.875rem] bg-colorSearch rounded-[5.75rem] pl-4 relative borDer focus:border-colorl">
          <input
            type="text"
            placeholder="Search accounts anh videos"
            spellCheck={false}
            className="flex-1 text-colorInput border-none outline-none bg-transparent h-full  caret-red-500 input"
          />
          <button className="absoluter pr-2 text-colorlis cursor-default">
            <FontAwesomeIcon icon={faCircleXmark} className="text-colorlis" />
          </button>
          <div className="absoluter pr-2 text-colorlis hidden ">
            <FontAwesomeIcon icon={faSpinner} />
          </div>
          <div className="bg-colorl mt-[0.6875rem] w-[0.0625rem] h-6"></div>
          <button className=" setColor w-[3.25rem] h-full border-none outline-none rounded-r-[5.75rem] hover:bg-colorli text-colorlis">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div>Action</div>
      </div>
    </header>
  );
}
