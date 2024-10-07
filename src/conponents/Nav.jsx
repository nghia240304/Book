import React, { useState } from "react";
import eBook from "../asset/Logo.png";

function Nav() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isShowSearch, setIsShowSearch] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const toggleMenu = () => {
    if (isShowSearch) setIsShowSearch(false);
    setShowMenu(!showMenu);
  };
  const toggleSearch = () => {
    setIsShowSearch(!isShowSearch);
  };
  return (
    <header>
      <nav className="mx-auto bg-black">
        <div className="flex items-center justify-between">
          <div className="relative ml-3">
            <button onClick={() => toggleMenu()} className="my-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="text-white w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div>
            <img src={eBook} alt="Logo" className="w-10 h-10 my-2" />
          </div>
          <div className="relative">
            <button className="my-2 mr-3 rounded-full" onClick={toggleDropdown}>
              <img
                src="https://staticvn.sangtacvietcdn.xyz/img/useravatar/user72987.png?t=1704022684"
                alt="Ảnh đại diện"
                className="w-10 h-10 bg-white rounded-full"
              />
            </button>
            {dropdownVisible && (
              <div className="absolute w-32 bg-gray-500 rounded-md right-3 top-16">
                <div className="flex flex-col gap-1 my-2">
                  <div className="text-center text-white cursor-pointer hover:text-blue-400">
                    Đăng nhập
                  </div>
                  <div className="text-center text-white cursor-pointer hover:text-blue-400">
                    Đăng ký
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
      <div className={showMenu ? "flex flex-col w-full bg-gray-600" : "hidden"}>
        <div className="flex justify-center gap-1 py-1 text-center text-white hover:bg-gray-400 hover:text-amber-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
            />
          </svg>

          <p>Trò chuyện</p>
        </div>
        <div className="flex justify-center gap-1 py-1 text-center text-white hover:bg-gray-400 hover:text-amber-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
            />
          </svg>

          <p>Xếp hạng</p>
        </div>
        <button
          className="flex justify-center py-1 text-center text-white hover:bg-gray-400 hover:text-amber-200"
          onClick={() => toggleSearch()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <p>Tìm kiếm</p>
        </button>
      </div>
      <div
        className={isShowSearch ? "flex flex-col w-full bg-gray-600" : "hidden"}
      >
        <div className="flex items-center justify-center gap-1 py-1 my-2 text-center text-white">
          <input
            type="text"
            className="w-4/5 p-2 text-gray-500 border-[3px] rounded focus:outline-none shadow-slate-400 shadow-inner"
          />
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Nav;
