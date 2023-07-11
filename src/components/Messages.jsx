// see scripts, icons, prettify, weird syntax, paths
const Messages = () => {
  return (
    <>
        {/* main contents */}
        <main className="2xl:ml-[--w-side] xl:ml-[--w-side-md] md:ml-[--w-side-small]">
          <div className="2xl:max-w-6xl mx-auto h-screen relative shadow-lg overflow-hidden border1 max-md:pt-14">
            <div className="flex bg-white dark:bg-dark2">
              {/* sidebar */}
              <div className="md:w-[360px] relative border-r dark:border-slate-700">
                <div
                  id="side-chat"
                  className="top-0 left-0 max-md:fixed max-md:w-5/6 max-md:h-screen bg-white z-50 max-md:shadow max-md:-translate-x-full dark:bg-dark2"
                >
                  {/* heading title */}
                  <div className="p-4 border-b dark:border-slate-700">
                    <div className="flex mt-2 items-center justify-between">
                      <h2 className="text-2xl font-bold text-black ml-1 dark:text-white">
                        {" "}
                        Chats{" "}
                      </h2>
                      {/* right action buttons */}
                      <div className="flex items-center gap-2.5">
                        <button className="group">
                          <ion-icon
                            name="settings-outline"
                            className="text-2xl flex group-aria-expanded:rotate-180"
                          />
                        </button>
                        <div
                          className="md:w-[270px] w-full"
                          uk-dropdown="pos: bottom-left; offset:10; animation: uk-animation-slide-bottom-small"
                        >
                          <nav>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-2xl shrink-0 -ml-1"
                                name="checkmark-outline"
                              />{" "}
                              Mark all as read{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-2xl shrink-0 -ml-1"
                                name="notifications-outline"
                              />{" "}
                              notifications setting{" "}
                            </a>
                            <a href="#">
                              {" "}
                              <ion-icon
                                className="text-xl shrink-0 -ml-1"
                                name="volume-mute-outline"
                              />{" "}
                              Mute notifications{" "}
                            </a>
                          </nav>
                        </div>
                        <button className="">
                          <ion-icon
                            name="checkmark-circle-outline"
                            className="text-2xl flex"
                          />
                        </button>
                        {/* mobile toggle menu */}
                        <button
                          type="button"
                          className="md:hidden"
                          uk-toggle="target: #side-chat ; cls: max-md:-translate-x-full"
                        >
                          <ion-icon name="chevron-down-outline" />
                        </button>
                      </div>
                    </div>
                    {/* search */}
                    <div className="relative mt-4">
                      <div className="absolute left-3 bottom-1/2 translate-y-1/2 flex">
                        <ion-icon name="search" className="text-xl" />
                      </div>
                      <input
                        type="text"
                        placeholder="Search"
                        className="w-full !pl-10 !py-2 !rounded-lg"
                      />
                    </div>
                  </div>
                  {/* users list */}
                  <div className="space-y-2 p-2 overflow-y-auto h-[calc(100vh-127px)]">
                    <a
                      href="#"
                      className="relative flex items-center gap-4 p-2 duration-200 rounded-xl hover:bg-secondery"
                    >
                      <div className="relative w-14 h-14 shrink-0">
                        <img
                          src="assets/images/avatars/avatar-5.jpg"
                          alt=""
                          className="object-cover w-full h-full rounded-full"
                        />
                        <div className="w-4 h-4 absolute bottom-0 right-0  bg-green-500 rounded-full border border-white dark:border-slate-800" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5">
                          <div className="mr-auto text-sm text-black dark:text-white font-medium">
                            Jesse Steeve
                          </div>
                          <div className="text-xs font-light text-gray-500 dark:text-white/70">
                            09:40AM
                          </div>
                        </div>
                        <div className="font-medium overflow-hidden text-ellipsis text-sm whitespace-nowrap">
                          Love your photos 😍
                        </div>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="relative flex items-center gap-4 p-2 duration-200 rounded-xl hover:bg-secondery"
                    >
                      <div className="relative w-14 h-14 shrink-0">
                        <img
                          src="assets/images/avatars/avatar-2.jpg"
                          alt=""
                          className="object-cover w-full h-full rounded-full"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5">
                          <div className="mr-auto text-sm text-black dark:text-white font-medium">
                            Martin Gray
                          </div>
                          <div className="text-xs font-light text-gray-500 dark:text-white/70">
                            09:40AM
                          </div>
                          <div className="w-2.5 h-2.5 bg-blue-600 rounded-full dark:bg-slate-700" />
                        </div>
                        <div className="font-medium overflow-hidden text-ellipsis text-sm whitespace-nowrap">
                          Photo editor needed. Fix photos? 🛠️
                        </div>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="relative flex items-center gap-4 p-2 duration-200 rounded-xl hover:bg-secondery"
                    >
                      <div className="relative w-14 h-14 shrink-0">
                        <img
                          src="assets/images/avatars/avatar-3.jpg"
                          alt=""
                          className="object-cover w-full h-full rounded-full"
                        />
                        <div className="w-4 h-4 absolute bottom-0 right-0  bg-green-500 rounded-full border border-white dark:border-slate-800" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5">
                          <div className="mr-auto text-sm text-black dark:text-white font-medium">
                            Monroe Parker
                          </div>
                          <div className="text-xs font-light text-gray-500 dark:text-white/70">
                            09:40AM
                          </div>
                        </div>
                        <div className="font-medium overflow-hidden text-ellipsis text-sm whitespace-nowrap">
                          Can i call you to day?
                        </div>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="relative flex items-center gap-4 p-2 duration-200 rounded-xl hover:bg-secondery"
                    >
                      <div className="relative w-14 h-14 shrink-0">
                        <img
                          src="assets/images/avatars/avatar-4.jpg"
                          alt=""
                          className="object-cover w-full h-full rounded-full"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5">
                          <div className="mr-auto text-sm text-black dark:text-white font-medium">
                            James Lewis
                          </div>
                          <div className="text-xs font-light text-gray-500 dark:text-white/70">
                            09:40AM
                          </div>
                        </div>
                        <div className="font-medium overflow-hidden text-ellipsis text-sm whitespace-nowrap">
                          {" "}
                          Want to buy landscape photo? 🌄{" "}
                        </div>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="relative flex items-center gap-4 p-2 duration-200 rounded-xl hover:bg-secondery"
                    >
                      <div className="relative w-14 h-14 shrink-0">
                        <img
                          src="assets/images/avatars/avatar-5.jpg"
                          alt=""
                          className="object-cover w-full h-full rounded-full"
                        />
                        <div className="w-4 h-4 absolute bottom-0 right-0  bg-green-500 rounded-full border border-white dark:border-slate-800" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5">
                          <div className="mr-auto text-sm text-black dark:text-white font-medium">
                            Jesse Steeve
                          </div>
                          <div className="text-xs font-light text-gray-500 dark:text-white/70">
                            09:40AM
                          </div>
                        </div>
                        <div className="font-medium overflow-hidden text-ellipsis text-sm whitespace-nowrap">
                          Headshot needed. Resume. Do it? 👩‍💼
                        </div>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="relative flex items-center gap-4 p-2 duration-200 rounded-xl hover:bg-secondery"
                    >
                      <div className="relative w-14 h-14 shrink-0">
                        <img
                          src="assets/images/avatars/avatar-2.jpg"
                          alt=""
                          className="object-cover w-full h-full rounded-full"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5">
                          <div className="mr-auto text-sm text-black dark:text-white font-medium">
                            Martin Gray
                          </div>
                          <div className="text-xs font-light text-gray-500 dark:text-white/70">
                            04:20PM
                          </div>
                          <div className="w-2.5 h-2.5 bg-blue-600 rounded-full dark:bg-slate-700" />
                        </div>
                        <div className="font-medium overflow-hidden text-ellipsis text-sm whitespace-nowrap">
                          Online course interesting? 🎓
                        </div>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="relative flex items-center gap-4 p-2 duration-200 rounded-xl hover:bg-secondery"
                    >
                      <div className="relative w-14 h-14 shrink-0">
                        <img
                          src="assets/images/avatars/avatar-3.jpg"
                          alt=""
                          className="object-cover w-full h-full rounded-full"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5">
                          <div className="mr-auto text-sm text-black dark:text-white font-medium">
                            Monroe Parker
                          </div>
                          <div className="text-xs font-light text-gray-500 dark:text-white/70">
                            09:40AM
                          </div>
                        </div>
                        <div className="font-medium overflow-hidden text-ellipsis text-sm whitespace-nowrap">
                          I’m glad you like it.😊
                        </div>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="relative flex items-center gap-4 p-2 duration-200 rounded-xl hover:bg-secondery"
                    >
                      <div className="relative w-14 h-14 shrink-0">
                        <img
                          src="assets/images/avatars/avatar-4.jpg"
                          alt=""
                          className="object-cover w-full h-full rounded-full"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5">
                          <div className="mr-auto text-sm text-black dark:text-white font-medium">
                            James Lewis
                          </div>
                          <div className="text-xs font-light text-gray-500 dark:text-white/70">
                            01:10PM
                          </div>
                        </div>
                        <div className="font-medium overflow-hidden text-ellipsis text-sm whitespace-nowrap">
                          {" "}
                          Product photographer wanted? 📷{" "}
                        </div>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="relative flex items-center gap-4 p-2 duration-200 rounded-xl hover:bg-secondery"
                    >
                      <div className="relative w-14 h-14 shrink-0">
                        <img
                          src="assets/images/avatars/avatar-5.jpg"
                          alt=""
                          className="object-cover w-full h-full rounded-full"
                        />
                        <div className="w-4 h-4 absolute bottom-0 right-0  bg-green-500 rounded-full border border-white dark:border-slate-800" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5">
                          <div className="mr-auto text-sm text-black dark:text-white font-medium">
                            Jesse Steeve
                          </div>
                          <div className="text-xs font-light text-gray-500 dark:text-white/70">
                            09:40AM
                          </div>
                        </div>
                        <div className="font-medium overflow-hidden text-ellipsis text-sm whitespace-nowrap">
                          Love your photos 😍
                        </div>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="relative flex items-center gap-4 p-2 duration-200 rounded-xl hover:bg-secondery"
                    >
                      <div className="relative w-14 h-14 shrink-0">
                        <img
                          src="assets/images/avatars/avatar-2.jpg"
                          alt=""
                          className="object-cover w-full h-full rounded-full"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5">
                          <div className="mr-auto text-sm text-black dark:text-white font-medium">
                            Martin Gray
                          </div>
                          <div className="text-xs font-light text-gray-500 dark:text-white/70">
                            02:52PM
                          </div>
                        </div>
                        <div className="font-medium overflow-hidden text-ellipsis text-sm whitespace-nowrap">
                          Photo editor needed. Fix photos? 🛠️
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                {/* overly */}
                <div
                  id="side-chat"
                  className="bg-slate-100/40 backdrop-blur w-full h-full dark:bg-slate-800/40 z-40 fixed inset-0 max-md:-translate-x-full md:hidden"
                  uk-toggle="target: #side-chat ; cls: max-md:-translate-x-full"
                />
              </div>
              {/* message center */}
              <div className="flex-1">
                {/* chat heading */}
                <div className="flex items-center justify-between gap-2 w- px-6 py-3.5 z-10 border-b dark:border-slate-700 uk-animation-slide-top-medium">
                  <div className="flex items-center sm:gap-4 gap-2">
                    {/* toggle for mobile */}
                    <button
                      type="button"
                      className="md:hidden"
                      uk-toggle="target: #side-chat ; cls: max-md:-translate-x-full"
                    >
                      <ion-icon
                        name="chevron-back-outline"
                        className="text-2xl -ml-4"
                      />
                    </button>
                    <div
                      className="relative cursor-pointer max-md:hidden"
                      uk-toggle="target: .rightt ; cls: hidden"
                    >
                      <img
                        src="assets/images/avatars/avatar-6.jpg"
                        alt=""
                        className="w-8 h-8 rounded-full shadow"
                      />
                      <div className="w-2 h-2 bg-teal-500 rounded-full absolute right-0 bottom-0 m-px" />
                    </div>
                    <div
                      className="cursor-pointer"
                      uk-toggle="target: .rightt ; cls: hidden"
                    >
                      <div className="text-base font-bold"> Monroe Parker</div>
                      <div className="text-xs text-green-500 font-semibold">
                        {" "}
                        Online
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button type="button" className="button__ico">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="hover:bg-slate-100 p-1.5 rounded-full"
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
                          d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="hover:bg-slate-100 p-1.5 rounded-full"
                      uk-toggle="target: .rightt ; cls: hidden"
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
                          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                {/* chats bubble */}
                <div className="w-full p-5 py-10 overflow-y-auto md:h-[calc(100vh-137px)] h-[calc(100vh-250px)]">
                  <div className="py-10 text-center text-sm lg:pt-8">
                    <img
                      src="assets/images/avatars/avatar-6.jpg"
                      className="w-24 h-24 rounded-full mx-auto mb-3"
                      alt=""
                    />
                    <div className="mt-8">
                      <div className="md:text-xl text-base font-medium text-black dark:text-white">
                        {" "}
                        Monroe Parker{" "}
                      </div>
                      <div className="text-gray-500 text-sm   dark:text-white/80">
                        {" "}
                        @Monroepark{" "}
                      </div>
                    </div>
                    <div className="mt-3.5">
                      <a
                        href="profile.html"
                        className="inline-block rounded-lg px-4 py-1.5 text-sm font-semibold bg-secondery"
                      >
                        View profile
                      </a>
                    </div>
                  </div>
                  <div className="text-sm font-medium space-y-6">
                    {/* received */}
                    <div className="flex gap-3">
                      <img
                        src="assets/images/avatars/avatar-2.jpg"
                        alt=""
                        className="w-9 h-9 rounded-full shadow"
                      />
                      <div className="px-4 py-2 rounded-[20px] max-w-sm bg-secondery">
                        {" "}
                        Hi, I’m John{" "}
                      </div>
                    </div>
                    {/* sent */}
                    <div className="flex gap-2 flex-row-reverse items-end">
                      <img
                        src="assets/images/avatars/avatar-3.jpg"
                        alt=""
                        className="w-5 h-5 rounded-full shadow"
                      />
                      <div className="px-4 py-2 rounded-[20px] max-w-sm bg-gradient-to-tr from-sky-500 to-blue-500 text-white shadow">
                        {" "}
                        I’m Lisa. welcome John
                      </div>
                    </div>
                    {/* time */}
                    <div className="flex justify-center ">
                      <div className="font-medium text-gray-500 text-sm dark:text-white/70">
                        April 8,2023,6:30 AM
                      </div>
                    </div>
                    {/* received */}
                    <div className="flex gap-3">
                      <img
                        src="assets/images/avatars/avatar-2.jpg"
                        alt=""
                        className="w-9 h-9 rounded-full shadow"
                      />
                      <div className="px-4 py-2 rounded-[20px] max-w-sm bg-secondery">
                        {" "}
                        I’m selling a photo of a sunset. It’s a print on canvas,
                        signed by the photographer. Do you like it? 😊{" "}
                      </div>
                    </div>
                    {/* sent */}
                    <div className="flex gap-2 flex-row-reverse items-end">
                      <img
                        src="assets/images/avatars/avatar-3.jpg"
                        alt=""
                        className="w-4 h-4 rounded-full shadow"
                      />
                      <div className="px-4 py-2 rounded-[20px] max-w-sm bg-gradient-to-tr from-sky-500 to-blue-500 text-white shadow">
                        {" "}
                        Wow, it’s beautiful. How much ? 😍{" "}
                      </div>
                    </div>
                    {/* sent media*/}
                    <div className="flex gap-2 flex-row-reverse items-end">
                      <img
                        src="assets/images/avatars/avatar-3.jpg"
                        alt=""
                        className="w-4 h-4 rounded-full shadow"
                      />
                      <a
                        className="block rounded-[18px] border overflow-hidden"
                        href="#"
                      >
                        <div className="max-w-md">
                          <div className="max-w-full relative w-72">
                            <div
                              className="relative"
                              style={{ paddingBottom: "57.4286%" }}
                            >
                              <div className="w-full h-full absolute inset-0">
                                <img
                                  src="assets/images/product/product-2.jpg"
                                  alt=""
                                  className="block max-w-full max-h-52 w-full h-full object-cover"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    {/* time */}
                    <div className="flex justify-center ">
                      <div className="font-medium text-gray-500 text-sm dark:text-white/70">
                        April 8,2023,6:30 AM
                      </div>
                    </div>
                    {/* received */}
                    <div className="flex gap-3">
                      <img
                        src="assets/images/avatars/avatar-2.jpg"
                        alt=""
                        className="w-9 h-9 rounded-full shadow"
                      />
                      <div className="px-4 py-2 rounded-[20px] max-w-sm bg-secondery">
                        {" "}
                        I’m glad you like it. I’m asking for $200 🤑
                      </div>
                    </div>
                    {/* sent */}
                    <div className="flex gap-2 flex-row-reverse items-end">
                      <img
                        src="assets/images/avatars/avatar-3.jpg"
                        alt=""
                        className="w-5 h-5 rounded-full shadow"
                      />
                      <div className="px-4 py-2 rounded-[20px] max-w-sm bg-gradient-to-tr from-sky-500 to-blue-500 text-white shadow">
                        {" "}
                        $200? Too steep. Can you lower the price a bit? 😕
                      </div>
                    </div>
                    {/* received */}
                    <div className="flex gap-3">
                      <img
                        src="assets/images/avatars/avatar-2.jpg"
                        alt=""
                        className="w-9 h-9 rounded-full shadow"
                      />
                      <div className="px-4 py-2 rounded-[20px] max-w-sm bg-secondery">
                        {" "}
                        Well, I can’t go too low because I paid a lot. But I’m
                        willing to negotiate. What’s your offer? 🤔{" "}
                      </div>
                    </div>
                    {/* sent */}
                    <div className="flex gap-2 flex-row-reverse items-end">
                      <img
                        src="assets/images/avatars/avatar-3.jpg"
                        alt=""
                        className="w-5 h-5 rounded-full shadow"
                      />
                      <div className="px-4 py-2 rounded-[20px] max-w-sm bg-gradient-to-tr from-sky-500 to-blue-500 text-white shadow">
                        {" "}
                        Sorry, can’t pay more than $150. 😅
                      </div>
                    </div>
                    {/* time */}
                    <div className="flex justify-center ">
                      <div className="font-medium text-gray-500 text-sm dark:text-white/70">
                        April 8,2023,6:30 AM
                      </div>
                    </div>
                    {/* received */}
                    <div className="flex gap-3">
                      <img
                        src="assets/images/avatars/avatar-2.jpg"
                        alt=""
                        className="w-9 h-9 rounded-full shadow"
                      />
                      <div className="px-4 py-2 rounded-[20px] max-w-sm bg-secondery">
                        {" "}
                        $150? Too low. Photo worth more. 😬
                      </div>
                    </div>
                    {/* sent */}
                    <div className="flex gap-2 flex-row-reverse items-end">
                      <img
                        src="assets/images/avatars/avatar-3.jpg"
                        alt=""
                        className="w-5 h-5 rounded-full shadow"
                      />
                      <div className="px-4 py-2 rounded-[20px] max-w-sm bg-gradient-to-tr from-sky-500 to-blue-500 text-white shadow">
                        {" "}
                        Too high. I Can’t . How about $160? Final offer. 😬{" "}
                      </div>
                    </div>
                    {/* received */}
                    <div className="flex gap-3">
                      <img
                        src="assets/images/avatars/avatar-2.jpg"
                        alt=""
                        className="w-9 h-9 rounded-full shadow"
                      />
                      <div className="px-4 py-2 rounded-[20px] max-w-sm bg-secondery">
                        {" "}
                        Fine, fine. You’re hard to please. I’ll take $160, but only
                        because I like you. 😍
                      </div>
                    </div>
                    {/* sent */}
                    <div className="flex gap-2 flex-row-reverse items-end">
                      <img
                        src="assets/images/avatars/avatar-3.jpg"
                        alt=""
                        className="w-5 h-5 rounded-full shadow"
                      />
                      <div className="px-4 py-2 rounded-[20px] max-w-sm bg-gradient-to-tr from-sky-500 to-blue-500 text-white shadow">
                        {" "}
                        Great, thank you. I appreciate it. I love this photo and
                        can’t wait to hang it. 😩{" "}
                      </div>
                    </div>
                  </div>
                </div>
                {/* sending message area */}
                <div className="flex items-center md:gap-4 gap-2 md:p-3 p-2 overflow-hidden">
                  <div
                    id="message__wrap"
                    className="flex items-center gap-2 h-full dark:text-white -mt-1.5"
                  >
                    <button type="button" className="shrink-0">
                      <ion-icon
                        className="text-3xl flex"
                        name="add-circle-outline"
                      />
                    </button>
                    <div
                      className="dropbar pt-36 h-60 bg-gradient-to-t via-white from-white via-30% from-30% dark:from-slate-900 dark:via-900"
                      uk-drop="stretch: x; target: #message__wrap ;animation:  slide-bottom ;animate-out: true; pos: top-left; offset:10 ; mode: click ; duration: 200"
                    >
                      <div
                        className="sm:w-full p-3 flex justify-center gap-5"
                        uk-scrollspy="target: > button; cls: uk-animation-slide-bottom-small; delay: 100;repeat:true"
                      >
                        <button
                          type="button"
                          className="bg-sky-50 text-sky-600 border border-sky-100 shadow-sm p-2.5 rounded-full shrink-0 duration-100 hover:scale-[1.15] dark:bg-dark3 dark:border-0"
                        >
                          <ion-icon className="text-3xl flex" name="image" />
                        </button>
                        <button
                          type="button"
                          className="bg-green-50 text-green-600 border border-green-100 shadow-sm p-2.5 rounded-full shrink-0 duration-100 hover:scale-[1.15] dark:bg-dark3 dark:border-0"
                        >
                          <ion-icon className="text-3xl flex" name="images" />
                        </button>
                        <button
                          type="button"
                          className="bg-pink-50 text-pink-600 border border-pink-100 shadow-sm p-2.5 rounded-full shrink-0 duration-100 hover:scale-[1.15] dark:bg-dark3 dark:border-0"
                        >
                          <ion-icon
                            className="text-3xl flex"
                            name="document-text"
                          />
                        </button>
                        <button
                          type="button"
                          className="bg-orange-50 text-orange-600 border border-orange-100 shadow-sm p-2.5 rounded-full shrink-0 duration-100 hover:scale-[1.15] dark:bg-dark3 dark:border-0"
                        >
                          <ion-icon className="text-3xl flex" name="gift" />
                        </button>
                      </div>
                    </div>
                    <button type="button" className="shrink-0">
                      <ion-icon className="text-3xl flex" name="happy-outline" />
                    </button>
                    <div
                      className="dropbar p-2"
                      uk-drop="stretch: x; target: #message__wrap ;animation: uk-animation-scale-up uk-transform-origin-bottom-left ;animate-out: true; pos: top-left ; offset:2; mode: click ; duration: 200 "
                    >
                      <div className="sm:w-60 bg-white shadow-lg border rounded-xl  pr-0 dark:border-slate-700 dark:bg-dark3">
                        <h4 className="text-sm font-semibold p-3 pb-0">
                          Send Imogi
                        </h4>
                        <div className="grid grid-cols-5 overflow-y-auto max-h-44 p-3 text-center text-xl">
                          <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                            {" "}
                            😊{" "}
                          </div>
                          <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                            {" "}
                            🤩{" "}
                          </div>
                          <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                            {" "}
                            😎
                          </div>
                          <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                            {" "}
                            🥳{" "}
                          </div>
                          <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                            {" "}
                            😂{" "}
                          </div>
                          <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                            {" "}
                            🥰{" "}
                          </div>
                          <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                            {" "}
                            😡{" "}
                          </div>
                          <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                            {" "}
                            😊{" "}
                          </div>
                          <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                            {" "}
                            🤩{" "}
                          </div>
                          <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                            {" "}
                            😎
                          </div>
                          <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                            {" "}
                            🥳{" "}
                          </div>
                          <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                            {" "}
                            😂{" "}
                          </div>
                          <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                            {" "}
                            🥰{" "}
                          </div>
                          <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                            {" "}
                            😡{" "}
                          </div>
                          <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                            {" "}
                            🤔{" "}
                          </div>
                          <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                            {" "}
                            😊{" "}
                          </div>
                          <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                            {" "}
                            🤩{" "}
                          </div>
                          <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                            {" "}
                            😎
                          </div>
                          <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                            {" "}
                            🥳{" "}
                          </div>
                          <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                            {" "}
                            😂{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex-1">
                    <textarea
                      placeholder="Write your message"
                      rows={1}
                      className="w-full resize-none bg-secondery rounded-full px-4 p-2"
                      defaultValue={""}
                    />
                    <button
                      type="button"
                      className="text-white shrink-0 p-2 absolute right-0.5 top-0"
                    >
                      <ion-icon className="text-xl flex" name="send-outline" />
                    </button>
                  </div>
                  <button type="button" className="flex h-full dark:text-white">
                    <ion-icon
                      className="text-3xl flex -mt-3"
                      name="heart-outline"
                    />
                  </button>
                </div>
              </div>
              {/* user profile right info */}
              <div className="rightt w-full h-full absolute top-0 right-0 z-10 hidden transition-transform">
                <div className="w-[360px] border-l shadow-lg h-screen bg-white absolute right-0 top-0 uk-animation-slide-right-medium delay-200 z-50 dark:bg-dark2 dark:border-slate-700">
                  <div className="w-full h-1.5 bg-gradient-to-r to-purple-500 via-red-500 from-pink-500 -mt-px" />
                  <div className="py-10 text-center text-sm pt-20">
                    <img
                      src="assets/images/avatars/avatar-3.jpg"
                      className="w-24 h-24 rounded-full mx-auto mb-3"
                      alt=""
                    />
                    <div className="mt-8">
                      <div className="md:text-xl text-base font-medium text-black dark:text-white">
                        {" "}
                        Monroe Parker
                      </div>
                      <div className="text-gray-500 text-sm mt-1 dark:text-white/80">
                        @Monroepark
                      </div>
                    </div>
                    <div className="mt-5">
                      <a
                        href="profile.html"
                        className="inline-block rounded-full px-4 py-1.5 text-sm font-semibold bg-secondery"
                      >
                        View profile
                      </a>
                    </div>
                  </div>
                  <hr className="opacity-80 dark:border-slate-700" />
                  <ul className="text-base font-medium p-3">
                    <li>
                      <div className="flex items-center gap-5 rounded-md p-3 w-full hover:bg-secondery">
                        <ion-icon
                          name="notifications-off-outline"
                          className="text-2xl"
                        />{" "}
                        Mute Notification
                        <label className="switch cursor-pointer ml-auto">
                          {" "}
                          <input type="checkbox" defaultChecked="" />
                          <span className="switch-button !relative" />
                        </label>
                      </div>
                    </li>
                    <li>
                      {" "}
                      <button
                        type="button"
                        className="flex items-center gap-5 rounded-md p-3 w-full hover:bg-secondery"
                      >
                        {" "}
                        <ion-icon
                          name="flag-outline"
                          className="text-2xl"
                        /> Report{" "}
                      </button>
                    </li>
                    <li>
                      {" "}
                      <button
                        type="button"
                        className="flex items-center gap-5 rounded-md p-3 w-full hover:bg-secondery"
                      >
                        {" "}
                        <ion-icon
                          name="settings-outline"
                          className="text-2xl"
                        />{" "}
                        Ignore messages{" "}
                      </button>{" "}
                    </li>
                    <li>
                      {" "}
                      <button
                        type="button"
                        className="flex items-center gap-5 rounded-md p-3 w-full hover:bg-secondery"
                      >
                        {" "}
                        <ion-icon
                          name="stop-circle-outline"
                          className="text-2xl"
                        />{" "}
                        Block{" "}
                      </button>{" "}
                    </li>
                    <li>
                      {" "}
                      <button
                        type="button"
                        className="flex items-center gap-5 rounded-md p-3 w-full hover:bg-red-50 text-red-500"
                      >
                        {" "}
                        <ion-icon name="trash-outline" className="text-2xl" />{" "}
                        Delete Chat{" "}
                      </button>{" "}
                    </li>
                  </ul>
                  {/* close button */}
                  <button
                    type="button"
                    className="absolute top-0 right-0 m-4 p-2 bg-secondery rounded-full"
                    uk-toggle="target: .rightt ; cls: hidden"
                  >
                    <ion-icon name="close" className="text-2xl flex" />
                  </button>
                </div>
                {/* overly */}
                <div
                  className="bg-slate-100/40 backdrop-blur absolute w-full h-full dark:bg-slate-800/40"
                  uk-toggle="target: .rightt ; cls: hidden"
                />
              </div>
            </div>
          </div>
        </main>
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

export default Messages;