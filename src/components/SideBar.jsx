import { RxHamburgerMenu } from "react-icons/rx";
function SideBar() {
  return (
    <div className="drawer lg:drawer-open w-24 md:w-[241px] z-20">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center bg-white">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn bg-[#FA782F] drawer-button lg:hidden"
        >
          <RxHamburgerMenu className="text-white" />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul
          className="text-center p-4 w-44 md:w-[241px] min-h-full bg-white text-[#C4C4C4] 
        font-semibold flex flex-col justify-between"
        >
          {/* Sidebar content here */}
          <div className="">
            <li className="">
              <div className="mx-auto w-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="77"
                  height="27"
                  viewBox="0 0 77 27"
                  fill="none"
                >
                  <path
                    d="M29.8104 24.1281C28.1086 24.1281 26.793 23.6896 25.8635 22.8125C24.9341 21.9354 24.4694 20.6918 24.4694 19.0816C24.4694 17.5369 24.9406 16.326 25.8832 15.4489C26.8257 14.5587 28.1152 14.1136 29.7515 14.1136C30.7595 14.1136 31.6563 14.2772 32.4417 14.6045C33.2272 14.9187 33.8359 15.3703 34.2679 15.9594C34.713 16.5354 34.9355 17.1965 34.9355 17.9427C34.9355 18.4925 34.7784 18.918 34.4643 19.219C34.1632 19.5201 33.7443 19.6707 33.2075 19.6707H25.9421C25.9421 20.6787 26.2825 21.4707 26.9632 22.0467C27.6439 22.6096 28.593 22.891 29.8104 22.891C30.5566 22.891 31.1981 22.8125 31.7348 22.6554C32.2715 22.4852 32.7755 22.2169 33.2468 21.8503C33.4955 21.6409 33.6984 21.5361 33.8555 21.5361C33.9734 21.5361 34.0846 21.5885 34.1894 21.6932C34.3726 21.8503 34.4643 22.0139 34.4643 22.1841C34.4643 22.315 34.3857 22.459 34.2286 22.6161C33.6919 23.1267 33.0635 23.5063 32.3435 23.755C31.6235 24.0038 30.7792 24.1281 29.8104 24.1281ZM32.7755 18.5121C33.0112 18.5121 33.1879 18.4663 33.3057 18.3747C33.4235 18.27 33.4824 18.0867 33.4824 17.8249C33.4824 17.3536 33.3254 16.9281 33.0112 16.5485C32.697 16.1689 32.2519 15.8743 31.6759 15.6649C31.113 15.4554 30.4715 15.3507 29.7515 15.3507C28.5864 15.3507 27.6635 15.6387 26.9828 16.2147C26.3152 16.7776 25.9814 17.5434 25.9814 18.5121H32.7755Z"
                    fill="black"
                  />
                  <path
                    d="M41.9288 24.1281C40.8816 24.1281 39.9587 23.9252 39.1601 23.5194C38.3616 23.1005 37.7463 22.5114 37.3143 21.7521C36.8823 20.9929 36.6663 20.1092 36.6663 19.1012C36.6663 18.1063 36.8823 17.2358 37.3143 16.4896C37.7463 15.7303 38.3616 15.1478 39.1601 14.742C39.9587 14.323 40.8816 14.1136 41.9288 14.1136C42.9107 14.1136 43.7616 14.251 44.4816 14.526C45.2016 14.8009 45.771 15.2067 46.1899 15.7434C46.2947 15.8874 46.347 16.0249 46.347 16.1558C46.347 16.3521 46.2488 16.5289 46.0525 16.686C45.9608 16.7645 45.843 16.8038 45.699 16.8038C45.4765 16.8038 45.267 16.7056 45.0707 16.5092C44.3768 15.7369 43.3296 15.3507 41.9288 15.3507C40.7114 15.3507 39.7688 15.678 39.1012 16.3325C38.4467 16.974 38.1194 17.8969 38.1194 19.1012C38.1194 20.2925 38.4532 21.222 39.1208 21.8896C39.7885 22.5572 40.7245 22.891 41.9288 22.891C42.5965 22.891 43.2118 22.7929 43.7747 22.5965C44.3376 22.387 44.8023 22.0925 45.1688 21.7129C45.3914 21.4903 45.6008 21.379 45.7972 21.379C45.915 21.379 46.0459 21.4314 46.1899 21.5361C46.3732 21.6932 46.4648 21.8634 46.4648 22.0467C46.4648 22.2169 46.3928 22.3609 46.2488 22.4787C45.6074 23.0547 44.9398 23.4736 44.2459 23.7354C43.5521 23.9972 42.7798 24.1281 41.9288 24.1281Z"
                    fill="black"
                  />
                  <path
                    d="M49.8205 24.1281C49.598 24.1281 49.4212 24.0627 49.2903 23.9318C49.1725 23.7878 49.1136 23.5914 49.1136 23.3427V9.81323C49.1136 9.5645 49.1725 9.37468 49.2903 9.24377C49.4212 9.09977 49.598 9.02777 49.8205 9.02777C50.0431 9.02777 50.2198 9.09977 50.3507 9.24377C50.4816 9.37468 50.5471 9.5645 50.5471 9.81323V23.3427C50.5471 23.5783 50.4816 23.7681 50.3507 23.9121C50.2329 24.0561 50.0561 24.1281 49.8205 24.1281Z"
                    fill="black"
                  />
                  <path
                    d="M58.5171 24.1281C56.8153 24.1281 55.4997 23.6896 54.5702 22.8125C53.6408 21.9354 53.176 20.6918 53.176 19.0816C53.176 17.5369 53.6473 16.326 54.5898 15.4489C55.5324 14.5587 56.8218 14.1136 58.4582 14.1136C59.4662 14.1136 60.3629 14.2772 61.1484 14.6045C61.9338 14.9187 62.5426 15.3703 62.9746 15.9594C63.4197 16.5354 63.6422 17.1965 63.6422 17.9427C63.6422 18.4925 63.4851 18.918 63.1709 19.219C62.8698 19.5201 62.4509 19.6707 61.9142 19.6707H54.6488C54.6488 20.6787 54.9891 21.4707 55.6698 22.0467C56.3506 22.6096 57.2997 22.891 58.5171 22.891C59.2633 22.891 59.9048 22.8125 60.4415 22.6554C60.9782 22.4852 61.4822 22.2169 61.9535 21.8503C62.2022 21.6409 62.4051 21.5361 62.5622 21.5361C62.68 21.5361 62.7913 21.5885 62.896 21.6932C63.0793 21.8503 63.1709 22.0139 63.1709 22.1841C63.1709 22.315 63.0924 22.459 62.9353 22.6161C62.3986 23.1267 61.7702 23.5063 61.0502 23.755C60.3302 24.0038 59.4858 24.1281 58.5171 24.1281ZM61.4822 18.5121C61.7178 18.5121 61.8946 18.4663 62.0124 18.3747C62.1302 18.27 62.1891 18.0867 62.1891 17.8249C62.1891 17.3536 62.032 16.9281 61.7178 16.5485C61.4037 16.1689 60.9586 15.8743 60.3826 15.6649C59.8197 15.4554 59.1782 15.3507 58.4582 15.3507C57.2931 15.3507 56.3702 15.6387 55.6895 16.2147C55.0218 16.7776 54.688 17.5434 54.688 18.5121H61.4822Z"
                    fill="black"
                  />
                  <path
                    d="M70.7533 24.1281C69.6144 24.1281 68.6391 23.899 67.8275 23.4409C67.0159 22.9827 66.4006 22.3739 65.9817 21.6147C65.5759 20.8423 65.373 20.011 65.373 19.1209C65.373 18.2307 65.5759 17.4059 65.9817 16.6467C66.4006 15.8743 67.0159 15.259 67.8275 14.8009C68.6391 14.3427 69.6144 14.1136 70.7533 14.1136C71.8922 14.1136 72.861 14.3427 73.6595 14.8009C74.4711 15.259 75.0799 15.8743 75.4857 16.6467C75.9046 17.4059 76.1141 18.2307 76.1141 19.1209C76.1141 20.011 75.9046 20.8423 75.4857 21.6147C75.0799 22.3739 74.4711 22.9827 73.6595 23.4409C72.861 23.899 71.8922 24.1281 70.7533 24.1281ZM70.7533 22.891C71.9315 22.891 72.8741 22.5572 73.581 21.8896C74.301 21.222 74.661 20.299 74.661 19.1209C74.661 17.9427 74.301 17.0198 73.581 16.3521C72.8741 15.6845 71.9315 15.3507 70.7533 15.3507C69.5621 15.3507 68.6064 15.6845 67.8864 16.3521C67.1795 17.0198 66.8261 17.9427 66.8261 19.1209C66.8261 20.299 67.1795 21.222 67.8864 21.8896C68.6064 22.5572 69.5621 22.891 70.7533 22.891Z"
                    fill="black"
                  />
                  <path
                    d="M1.22729 5.67619C1.22729 4.23586 2.39492 3.06824 3.83525 3.06824C5.27558 3.06824 6.4432 4.23586 6.4432 5.67619V24.3921C6.4432 25.8324 5.27558 27 3.83525 27C2.39492 27 1.22729 25.8324 1.22729 24.3921V5.67619Z"
                    fill="black"
                  />
                  <path
                    d="M17.1818 2.60795C17.1818 1.16762 18.3494 0 19.7897 0C21.23 0 22.3977 1.16762 22.3977 2.60795V21.3239C22.3977 22.7642 21.23 23.9318 19.7897 23.9318C18.3494 23.9318 17.1818 22.7642 17.1818 21.3239V2.60795Z"
                    fill="black"
                  />
                  <path
                    d="M1.8441 7.06639C0.825632 6.04792 0.825632 4.39666 1.8441 3.37819C2.86257 2.35972 4.51384 2.35972 5.5323 3.37819L21.7829 19.6287C22.8013 20.6472 22.8013 22.2985 21.7829 23.317C20.7644 24.3354 19.1131 24.3354 18.0947 23.317L1.8441 7.06639Z"
                    fill="#FA782F"
                  />
                </svg>
              </div>
            </li>

            <li>
              <div className="h-[1px] mt-6 text-center w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1"
                  viewBox="0 0 203 1"
                  fill="none"
                  className="mx-auto w-full"
                >
                  <path
                    opacity="0.2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 0.5C0 0.223858 0.223858 0 0.5 0H202.5C202.776 0 203 0.223858 203 0.5C203 0.776142 202.776 1 202.5 1H0.499998C0.223855 1 0 0.776142 0 0.5Z"
                    fill="black"
                  />
                </svg>
              </div>
            </li>

            <li>
              <div className="space-y-6 mt-6 lg:pl-4 text-[12px] md:text-sm ">
                <li className=" flex justify-start items-center space-x-2 cursor-pointer ">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <path
                        d="M14 11.6666C18.6386 11.6666 23.3333 10.0636 23.3333 6.99998C23.3333 3.93631 18.6386 2.33331 14 2.33331C9.36129 2.33331 4.66663 3.93631 4.66663 6.99998C4.66663 10.0636 9.36129 11.6666 14 11.6666Z"
                        fill="#FA782F"
                      />
                      <path
                        d="M4.66663 11.6666C4.66663 14.7303 9.36129 16.3333 14 16.3333C18.6386 16.3333 23.3333 14.7303 23.3333 11.6666V9.33331C23.3333 12.397 18.6386 14 14 14C9.36129 14 4.66663 12.397 4.66663 9.33331V11.6666Z"
                        fill="#FA782F"
                      />
                      <path
                        d="M4.66663 16.3333C4.66663 19.397 9.36129 21 14 21C18.6386 21 23.3333 19.397 23.3333 16.3333V14C23.3333 17.0637 18.6386 18.6667 14 18.6667C9.36129 18.6667 4.66663 17.0637 4.66663 14V16.3333Z"
                        fill="#FA782F"
                      />
                      <path
                        d="M4.66663 21C4.66663 24.0637 9.36129 25.6667 14 25.6667C18.6386 25.6667 23.3333 24.0637 23.3333 21V18.6667C23.3333 21.7304 18.6386 23.3334 14 23.3334C9.36129 23.3334 4.66663 21.7304 4.66663 18.6667V21Z"
                        fill="#FA782F"
                      />
                    </svg>
                  </div>
                  <div>
                    <a className="text-[#FA782F]">My Projects</a>
                  </div>
                </li>
                <li className=" flex justify-start items-center space-x-3 cursor-pointer">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M12.5902 5.41804C12.5902 2.70188 14.792 0.5 17.5082 0.5H23.8033C23.9119 0.5 24 0.588075 24 0.696721V6.9918C24 9.70795 21.7981 11.9098 19.082 11.9098H12.5902V5.41804Z"
                        fill="#C4C4C4"
                      />
                      <path
                        d="M12.5902 19.582C12.5902 22.2981 14.792 24.5 17.5082 24.5H23.8033C23.9119 24.5 24 24.4119 24 24.3033V18.0082C24 15.292 21.7981 13.0902 19.082 13.0902H12.5902V19.582Z"
                        fill="#C4C4C4"
                      />
                      <path
                        d="M11.4098 5.41804C11.4098 2.70188 9.20796 0.5 6.4918 0.5H0.196722C0.0880756 0.5 0 0.588075 0 0.696721V6.9918C0 9.70795 2.20188 11.9098 4.91803 11.9098H11.4098V5.41804Z"
                        fill="#C4C4C4"
                      />
                      <path
                        d="M11.4098 19.582C11.4098 22.2981 9.20796 24.5 6.4918 24.5H0.196722C0.0880756 24.5 0 24.4119 0 24.3033V18.0082C0 15.292 2.20188 13.0902 4.91803 13.0902H11.4098V19.582Z"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </div>
                  <div>
                    <a>Sample Projects</a>
                  </div>
                </li>
              </div>
            </li>
            <li>
              <div className="h-[1px] mt-6 text-center w-full ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1"
                  viewBox="0 0 203 1"
                  fill="none"
                  className="mx-auto w-full"
                >
                  <path
                    opacity="0.2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 0.5C0 0.223858 0.223858 0 0.5 0H202.5C202.776 0 203 0.223858 203 0.5C203 0.776142 202.776 1 202.5 1H0.499998C0.223855 1 0 0.776142 0 0.5Z"
                    fill="black"
                  />
                </svg>
              </div>
            </li>
            <li>
              <div className="space-y-6 mt-6 lg:pl-4 text-[12px] md:text-sm ">
                <li className=" flex justify-start items-center space-x-2 cursor-pointer">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <path
                        d="M21.5744 2.71825L25.2828 6.42681C26.308 7.45194 26.308 9.114 25.2828 10.1391L22.2677 13.1537C23.5312 13.3432 24.5 14.4332 24.5 15.7496V21.8745C24.5 23.3242 23.3247 24.4995 21.875 24.4995H6.125C4.67525 24.4995 3.5 23.3242 3.5 21.8745V6.12453C3.5 4.67478 4.67525 3.49953 6.125 3.49953H12.25C13.567 3.49953 14.6576 4.46955 14.8462 5.73416L17.862 2.71825C18.8872 1.69312 20.5492 1.69312 21.5744 2.71825ZM5.25 21.8745C5.25 22.3578 5.64176 22.7495 6.125 22.7495L13.1238 22.7487L13.125 14.8746L5.25 14.8737V21.8745ZM14.8738 22.7487L21.875 22.7495C22.3582 22.7495 22.75 22.3578 22.75 21.8745V15.7496C22.75 15.2663 22.3582 14.8746 21.875 14.8746L14.8738 14.8737V22.7487ZM12.25 5.24953H6.125C5.64176 5.24953 5.25 5.64127 5.25 6.12453V13.1237H13.125V6.12453C13.125 5.64127 12.7332 5.24953 12.25 5.24953ZM14.875 10.8604V13.1246L17.1383 13.1237L14.875 10.8604ZM19.0994 3.95568L15.3909 7.66425C15.0492 8.00595 15.0492 8.55998 15.3909 8.90169L19.0994 12.6103C19.4411 12.952 19.9951 12.952 20.3369 12.6103L24.0455 8.90169C24.3872 8.55998 24.3872 8.00595 24.0455 7.66425L20.3369 3.95568C19.9951 3.61398 19.4411 3.61398 19.0994 3.95568Z"
                        fill="#C4C4C4"
                      />
                      <path
                        d="M19.0994 3.95568L15.3909 7.66425C15.0492 8.00595 15.0492 8.55998 15.3909 8.90169L19.0994 12.6103C19.4411 12.952 19.9951 12.952 20.3369 12.6103L24.0455 8.90169C24.3872 8.55998 24.3872 8.00595 24.0455 7.66425L20.3369 3.95568C19.9951 3.61398 19.4411 3.61398 19.0994 3.95568Z"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </div>
                  <div>
                    <a>Apps</a>
                  </div>
                </li>
                <li className=" flex justify-start items-center space-x-2 cursor-pointer">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <g>
                        <path
                          d="M11.5323 0.967743C9.2514 0.967743 7.02175 1.6441 5.12528 2.91128C3.22881 4.17846 1.7507 5.97955 0.877846 8.0868C0.00499677 10.194 -0.22338 12.5128 0.221594 14.7498C0.666569 16.9869 1.76491 19.0417 3.37773 20.6545C4.99054 22.2674 7.04539 23.3657 9.28243 23.8107C11.5195 24.2556 13.8382 24.0273 15.9455 23.1544C18.0527 22.2816 19.8538 20.8034 21.121 18.907C22.3882 17.0105 23.0645 14.7809 23.0645 12.5C23.0611 9.4425 21.845 6.5112 19.683 4.34922C17.5211 2.18724 14.5898 0.971145 11.5323 0.967743V0.967743ZM14.9117 13.1303L12.0644 15.118L10.5706 16.1607C10.4554 16.2412 10.3203 16.2885 10.18 16.2975C10.0397 16.3065 9.89967 16.277 9.77504 16.212C9.65042 16.147 9.54599 16.049 9.47312 15.9289C9.40026 15.8087 9.36174 15.6708 9.36175 15.5302V9.46978C9.36174 9.32922 9.40026 9.19135 9.47312 9.07115C9.54599 8.95096 9.65042 8.85304 9.77504 8.78804C9.89967 8.72304 10.0397 8.69345 10.18 8.70249C10.3203 8.71153 10.4554 8.75885 10.5706 8.8393L12.0644 9.88197L14.9117 11.8695C15.0132 11.9404 15.0961 12.0347 15.1533 12.1444C15.2106 12.2542 15.2405 12.3761 15.2405 12.4999C15.2405 12.6237 15.2106 12.7456 15.1533 12.8554C15.0961 12.9651 15.0132 13.0595 14.9117 13.1303Z"
                          fill="#C4C4C4"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_101_35">
                          <rect
                            width="23.0645"
                            height="23.0645"
                            fill="white"
                            transform="translate(0 0.967743)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div>
                    <a>Intro to Necleo</a>
                  </div>
                </li>
              </div>
            </li>
          </div>

          <div>
            <li>
              <div className="space-y-6 mt-6 lg:pl-4 text-[12px] md:text-sm ">
                <li className=" flex justify-start items-center space-x-2 cursor-pointer">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <path
                        d="M14 1.75C7.23516 1.75 1.75 7.23516 1.75 14C1.75 20.7648 7.23516 26.25 14 26.25C20.7648 26.25 26.25 20.7648 26.25 14C26.25 7.23516 20.7648 1.75 14 1.75ZM15.1047 19.6164C15.0773 20.5898 14.3555 21.1914 13.4203 21.1641C12.5234 21.1367 11.818 20.4969 11.8453 19.518C11.8727 18.5445 12.6164 17.9266 13.5133 17.9539C14.4539 17.9812 15.1375 18.643 15.1047 19.6164ZM17.768 12.6547C17.5383 12.9773 17.0242 13.393 16.3789 13.8961L15.6625 14.3883C15.3125 14.6562 15.0938 14.9734 14.9789 15.3344C14.9187 15.5258 14.875 16.0234 14.8641 16.357C14.8586 16.4227 14.8203 16.5703 14.618 16.5703C14.4156 16.5703 12.7039 16.5703 12.4797 16.5703C12.2555 16.5703 12.2281 16.4391 12.2336 16.3734C12.2664 15.4656 12.3977 14.7164 12.775 14.1148C13.2836 13.3055 14.7164 12.4523 14.7164 12.4523C14.9352 12.2883 15.1047 12.1133 15.2359 11.9219C15.4766 11.5938 15.6734 11.2273 15.6734 10.8336C15.6734 10.3797 15.5641 9.94766 15.2742 9.58672C14.9352 9.16563 14.5688 8.96328 13.8633 8.96328C13.1687 8.96328 12.7641 9.31328 12.4742 9.77266C12.1844 10.232 12.2336 10.7734 12.2336 11.2656H9.57031C9.57031 9.40625 10.057 8.21953 11.0852 7.51953C11.7797 7.04375 12.6656 6.83594 13.6992 6.83594C15.0555 6.83594 16.1328 7.0875 17.0844 7.80938C17.9648 8.47656 18.4297 9.41719 18.4297 10.6859C18.4297 11.468 18.1562 12.1242 17.768 12.6547Z"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </div>
                  <div>
                    <a>Help & Support</a>
                  </div>
                </li>
                <li className=" flex justify-start items-center space-x-2 cursor-pointer">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <g>
                        <path
                          d="M23.3334 2.33333H4.66671C3.37754 2.33333 2.34504 3.37749 2.34504 4.66666L2.33337 25.6667L7.00004 21H23.3334C24.6225 21 25.6667 19.9558 25.6667 18.6667V4.66666C25.6667 3.37749 24.6225 2.33333 23.3334 2.33333ZM15.1667 16.3333H12.8334V14H15.1667V16.3333ZM15.1667 11.6667H12.8334V7H15.1667V11.6667Z"
                          fill="#C4C4C4"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_101_48">
                          <rect width="28" height="28" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div>
                    <a>Feedback</a>
                  </div>
                </li>
                <li className=" flex justify-start items-center space-x-2 cursor-pointer">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <path
                        d="M9.54941 14.7L10.9473 15.9232C11.2383 16.1778 11.2678 16.62 11.0132 16.911C10.7586 17.2019 10.3164 17.2313 10.0254 16.9768L7.22542 14.5268C7.07351 14.394 6.98637 14.2019 6.98637 14C6.98637 13.7982 7.07351 13.6061 7.22542 13.4732L10.0254 11.0232C10.3164 10.7686 10.7586 10.7981 11.0132 11.0891C11.2678 11.38 11.2383 11.8222 10.9473 12.0768L9.54938 13.3H14.7C15.0866 13.3 15.4 13.6134 15.4 14C15.4 14.3867 15.0866 14.7 14.7 14.7H9.54941ZM25.2001 19.6C25.2001 21.1464 23.9465 22.4 22.4001 22.4H5.60005C4.05365 22.4 2.80005 21.1464 2.80005 19.6V8.40001C2.80005 6.85361 4.05365 5.60001 5.60005 5.60001H22.4001C23.9465 5.60001 25.2001 6.85361 25.2001 8.40001V19.6ZM16.8 21V7.00001H5.60005C4.82686 7.00001 4.20005 7.6268 4.20005 8.40001V19.6C4.20005 20.3732 4.82686 21 5.60005 21H16.8Z"
                        fill="#212121"
                      />
                    </svg>
                  </div>
                  <div>
                    <a className="text-black">Collapse</a>
                  </div>
                </li>
              </div>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
