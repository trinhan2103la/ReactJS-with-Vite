import images from "../../../../assets/images";

export default function Header() {
  return (
    <header className="h-16 shadow-sm shadow-white flex justify-center w-full">
      <div className="h-full w-[1150px]">
        <div className="logo">
          <img src={images.logo} alt="tikTok" />
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search accounts anh videos"
            spellCheck={false}
          />
          <button className="clear-btn">{/* Clear */}</button>
          {/* Loading */}
          <button className="search-btn">{/* search */}</button>
        </div>
        {/*Search*/}
      </div>
    </header>
  );
}
