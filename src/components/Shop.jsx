// see scripts, icons, prettify, weird syntax, paths
const Shop = () => {
  return (
    <>
      <div id="wrapper">
        {/* sidebar */}
        <div
          id="sidebar"
          className="fixed top-0 left-0 z-40 max-md:top-auto max-md:bottom-0"
        >
          <div
            id="sidebar__inner"
            className="flex sside md:flex-col justify-between md:h-screen md:p-2 p-1 transition-all duration-500 bg-white shadow dark:bg-dark2 2xl:w-72 xl:w-60 max-xl:w-[73px] max-md:w-screen max-md:border-t max-md:dark:border-slate-700"
          >
            {/* logo */}
            <div className="flex h-20 px-2 max-md:fixed max-md:top-0 max-md:w-full max-md:bg-white/80 max-md:left-0 max-md:px-4 max-md:h-14 max-md:shadow-sm max-md:dark:bg-slate-900/80 backdrop-blur-xl">
              <a href="home.html" id="logo" className="flex items-center gap-3">
                {/* logo icon */}
                <img
                  id="logo__icon"
                  src="assets/images/logo-icon.png"
                  alt=""
                  className="md:w-8 hidden text-2xl max-xl:!block max-md:!hidden shrink-0 uk-animation-scale-up"
                />
                {/* text logo */}
                <img
                  id="logo__text"
                  src="assets/images/logo.svg"
                  alt=""
                  className="w-full h-6 ml-1 max-xl:hidden max-md:block dark:!hidden"
                />
                <img
                  id="logo__text"
                  src="assets/images/logo-dark.svg"
                  alt=""
                  className="w-full h-6 ml-1 !hidden max-xl:!hidden max-md:block dark:max-md:!block dark:!block"
                />
              </a>
            </div>
            {/* nav */}
            <nav className="flex-1 max-md:flex max-md:justify-around md:space-y-2">
              {/* Home */}
              <a href="home.html">
                <svg
                  id="icon__outline"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                <svg
                  id="icon__solid"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="hidden"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="max-xl:hidden"> Home </span>
              </a>
              {/* Search */}
              <a href="#!">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
                <span className="max-xl:hidden"> Search </span>
              </a>
              <div
                className="sm:w-[397px] w-full bg-white shadow-lg md:!left-[73px] hidden !left-0 dark:bg-dark2 dark:border1 max-md:bottom-[57px]"
                uk-drop="pos: left-center;animate-out: true; animation: uk-animation-slide-left-medium; mode:click; offset: 9"
              >
                <div className="md:h-screen overflow-y-auto h-[calc(100vh-120px)]">
                  {/* header */}
                  <div className="px-5 py-4 space-y-5 border-b border-gray-100 dark:border-slate-700">
                    <h3 className="md:text-xl text-lg font-medium mt-3 text-black dark:text-white">
                      Search
                    </h3>
                    <div className="relative -mx-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5 absolute left-3 bottom-1/2 translate-y-1/2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                      </svg>
                      <input
                        type="text"
                        placeholder="Search"
                        className="bg-transparen w-full !pl-10 !py-2 !rounded-lg"
                      />
                    </div>
                  </div>
                  {/* contents list */}
                  <div className="p-2 space-y-2 dark:text-white">
                    <div className="flex items-center justify-between py-2.5 px-3 font-semibold">
                      <h4>Recent</h4>
                      <button type="button" className="text-blue-500 text-sm">
                        Clear all
                      </button>
                    </div>
                    <a
                      href="profile.html"
                      className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery"
                    >
                      <img
                        src="assets/images/avatars/avatar-2.jpg"
                        alt=""
                        className="bg-gray-200 rounded-full w-10 h-10"
                      />
                      <div className="fldex-1 min-w-0">
                        <h4 className="font-medium text-sm text-black dark:text-white">
                          {" "}
                          Johnson smith{" "}
                        </h4>
                        <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80">
                          {" "}
                          Suggested For You{" "}
                        </div>
                      </div>
                    </a>
                    <a
                      href="profile.html"
                      className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery"
                    >
                      <img
                        src="assets/images/avatars/avatar-5.jpg"
                        alt=""
                        className="bg-gray-200 rounded-full w-10 h-10"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm text-black dark:text-white">
                          {" "}
                          James Lewis{" "}
                        </h4>
                        <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80">
                          {" "}
                          Followed By Johnson{" "}
                        </div>
                      </div>
                      <button
                        type="button"
                        className="text-sm rounded-full py-1.5 px-4 font-semibold bg-secondery"
                      >
                        {" "}
                        Follow{" "}
                      </button>
                    </a>
                    <a
                      href="profile.html"
                      className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="border border-gray-200 p-2.5 rounded-full w-9 h-9 fill-black"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"
                        />
                      </svg>
                      <div className="fldex-1 min-w-0">
                        <h4 className="font-medium text-sm text-black dark:text-white">
                          {" "}
                          artificial intelligence
                        </h4>
                        <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80">
                          {" "}
                          13,352K post{" "}
                        </div>
                      </div>
                    </a>
                    <a
                      href="profile.html"
                      className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery"
                    >
                      <img
                        src="assets/images/avatars/avatar-3.jpg"
                        alt=""
                        className="bg-gray-200 rounded-full w-10 h-10"
                      />
                      <div className="fldex-1 min-w-0">
                        <h4 className="font-medium text-sm text-black dark:text-white">
                          {" "}
                          Monroe Parker{" "}
                        </h4>
                        <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80">
                          {" "}
                          Parker . following{" "}
                        </div>
                      </div>
                    </a>
                    <a
                      href="profile.html"
                      className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery"
                    >
                      <img
                        src="assets/images/avatars/avatar-7.jpg"
                        alt=""
                        className="bg-gray-200 rounded-full w-10 h-10"
                      />
                      <div className="fldex-1 min-w-0">
                        <h4 className="font-medium text-sm text-black dark:text-white">
                          {" "}
                          Johnson smith{" "}
                        </h4>
                        <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80">
                          {" "}
                          Suggested For You{" "}
                        </div>
                      </div>
                    </a>
                    <a
                      href="profile.html"
                      className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery"
                    >
                      <img
                        src="assets/images/avatars/avatar-4.jpg"
                        alt=""
                        className="bg-gray-200 rounded-full w-10 h-10"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm text-black dark:text-white">
                          {" "}
                          James Lewis{" "}
                        </h4>
                        <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80">
                          {" "}
                          Followed By Johnson{" "}
                        </div>
                      </div>
                      <button
                        type="button"
                        className="text-sm rounded-full py-1.5 px-4 font-semibold bg-secondery"
                      >
                        {" "}
                        Follow{" "}
                      </button>
                    </a>
                    <a
                      href="profile.html"
                      className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="border border-gray-200 p-2.5 rounded-full w-9 h-9 fill-black"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"
                        />
                      </svg>
                      <div className="fldex-1 min-w-0">
                        <h4 className="font-medium text-sm text-black dark:text-white">
                          {" "}
                          Ui Designers{" "}
                        </h4>
                        <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80">
                          {" "}
                          9,362K post{" "}
                        </div>
                      </div>
                    </a>
                    <a
                      href="profile.html"
                      className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="border border-gray-200 p-2.5 rounded-full w-9 h-9 fill-black"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"
                        />
                      </svg>
                      <div className="fldex-1 min-w-0">
                        <h4 className="font-medium text-sm text-black dark:text-white">
                          {" "}
                          Affiliate marketing
                        </h4>
                        <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80">
                          {" "}
                          4,248K post{" "}
                        </div>
                      </div>
                    </a>
                    <a
                      href="profile.html"
                      className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery"
                    >
                      <img
                        src="assets/images/avatars/avatar-2.jpg"
                        alt=""
                        className="bg-gray-200 rounded-full w-10 h-10"
                      />
                      <div className="fldex-1 min-w-0">
                        <h4 className="font-medium text-sm text-black dark:text-white">
                          {" "}
                          Johnson smith{" "}
                        </h4>
                        <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80">
                          {" "}
                          Suggested For You{" "}
                        </div>
                      </div>
                    </a>
                    <a
                      href="profile.html"
                      className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery"
                    >
                      <img
                        src="assets/images/avatars/avatar-5.jpg"
                        alt=""
                        className="bg-gray-200 rounded-full w-10 h-10"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm text-black dark:text-white">
                          {" "}
                          James Lewis{" "}
                        </h4>
                        <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80">
                          {" "}
                          Followed By Johnson{" "}
                        </div>
                      </div>
                      <button
                        type="button"
                        className="text-sm rounded-full py-1.5 px-4 font-semibold bg-secondery"
                      >
                        {" "}
                        Follow{" "}
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              {/* Explore */}
              <a href="explore.html" className="max-md:!hidden">
                <svg
                  id="icon__outline"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-compass"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                  <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
                </svg>
                <svg
                  id="icon__solid"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="hidden"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.5 4.938a7 7 0 11-9.006 1.737c.202-.257.59-.218.793.039.278.352.594.672.943.954.332.269.786-.049.773-.476a5.977 5.977 0 01.572-2.759 6.026 6.026 0 012.486-2.665c.247-.14.55-.016.677.238A6.967 6.967 0 0013.5 4.938zM14 12a4 4 0 01-4 4c-1.913 0-3.52-1.398-3.91-3.182-.093-.429.44-.643.814-.413a4.043 4.043 0 001.601.564c.303.038.531-.24.51-.544a5.975 5.975 0 011.315-4.192.447.447 0 01.431-.16A4.001 4.001 0 0114 12z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="max-xl:hidden"> Explore </span>
              </a>
              <a
                href="messages.html"
                className="max-md:!fixed max-md:top-2 max-md:right-2"
              >
                <svg
                  id="icon__outline"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  />
                </svg>
                <svg
                  id="icon__solid"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="hidden"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="max-xl:hidden"> Messages </span>
              </a>
              {/* reels */}
              <a href="reels.html">
                <svg
                  id="icon__outline"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 7.5l16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0012 6.75zm-1.683 6.443l-.005.005-.006-.005.006-.005.005.005zm-.005 2.127l-.005-.006.005-.005.005.005-.005.005zm-2.116-.006l-.005.006-.006-.006.005-.005.006.005zm-.005-2.116l-.006-.005.006-.005.005.005-.005.005zM9.255 10.5v.008h-.008V10.5h.008zm3.249 1.88l-.007.004-.003-.007.006-.003.004.006zm-1.38 5.126l-.003-.006.006-.004.004.007-.006.003zm.007-6.501l-.003.006-.007-.003.004-.007.006.004zm1.37 5.129l-.007-.004.004-.006.006.003-.004.007zm.504-1.877h-.008v-.007h.008v.007zM9.255 18v.008h-.008V18h.008zm-3.246-1.87l-.007.004L6 16.127l.006-.003.004.006zm1.366-5.119l-.004-.006.006-.004.004.007-.006.003zM7.38 17.5l-.003.006-.007-.003.004-.007.006.004zm-1.376-5.116L6 12.38l.003-.007.007.004-.004.007zm-.5 1.873h-.008v-.007h.008v.007zM17.25 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zm0 4.5a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  />
                </svg>
                <svg
                  id="icon__solid"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="hidden"
                >
                  <path
                    fillRule="evenodd"
                    d="M20.432 4.103a.75.75 0 00-.364-1.455L4.128 6.632l-.2.033C2.498 6.904 1.5 8.158 1.5 9.575v9.175a3 3 0 003 3h15a3 3 0 003-3V9.574c0-1.416-.997-2.67-2.429-2.909a49.016 49.016 0 00-7.255-.658l7.616-1.904zm-9.585 8.56a.75.75 0 010 1.06l-.005.006a.75.75 0 01-1.06 0l-.006-.005a.75.75 0 010-1.061l.005-.005a.75.75 0 011.06 0l.006.005zM9.781 15.85a.75.75 0 001.061 0l.005-.005a.75.75 0 000-1.061l-.005-.005a.75.75 0 00-1.06 0l-.006.005a.75.75 0 000 1.06l.005.006zm-1.055-1.066a.75.75 0 010 1.06l-.005.006a.75.75 0 01-1.061 0l-.005-.005a.75.75 0 010-1.06l.005-.006a.75.75 0 011.06 0l.006.005zM7.66 13.73a.75.75 0 001.061 0l.005-.006a.75.75 0 000-1.06l-.005-.005a.75.75 0 00-1.06 0l-.006.005a.75.75 0 000 1.06l.005.006zM9.255 9.75a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75V10.5a.75.75 0 01.75-.75h.008zm3.624 3.28a.75.75 0 00.275-1.025L13.15 12a.75.75 0 00-1.025-.275l-.006.004a.75.75 0 00-.275 1.024l.004.007a.75.75 0 001.024.274l.007-.003zm-1.38 5.126a.75.75 0 01-1.024-.274l-.004-.007a.75.75 0 01.275-1.024l.006-.004a.75.75 0 011.025.274l.004.007a.75.75 0 01-.275 1.024l-.006.004zm.282-6.776a.75.75 0 00-.274-1.025l-.007-.003a.75.75 0 00-1.024.274l-.004.007a.75.75 0 00.274 1.024l.007.004a.75.75 0 001.024-.274l.004-.007zm1.369 5.129a.75.75 0 01-1.025.274l-.006-.003a.75.75 0 01-.275-1.025l.004-.006a.75.75 0 011.025-.275l.006.004a.75.75 0 01.275 1.024l-.004.007zm-.145-1.502a.75.75 0 00.75-.75v-.007a.75.75 0 00-.75-.75h-.008a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008zm-3.75 2.243a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75V18a.75.75 0 01.75-.75h.008zm-2.871-.47a.75.75 0 00.274-1.025l-.003-.006a.75.75 0 00-1.025-.275l-.006.004a.75.75 0 00-.275 1.025l.004.006a.75.75 0 001.024.274l.007-.003zm1.366-5.12a.75.75 0 01-1.025-.274l-.004-.006a.75.75 0 01.275-1.025l.006-.003a.75.75 0 011.025.274l.004.007a.75.75 0 01-.275 1.024l-.006.004zm.281 6.215a.75.75 0 00-.275-1.024l-.006-.004a.75.75 0 00-1.025.274l-.003.007a.75.75 0 00.274 1.024l.007.004a.75.75 0 001.024-.274l.004-.007zM6.655 12.76a.75.75 0 01-1.025.274l-.006-.003a.75.75 0 01-.275-1.025L5.353 12a.75.75 0 011.025-.275l.006.004a.75.75 0 01.275 1.024l-.004.007zm-1.15 2.248a.75.75 0 00.75-.75v-.007a.75.75 0 00-.75-.75h-.008a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008zM17.25 10.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm1.5 6a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="max-xl:hidden"> reels </span>
              </a>
              {/* Notification */}
              <a
                href="#!"
                className="max-md:!fixed max-md:top-2 max-md:right-14 relative"
              >
                <svg
                  id="icon__outline"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
                <svg
                  id="icon__solid"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="hidden"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
                <span className="max-xl:hidden"> Notifications </span>
                <div className="w-2 h-2 bg-red-600 rounded-full absolute left-7 top-2.5" />
              </a>
              <div
                className="sm:w-[397px] w-full bg-white shadow-lg md:!left-[73px] hidden !left-0 dark:bg-dark2 dark:border1 max-md:bottom-[57px]"
                uk-drop="pos: left-center;animate-out: true; animation: uk-animation-slide-left-medium ; mode:click"
              >
                <div className="md:h-screen overflow-y-auto h-[calc(100vh-120px)]">
                  {/* header */}
                  <div className="flex items-center justify-between px-5 py-4 mt-3">
                    <h3 className="md:text-xl text-lg font-medium mt-3 text-black dark:text-white">
                      Notification
                    </h3>
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* contents list */}
                  <div className="px-2 -mt-2 text-sm font-normal">
                    <div className="px-5 py-3 -mx-2">
                      <h4 className="font-semibold">New</h4>
                    </div>
                    <a
                      href="#"
                      className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery"
                    >
                      <div className="relative w-12 h-12 shrink-0">
                        {" "}
                        <img
                          src="assets/images/avatars/avatar-2.jpg"
                          alt=""
                          className="object-cover w-full h-full rounded-full"
                        />
                      </div>
                      <div className="flex-1 ">
                        <p>
                          {" "}
                          <b className="font-bold mr-1"> John Michael</b> who you
                          might know, is on Instello.
                        </p>
                        <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80">
                          {" "}
                          2 hours ago{" "}
                        </div>
                      </div>
                      <button
                        type="button"
                        className="button text-white bg-primary"
                      >
                        fallow
                      </button>
                    </a>
                    <a
                      href="#"
                      className="relative flex items-center gap-3 p-2 duration-200 rounded-xl pr-10 hover:bg-secondery bg-teal-500/5"
                    >
                      <div className="relative w-12 h-12 shrink-0">
                        {" "}
                        <img
                          src="assets/images/avatars/avatar-3.jpg"
                          alt=""
                          className="object-cover w-full h-full rounded-full"
                        />
                      </div>
                      <div className="flex-1 ">
                        <p>
                          {" "}
                          <b className="font-bold mr-1"> Alexa Gray</b> started
                          following you. Welcome him to your profile. 👋{" "}
                        </p>
                        <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80">
                          {" "}
                          4 hours ago{" "}
                        </div>
                        <div className="w-2.5 h-2.5 bg-teal-600 rounded-full absolute right-3 top-5" />
                      </div>
                    </a>
                    <a
                      href="#"
                      className="relative flex items-center gap-3 p-2 duration-200 rounded-xl pr-10 hover:bg-secondery"
                    >
                      <div className="relative w-12 h-12 shrink-0">
                        {" "}
                        <img
                          src="assets/images/avatars/avatar-7.jpg"
                          alt=""
                          className="object-cover w-full h-full rounded-full"
                        />
                      </div>
                      <div className="flex-1 ">
                        <p>
                          {" "}
                          <b className="font-bold mr-1">Jesse Steeve</b> mentioned
                          you in a story. Check it out and reply. 📣{" "}
                        </p>
                        <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80">
                          {" "}
                          8 hours ago{" "}
                        </div>
                      </div>
                    </a>
                    <div className="border-t px-5 py-3 -mx-2 mt-4 dark:border-slate-700/40">
                      <h4 className="font-semibold">This Week</h4>
                    </div>
                    <a
                      href="#"
                      className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery"
                    >
                      <div className="relative w-12 h-12 shrink-0">
                        {" "}
                        <img
                          src="assets/images/avatars/avatar-4.jpg"
                          alt=""
                          className="object-cover w-full h-full rounded-full"
                        />
                      </div>
                      <div className="flex-1 ">
                        <p>
                          {" "}
                          <b className="font-bold mr-1"> Jesse Steeve</b> sarah
                          tagged you <br /> in a photo of your birthday party. 📸{" "}
                        </p>
                        <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80">
                          {" "}
                          8 hours ago{" "}
                        </div>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="relative flex items-center gap-3 p-2 duration-200 rounded-xl pr-10 hover:bg-secondery bg-teal-500/5"
                    >
                      <div className="relative w-12 h-12 shrink-0">
                        {" "}
                        <img
                          src="assets/images/avatars/avatar-3.jpg"
                          alt=""
                          className="object-cover w-full h-full rounded-full"
                        />
                      </div>
                      <div className="flex-1 ">
                        <p>
                          {" "}
                          <b className="font-bold mr-1"> Sarah Gray</b> sent you a
                          message. He wants to chat with you. 💖{" "}
                        </p>
                        <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80">
                          {" "}
                          4 hours ago{" "}
                        </div>
                        <div className="w-2.5 h-2.5 bg-teal-600 rounded-full absolute right-3 top-5" />
                      </div>
                    </a>
                    <a
                      href="#"
                      className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery"
                    >
                      <div className="relative w-12 h-12 shrink-0">
                        {" "}
                        <img
                          src="assets/images/avatars/avatar-4.jpg"
                          alt=""
                          className="object-cover w-full h-full rounded-full"
                        />
                      </div>
                      <div className="flex-1 ">
                        <p>
                          {" "}
                          <b className="font-bold mr-1"> James Lewis</b> Start
                          following you on instello{" "}
                        </p>
                        <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80">
                          {" "}
                          8 hours ago{" "}
                        </div>
                      </div>
                      <button
                        type="button"
                        className="button bg-primary-soft text-primary"
                      >
                        fallowing
                      </button>
                    </a>
                    <a
                      href="#"
                      className="relative flex items-center gap-3 p-2 duration-200 rounded-xl pr-10 hover:bg-secondery"
                    >
                      <div className="relative w-12 h-12 shrink-0">
                        {" "}
                        <img
                          src="assets/images/avatars/avatar-6.jpg"
                          alt=""
                          className="object-cover w-full h-full rounded-full"
                        />
                      </div>
                      <div className="flex-1 ">
                        <p>
                          {" "}
                          <b className="font-bold mr-1"> Alexa stella</b> commented
                          on your photo “Wow, stunning shot!” 💬{" "}
                        </p>
                        <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80">
                          {" "}
                          8 hours ago{" "}
                        </div>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="relative flex items-center gap-3 p-2 duration-200 rounded-xl pr-10 hover:bg-secondery"
                    >
                      <div className="relative w-12 h-12 shrink-0">
                        {" "}
                        <img
                          src="assets/images/avatars/avatar-2.jpg"
                          alt=""
                          className="object-cover w-full h-full rounded-full"
                        />
                      </div>
                      <div className="flex-1 ">
                        <p>
                          {" "}
                          <b className="font-bold mr-1"> John Michael</b> mentioned
                          you in a story. Check it out and reply. 📣{" "}
                        </p>
                        <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80">
                          {" "}
                          8 hours ago{" "}
                        </div>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery"
                    >
                      <div className="relative w-12 h-12 shrink-0">
                        {" "}
                        <img
                          src="assets/images/avatars/avatar-5.jpg"
                          alt=""
                          className="object-cover w-full h-full rounded-full"
                        />
                      </div>
                      <div className="flex-1 ">
                        <p>
                          {" "}
                          <b className="font-bold mr-1"> Jesse Steeve</b> who you
                          might know, is on Instello.{" "}
                        </p>
                        <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80">
                          {" "}
                          8 hours ago{" "}
                        </div>
                      </div>
                      <button
                        type="button"
                        className="button text-white bg-primary"
                      >
                        fallow
                      </button>
                    </a>
                    <a
                      href="#"
                      className="relative flex items-center gap-3 p-2 duration-200 rounded-xl pr-10 hover:bg-secondery"
                    >
                      <div className="relative w-12 h-12 shrink-0">
                        {" "}
                        <img
                          src="assets/images/avatars/avatar-7.jpg"
                          alt=""
                          className="object-cover w-full h-full rounded-full"
                        />
                      </div>
                      <div className="flex-1 ">
                        <p>
                          {" "}
                          <b className="font-bold mr-1"> Martin Gray</b> liked your
                          photo of the Eiffel Tower. 😍{" "}
                        </p>
                        <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80">
                          {" "}
                          8 hours ago{" "}
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* marketplace */}
              <a href="shop.html" className="active">
                <svg
                  id="icon__outline"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                <svg
                  id="icon__solid"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="hidden"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="max-xl:hidden"> Shop </span>
              </a>
              {/* peaple */}
              <a href="peaple.html" className="max-md:!hidden">
                <svg
                  id="icon__outline"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
                <svg
                  id="icon__solid"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="hidden"
                >
                  <path d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z" />
                </svg>
                <span className="max-xl:hidden"> Peaple </span>
              </a>
              {/* create a post */}
              <a href="!#">
                <button
                  uk-toggle="target: #create-post"
                  className="flex items-center gap-3 w-full"
                >
                  <svg
                    id="icon__outline"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <svg
                    id="icon__solid"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="hidden"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="max-xl:hidden"> Create </span>
                </button>
              </a>
              {/* components */}
              <a href="components.html" className="max-md:!hidden">
                <svg
                  id="icon__outline"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                  />
                </svg>
                <svg
                  id="icon__solid"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="hidden"
                >
                  <path d="M5.566 4.657A4.505 4.505 0 016.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0015.75 3h-7.5a3 3 0 00-2.684 1.657zM2.25 12a3 3 0 013-3h13.5a3 3 0 013 3v6a3 3 0 01-3 3H5.25a3 3 0 01-3-3v-6zM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 016.75 6h10.5a3 3 0 012.683 1.657A4.505 4.505 0 0018.75 7.5H5.25z" />
                </svg>
                <span className="max-xl:hidden"> components </span>
              </a>
              <a href="profile.html" className="max-md:!hidden">
                <svg
                  id="icon__outline"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <svg
                  id="icon__solid"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="hidden"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="max-xl:hidden"> Profile </span>
              </a>
            </nav>
            {/* profile */}
            <div>
              <a id="profile-link" className="flex items-center gap-3 p-3 group">
                <img
                  src="assets/images/avatars/avatar-7.jpg"
                  alt=""
                  className="rounded-full md:w-7 md:h-7 w-5 h-5 shrink-0"
                />
                <span className="font-semibold text-sm max-xl:hidden">
                  {" "}
                  Monroe Parker{" "}
                </span>
                <ion-icon
                  name="chevron-forward-outline"
                  className="text-xl ml-auto duration-200 group-aria-expanded:-rotate-90 max-xl:hidden"
                />
              </a>
              <div
                className="bg-white sm:w-64 2xl:w-[calc(100%-16px)] w-full shadow-lg border rounded-xl overflow-hidden max-md:!top-auto max-md:bottom-16 border2 dark:bg-dark2 hidden"
                uk-drop="animation:uk-animation-slide-bottom-medium ;animate-out: true"
              >
                <div className="w-full h-1.5 bg-gradient-to-r to-purple-500 via-red-500 from-pink-500" />
                <div className="p-4 text-xs font-medium">
                  <a href="profile.html">
                    <img
                      src="assets/images/avatars/avatar-3.jpg"
                      className="w-8 h-8 rounded-full"
                      alt=""
                    />
                    <div className="mt-2 space-y-0.5">
                      <div className="text-base font-semibold"> Monroe Parker </div>
                      <div className="text-gray-400 dark:text-white/80">
                        {" "}
                        @monroe{" "}
                      </div>
                    </div>
                  </a>
                  <div className="mt-3 flex gap-3.5">
                    <div>
                      {" "}
                      <a href="profile.html">
                        {" "}
                        <strong> 620K </strong>{" "}
                        <span className="text-gray-400 dark:text-white/80 ml-1">
                          Following{" "}
                        </span>{" "}
                      </a>{" "}
                    </div>
                    <div>
                      {" "}
                      <a href="profile.html">
                        {" "}
                        <strong> 38k </strong>{" "}
                        <span className="text-gray-400 dark:text-white/80 ml-1">
                          Followers{" "}
                        </span>{" "}
                      </a>
                    </div>
                  </div>
                </div>
                <hr className="opacity-60" />
                <ul className="text-sm font-semibold p-2">
                  <li>
                    {" "}
                    <a
                      href="setting.html"
                      className="flex gap-3 rounded-md p-2 hover:bg-secondery"
                    >
                      {" "}
                      <ion-icon
                        name="person-outline"
                        className="text-lg"
                      /> Profile{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a
                      href="upgrade.html"
                      className="flex gap-3 rounded-md p-2 hover:bg-secondery"
                    >
                      {" "}
                      <ion-icon name="bookmark-outline" className="text-lg" />{" "}
                      Upgrade{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a
                      href="setting.html"
                      className="flex gap-3 rounded-md p-2 hover:bg-secondery"
                    >
                      {" "}
                      <ion-icon name="settings-outline" className="text-lg" />{" "}
                      Acount Setting
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a
                      href="form-login.html"
                      className="flex gap-3 rounded-md p-2 hover:bg-secondery"
                    >
                      {" "}
                      <ion-icon name="log-out-outline" className="text-lg" /> Log
                      Out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* main contents */}
        <main className="2xl:ml-[--w-side] xl:ml-[--w-side-md] md:ml-[--w-side-small]">
          <div className="main__inner">
            <div uk-sticky="cls-active: bg-slate-100/60 z-30 backdrop-blur-lg px-4; start: 80; animation: uk-animation-slide-top">
              {/* heading title */}
              <div className="page__heading">
                <h1> Market </h1>
              </div>
              {/* tab style one */}
              <div className="overflow-hidden mt-6">
                <div
                  id="product-nav"
                  className="relative flex items-center justify-between border-b dark:border-slate-800 uk-animation-slide-top-medium"
                >
                  {/* tabs */}
                  <ul
                    className="flex gap-2 text-sm text-center text-gray-600 capitalize font-semibold dark:text-white/80 -mb-px"
                    uk-switcher="connect: #market_tab ; animation: uk-animation-slide-right-medium, uk-animation-slide-left-medium"
                  >
                    <li>
                      {" "}
                      <a
                        href="#"
                        className="flex items-center md:p-4 p-2.5 border-b-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white"
                      >
                        {" "}
                        <ion-icon
                          className="mr-2 text-2xl max-md:hidden"
                          name="cart-outline"
                        />{" "}
                        My Products
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a
                        href="#"
                        className="flex items-center md:p-4 p-2.5 border-b-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white"
                      >
                        {" "}
                        <ion-icon
                          className="mr-2 text-2xl max-md:hidden"
                          name="cloud-download-outline"
                        />{" "}
                        Donwloads
                      </a>{" "}
                    </li>
                  </ul>
                  {/* right button icons */}
                  <div className="flex items-center gap-4">
                    <button className="flex" uk-toggle="target: #product-nav">
                      <ion-icon className="text-xl" name="search" />
                    </button>
                    <select className="!bg-transparent focus:!border-transparent focus:!ring-transparent max-sm:hidden md:w-40">
                      <option value={1}>Latest</option>
                      <option value={3}>Popular</option>
                      <option value={4}>Newest</option>
                    </select>
                  </div>
                </div>
                {/* Search box */}
                <div
                  id="product-nav"
                  className=" w-full  rounded-lg z-30 uk-animation-slide-bottom"
                  hidden=""
                >
                  <div className="bg-slate-200 py-2 px-3.5 rounded-md w-full flex items-center gap-3 dark:bg-dark2">
                    <button type="submit" className="flex">
                      {" "}
                      <ion-icon className="text-2xl" name="search" />
                    </button>
                    <input
                      type="text"
                      className="!bg-transparent !outline-none !w-full"
                      placeholder="Search"
                    />
                    <button className="flex" uk-toggle="target: #product-nav">
                      <ion-icon className="text-2xl" name="close" />
                    </button>
                  </div>
                </div>
              </div>
              {/* tab style two .  default this tab is hidden just remove to see style tab 2 */}
              <div className="relative flex items-center justify-between mt-6 border-b hidden">
                {/* tabs */}
                <ul
                  className="flex gap-2 text-sm text-center text-gray-600 capitalize font-semibold"
                  uk-switcher="connect: #market_tab ; animation: uk-animation-slide-right-medium, uk-animation-slide-left-medium"
                >
                  <li>
                    {" "}
                    <a
                      href="#"
                      className="flex items-center px-3 py-3.5 -mb-px border-b-2 border-transparent aria-expanded:text-black aria-expanded:border-black"
                    >
                      {" "}
                      <ion-icon className="mr-2 text-2xl" name="cart-outline" /> My
                      Products
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a
                      href="#"
                      className="flex items-center px-3 py-3.5 -mb-px border-b-2 border-transparent aria-expanded:text-black aria-expanded:border-black"
                    >
                      {" "}
                      <ion-icon
                        className="mr-2 text-2xl"
                        name="cloud-download-outline"
                      />{" "}
                      Donwloads
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a
                      href="#"
                      className="flex items-center px-3 py-3.5 -mb-px border-b-2 border-transparent aria-expanded:text-black aria-expanded:border-black"
                    >
                      {" "}
                      <ion-icon className="mr-2 text-2xl" name="add-outline" />{" "}
                      Upload
                    </a>{" "}
                  </li>
                </ul>
                {/* right button icons */}
                <div className="flex items-center gap-4">
                  <button
                    className="flex"
                    uk-toggle="target: #search-box; cls: hidden"
                  >
                    <ion-icon className="text-xl" name="search" />
                  </button>
                  <select className="!bg-transparent focus:!border-transparent focus:!ring-transparent md:w-40">
                    <option value={1}>Latest</option>
                    <option value={3}>best product</option>
                    <option value={4}>Engaged</option>
                  </select>
                </div>
                {/* Search box */}
                <div
                  className="absolute left-0 -bottom-0.5 w-full hidden ring-4 ring-slate-100 rounded-lg z-30 "
                  id="search-box"
                >
                  <div className="bg-slate-200 py-2 px-3.5 rounded-md w-full flex items-center gap-3">
                    <button type="submit" className="flex">
                      {" "}
                      <ion-icon className="text-2xl" name="search" />
                    </button>
                    <input
                      type="text"
                      className="!bg-transparent !outline-none !w-full"
                      placeholder="Search"
                    />
                    <button
                      className="flex"
                      uk-toggle="target: #search-box; cls: hidden"
                    >
                      <ion-icon className="text-2xl" name="close" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="uk-switcher" id="market_tab">
              {/* product list */}
              <div>
                {/* category list */}
                <div className="relative" tabIndex={-1} uk-slider="finite: true">
                  <div className="py-6 overflow-hidden uk-slider-container">
                    <ul className="uk-slider-items w-[calc(100%+0.10px)] capitalize text-sm font-semibold">
                      <li className="w-auto pr-2.5">
                        {" "}
                        <a
                          href="#"
                          className="px-4 py-2 rounded-lg bg-slate-200 inline-block hover:shadow dark:bg-dark2"
                        >
                          {" "}
                          Gamings{" "}
                        </a>{" "}
                      </li>
                      <li className="w-auto pr-2.5">
                        {" "}
                        <a
                          href="#"
                          className="px-4 py-2 rounded-lg bg-slate-200 inline-block hover:shadow dark:bg-dark2"
                        >
                          {" "}
                          headphones{" "}
                        </a>{" "}
                      </li>
                      <li className="w-auto pr-2.5">
                        {" "}
                        <a
                          href="#"
                          className="px-4 py-2 rounded-lg bg-slate-200 inline-block hover:shadow dark:bg-dark2"
                        >
                          {" "}
                          Parfums{" "}
                        </a>{" "}
                      </li>
                      <li className="w-auto pr-2.5">
                        {" "}
                        <a
                          href="#"
                          className="px-4 py-2 rounded-lg bg-slate-200 inline-block hover:shadow dark:bg-dark2"
                        >
                          {" "}
                          Fruits{" "}
                        </a>{" "}
                      </li>
                      <li className="w-auto pr-2.5">
                        {" "}
                        <a
                          href="#"
                          className="px-4 py-2 rounded-lg bg-slate-200 inline-block hover:shadow dark:bg-dark2"
                        >
                          {" "}
                          Gaming{" "}
                        </a>{" "}
                      </li>
                      <li className="w-auto pr-2.5">
                        {" "}
                        <a
                          href="#"
                          className="px-4 py-2 rounded-lg bg-slate-200 inline-block hover:shadow dark:bg-dark2"
                        >
                          {" "}
                          Mobiles{" "}
                        </a>{" "}
                      </li>
                      <li className="w-auto pr-2.5">
                        {" "}
                        <a
                          href="#"
                          className="px-4 py-2 rounded-lg bg-slate-200 inline-block hover:shadow dark:bg-dark2"
                        >
                          {" "}
                          Laptops{" "}
                        </a>{" "}
                      </li>
                      <li className="w-auto pr-2.5">
                        {" "}
                        <a
                          href="#"
                          className="px-4 py-2 rounded-lg bg-slate-200 inline-block hover:shadow dark:bg-dark2"
                        >
                          {" "}
                          Gaming{" "}
                        </a>{" "}
                      </li>
                      <li className="w-auto pr-2.5">
                        {" "}
                        <a
                          href="#"
                          className="px-4 py-2 rounded-lg bg-slate-200 inline-block hover:shadow dark:bg-dark2"
                        >
                          {" "}
                          headphones{" "}
                        </a>{" "}
                      </li>
                      <li className="w-auto pr-2.5">
                        {" "}
                        <a
                          href="#"
                          className="px-4 py-2 rounded-lg bg-slate-200 inline-block hover:shadow dark:bg-dark2"
                        >
                          {" "}
                          Parfums{" "}
                        </a>{" "}
                      </li>
                      <li className="w-auto pr-2.5">
                        {" "}
                        <a
                          href="#"
                          className="px-4 py-2 rounded-lg bg-slate-200 inline-block hover:shadow dark:bg-dark2"
                        >
                          {" "}
                          Fruits{" "}
                        </a>{" "}
                      </li>
                    </ul>
                  </div>
                  <a
                    className="absolute left-0 -translate-y-1/2 top-1/2 flex items-center w-16 h-12 p-2.5 justify-start bg-gradient-to-r from-bgbody via-bgbody"
                    href="#"
                    uk-slider-item="previous"
                  >
                    {" "}
                    <ion-icon name="chevron-back" className="text-2xl" />{" "}
                  </a>
                  <a
                    className="absolute right-0 -translate-y-1/2 top-1/2 flex items-center w-16 h-12 p-2.5 justify-end bg-gradient-to-l from-bgbody via-bgbody"
                    href="#"
                    uk-slider-item="next"
                  >
                    {" "}
                    <ion-icon name="chevron-forward" className="text-2xl" />{" "}
                  </a>
                </div>
                {/* product list  */}
                <div
                  className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 mt-2"
                  uk-scrollspy="target: > div; cls: uk-animation-slide-bottom-small; delay: 100"
                >
                  {/* single item */}
                  <div>
                    <a href="#product_modal" className="group" uk-toggle="">
                      <div className="relative overflow-hidden rounded-lg">
                        <div className="relative w-full md:h-60 h-56 transition-all group-hover:scale-110 duration-300">
                          <img
                            src="assets/images/product/product-1.jpg"
                            alt=""
                            className="object-cover w-full h-full inset-0"
                          />
                        </div>
                        <div className="absolute right-0 top-0 m-2 bg-slate-100 rounded-full py-0.5 px-2 text-sm font-bold dark:bg-slate-800/60">
                          {" "}
                          $12{" "}
                        </div>
                      </div>
                    </a>
                    <div className="py-2">
                      <h4 className="text-black lg:font-medium mb-0.5 dark:text-white">
                        {" "}
                        The Deep Cleanse{" "}
                      </h4>
                      <p className="md:text-sm text-xs lg:font-medium text-gray-500 dark:text-white">
                        {" "}
                        by <a href="profile.html"> Jesse Steeve </a>{" "}
                      </p>
                    </div>
                  </div>
                  {/* single item */}
                  <div>
                    <a href="#product_modal" className="group" uk-toggle="">
                      <div className="relative overflow-hidden rounded-lg">
                        <div className="relative w-full md:h-60 h-56 transition-all group-hover:scale-110 duration-300">
                          <img
                            src="assets/images/product/product-2.jpg"
                            alt=""
                            className="object-cover w-full h-full inset-0"
                          />
                        </div>
                        <div className="absolute right-0 top-0 m-2 bg-slate-100 rounded-full py-0.5 px-2 text-sm font-bold dark:bg-slate-800/60">
                          {" "}
                          $12{" "}
                        </div>
                      </div>
                    </a>
                    <div className="py-2">
                      <h4 className="text-black lg:font-medium mb-0.5 dark:text-white">
                        {" "}
                        Regency High Gloss{" "}
                      </h4>
                      <p className="md:text-sm text-xs lg:font-medium text-gray-500 dark:text-white">
                        {" "}
                        by <a href="profile.html"> John Michael </a>{" "}
                      </p>
                    </div>
                  </div>
                  {/* single item */}
                  <div>
                    <a href="#product_modal" className="group" uk-toggle="">
                      <div className="relative overflow-hidden rounded-lg">
                        <div className="relative w-full md:h-60 h-56 transition-all group-hover:scale-110 duration-300">
                          <img
                            src="assets/images/product/product-3.jpg"
                            alt=""
                            className="object-cover w-full h-full inset-0"
                          />
                        </div>
                        <div className="absolute right-0 top-0 m-2 bg-slate-100 rounded-full py-0.5 px-2 text-sm font-bold dark:bg-slate-800/60">
                          {" "}
                          $12{" "}
                        </div>
                      </div>
                    </a>
                    <div className="py-2">
                      <h4 className="text-black lg:font-medium mb-0.5 dark:text-white">
                        {" "}
                        Gaming Mouse{" "}
                      </h4>
                      <p className="md:text-sm text-xs lg:font-medium text-gray-500 dark:text-white">
                        {" "}
                        by <a href="profile.html"> Martin Gray </a>{" "}
                      </p>
                    </div>
                  </div>
                  {/* single item */}
                  <div>
                    <a href="#product_modal" className="group" uk-toggle="">
                      <div className="relative overflow-hidden rounded-lg">
                        <div className="relative w-full md:h-60 h-56 transition-all group-hover:scale-110 duration-300">
                          <img
                            src="assets/images/product/product-4.jpg"
                            alt=""
                            className="object-cover w-full h-full inset-0"
                          />
                        </div>
                        <div className="absolute right-0 top-0 m-2 bg-slate-100 rounded-full py-0.5 px-2 text-sm font-bold dark:bg-slate-800/60">
                          {" "}
                          $12{" "}
                        </div>
                      </div>
                    </a>
                    <div className="py-2">
                      <h4 className="text-black lg:font-medium mb-0.5 dark:text-white">
                        {" "}
                        Abstract Minimalism Bright{" "}
                      </h4>
                      <p className="md:text-sm text-xs lg:font-medium text-gray-500 dark:text-white">
                        {" "}
                        by <a href="profile.html"> Alexa stella </a>{" "}
                      </p>
                    </div>
                  </div>
                  {/* single item */}
                  <div>
                    <a href="#product_modal" className="group" uk-toggle="">
                      <div className="relative overflow-hidden rounded-lg">
                        <div className="relative w-full md:h-60 h-56 transition-all group-hover:scale-110 duration-300">
                          <img
                            src="assets/images/product/product-6.jpg"
                            alt=""
                            className="object-cover w-full h-full inset-0"
                          />
                        </div>
                        <div className="absolute right-0 top-0 m-2 bg-slate-100 rounded-full py-0.5 px-2 text-sm font-bold dark:bg-slate-800/60">
                          {" "}
                          $12{" "}
                        </div>
                      </div>
                    </a>
                    <div className="py-2">
                      <h4 className="text-black lg:font-medium mb-0.5 dark:text-white">
                        {" "}
                        Abstract art{" "}
                      </h4>
                      <p className="md:text-sm text-xs lg:font-medium text-gray-500 dark:text-white">
                        {" "}
                        by <a href="profile.html"> Alexa stella </a>{" "}
                      </p>
                    </div>
                  </div>
                  {/* single item */}
                  <div>
                    <a href="#product_modal" className="group" uk-toggle="">
                      <div className="relative overflow-hidden rounded-lg">
                        <div className="relative w-full md:h-60 h-56 transition-all group-hover:scale-110 duration-300">
                          <img
                            src="assets/images/product/product-5.jpg"
                            alt=""
                            className="object-cover w-full h-full inset-0"
                          />
                        </div>
                        <div className="absolute right-0 top-0 m-2 bg-slate-100 rounded-full py-0.5 px-2 text-sm font-bold dark:bg-slate-800/60">
                          {" "}
                          $12{" "}
                        </div>
                      </div>
                    </a>
                    <div className="py-2">
                      <h4 className="text-black lg:font-medium mb-0.5 dark:text-white">
                        {" "}
                        Chill Lotion{" "}
                      </h4>
                      <p className="md:text-sm text-xs lg:font-medium text-gray-500 dark:text-white">
                        {" "}
                        by <a href="profile.html"> Alexa stella </a>{" "}
                      </p>
                    </div>
                  </div>
                  {/* single item */}
                  <div>
                    <a href="#product_modal" className="group" uk-toggle="">
                      <div className="relative overflow-hidden rounded-lg">
                        <div className="relative w-full md:h-60 h-56 transition-all group-hover:scale-110 duration-300">
                          <img
                            src="assets/images/product/product-1.jpg"
                            alt=""
                            className="object-cover w-full h-full inset-0"
                          />
                        </div>
                        <div className="absolute right-0 top-0 m-2 bg-slate-100 rounded-full py-0.5 px-2 text-sm font-bold dark:bg-slate-800/60">
                          {" "}
                          $12{" "}
                        </div>
                      </div>
                    </a>
                    <div className="py-2">
                      <h4 className="text-black lg:font-medium mb-0.5 dark:text-white">
                        {" "}
                        The Deep Cleanse{" "}
                      </h4>
                      <p className="md:text-sm text-xs lg:font-medium text-gray-500 dark:text-white">
                        {" "}
                        by <a href="profile.html"> Jesse Steeve </a>{" "}
                      </p>
                    </div>
                  </div>
                  {/* single item */}
                  <div>
                    <a href="#product_modal" className="group" uk-toggle="">
                      <div className="relative overflow-hidden rounded-lg">
                        <div className="relative w-full md:h-60 h-56 transition-all group-hover:scale-110 duration-300">
                          <img
                            src="assets/images/product/product-2.jpg"
                            alt=""
                            className="object-cover w-full h-full inset-0"
                          />
                        </div>
                        <div className="absolute right-0 top-0 m-2 bg-slate-100 rounded-full py-0.5 px-2 text-sm font-bold dark:bg-slate-800/60">
                          {" "}
                          $12{" "}
                        </div>
                      </div>
                    </a>
                    <div className="py-2">
                      <h4 className="text-black lg:font-medium mb-0.5 dark:text-white">
                        {" "}
                        Regency High Gloss{" "}
                      </h4>
                      <p className="md:text-sm text-xs lg:font-medium text-gray-500 dark:text-white">
                        {" "}
                        by <a href="profile.html"> John Michael </a>{" "}
                      </p>
                    </div>
                  </div>
                  {/* single item */}
                  <div>
                    <a href="#product_modal" className="group" uk-toggle="">
                      <div className="relative overflow-hidden rounded-lg">
                        <div className="relative w-full md:h-60 h-56 transition-all group-hover:scale-110 duration-300">
                          <img
                            src="assets/images/product/product-3.jpg"
                            alt=""
                            className="object-cover w-full h-full inset-0"
                          />
                        </div>
                        <div className="absolute right-0 top-0 m-2 bg-slate-100 rounded-full py-0.5 px-2 text-sm font-bold dark:bg-slate-800/60">
                          {" "}
                          $12{" "}
                        </div>
                      </div>
                    </a>
                    <div className="py-2">
                      <h4 className="text-black lg:font-medium mb-0.5 dark:text-white">
                        {" "}
                        Gaming Mouse{" "}
                      </h4>
                      <p className="md:text-sm text-xs lg:font-medium text-gray-500 dark:text-white">
                        {" "}
                        by <a href="profile.html"> Martin Gray </a>{" "}
                      </p>
                    </div>
                  </div>
                  {/* single item */}
                  <div>
                    <a href="#product_modal" className="group" uk-toggle="">
                      <div className="relative overflow-hidden rounded-lg">
                        <div className="relative w-full md:h-60 h-56 transition-all group-hover:scale-110 duration-300">
                          <img
                            src="assets/images/product/product-1.jpg"
                            alt=""
                            className="object-cover w-full h-full inset-0"
                          />
                        </div>
                        <div className="absolute right-0 top-0 m-2 bg-slate-100 rounded-full py-0.5 px-2 text-sm font-bold dark:bg-slate-800/60">
                          {" "}
                          $12{" "}
                        </div>
                      </div>
                    </a>
                    <div className="py-2">
                      <h4 className="text-black lg:font-medium mb-0.5 dark:text-white">
                        {" "}
                        The Deep Cleanse{" "}
                      </h4>
                      <p className="md:text-sm text-xs lg:font-medium text-gray-500 dark:text-white">
                        {" "}
                        by <a href="profile.html"> Jesse Steeve </a>{" "}
                      </p>
                    </div>
                  </div>
                  {/* single item */}
                  <div>
                    <a href="#product_modal" className="group" uk-toggle="">
                      <div className="relative overflow-hidden rounded-lg">
                        <div className="relative w-full md:h-60 h-56 transition-all group-hover:scale-110 duration-300">
                          <img
                            src="assets/images/product/product-6.jpg"
                            alt=""
                            className="object-cover w-full h-full inset-0"
                          />
                        </div>
                        <div className="absolute right-0 top-0 m-2 bg-slate-100 rounded-full py-0.5 px-2 text-sm font-bold dark:bg-slate-800/60">
                          {" "}
                          $12{" "}
                        </div>
                      </div>
                    </a>
                    <div className="py-2">
                      <h4 className="text-black lg:font-medium mb-0.5 dark:text-white">
                        {" "}
                        Abstract art{" "}
                      </h4>
                      <p className="md:text-sm text-xs lg:font-medium text-gray-500 dark:text-white">
                        {" "}
                        by <a href="profile.html"> Alexa stella </a>{" "}
                      </p>
                    </div>
                  </div>
                  {/* single item */}
                  <div>
                    <a href="#product_modal" className="group" uk-toggle="">
                      <div className="relative overflow-hidden rounded-lg">
                        <div className="relative w-full md:h-60 h-56 transition-all group-hover:scale-110 duration-300">
                          <img
                            src="assets/images/product/product-1.jpg"
                            alt=""
                            className="object-cover w-full h-full inset-0"
                          />
                        </div>
                        <div className="absolute right-0 top-0 m-2 bg-slate-100 rounded-full py-0.5 px-2 text-sm font-bold dark:bg-slate-800/60">
                          {" "}
                          $12{" "}
                        </div>
                      </div>
                    </a>
                    <div className="py-2">
                      <h4 className="text-black lg:font-medium mb-0.5 dark:text-white">
                        {" "}
                        The Deep Cleanse{" "}
                      </h4>
                      <p className="md:text-sm text-xs lg:font-medium text-gray-500 dark:text-white">
                        {" "}
                        by <a href="profile.html"> Jesse Steeve </a>{" "}
                      </p>
                    </div>
                  </div>
                  {/* placeholders */}
                  <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse" />
                  <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse" />
                  <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse" />
                  <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse" />
                </div>
                {/* load more */}
                <div className="flex justify-center my-8">
                  <button
                    type="button"
                    className="bg-white py-2 px-5 rounded-full shadow-md font-semibold text-sm dark:bg-dark2"
                  >
                    Load more...
                  </button>
                </div>
              </div>
              {/* downloads */}
              <div>
                {/* heading title */}
                <div className="mt-3 hidden">
                  <a
                    href="#"
                    className="flex items-center gap-1 text-blue-500 font-semibold text-sm lg:-ml-1 mb-1"
                  >
                    <ion-icon name="chevron-back-outline" /> Back
                  </a>
                  <h2 className="text-2xl font-bold text-black dark:text-white">
                    {" "}
                    Downloads
                  </h2>
                </div>
                <div className="bg-white rounded-md shadow mt-6 dark:bg-dark2">
                  {/* heading */}
                  <div className="p-3 md:px-6 border-b flex md:items-center justify-between dark:border-slate-700 max-md:flex-col gap-3">
                    <h3 className="text-base font-semibold text-black dark:text-white">
                      Item Purchased 16
                    </h3>
                    <div className="flex bg-slate-100 border border-slate-200 p-[1px] rounded-lg dark:bg-dark3 dark:border-slate-700 ml-auto max-md:-mt-10">
                      <ion-icon
                        name="list-outline"
                        className="text-lg p-2 py-1.5 rounded-md bg-white shadow dark:bg-dark4"
                      />
                      <ion-icon
                        name="grid-outline"
                        className="text-lg p-2 py-1.5"
                      />
                    </div>
                    <div className="bg-slate-100 rounded-md flex items-center dark:bg-dark3 max-md:w-full">
                      <ion-icon name="search" className="text-lg ml-2" />
                      <input
                        type="text"
                        placeholder="Search"
                        className="!h-8 w-full"
                      />
                    </div>
                  </div>
                  {/* grid list */}
                  <div
                    className="grid lg:grid-cols-2 gap-2 md:p-4"
                    uk-scrollspy="target: > div; cls: uk-animation-slide-bottom-small; delay: 100"
                  >
                    {/* item */}
                    <div className="flex hover:bg-secondery rounded-md p-2 duration-500">
                      {/* image */}
                      <a href="#product_modal" className="group" uk-toggle="">
                        <div className="relative overflow-hidden rounded-lg w-20">
                          <div className="relative w-full h-16">
                            <img
                              src="assets/images/product/product-3.jpg"
                              alt=""
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </div>
                      </a>
                      {/* description */}
                      <div className="flex-1 px-4">
                        <h4 className="text-black font-medium mb-1 dark:text-white">
                          {" "}
                          Gaming Mouse{" "}
                        </h4>
                        <a href="profile.html">
                          <p className="text-sm font-normal text-gray-500 dark:text-white">
                            {" "}
                            John Michael{" "}
                          </p>
                        </a>
                      </div>
                      {/* download button */}
                      <button
                        type="button"
                        className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"
                      >
                        {" "}
                        <ion-icon
                          className="text-2xl"
                          name="cloud-download-outline"
                        />{" "}
                      </button>
                      {/* dropdown menu */}
                      <div>
                        <button
                          type="button"
                          className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"
                        >
                          {" "}
                          <ion-icon
                            className="text-2xl"
                            name="ellipsis-horizontal"
                          />{" "}
                        </button>
                        <div
                          className="w-[245px]"
                          uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"
                        >
                          <nav>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="bookmark-outline"
                              />{" "}
                              Add to favorites{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="albums-outline"
                              />{" "}
                              add to collections{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="flag-outline"
                              />{" "}
                              Report{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="share-outline"
                              />{" "}
                              Share{" "}
                            </a>
                            <hr />
                            <a
                              href="#"
                              className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"
                            >
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="trash-outline"
                              />{" "}
                              Delete
                            </a>
                          </nav>
                        </div>
                      </div>
                    </div>
                    {/* item */}
                    <div className="flex hover:bg-secondery rounded-md p-2 duration-500">
                      {/* image */}
                      <a href="#product_modal" className="group" uk-toggle="">
                        <div className="relative overflow-hidden rounded-lg w-20">
                          <div className="relative w-full h-16">
                            <img
                              src="assets/images/product/product-6.jpg"
                              alt=""
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </div>
                      </a>
                      {/* description */}
                      <div className="flex-1 px-4">
                        <h4 className="text-black font-medium mb-1 dark:text-white">
                          {" "}
                          Abstract art{" "}
                        </h4>
                        <a href="profile.html">
                          <p className="text-sm font-normal text-gray-500 dark:text-white">
                            {" "}
                            Jesse Steeve{" "}
                          </p>
                        </a>
                      </div>
                      {/* download button */}
                      <button
                        type="button"
                        className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"
                      >
                        {" "}
                        <ion-icon
                          className="text-2xl"
                          name="cloud-download-outline"
                        />{" "}
                      </button>
                      {/* dropdown menu */}
                      <div>
                        <button
                          type="button"
                          className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"
                        >
                          {" "}
                          <ion-icon
                            className="text-2xl"
                            name="ellipsis-horizontal"
                          />{" "}
                        </button>
                        <div
                          className="w-[245px]"
                          uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"
                        >
                          <nav>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="bookmark-outline"
                              />{" "}
                              Add to favorites{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="albums-outline"
                              />{" "}
                              add to collections{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="flag-outline"
                              />{" "}
                              Report{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="share-outline"
                              />{" "}
                              Share{" "}
                            </a>
                            <hr />
                            <a
                              href="#"
                              className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"
                            >
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="trash-outline"
                              />{" "}
                              Delete
                            </a>
                          </nav>
                        </div>
                      </div>
                    </div>
                    {/* item */}
                    <div className="flex hover:bg-secondery rounded-md p-2 duration-500">
                      {/* image */}
                      <a href="#product_modal" className="group" uk-toggle="">
                        <div className="relative overflow-hidden rounded-lg w-20">
                          <div className="relative w-full h-16">
                            <img
                              src="assets/images/product/product-1.jpg"
                              alt=""
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </div>
                      </a>
                      {/* description */}
                      <div className="flex-1 px-4">
                        <h4 className="text-black font-medium mb-1 dark:text-white">
                          {" "}
                          The Deep Cleanse{" "}
                        </h4>
                        <a href="profile.html">
                          <p className="text-sm font-normal text-gray-500 dark:text-white">
                            {" "}
                            Jesse Steeve
                          </p>
                        </a>
                      </div>
                      {/* download button */}
                      <button
                        type="button"
                        className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"
                      >
                        {" "}
                        <ion-icon
                          className="text-2xl"
                          name="cloud-download-outline"
                        />{" "}
                      </button>
                      {/* dropdown menu */}
                      <div>
                        <button
                          type="button"
                          className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"
                        >
                          {" "}
                          <ion-icon
                            className="text-2xl"
                            name="ellipsis-horizontal"
                          />{" "}
                        </button>
                        <div
                          className="w-[245px]"
                          uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"
                        >
                          <nav>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="bookmark-outline"
                              />{" "}
                              Add to favorites{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="albums-outline"
                              />{" "}
                              add to collections{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="flag-outline"
                              />{" "}
                              Report{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="share-outline"
                              />{" "}
                              Share{" "}
                            </a>
                            <hr />
                            <a
                              href="#"
                              className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"
                            >
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="trash-outline"
                              />{" "}
                              Delete
                            </a>
                          </nav>
                        </div>
                      </div>
                    </div>
                    {/* item */}
                    <div className="flex hover:bg-secondery rounded-md p-2 duration-500">
                      {/* image */}
                      <a href="#product_modal" className="group" uk-toggle="">
                        <div className="relative overflow-hidden rounded-lg w-20">
                          <div className="relative w-full h-16">
                            <img
                              src="assets/images/product/product-2.jpg"
                              alt=""
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </div>
                      </a>
                      {/* description */}
                      <div className="flex-1 px-4">
                        <h4 className="text-black font-medium mb-1 dark:text-white">
                          {" "}
                          Regency High Gloss{" "}
                        </h4>
                        <a href="profile.html">
                          <p className="text-sm font-normal text-gray-500 dark:text-white">
                            {" "}
                            Martin Gray
                          </p>
                        </a>
                      </div>
                      {/* download button */}
                      <button
                        type="button"
                        className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"
                      >
                        {" "}
                        <ion-icon
                          className="text-2xl"
                          name="cloud-download-outline"
                        />{" "}
                      </button>
                      {/* dropdown menu */}
                      <div>
                        <button
                          type="button"
                          className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"
                        >
                          {" "}
                          <ion-icon
                            className="text-2xl"
                            name="ellipsis-horizontal"
                          />{" "}
                        </button>
                        <div
                          className="w-[245px]"
                          uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"
                        >
                          <nav>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="bookmark-outline"
                              />{" "}
                              Add to favorites{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="albums-outline"
                              />{" "}
                              add to collections{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="flag-outline"
                              />{" "}
                              Report{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="share-outline"
                              />{" "}
                              Share{" "}
                            </a>
                            <hr />
                            <a
                              href="#"
                              className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"
                            >
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="trash-outline"
                              />{" "}
                              Delete
                            </a>
                          </nav>
                        </div>
                      </div>
                    </div>
                    {/* item */}
                    <div className="flex hover:bg-secondery rounded-md p-2 duration-500">
                      {/* image */}
                      <a href="#product_modal" className="group" uk-toggle="">
                        <div className="relative overflow-hidden rounded-lg w-20">
                          <div className="relative w-full h-16">
                            <img
                              src="assets/images/product/product-4.jpg"
                              alt=""
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </div>
                      </a>
                      {/* description */}
                      <div className="flex-1 px-4">
                        <h4 className="text-black font-medium mb-1 dark:text-white">
                          {" "}
                          Abstract Minimalism{" "}
                        </h4>
                        <a href="profile.html">
                          <p className="text-sm font-normal text-gray-500 dark:text-white">
                            {" "}
                            James Lewis
                          </p>
                        </a>
                      </div>
                      {/* download button */}
                      <button
                        type="button"
                        className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"
                      >
                        {" "}
                        <ion-icon
                          className="text-2xl"
                          name="cloud-download-outline"
                        />{" "}
                      </button>
                      {/* dropdown menu */}
                      <div>
                        <button
                          type="button"
                          className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"
                        >
                          {" "}
                          <ion-icon
                            className="text-2xl"
                            name="ellipsis-horizontal"
                          />{" "}
                        </button>
                        <div
                          className="w-[245px]"
                          uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"
                        >
                          <nav>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="bookmark-outline"
                              />{" "}
                              Add to favorites{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="albums-outline"
                              />{" "}
                              add to collections{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="flag-outline"
                              />{" "}
                              Report{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="share-outline"
                              />{" "}
                              Share{" "}
                            </a>
                            <hr />
                            <a
                              href="#"
                              className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"
                            >
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="trash-outline"
                              />{" "}
                              Delete
                            </a>
                          </nav>
                        </div>
                      </div>
                    </div>
                    {/* item */}
                    <div className="flex hover:bg-secondery rounded-md p-2 duration-500">
                      {/* image */}
                      <a href="#product_modal" className="group" uk-toggle="">
                        <div className="relative overflow-hidden rounded-lg w-20">
                          <div className="relative w-full h-16">
                            <img
                              src="assets/images/product/product-3.jpg"
                              alt=""
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </div>
                      </a>
                      {/* description */}
                      <div className="flex-1 px-4">
                        <h4 className="text-black font-medium mb-1 dark:text-white">
                          {" "}
                          Gaming Mouse{" "}
                        </h4>
                        <a href="profile.html">
                          <p className="text-sm font-normal text-gray-500 dark:text-white">
                            {" "}
                            John Michael
                          </p>
                        </a>
                      </div>
                      {/* download button */}
                      <button
                        type="button"
                        className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"
                      >
                        {" "}
                        <ion-icon
                          className="text-2xl"
                          name="cloud-download-outline"
                        />{" "}
                      </button>
                      {/* dropdown menu */}
                      <div>
                        <button
                          type="button"
                          className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"
                        >
                          {" "}
                          <ion-icon
                            className="text-2xl"
                            name="ellipsis-horizontal"
                          />{" "}
                        </button>
                        <div
                          className="w-[245px]"
                          uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"
                        >
                          <nav>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="bookmark-outline"
                              />{" "}
                              Add to favorites{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="albums-outline"
                              />{" "}
                              add to collections{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="flag-outline"
                              />{" "}
                              Report{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="share-outline"
                              />{" "}
                              Share{" "}
                            </a>
                            <hr />
                            <a
                              href="#"
                              className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"
                            >
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="trash-outline"
                              />{" "}
                              Delete
                            </a>
                          </nav>
                        </div>
                      </div>
                    </div>
                    {/* item */}
                    <div className="flex hover:bg-secondery rounded-md p-2 duration-500">
                      {/* image */}
                      <a href="#product_modal" className="group" uk-toggle="">
                        <div className="relative overflow-hidden rounded-lg w-20">
                          <div className="relative w-full h-16">
                            <img
                              src="assets/images/product/product-3.jpg"
                              alt=""
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </div>
                      </a>
                      {/* description */}
                      <div className="flex-1 px-4">
                        <h4 className="text-black font-medium mb-1 dark:text-white">
                          {" "}
                          Gaming Mouse{" "}
                        </h4>
                        <a href="profile.html">
                          <p className="text-sm font-normal text-gray-500 dark:text-white">
                            {" "}
                            John Michael
                          </p>
                        </a>
                      </div>
                      {/* download button */}
                      <button
                        type="button"
                        className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"
                      >
                        {" "}
                        <ion-icon
                          className="text-2xl"
                          name="cloud-download-outline"
                        />{" "}
                      </button>
                      {/* dropdown menu */}
                      <div>
                        <button
                          type="button"
                          className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"
                        >
                          {" "}
                          <ion-icon
                            className="text-2xl"
                            name="ellipsis-horizontal"
                          />{" "}
                        </button>
                        <div
                          className="w-[245px]"
                          uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"
                        >
                          <nav>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="bookmark-outline"
                              />{" "}
                              Add to favorites{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="albums-outline"
                              />{" "}
                              add to collections{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="flag-outline"
                              />{" "}
                              Report{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="share-outline"
                              />{" "}
                              Share{" "}
                            </a>
                            <hr />
                            <a
                              href="#"
                              className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"
                            >
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="trash-outline"
                              />{" "}
                              Delete
                            </a>
                          </nav>
                        </div>
                      </div>
                    </div>
                    {/* item */}
                    <div className="flex hover:bg-secondery rounded-md p-2 duration-500">
                      {/* image */}
                      <a href="#product_modal" className="group" uk-toggle="">
                        <div className="relative overflow-hidden rounded-lg w-20">
                          <div className="relative w-full h-16">
                            <img
                              src="assets/images/product/product-6.jpg"
                              alt=""
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </div>
                      </a>
                      {/* description */}
                      <div className="flex-1 px-4">
                        <h4 className="text-black font-medium mb-1 dark:text-white">
                          {" "}
                          Abstract art{" "}
                        </h4>
                        <a href="profile.html">
                          <p className="text-sm font-normal text-gray-500 dark:text-white">
                            {" "}
                            Jesse Steeve
                          </p>
                        </a>
                      </div>
                      {/* download button */}
                      <button
                        type="button"
                        className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"
                      >
                        {" "}
                        <ion-icon
                          className="text-2xl"
                          name="cloud-download-outline"
                        />{" "}
                      </button>
                      {/* dropdown menu */}
                      <div>
                        <button
                          type="button"
                          className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"
                        >
                          {" "}
                          <ion-icon
                            className="text-2xl"
                            name="ellipsis-horizontal"
                          />{" "}
                        </button>
                        <div
                          className="w-[245px]"
                          uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"
                        >
                          <nav>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="bookmark-outline"
                              />{" "}
                              Add to favorites{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="albums-outline"
                              />{" "}
                              add to collections{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="flag-outline"
                              />{" "}
                              Report{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="share-outline"
                              />{" "}
                              Share{" "}
                            </a>
                            <hr />
                            <a
                              href="#"
                              className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"
                            >
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="trash-outline"
                              />{" "}
                              Delete
                            </a>
                          </nav>
                        </div>
                      </div>
                    </div>
                    {/* item */}
                    <div className="flex hover:bg-secondery rounded-md p-2 duration-500">
                      {/* image */}
                      <a href="#product_modal" className="group" uk-toggle="">
                        <div className="relative overflow-hidden rounded-lg w-20">
                          <div className="relative w-full h-16">
                            <img
                              src="assets/images/product/product-1.jpg"
                              alt=""
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </div>
                      </a>
                      {/* description */}
                      <div className="flex-1 px-4">
                        <h4 className="text-black font-medium mb-1 dark:text-white">
                          {" "}
                          The Deep Cleanse{" "}
                        </h4>
                        <a href="profile.html">
                          <p className="text-sm font-normal text-gray-500 dark:text-white">
                            {" "}
                            Jesse Steeve
                          </p>
                        </a>
                      </div>
                      {/* download button */}
                      <button
                        type="button"
                        className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"
                      >
                        {" "}
                        <ion-icon
                          className="text-2xl"
                          name="cloud-download-outline"
                        />{" "}
                      </button>
                      {/* dropdown menu */}
                      <div>
                        <button
                          type="button"
                          className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"
                        >
                          {" "}
                          <ion-icon
                            className="text-2xl"
                            name="ellipsis-horizontal"
                          />{" "}
                        </button>
                        <div
                          className="w-[245px]"
                          uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"
                        >
                          <nav>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="bookmark-outline"
                              />{" "}
                              Add to favorites{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="albums-outline"
                              />{" "}
                              add to collections{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="flag-outline"
                              />{" "}
                              Report{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="share-outline"
                              />{" "}
                              Share{" "}
                            </a>
                            <hr />
                            <a
                              href="#"
                              className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"
                            >
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="trash-outline"
                              />{" "}
                              Delete
                            </a>
                          </nav>
                        </div>
                      </div>
                    </div>
                    {/* item */}
                    <div className="flex hover:bg-secondery rounded-md p-2 duration-500">
                      {/* image */}
                      <a href="#product_modal" className="group" uk-toggle="">
                        <div className="relative overflow-hidden rounded-lg w-20">
                          <div className="relative w-full h-16">
                            <img
                              src="assets/images/product/product-2.jpg"
                              alt=""
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </div>
                      </a>
                      {/* description */}
                      <div className="flex-1 px-4">
                        <h4 className="text-black font-medium mb-1 dark:text-white">
                          {" "}
                          Regency High Gloss{" "}
                        </h4>
                        <a href="profile.html">
                          <p className="text-sm font-normal text-gray-500 dark:text-white">
                            {" "}
                            Martin Gray
                          </p>
                        </a>
                      </div>
                      {/* download button */}
                      <button
                        type="button"
                        className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"
                      >
                        {" "}
                        <ion-icon
                          className="text-2xl"
                          name="cloud-download-outline"
                        />{" "}
                      </button>
                      {/* dropdown menu */}
                      <div>
                        <button
                          type="button"
                          className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"
                        >
                          {" "}
                          <ion-icon
                            className="text-2xl"
                            name="ellipsis-horizontal"
                          />{" "}
                        </button>
                        <div
                          className="w-[245px]"
                          uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"
                        >
                          <nav>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="bookmark-outline"
                              />{" "}
                              Add to favorites{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="albums-outline"
                              />{" "}
                              add to collections{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="flag-outline"
                              />{" "}
                              Report{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="share-outline"
                              />{" "}
                              Share{" "}
                            </a>
                            <hr />
                            <a
                              href="#"
                              className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"
                            >
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="trash-outline"
                              />{" "}
                              Delete
                            </a>
                          </nav>
                        </div>
                      </div>
                    </div>
                    {/* item */}
                    <div className="flex hover:bg-secondery rounded-md p-2 duration-500">
                      {/* image */}
                      <a href="#product_modal" className="group" uk-toggle="">
                        <div className="relative overflow-hidden rounded-lg w-20">
                          <div className="relative w-full h-16">
                            <img
                              src="assets/images/product/product-4.jpg"
                              alt=""
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </div>
                      </a>
                      {/* description */}
                      <div className="flex-1 px-4">
                        <h4 className="text-black font-medium mb-1 dark:text-white">
                          {" "}
                          Abstract Minimalism{" "}
                        </h4>
                        <a href="profile.html">
                          <p className="text-sm font-normal text-gray-500 dark:text-white">
                            {" "}
                            James Lewis{" "}
                          </p>
                        </a>
                      </div>
                      {/* download button */}
                      <button
                        type="button"
                        className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"
                      >
                        {" "}
                        <ion-icon
                          className="text-2xl"
                          name="cloud-download-outline"
                        />{" "}
                      </button>
                      {/* dropdown menu */}
                      <div>
                        <button
                          type="button"
                          className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"
                        >
                          {" "}
                          <ion-icon
                            className="text-2xl"
                            name="ellipsis-horizontal"
                          />{" "}
                        </button>
                        <div
                          className="w-[245px]"
                          uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"
                        >
                          <nav>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="bookmark-outline"
                              />{" "}
                              Add to favorites{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="albums-outline"
                              />{" "}
                              add to collections{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="flag-outline"
                              />{" "}
                              Report{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="share-outline"
                              />{" "}
                              Share{" "}
                            </a>
                            <hr />
                            <a
                              href="#"
                              className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"
                            >
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="trash-outline"
                              />{" "}
                              Delete
                            </a>
                          </nav>
                        </div>
                      </div>
                    </div>
                    {/* item */}
                    <div className="flex hover:bg-secondery rounded-md p-2 duration-500">
                      {/* image */}
                      <a href="#product_modal" className="group" uk-toggle="">
                        <div className="relative overflow-hidden rounded-lg w-20">
                          <div className="relative w-full h-16">
                            <img
                              src="assets/images/product/product-3.jpg"
                              alt=""
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </div>
                      </a>
                      {/* description */}
                      <div className="flex-1 px-4">
                        <h4 className="text-black font-medium mb-1 dark:text-white">
                          {" "}
                          Gaming Mouse{" "}
                        </h4>
                        <a href="profile.html">
                          <p className="text-sm font-normal text-gray-500 dark:text-white">
                            {" "}
                            John Michael{" "}
                          </p>
                        </a>
                      </div>
                      {/* download button */}
                      <button
                        type="button"
                        className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"
                      >
                        {" "}
                        <ion-icon
                          className="text-2xl"
                          name="cloud-download-outline"
                        />{" "}
                      </button>
                      {/* dropdown menu */}
                      <div>
                        <button
                          type="button"
                          className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"
                        >
                          {" "}
                          <ion-icon
                            className="text-2xl"
                            name="ellipsis-horizontal"
                          />{" "}
                        </button>
                        <div
                          className="w-[245px]"
                          uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"
                        >
                          <nav>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="bookmark-outline"
                              />{" "}
                              Add to favorites{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="albums-outline"
                              />{" "}
                              add to collections{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="flag-outline"
                              />{" "}
                              Report{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="share-outline"
                              />{" "}
                              Share{" "}
                            </a>
                            <hr />
                            <a
                              href="#"
                              className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"
                            >
                              {" "}
                              <ion-icon
                                className="text-xl"
                                name="trash-outline"
                              />{" "}
                              Delete
                            </a>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* load more */}
                <div className="flex justify-center my-8">
                  <button
                    type="button"
                    className="bg-white py-2 px-5 rounded-full shadow-md font-semibold text-sm dark:bg-dark2"
                  >
                    Load more...
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* create new product button */}
      <button
        type="button"
        className="fixed bottom-0 right-0 m-10"
        uk-toggle="target: #create_product"
        uk-tooltip="title:Add Product ; offset:10"
      >
        <div className="flex items-center justify-center w-14 h-14 bg-sky-500 rounded-full">
          <ion-icon name="add-outline" className="text-white text-3xl" />
        </div>
      </button>
      {/* product modal */}
      <div
        className="hidden lg:p-20 max-lg:!items-start"
        id="product_modal"
        uk-modal=""
      >
        <div className="uk-modal-dialog tt relative mx-auto overflow-hidden shadow-xl rounded-lg lg:flex items-center ax-w-[86rem] w-full lg:h-[80vh]">
          {/* image previewer */}
          <div className="lg:h-full lg:w-[calc(100vw-400px)] w-full h-96 flex justify-center items-center relative">
            <div className="relative z-10 w-full h-full">
              <img
                src="assets/images/product/product-6.jpg"
                alt=""
                className="w-full h-full object-cover absolute"
              />
            </div>
            {/* close button */}
            <button
              type="button"
              className="bg-white rounded-full p-2 absolute right-0 top-0 m-3 uk-animation-slide-right-medium z-10 dark:bg-slate-600 uk-modal-close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {/* right sidebar */}
          <div className="lg:w-[400px] w-full bg-white h-full relative overflow-y-auto shadow-xl dark:bg-dark2">
            <div className="p-6">
              <div className="flex absolute right-2.5 top-4 text-black gap-1">
                <button className="w-8 h-8 hover:bg-slate-100 rounded-full grid place-items-center">
                  {" "}
                  <ion-icon
                    className="text-xl"
                    uk-tooltip="title: Share; pos: top; offset: 6"
                    name="share-outline"
                  />{" "}
                </button>
                <button className="w-8 h-8 hover:bg-slate-100 rounded-full grid place-items-center">
                  {" "}
                  <ion-icon
                    className="text-xl"
                    uk-tooltip="title: Save; pos: top; offset: 6"
                    name="bookmarks-outline"
                  />{" "}
                </button>
              </div>
              <div>
                <div className="text-lg font-semibold text-black dark:text-white">
                  {" "}
                  Item Name{" "}
                </div>
                <p className="font-normal text-sm leading-6 mt-3">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
                  mollitia? Eaque consequuntur asperiores eos Fugiat ullam{" "}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-y-5 gap-3 text-xs font-medium mt-5">
                <div className="col-span-2 p-3 bg-slate-100 rounded-md space-y-1.5 border">
                  <div> Price</div>
                  <div className="text-3xl font-semibold text-black"> $10 </div>
                </div>
                <div className="space-y-1.5">
                  {" "}
                  <div> Views</div>{" "}
                  <div className="text-2xl font-semibold text-black dark:text-white">
                    {" "}
                    1,286{" "}
                  </div>
                </div>
                <div className="space-y-1.5">
                  {" "}
                  <div> Donwloads</div>{" "}
                  <div className="text-2xl font-semibold text-black dark:text-white">
                    {" "}
                    364{" "}
                  </div>
                </div>
              </div>
              <div className="space-y-2 text-sm mt-7">
                <div className="flex items-center gap-3">
                  {" "}
                  <ion-icon className="text-xl" name="tag-outline" />{" "}
                  <div className="flex-1"> Category Landscape</div>{" "}
                </div>
                <div className="flex items-center gap-3">
                  {" "}
                  <ion-icon
                    className="text-xl"
                    name="navigate-circle-outline"
                  />{" "}
                  <div className="flex-1"> Published 4 days ago</div>{" "}
                </div>
                <div className="flex items-center gap-3">
                  {" "}
                  <ion-icon className="text-xl" name="camera-outline" />{" "}
                  <div className="flex-1"> Featured in Editorial</div>{" "}
                </div>
                <div className="flex items-center gap-3">
                  {" "}
                  <ion-icon className="text-xl" name="image-outline" />{" "}
                  <div className="flex-1"> type Image </div>{" "}
                </div>
                <div className="flex items-center gap-3">
                  {" "}
                  <ion-icon
                    className="text-xl"
                    name="shield-checkmark-outline"
                  />{" "}
                  <div className="flex-1"> Free to use under Instello License </div>{" "}
                </div>
              </div>
              <div className="font-medium mt-6 space-y-3">
                <div className="text-sm"> Seller </div>
                <a href="#" className="flex items-center gap-3 mb-4 mt-1">
                  <div className="relative w-8 h-8 shrink-0">
                    {" "}
                    <img
                      src="assets/images/avatars/avatar-4.jpg"
                      alt=""
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-black dark:text-white">
                      Michel Emard
                    </div>
                  </div>
                  <button
                    type="button"
                    className="text-sm rounded-full py-1.5 px-4 font-semibold bg-secondery"
                  >
                    {" "}
                    Chat{" "}
                  </button>
                </a>
              </div>
            </div>
            <div className="absolute bottom-0 w-full p-4">
              <div className="flex gap-2 items-center text-sm ">
                <a
                  href="#"
                  className="bg-teal-100 rounded-md py-2 text-center flex-1 flex items-center justify-center gap-2 text-teal-500 font-semibold"
                >
                  {" "}
                  <ion-icon className="text-2xl" name="cart-outline" /> Buy
                </a>
                <a
                  href="#"
                  className="bg-red-100 rounded-md py-2 text-center px-3 flex"
                >
                  {" "}
                  <ion-icon className="text-2xl text-red-500" name="heart" />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* create product modal */}
      <div
        className="hidden lg:p-20 max-lg:!items-start"
        id="create_product"
        uk-modal=""
      >
        <div className="uk-modal-dialog tt relative mx-auto bg-white shadow-xl rounded-lg max-lg:w-full dark:bg-dark2">
          {/* header card */}
          <div className="border-b px-3 py-3 text-center relative dark:border-slate-700/60">
            <h4 className="text-sm text-black dark:text-white"> Create new post</h4>
            {/* close button */}
            <button
              type="button"
              className="button__ico absolute top-0 right-0 m-2.5 uk-modal-close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="lg:w-[600px] w-full">
            <div
              className="relative"
              tabIndex={-1}
              uk-slideshow="finite: true;animation: Fade;  min-height: 460;animation:fade"
            >
              <ul className="uk-slideshow-items">
                {/* Intro */}
                <li className="w-full">
                  <div
                    className="flex justify-center items-center flex-col gap-4 h-full"
                    uk-scrollspy="target: > div; cls: uk-animation-scale-up; delay: 300;repeat:true"
                  >
                    <div>
                      <svg
                        className="text-gray-600 dark:text-white"
                        color="#262626"
                        fill="#262626"
                        height={77}
                        role="img"
                        viewBox="0 0 97.6 77.3"
                        width={96}
                      >
                        <path
                          d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z"
                          fill="currentColor"
                        />
                        <path
                          d="M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z"
                          fill="currentColor"
                        />
                        <path
                          d="M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div uk-scrollspy-class="uk-animation-slide-bottom-small">
                      <h3 className="text-black font-semibold text-xl dark:text-white">
                        {" "}
                        Sell Premium Photes
                      </h3>
                    </div>
                    <div uk-scrollspy-class="uk-animation-slide-bottom-small">
                      <p className="text-sm text-center max-w-sm">
                        You can earn money by selling high-quality photos and share
                        them with your friends who are interested
                      </p>
                    </div>
                    <div uk-scrollspy-class="uk-animation-slide-top-small">
                      <button
                        type="button"
                        className="bg-blue-600 text-white rounded-lg py-1.5 px-4 text-sm mt-2 dark:bg-slate-700"
                        uk-slideshow-item="next"
                      >
                        {" "}
                        Start selling{" "}
                      </button>
                    </div>
                  </div>
                </li>
                {/* about */}
                <li className="w-full">
                  <div>
                    <div className="p-8 space-y-4 font-normal text-sm">
                      <div className="md:flex items-center gap-16 justify-between">
                        <label className="md:w-32"> Title </label>
                        <div className="flex-1 max-md:mt-4">
                          <input
                            type="text"
                            placeholder="name"
                            className=" w-full"
                          />
                        </div>
                      </div>
                      <div className="md:flex items-start gap-16 justify-between">
                        <label className="md:w-32"> Description </label>
                        <div className="flex-1 max-md:mt-4">
                          <textarea
                            className="w-full"
                            rows={4}
                            placeholder="Product Description.."
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="md:flex items-center gap-16 justify-between">
                        <label className="md:w-32"> Price </label>
                        <div className="flex-1 max-md:mt-4">
                          <input
                            type="number"
                            placeholder="$12"
                            className=" w-full"
                          />
                        </div>
                      </div>
                      <div className="md:flex items-center gap-16 justify-between">
                        <label className="md:w-32"> Category </label>
                        <div className="flex-1 max-md:mt-4">
                          <select className="w-full !border-0 !rounded-md">
                            <option value={1}>Everyone</option>
                            <option value={2}>People I Follow</option>
                          </select>
                        </div>
                      </div>
                      <div className="md:flex items-center gap-16 justify-between">
                        <label className="md:w-32"> Tags </label>
                        <div className="flex-1 max-md:mt-4">
                          <input
                            type="text"
                            placeholder="Landscape,Arts"
                            className=" w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                {/* add image */}
                <li className="w-full">
                  <div
                    className="p-8"
                    uk-scrollspy="target: > div; cls: uk-animation-scale-up; delay: 300;repeat:true"
                  >
                    <div className="relative w-full h-[395px] border1 rounded-lg overflow-hidden bg-[url('../images/ad_pattern.png')] bg-repeat">
                      <label
                        htmlFor="createProductUrl"
                        className="flex flex-col justify-center items-center absolute -translate-x-1/2 left-1/2 bottom-0 z-10 w-full pb-6 pt-10 cursor-pointer bg-gradient-to-t from-gray-700/60"
                      >
                        <input
                          id="createProductUrl"
                          type="file"
                          className="hidden"
                        />
                        <ion-icon name="image" className="text-3xl text-teal-600" />
                        <span className="text-white mt-2">Upload image </span>
                      </label>
                      <img
                        id="createProductImage"
                        src="#"
                        alt="Uploaded Image"
                        accept="image/png, image/jpeg"
                        style={{ display: "none" }}
                        className="w-full h-full absolute object-cover"
                      />
                    </div>
                  </div>
                </li>
                {/* settings */}
                <li className="w-full !relative">
                  <div className="lg:!h-[460px] overflow-y-auto">
                    <div uk-scrollspy="target: > * >; cls: uk-animation-slide-bottom-small; delay: 100">
                      <div className="p-6">
                        <ul
                          className="divide-y divide-gray-100 font-normal text-sm dark:divide-slate-700/60"
                          uk-nav="multiple: true"
                        >
                          <li className="uk-parent uk-open py-3">
                            <a
                              href="#"
                              className="flex items-center justify-between py-2 px-3.5 group"
                              aria-expanded="true"
                            >
                              <h4 className="font-semibold text-base text-black dark:text-white">
                                Settings
                              </h4>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6 group-aria-expanded:rotate-180 duration-200"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                                />
                              </svg>
                            </a>
                            <ul className="m-4 space-y-3">
                              <li>
                                <div className="md:flex items-center gap-16 justify-between">
                                  <label className="md:w-48"> Who can Buy ? </label>
                                  <div className="flex-1 max-md:mt-4">
                                    <select className="w-full !border-0 !rounded-md">
                                      <option value={1}>Everyone</option>
                                      <option value={2}>People I Follow</option>
                                    </select>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="md:flex items-center gap-16 justify-between">
                                  <label className="md:w-48">
                                    {" "}
                                    Who can Comment ?{" "}
                                  </label>
                                  <div className="flex-1 max-md:mt-4">
                                    <select className="w-full !border-0 !rounded-md">
                                      <option value={1}>Everyone</option>
                                      <option value={2}>People I Follow</option>
                                    </select>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li className="uk-parent uk-open py-3">
                            <a
                              href="#"
                              className="flex items-center justify-between py-2 px-3.5 group "
                              aria-expanded="true"
                            >
                              <h4 className="font-semibold text-base text-black dark:text-white">
                                {" "}
                                Advanced settings
                              </h4>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6 group-aria-expanded:rotate-180 duration-200"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                                />
                              </svg>
                            </a>
                            <ul className="divide-y bg-secondery rounded-md dark:divide-slate-700/60">
                              <li>
                                <div className="p-4 py-2">
                                  <label className="switch flex justify-between items-center gap-4 cursor-pointer min-h-[30px]">
                                    <div>
                                      <h4> Generate license keys</h4>
                                    </div>
                                    <input type="checkbox" defaultChecked="" />
                                    <span className="switch-button !relative shrink-0" />
                                  </label>
                                </div>
                              </li>
                              <li>
                                <div className="p-4 py-2">
                                  <label className="switch flex justify-between items-center gap-4 cursor-pointer min-h-[30px]">
                                    <div>
                                      <h4> Redirect customers after purchase?</h4>
                                    </div>
                                    <input type="checkbox" />
                                    <span className="switch-button !relative shrink-0" />
                                  </label>
                                </div>
                              </li>
                              <li>
                                <div className="p-4 py-2">
                                  <label className="switch flex justify-between items-center gap-4 cursor-pointer min-h-[30px]">
                                    <div>
                                      <h4> Turn off commenting </h4>
                                    </div>
                                    <input type="checkbox" defaultChecked="" />
                                    <span className="switch-button !relative shrink-0" />
                                  </label>
                                </div>
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <div className="flex justify-center p-6 pt-0 hidden">
                          <button
                            type="button"
                            className="button bg-blue-600 text-white px-10"
                          >
                            {" "}
                            Share{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                {/* final steop */}
                <li className="w-full">
                  <div
                    className="flex justify-center items-center flex-col gap-6 h-full"
                    uk-scrollspy="target: > div; cls: uk-animation-scale-up; delay: 300;repeat:true"
                  >
                    <div className="text-center">
                      <ion-icon
                        name="sparkles-sharp"
                        className="text-5xl mb-6 text-blue-600 opacity-60 rotate-12"
                      />
                      <h3 className="text-black font-semibold text-xl dark:text-white">
                        {" "}
                        Almost Done{" "}
                      </h3>
                    </div>
                    <div className="font-medium text-sm">
                      <div>
                        <label className="flex justify-center max-w-sm mx-auto text-center">
                          <input
                            className="rounded mt-1"
                            type="checkbox"
                            defaultChecked=""
                            name="checkbox1"
                            defaultValue={3}
                          />
                          <span className="ml-3">
                            {" "}
                            I agree this product is mine and i take resposibilty of
                            this product for selling{" "}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="flex justify-center p-6 pt-0">
                      <button
                        type="button"
                        className="button bg-blue-600 text-white px-10"
                      >
                        {" "}
                        Share{" "}
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="flex  justify-center py-1.5 border-t relative dark:border-slate-700/60">
                <button
                  type="button"
                  uk-slideshow-item="previous"
                  className="bg-secondery font-semibold py-1.5 px-3.5 rounded-full text-sm absolute left-4 bottom-3 leading-6 uk-animation-slide-left-small"
                >
                  Previews
                </button>
                <ul className="inline-flex flex-wrap justify-center my-5 uk-dotnav uk-slideshow-nav gap-2.5" />
                <button
                  type="button"
                  uk-slideshow-item="next"
                  className="bg-secondery font-semibold py-1.5 px-3.5 rounded-full text-sm absolute right-4 bottom-3 leading-6 uk-animation-slide-right-small"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* create post modal */}
      <div
        className="hidden lg:p-20 max-lg:!items-start"
        id="create-post"
        uk-modal=""
      >
        <div className="uk-modal-dialog tt relative mx-auto bg-white shadow-xl rounded-lg max-lg:w-full dark:bg-dark2">
          {/* This is a switcher for multiple tabs. Each switcher tab should have the same number of tabs. https://getuikit.com/docs/switcher*/}
          <ul className="hidden" uk-switcher="connect: .posTabs">
            {/* tab 1 */}
            <li>
              <a href="#">...</a>
            </li>
            {/* tab 2 */}
            <li>
              <a href="#">...</a>
            </li>
            {/* tab 3 */}
            <li>
              <a href="#">...</a>
            </li>
          </ul>
          {/* card header */}
          <ul className="uk-switcher posTabs p-3.5 border-b text-center text-sm font-semibold text-black dark:text-white dark:border-slate-700">
            {/* tab 1 */}
            <li>
              <div> Upload Photo</div>
              <a
                href="#"
                className="absolute top-0 m-3 right-1 text-blue-600"
                uk-switcher-item="next"
              >
                {" "}
                Next
              </a>
            </li>
            {/* tab 2 */}
            <li>
              <a
                href="#"
                className="absolute top-0 m-3.5 left-0"
                uk-switcher-item="previous"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </a>
              <div> Filter Your Photo </div>
              <a
                href="#"
                className="absolute top-0 m-3.5 right-1 text-blue-600"
                uk-switcher-item="next"
              >
                {" "}
                Next
              </a>
            </li>
            {/* tab 3 */}
            <li>
              <a
                href="#"
                className="absolute top-0 m-3.5 left-0"
                uk-switcher-item="previous"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </a>
              <div> Premission Photo </div>
              {/* submit button */}
              <button
                type="button"
                className="text-white bg-blue-600 rounded-lg py-1.5 px-5 text-sm absolute top-0 m-2.5 right-0 uk-animation-slide-right-small"
              >
                {" "}
                Share{" "}
              </button>
            </li>
          </ul>
          <div className="lg:inline-flex">
            {/* photo upload */}
            <div className="lg:w-[600px] w-full">
              <div className="w-full lg:h-[600px] h-80 relative overflow-hidden flex justify-center items-center">
                <label
                  htmlFor="addPostUrl"
                  className="w-full h-full absolute inset-0 z-10 hover: cursor-pointer"
                >
                  <input id="addPostUrl" type="file" className="hidden" />
                </label>
                <div
                  className="space-y-4 absolute flex flex-col justify-center"
                  uk-scrollspy="target: > div; cls: uk-animation-scale-up; delay: 300;repeat:true"
                >
                  <div uk-scrollspy-class="uk-animation-scale-up">
                    <svg
                      className="mx-auto text-gray-600 dark:text-white"
                      width={96}
                      height={77}
                      role="img"
                      viewBox="0 0 97.6 77.3"
                    >
                      <path
                        d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z"
                        fill="currentColor"
                      />
                      <path
                        d="M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z"
                        fill="currentColor"
                      />
                      <path
                        d="M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div
                    className=" mx-auto"
                    uk-scrollspy-class="uk-animation-slide-bottom-small"
                  >
                    <button
                      type="button"
                      className="text-white bg-blue-600 rounded-lg py-1.5 px-4 text-sm dark:bg-white/5"
                    >
                      {" "}
                      Select forom the Computer
                    </button>
                  </div>
                </div>
                <img
                  id="addPostImage"
                  src="#"
                  alt="Uploaded Image"
                  accept="image/png, image/jpeg"
                  style={{ display: "none" }}
                  className="w-full h-full absolute object-cover fff"
                />
              </div>
            </div>
            {/* right sidebar */}
            <div className="relative w-auto border-l dark:border-slate-700">
              <ul className="uk-switcher posTabs">
                {/* tab 1 */}
                <li></li>
                {/* tab 2 Filter Your Photo*/}
                <li>
                  <div className="lg:w-[300px] lg:max-h-[600px] overflow-y-auto before:uk-animation-slide-right-small">
                    <div className="p-3.5">
                      {/* tabs */}
                      <ul
                        className="flex p-0.5 text-center text-xs font-medium text-gray-700 border rounded-md bg-slate-100 dark:text-white dark:border-slate-700 dark:bg-white/5"
                        uk-switcher=""
                      >
                        <li className="flex-1">
                          {" "}
                          <a
                            href="#"
                            className="block px-4 py-1.5 rounded-md aria-expanded:bg-white aria-expanded:shadow aria-expanded:dark:bg-white/10"
                          >
                            Filters
                          </a>
                        </li>
                        <li className="flex-1">
                          {" "}
                          <a
                            href="#"
                            className="block px-4 py-1.5 rounded-md aria-expanded:bg-white aria-expanded:shadow aria-expanded:dark:bg-white/10"
                          >
                            Adjustments
                          </a>
                        </li>
                      </ul>
                      <div className="uk-switcher">
                        {/* filter slider */}
                        <div className="space-y-8 py-6 p-1 text-sm font-medium text-gray-700 dark:text-gray-200">
                          <div>
                            <label htmlFor="range1" className="mb-2 inline-block">
                              {" "}
                              Example range{" "}
                            </label>
                            <input
                              type="range"
                              min={0}
                              max={6}
                              id="range1"
                              className="transparent h-1.5 mt-4 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-slate-100 dark:bg-slate-700"
                            />
                          </div>
                          <div>
                            <label htmlFor="range2" className="mb-2 inline-block">
                              {" "}
                              Example range{" "}
                            </label>
                            <input
                              type="range"
                              min={0}
                              max={6}
                              id="range2"
                              className="transparent h-1.5 mt-4 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-slate-100 dark:bg-slate-700"
                            />
                          </div>
                          <div>
                            <label htmlFor="range3" className="mb-2 inline-block">
                              {" "}
                              Example range{" "}
                            </label>
                            <input
                              type="range"
                              min={0}
                              max={6}
                              id="range3"
                              className="transparent h-1.5 mt-4 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-slate-100 dark:bg-slate-700"
                            />
                          </div>
                          <div>
                            <label htmlFor="range4" className="mb-2 inline-block">
                              {" "}
                              Example range{" "}
                            </label>
                            <input
                              type="range"
                              min={0}
                              max={6}
                              id="range4"
                              className="transparent h-1.5 mt-4 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-slate-100 dark:bg-slate-700"
                            />
                          </div>
                          <div>
                            <label htmlFor="range5" className="mb-2 inline-block">
                              {" "}
                              Example range{" "}
                            </label>
                            <input
                              type="range"
                              min={0}
                              max={6}
                              id="range5"
                              className="transparent h-1.5 mt-4 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-slate-100 dark:bg-slate-700"
                            />
                          </div>
                          <div>
                            <label htmlFor="range6" className="mb-2 inline-block">
                              {" "}
                              Example range{" "}
                            </label>
                            <input
                              type="range"
                              min={0}
                              max={6}
                              id="range6"
                              className="transparent h-1.5 mt-4 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-slate-100 dark:bg-slate-700"
                            />
                          </div>
                        </div>
                        {/* image effect list */}
                        <div>
                          <div
                            className="grid grid-cols-3 gap-4 mt-3 text-xs text-center font-light"
                            uk-scrollspy="target: > div; cls: uk-animation-scale-up; delay: 50;repeat:true"
                          >
                            <div
                              className="group cursor-pointer"
                              uk-toggle="target: #addPostImage; cls: brightness-125"
                            >
                              <div className="group-hover:ring-2 ring-blue-600 ring-offset-4 duration-500 rounded dark:ring-offset-slate-800">
                                <img
                                  src="assets/images/affect.jpg"
                                  alt=""
                                  className="rounded w-full h-20 object-cover brightness-125"
                                />
                              </div>
                              <span className="block mt-2">Brightness</span>
                            </div>
                            <div
                              className="group cursor-pointer"
                              uk-toggle="target: #addPostImage; cls: contrast-150"
                            >
                              <div className="group-hover:ring-2 ring-blue-600 ring-offset-4 duration-500 rounded dark:ring-offset-slate-800">
                                <img
                                  src="assets/images/affect.jpg"
                                  alt=""
                                  className="rounded w-full h-20 object-cover contrast-150"
                                />
                              </div>
                              <span className="block mt-2">Contrast</span>
                            </div>
                            <div
                              className="group cursor-pointer"
                              uk-toggle="target: #addPostImage; cls: grayscale"
                            >
                              <div className="group-hover:ring-2 ring-blue-600 ring-offset-4 duration-500 rounded dark:ring-offset-slate-800">
                                <img
                                  src="assets/images/affect.jpg"
                                  alt=""
                                  className="rounded w-full h-20 object-cover grayscale"
                                />
                              </div>
                              <span className="block mt-2">Grayscale</span>
                            </div>
                            <div
                              className="group cursor-pointer"
                              uk-toggle="target: #addPostImage; cls: hue-rotate-60"
                            >
                              <div className="group-hover:ring-2 ring-blue-600 ring-offset-4 duration-500 rounded dark:ring-offset-slate-800">
                                <img
                                  src="assets/images/affect.jpg"
                                  alt=""
                                  className="rounded w-full h-20 object-cover hue-rotate-90"
                                />
                              </div>
                              <span className="block mt-2">Hue</span>
                            </div>
                            <div
                              className="group cursor-pointer"
                              uk-toggle="target: #addPostImage; cls: invert"
                            >
                              <div className="group-hover:ring-2 ring-blue-600 ring-offset-4 duration-500 rounded dark:ring-offset-slate-800">
                                <img
                                  src="assets/images/affect.jpg"
                                  alt=""
                                  className="rounded w-full h-20 object-cover invert"
                                />
                              </div>
                              <span className="block mt-2">Invert</span>
                            </div>
                            <div
                              className="group cursor-pointer"
                              uk-toggle="target: #addPostImage; cls: saturate-150"
                            >
                              <div className="group-hover:ring-2 ring-blue-600 ring-offset-4 duration-500 rounded dark:ring-offset-slate-800">
                                <img
                                  src="assets/images/affect.jpg"
                                  alt=""
                                  className="rounded w-full h-20 object-cover saturate-150"
                                />
                              </div>
                              <span className="block mt-2">Saturate</span>
                            </div>
                            <div
                              className="group cursor-pointer"
                              uk-toggle="target: #addPostImage; cls: sepia"
                            >
                              <div className="group-hover:ring-2 ring-blue-600 ring-offset-4 duration-500 rounded dark:ring-offset-slate-800">
                                <img
                                  src="assets/images/affect.jpg"
                                  alt=""
                                  className="rounded w-full h-20 object-cover sepia"
                                />
                              </div>
                              <span className="block mt-2">Sepia</span>
                            </div>
                            <div
                              className="group cursor-pointer"
                              uk-toggle="target: #addPostImage; cls: brightness-125"
                            >
                              <div className="group-hover:ring-2 ring-blue-600 ring-offset-4 duration-500 rounded dark:ring-offset-slate-800">
                                <img
                                  src="assets/images/affect.jpg"
                                  alt=""
                                  className="rounded w-full h-20 object-cover brightness-125"
                                />
                              </div>
                              <span className="block mt-2">Brightness</span>
                            </div>
                            <div
                              className="group cursor-pointer"
                              uk-toggle="target: #addPostImage; cls: grayscale"
                            >
                              <div className="group-hover:ring-2 ring-blue-600 ring-offset-4 duration-500 rounded dark:ring-offset-slate-800">
                                <img
                                  src="assets/images/affect.jpg"
                                  alt=""
                                  className="rounded w-full h-20 object-cover contrast"
                                />
                              </div>
                              <span className="block mt-2">Contrast</span>
                            </div>
                            <div
                              className="group cursor-pointer"
                              uk-toggle="target: #addPostImage; cls: grayscale"
                            >
                              <div className="group-hover:ring-2 ring-blue-600 ring-offset-4 duration-500 rounded dark:ring-offset-slate-800">
                                <img
                                  src="assets/images/affect.jpg"
                                  alt=""
                                  className="rounded w-full h-20 object-cover grayscale"
                                />
                              </div>
                              <span className="block mt-2">Grayscale</span>
                            </div>
                            <div
                              className="group cursor-pointer"
                              uk-toggle="target: #addPostImage; cls: hue-rotate-60"
                            >
                              <div className="group-hover:ring-2 ring-blue-600 ring-offset-4 duration-500 rounded dark:ring-offset-slate-800">
                                <img
                                  src="assets/images/affect.jpg"
                                  alt=""
                                  className="rounded w-full h-20 object-cover hue-rotate-60"
                                />
                              </div>
                              <span className="block mt-2">Hue</span>
                            </div>
                            <div
                              className="group cursor-pointer"
                              uk-toggle="target: #addPostImage; cls: invert"
                            >
                              <div className="group-hover:ring-2 ring-blue-600 ring-offset-4 duration-500 rounded dark:ring-offset-slate-800">
                                <img
                                  src="assets/images/affect.jpg"
                                  alt=""
                                  className="rounded w-full h-20 object-cover invert"
                                />
                              </div>
                              <span className="block mt-2">Invert</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                {/* tab 3 Premission Photo*/}
                <li>
                  <div className="lg:w-[300px] lg:max-h-[600px] overflow-y-auto uk-animation-fade">
                    <textarea
                      name=""
                      id=""
                      rows={4}
                      placeholder="What is going on.."
                      className="w-full !p-4 !rounded-none"
                      defaultValue={""}
                    />
                    <ul
                      className="divide-y divide-gray-100 dark:divide-slate-700"
                      uk-nav="multiple: true"
                    >
                      <li>
                        <div className="flex items-center justify-between py-2 px-3.5">
                          <input
                            type="text"
                            placeholder="Add locations"
                            className="font-medium text-sm w-full !bg-transparent !px-0 focus:!border-transparent focus:!ring-transparent"
                          />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                            />
                          </svg>
                        </div>
                      </li>
                      <li className="uk-parent uk-open">
                        <a
                          href="#"
                          className="flex items-center justify-between py-2 px-3.5 group "
                          aria-expanded="true"
                        >
                          <h4 className="font-medium text-sm"> Accessibility</h4>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 group-aria-expanded:rotate-180 duration-200"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 15.75l7.5-7.5 7.5 7.5"
                            />
                          </svg>
                        </a>
                        <ul className="-space-y-1">
                          <li>
                            <div className="p-4">
                              <p className="text-[13px] font-light">
                                {" "}
                                Alt text helps people with visual impairments
                                understand your photos. You can either write your
                                own alt text or let it be created automatically for
                                your photos.{" "}
                              </p>
                              <input
                                type="text"
                                placeholder="Write alt text.."
                                className="w-full mt-3"
                              />
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="uk-parent uk-open">
                        <a
                          href="#"
                          className="flex items-center justify-between py-2 px-3.5 group "
                          aria-expanded="true"
                        >
                          <h4 className="font-medium text-sm">
                            {" "}
                            Advanced settings
                          </h4>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 group-aria-expanded:rotate-180 duration-200"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 15.75l7.5-7.5 7.5 7.5"
                            />
                          </svg>
                        </a>
                        <ul className="-space-y-2">
                          <li>
                            <div className="p-4">
                              <label className="switch flex justify-between items-start gap-4 cursor-pointer min-h-[30px]">
                                <div>
                                  <h4 className="font-medium text-sm">
                                    {" "}
                                    Hide like and view counts on this post
                                  </h4>
                                </div>
                                <input type="checkbox" defaultChecked="" />
                                <span className="switch-button !relative shrink-0" />
                              </label>
                              <div>
                                <p className="text-[13px] font-light mt-1.5">
                                  {" "}
                                  Only you will see the total number of likes and
                                  views on this post. You can change this later by
                                  going to the ··· menu at the top of the post. To
                                  hide like counts on other people's posts, go to
                                  your account settings. <a href="#"> Learn more</a>
                                  .
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="p-4">
                              <label className="switch flex justify-between items-start gap-4 cursor-pointer min-h-[30px]">
                                <div>
                                  <h4 className="font-medium text-sm">
                                    {" "}
                                    Turn off commenting{" "}
                                  </h4>
                                </div>
                                <input type="checkbox" defaultChecked="" />
                                <span className="switch-button !relative shrink-0" />
                              </label>
                              <div>
                                <p className="text-[13px] font-light mt-1.5">
                                  {" "}
                                  You can change this later by going to the menu at
                                  the top of your post.
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Uikit js you can use cdn  https://getuikit.com/docs/installation  or fine the latest  https://getuikit.com/docs/installation */}
      {/* Ion icon */}
    </>
  )
}

export default Shop;