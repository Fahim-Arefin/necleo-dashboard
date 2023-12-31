function NavBar() {
  return (
    <div className="sticky top-0 navbar bg-white w-full h-fit">
      <div className="flex-1">
        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
      </div>
      <div className="flex-none space-x-2">
        <div className="dropdown dropdown-end">
          <div className="text-sm text-black">
            <div className="flex space-x-4">
              <div className="font-medium">Free Trial</div>
              <div className="">|</div>
              <div className="text-[10px]">2days left</div>
            </div>
            <div className="text-[10px] text-[#FA782F]">Extend free trail</div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="">
            <div className="w-10 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="6"
                viewBox="0 0 12 6"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.41421 0C1.52331 0 1.07714 1.07714 1.70711 1.70711L5.29289 5.29289C5.68342 5.68342 6.31658 5.68342 6.70711 5.29289L10.2929 1.70711C10.9229 1.07714 10.4767 0 9.58579 0H2.41421Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
