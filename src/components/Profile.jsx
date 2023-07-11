// see scripts, icons, prettify, weird syntax, paths
const Profile = () => {
  return (
    <>
      {/* main contents */}
      <main className="2xl:ml-[--w-side] xl:ml-[--w-side-md] md:ml-[--w-side-small]">
        <div className="main__inner">
          {/* profile  */}
          <div className="py-6 relative">
            <div className="flex md:gap-16 gap-4 max-md:flex-col">
              <div className="relative md:p-1 rounded-full h-full max-md:w-16 bg-gradient-to-tr from-pink-400 to-pink-600 shadow-md hover:scale-110 duration-500 uk-animation-scale-up">
                <div className="relative md:w-40 md:h-40 h-16 w-16 rounded-full overflow-hidden md:border-[6px] border-gray-100 shrink-0 dark:border-slate-900">
                  <img
                    src="assets/images/avatars/avatar-6.jpg"
                    alt=""
                    className="w-full h-full absolute object-cover"
                  />
                </div>
                <button
                  type="button"
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white shadow p-1.5 rounded-full sm:flex hidden"
                >
                  <ion-icon name="camera" className="text-2xl" />
                </button>
              </div>
              <div className="max-w-2x flex-1">
                <h3 className="md:text-xl text-base font-semibold text-black dark:text-white">
                  Monroe Parker
                </h3>
                <p className="sm:text-sm text-blue-600 mt-1 font-normal text-xs">
                  @Monroepak
                </p>
                <p className="text-sm mt-2 md:font-normal font-light">
                  I love beauty and emotion. 🥰 I’m passionate about photography
                  and learning. 📚 I explore genres and styles. 🌈 I think
                  photography is storytelling. 📖 I hope you like and feel my
                  photos. 😊
                </p>
                <p
                  className="mt-2 space-x-2 text-gray-500 text-sm hidden"
                  style={{ marginTop: 11 }}
                >
                  <a href="#" className="inline-block">
                    Travel
                  </a>
                  .
                  <a href="#" className="inline-block">
                    Business
                  </a>
                  .
                  <a href="#" className="inline-block">
                    Technolgy
                  </a>
                </p>
                <div className="flex md:items-end justify-between md:mt-8 mt-4 max-md:flex-col gap-4">
                  <div className="flex sm:gap-10 gap-6 sm:text-sm text-xs max-sm:absolute max-sm:top-10 max-sm:left-36">
                    <div>
                      <p>Posts</p>
                      <h3 className="sm:text-xl sm:font-bold mt-1 text-black dark:text-white text-base font-normal">
                        162
                      </h3>
                    </div>
                    <div>
                      <p>Following</p>
                      <h3 className="sm:text-xl sm:font-bold mt-1 text-black dark:text-white text-base font-normal">
                        14,260
                      </h3>
                    </div>
                    <div>
                      <p>Followers</p>
                      <h3 className="sm:text-xl sm:font-bold mt-1 text-black dark:text-white text-base font-normal">
                        8,542
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <button
                      type="submit"
                      className="button text-gray-600 bg-slate-200 hidden"
                    >
                      Follow
                    </button>
                    <button
                      type="button"
                      className="button bg-pink-100 text-pink-600 border border-pink-200"
                    >
                      Unfallow
                    </button>
                    <button
                      type="submit"
                      className="button bg-pink-600 text-white"
                    >
                      Message
                    </button>
                    <div>
                      <button
                        type="submit"
                        className="rounded-lg bg-slate-200/60 flex px-2 py-1.5 dark:bg-dark2"
                      >
                        <ion-icon
                          className="text-xl"
                          name="ellipsis-horizontal"
                        />
                      </button>
                      <div
                        className="w-[240px]"
                        data-uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click;offset:10"
                      >
                        <nav>
                          <a href="#">
                            <ion-icon
                              className="text-xl"
                              name="pricetags-outline"
                            />
                            Unfollow
                          </a>
                          <a href="#">
                            <ion-icon className="text-xl" name="time-outline" />
                            Mute story
                          </a>
                          <a href="#">
                            <ion-icon className="text-xl" name="flag-outline" />
                            Report
                          </a>
                          <a href="#">
                            <ion-icon
                              className="text-xl"
                              name="share-outline"
                            />
                            Share profile
                          </a>
                          <hr />
                          <a
                            href="#"
                            className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"
                          >
                            <ion-icon
                              className="text-xl"
                              name="stop-circle-outline"
                            />
                            Block
                          </a>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            {/* sticky tabs */}
            <div data-uk-sticky="cls-active: bg-slate-100/60 z-30 backdrop-blur-lg px-4 dark:bg-slate-800/60; start: 500; animation: uk-animation-slide-top">
              <nav className="text-sm text-center text-gray-500 capitalize font-semibold dark:text-white">
                <ul
                  className="flex gap-2 justify-center border-t dark:border-slate-700"
                  data-uk-switcher="connect: #story_tab ; animation: uk-animation-fade, uk-animation-slide-left-medium"
                >
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-4 py-2.5 -mb-px border-t-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white"
                    >
                      <ion-icon
                        className="mr-2 text-2xl"
                        name="camera-outline"
                      />
                      Posts
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-4 py-2.5 -mb-px border-t-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white"
                    >
                      <ion-icon className="mr-2 text-2xl" name="play-outline" />
                      Reels
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-4 py-2.5 -mb-px border-t-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white"
                    >
                      <ion-icon
                        className="mr-2 text-2xl"
                        name="pricetags-outline"
                      />
                      Tagged
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div id="story_tab" className="uk-switcher">
              {/* Post list */}
              <div>
                {/* hightlets slider post */}
                <div className="mt-8">
                  {/* post heading */}
                  <div className="flex items-center justify-between py-3">
                    <h1 className="text-xl font-bold text-black dark:text-white">
                      Highths
                    </h1>
                    <button type="button" className="lg:hidden">
                      <svg
                        id="icon__outline"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </div>
                  <div
                    className="relative mt-5"
                    tabIndex={-1}
                    data-uk-slider="autoplay: true;finite: true"
                  >
                    <div className="overflow-hidden uk-slider-container py-10">
                      <ul
                        className="-ml-2 uk-slider-items w-[calc(100%+0.875rem)]"
                        data-uk-scrollspy="target: > li; cls: uk-animation-slide-right-small; delay: 50"
                        uk-lightbox=""
                      >
                        <li
                          className="lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5 max-lg:hidden"
                          data-uk-scrollspy-class="uk-animation-fade"
                        >
                          <div className="flex flex-col items-center justify-center rounded-lg h-64 border-2 border-dashed border-teal-600">
                            <ion-icon
                              name="add-circle"
                              className="text-4xl text-teal-900"
                            />
                            <div className="mt-1 font-semibold">Add New</div>
                          </div>
                        </li>
                        <li className="lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5">
                          <a
                            href="assets/images/avatars/avatar-lg-1.jpg"
                            data-caption="Caption"
                          >
                            <div className=" lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                              <div className="w-full lg:h-64 aspect-[2.5/4] realtive">
                                <img
                                  src="assets/images/avatars/avatar-lg-1.jpg"
                                  className="rounded-lg w-full h-full object-cover inset-0"
                                  alt=""
                                />
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5">
                          <a
                            href="assets/images/avatars/avatar-lg-2.jpg"
                            data-caption="Caption"
                          >
                            <div className=" lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                              <div className="w-full lg:h-64 aspect-[2.5/4] realtive">
                                <img
                                  src="assets/images/avatars/avatar-lg-2.jpg"
                                  className="rounded-lg w-full h-full object-cover inset-0"
                                  alt=""
                                />
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5">
                          <a
                            href="assets/images/avatars/avatar-lg-3.jpg"
                            data-caption="Caption"
                          >
                            <div className=" lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                              <div className="w-full lg:h-64 aspect-[2.5/4] realtive">
                                <img
                                  src="assets/images/avatars/avatar-lg-3.jpg"
                                  className="rounded-lg w-full h-full object-cover inset-0"
                                  alt=""
                                />
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5">
                          <a
                            href="assets/images/avatars/avatar-lg-4.jpg"
                            data-caption="Caption"
                          >
                            <div className=" lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                              <div className="w-full lg:h-64 aspect-[2.5/4] realtive">
                                <img
                                  src="assets/images/avatars/avatar-lg-4.jpg"
                                  className="rounded-lg w-full h-full object-cover inset-0"
                                  alt=""
                                />
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5">
                          <a
                            href="assets/images/avatars/avatar-lg-5.jpg"
                            data-caption="Caption"
                          >
                            <div className=" lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                              <div className="w-full lg:h-64 aspect-[2.5/4] realtive">
                                <img
                                  src="assets/images/avatars/avatar-lg-5.jpg"
                                  className="rounded-lg w-full h-full object-cover inset-0"
                                  alt=""
                                />
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5">
                          <div className="w-full lg:h-64 aspect-[2.5/4] bg-slate-200/60 rounded-lg animate-pulse" />
                        </li>
                      </ul>
                    </div>
                    <button
                      type="button"
                      className="absolute -translate-y-1/2 bg-white rounded-full top-1/2 -left-4 grid w-9 h-9 place-items-center shadow  dark:bg-dark3"
                      data-uk-slider-item="previous"
                    >
                      <ion-icon name="chevron-back" className="text-2xl" />
                    </button>
                    <button
                      type="button"
                      className="absolute -right-4 -translate-y-1/2 bg-white rounded-full top-1/2 grid w-9 h-9 place-items-center shadow  dark:bg-dark3"
                      data-uk-slider-item="next"
                    >
                      <ion-icon name="chevron-forward" className="text-2xl" />
                    </button>
                  </div>
                </div>
                {/* post list  */}
                <div className="mt-8">
                  {/* post heading */}
                  <div className="flex items-center justify-between py-3">
                    <h1 className="text-xl font-bold text-black dark:text-white">
                      Posts
                    </h1>
                    <a
                      href="#"
                      className="text-sm font-semibold flex items-center gap-2"
                    >
                      Show acheived <ion-icon name="chevron-forward-outline" />
                    </a>
                  </div>
                  {/* Post list */}
                  <div
                    className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 mt-6"
                    data-uk-scrollspy="target: > div; cls: uk-animation-scale-up; delay: 100"
                  >
                    <a href="#preview_modal" data-uk-toggle="">
                      <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                        <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                          <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                            <img
                              src="assets/images/post/post-1.jpg"
                              alt=""
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                              <div className="flex items-center gap-2">
                                <ion-icon
                                  className="text-2xl"
                                  name="heart-circle"
                                />
                                152
                              </div>
                              <div className="flex items-center gap-2">
                                <ion-icon
                                  className="text-2xl"
                                  name="chatbubble-ellipses"
                                />
                                290
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="#preview_modal" data-uk-toggle="">
                      <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                        <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                          <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                            <img
                              src="assets/images/post/post-2.jpg"
                              alt=""
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                              <div className="flex items-center gap-2">
                                <ion-icon
                                  className="text-2xl"
                                  name="heart-circle"
                                />
                                152
                              </div>
                              <div className="flex items-center gap-2">
                                <ion-icon
                                  className="text-2xl"
                                  name="chatbubble-ellipses"
                                />
                                290
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="#preview_modal" data-uk-toggle="">
                      <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                        <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                          <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                            <img
                              src="assets/images/post/post-3.jpg"
                              alt=""
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                              <div className="flex items-center gap-2">
                                <ion-icon
                                  className="text-2xl"
                                  name="heart-circle"
                                />
                                152
                              </div>
                              <div className="flex items-center gap-2">
                                <ion-icon
                                  className="text-2xl"
                                  name="chatbubble-ellipses"
                                />
                                290
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="#preview_modal" data-uk-toggle="">
                      <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                        <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                          <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                            <img
                              src="assets/images/post/post-4.jpg"
                              alt=""
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                              <div className="flex items-center gap-2">
                                <ion-icon
                                  className="text-2xl"
                                  name="heart-circle"
                                />
                                152
                              </div>
                              <div className="flex items-center gap-2">
                                <ion-icon
                                  className="text-2xl"
                                  name="chatbubble-ellipses"
                                />
                                290
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="#preview_modal" data-uk-toggle="">
                      <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                        <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                          <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                            <img
                              src="assets/images/post/post-5.jpg"
                              alt=""
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                              <div className="flex items-center gap-2">
                                <ion-icon
                                  className="text-2xl"
                                  name="heart-circle"
                                />
                                152
                              </div>
                              <div className="flex items-center gap-2">
                                <ion-icon
                                  className="text-2xl"
                                  name="chatbubble-ellipses"
                                />
                                290
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="#preview_modal" data-uk-toggle="">
                      <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                        <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                          <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                            <img
                              src="assets/images/post/post-4.jpg"
                              alt=""
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                              <div className="flex items-center gap-2">
                                <ion-icon
                                  className="text-2xl"
                                  name="heart-circle"
                                />
                                152
                              </div>
                              <div className="flex items-center gap-2">
                                <ion-icon
                                  className="text-2xl"
                                  name="chatbubble-ellipses"
                                />
                                290
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="#preview_modal" data-uk-toggle="">
                      <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                        <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                          <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                            <img
                              src="assets/images/post/post-1.jpg"
                              alt=""
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                              <div className="flex items-center gap-2">
                                <ion-icon
                                  className="text-2xl"
                                  name="heart-circle"
                                />
                                152
                              </div>
                              <div className="flex items-center gap-2">
                                <ion-icon
                                  className="text-2xl"
                                  name="chatbubble-ellipses"
                                />
                                290
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="#preview_modal" data-uk-toggle="">
                      <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                        <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                          <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                            <img
                              src="assets/images/post/post-3.jpg"
                              alt=""
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                              <div className="flex items-center gap-2">
                                <ion-icon
                                  className="text-2xl"
                                  name="heart-circle"
                                />
                                152
                              </div>
                              <div className="flex items-center gap-2">
                                <ion-icon
                                  className="text-2xl"
                                  name="chatbubble-ellipses"
                                />
                                290
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="#preview_modal" data-uk-toggle="">
                      <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                        <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                          <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                            <img
                              src="assets/images/post/post-1.jpg"
                              alt=""
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                              <div className="flex items-center gap-2">
                                <ion-icon
                                  className="text-2xl"
                                  name="heart-circle"
                                />
                                152
                              </div>
                              <div className="flex items-center gap-2">
                                <ion-icon
                                  className="text-2xl"
                                  name="chatbubble-ellipses"
                                />
                                290
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="#preview_modal" data-uk-toggle="">
                      <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                        <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                          <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                            <img
                              src="assets/images/post/post-3.jpg"
                              alt=""
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                              <div className="flex items-center gap-2">
                                <ion-icon
                                  className="text-2xl"
                                  name="heart-circle"
                                />
                                152
                              </div>
                              <div className="flex items-center gap-2">
                                <ion-icon
                                  className="text-2xl"
                                  name="chatbubble-ellipses"
                                />
                                290
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="#preview_modal" data-uk-toggle="">
                      <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                        <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                          <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                            <img
                              src="assets/images/post/post-2.jpg"
                              alt=""
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                              <div className="flex items-center gap-2">
                                <ion-icon
                                  className="text-2xl"
                                  name="heart-circle"
                                />
                                152
                              </div>
                              <div className="flex items-center gap-2">
                                <ion-icon
                                  className="text-2xl"
                                  name="chatbubble-ellipses"
                                />
                                290
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="#preview_modal" data-uk-toggle="">
                      <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                        <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                          <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                            <img
                              src="assets/images/post/post-4.jpg"
                              alt=""
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
                            <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                              <div className="flex items-center gap-2">
                                <ion-icon
                                  className="text-2xl"
                                  name="heart-circle"
                                />
                                152
                              </div>
                              <div className="flex items-center gap-2">
                                <ion-icon
                                  className="text-2xl"
                                  name="chatbubble-ellipses"
                                />
                                290
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    {/* placeholders */}
                    <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse" />
                    <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse" />
                    <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse" />
                    <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse" />
                  </div>
                </div>
                {/* load more */}
                <div className="flex justify-center my-6">
                  <button
                    type="button"
                    className="bg-white py-2 px-5 rounded-full shadow-md font-semibold text-sm dark:bg-dark2"
                  >
                    Load more...
                  </button>
                </div>
              </div>
              {/* Reels  list */}
              <div className="pt-16">
                <div
                  className="grid gap-3 lg:gap-4 lg:grid-cols-4 md:grid-cols-5 sm:grid-cols-3 grid-cols-2"
                  data-uk-scrollspy="target: > div; cls: uk-animation-scale-up; delay: 100;repeat:true"
                >
                  {/* single reels */}
                  <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                    <a href="#">
                      <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                        <img
                          className="object-cover w-full h-full"
                          src="assets/images/reels/reels-1.jpg"
                          alt=""
                        />
                        <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                          <div className="flex items-center gap-2.5 text-white p-3">
                            <ion-icon
                              className="text-2xl"
                              name="play-outline"
                            />
                            14
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* single reels */}
                  <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                    <a href="#">
                      <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                        <img
                          className="object-cover w-full h-full"
                          src="assets/images/reels/reels-2.jpg"
                          alt=""
                        />
                        <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                          <div className="flex items-center gap-2.5 text-white p-3">
                            <ion-icon
                              className="text-2xl"
                              name="play-outline"
                            />
                            24
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* single reels */}
                  <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                    <a href="#">
                      <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                        <img
                          className="object-cover w-full h-full"
                          src="assets/images/reels/reels-3.jpg"
                          alt=""
                        />
                        <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                          <div className="flex items-center gap-2.5 text-white p-3">
                            <ion-icon
                              className="text-2xl"
                              name="play-outline"
                            />
                            32
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* single reels */}
                  <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                    <a href="#">
                      <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                        <img
                          className="object-cover w-full h-full"
                          src="assets/images/reels/reels-4.jpg"
                          alt=""
                        />
                        <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                          <div className="flex items-center gap-2.5 text-white p-3">
                            <ion-icon
                              className="text-2xl"
                              name="play-outline"
                            />
                            46
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* single reels */}
                  <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                    <a href="#">
                      <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                        <img
                          className="object-cover w-full h-full"
                          src="assets/images/reels/reels-3.jpg"
                          alt=""
                        />
                        <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                          <div className="flex items-center gap-2.5 text-white p-3">
                            <ion-icon
                              className="text-2xl"
                              name="play-outline"
                            />
                            16
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* single reels */}
                  <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                    <a href="#">
                      <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                        <img
                          className="object-cover w-full h-full"
                          src="assets/images/reels/reels-4.jpg"
                          alt=""
                        />
                        <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                          <div className="flex items-center gap-2.5 text-white p-3">
                            <ion-icon
                              className="text-2xl"
                              name="play-outline"
                            />
                            24
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* single reels */}
                  <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                    <a href="#">
                      <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                        <img
                          className="object-cover w-full h-full"
                          src="assets/images/reels/reels-5.jpg"
                          alt=""
                        />
                        <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                          <div className="flex items-center gap-2.5 text-white p-3">
                            <ion-icon
                              className="text-2xl"
                              name="play-outline"
                            />
                            38
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* single reels */}
                  <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                    <a href="#">
                      <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                        <img
                          className="object-cover w-full h-full"
                          src="assets/images/reels/reels-1.jpg"
                          alt=""
                        />
                        <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                          <div className="flex items-center gap-2.5 text-white p-3">
                            <ion-icon
                              className="text-2xl"
                              name="play-outline"
                            />
                            33
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* single reels */}
                  <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                    <a href="#">
                      <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                        <img
                          className="object-cover w-full h-full"
                          src="assets/images/reels/reels-1.jpg"
                          alt=""
                        />
                        <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                          <div className="flex items-center gap-2.5 text-white p-3">
                            <ion-icon
                              className="text-2xl"
                              name="play-outline"
                            />
                            62
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* single reels */}
                  <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                    <a href="#">
                      <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                        <img
                          className="object-cover w-full h-full"
                          src="assets/images/reels/reels-2.jpg"
                          alt=""
                        />
                        <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                          <div className="flex items-center gap-2.5 text-white p-3">
                            <ion-icon
                              className="text-2xl"
                              name="play-outline"
                            />
                            42
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* single reels */}
                  <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                    <a href="#">
                      <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                        <img
                          className="object-cover w-full h-full"
                          src="assets/images/reels/reels-3.jpg"
                          alt=""
                        />
                        <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                          <div className="flex items-center gap-2.5 text-white p-3">
                            <ion-icon
                              className="text-2xl"
                              name="play-outline"
                            />
                            18
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* single reels */}
                  <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                    <a href="#">
                      <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">
                        <img
                          className="object-cover w-full h-full"
                          src="assets/images/reels/reels-4.jpg"
                          alt=""
                        />
                        <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                          <div className="flex items-center gap-2.5 text-white p-3">
                            <ion-icon
                              className="text-2xl"
                              name="play-outline"
                            />
                            29
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* placeholders */}
                  <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse" />
                  <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse" />
                  <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse" />
                  <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse" />
                </div>
                {/* load more */}
                <div className="flex justify-center my-6">
                  <button
                    type="button"
                    className="bg-white py-2 px-5 rounded-full shadow-md font-semibold text-sm dark:bg-dark2"
                  >
                    Load more...
                  </button>
                </div>
              </div>
              {/* short list */}
              <div className="pt-16">
                <div
                  className="grid lg:grid-cols-3 grid-cols-2 gap-4"
                  data-uk-scrollspy="target: > div; cls: uk-animation-scale-up; delay: 100;repeat:true"
                >
                  <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2">
                    {/* heading */}
                    <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">
                      <a href="profile.html" className="max-md:hidden">
                        <img
                          src="assets/images/avatars/avatar-5.jpg"
                          alt=""
                          className="w-6 h-6 rounded-full"
                        />
                      </a>
                      <div className="flex-1">
                        <a href="profile.html">
                          <h4 className="text-black dark:text-white">
                            Monroe Parker
                          </h4>
                        </a>
                      </div>
                      {/* dropdown options */}
                      <div className="absolute top-0.5 right-0 md:m-2.5 m-1">
                        <button type="button" className="button__ico w-8 h-8">
                          <ion-icon
                            className="text-xl"
                            name="ellipsis-horizontal"
                          />
                        </button>
                        <div
                          className="w-[232px]"
                          data-uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"
                        >
                          <nav>
                            <a href="#">
                              <ion-icon
                                className="text-xl shrink-0"
                                name="bookmark-outline"
                              />
                              Add favorites
                            </a>
                            <a href="#">
                              <ion-icon
                                className="text-xl shrink-0"
                                name="flag-outline"
                              />
                              Report
                            </a>
                            <a href="#">
                              <ion-icon
                                className="text-xl shrink-0"
                                name="share-outline"
                              />
                              Share
                            </a>
                            <hr />
                            <a
                              href="#"
                              className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"
                            >
                              <ion-icon
                                className="text-xl shrink-0"
                                name="stop-circle-outline"
                              />
                              Remove
                            </a>
                          </nav>
                        </div>
                      </div>
                    </div>
                    {/* post image */}
                    <a href="#preview_modal" data-uk-toggle="">
                      <div className="relative w-full h-48">
                        <img
                          src="assets/images/post/post-1.jpg"
                          alt=""
                          className="w-full h-full object-cover inset-0"
                        />
                      </div>
                    </a>
                    {/* post icons */}
                    <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                      <button type="button" className="button__ico">
                        <ion-icon
                          className="md:text-2xl text-lg"
                          name="heart-outline"
                        />
                      </button>
                      <button type="button" className="button__ico">
                        <ion-icon
                          className="md:text-2xl text-lg"
                          name="chatbubble-ellipses-outline"
                        />
                      </button>
                      <button type="button" className="button__ico ml-auto">
                        <ion-icon
                          className="md:text-2xl text-lg"
                          name="bookmark-outline"
                        />
                      </button>
                    </div>
                  </div>
                  <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2">
                    {/* heading */}
                    <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">
                      <a href="profile.html" className="max-md:hidden">
                        <img
                          src="assets/images/avatars/avatar-2.jpg"
                          alt=""
                          className="w-6 h-6 rounded-full"
                        />
                      </a>
                      <div className="flex-1">
                        <a href="profile.html">
                          <h4 className="text-black dark:text-white">
                            Jesse Steeve
                          </h4>
                        </a>
                      </div>
                      {/* dropdown options */}
                      <div className="absolute top-0.5 right-0 m-2.5">
                        <button type="button" className="button__ico w-8 h-8">
                          <ion-icon
                            className="text-xl"
                            name="ellipsis-horizontal"
                          />
                        </button>
                        <div
                          className="w-[232px]"
                          data-uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"
                        >
                          <nav>
                            <a href="#">
                              <ion-icon
                                className="text-xl shrink-0"
                                name="bookmark-outline"
                              />
                              Add favorites
                            </a>
                            <a href="#">
                              <ion-icon
                                className="text-xl shrink-0"
                                name="flag-outline"
                              />
                              Report
                            </a>
                            <a href="#">
                              <ion-icon
                                className="text-xl shrink-0"
                                name="share-outline"
                              />
                              Share
                            </a>
                            <hr />
                            <a
                              href="#"
                              className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"
                            >
                              <ion-icon
                                className="text-xl shrink-0"
                                name="stop-circle-outline"
                              />
                              Remove
                            </a>
                          </nav>
                        </div>
                      </div>
                    </div>
                    {/* post image */}
                    <a href="#preview_modal" data-uk-toggle="">
                      <div className="relative w-full h-48">
                        <img
                          src="assets/images/post/post-2.jpg"
                          alt=""
                          className="w-full h-full object-cover inset-0"
                        />
                      </div>
                    </a>
                    {/* post icons */}
                    <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                      <button type="button" className="button__ico">
                        <ion-icon
                          className="md:text-2xl text-lg"
                          name="heart-outline"
                        />
                      </button>
                      <button type="button" className="button__ico">
                        <ion-icon
                          className="md:text-2xl text-lg"
                          name="chatbubble-ellipses-outline"
                        />
                      </button>
                      <button type="button" className="button__ico ml-auto">
                        <ion-icon
                          className="md:text-2xl text-lg"
                          name="bookmark-outline"
                        />
                      </button>
                    </div>
                  </div>
                  <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2">
                    {/* heading */}
                    <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">
                      <a href="profile.html" className="max-md:hidden">
                        <img
                          src="assets/images/avatars/avatar-3.jpg"
                          alt=""
                          className="w-6 h-6 rounded-full"
                        />
                      </a>
                      <div className="flex-1">
                        <a href="profile.html">
                          <h4 className="text-black dark:text-white">
                            Martin Gray
                          </h4>
                        </a>
                      </div>
                      {/* dropdown options */}
                      <div className="absolute top-0.5 right-0 m-2.5">
                        <button type="button" className="button__ico w-8 h-8">
                          <ion-icon
                            className="text-xl"
                            name="ellipsis-horizontal"
                          />
                        </button>
                        <div
                          className="w-[232px]"
                          data-uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"
                        >
                          <nav>
                            <a href="#">
                              <ion-icon
                                className="text-xl shrink-0"
                                name="bookmark-outline"
                              />
                              Add favorites
                            </a>
                            <a href="#">
                              <ion-icon
                                className="text-xl shrink-0"
                                name="flag-outline"
                              />
                              Report
                            </a>
                            <a href="#">
                              <ion-icon
                                className="text-xl shrink-0"
                                name="share-outline"
                              />
                              Share
                            </a>
                            <hr />
                            <a
                              href="#"
                              className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"
                            >
                              <ion-icon
                                className="text-xl shrink-0"
                                name="stop-circle-outline"
                              />
                              Remove
                            </a>
                          </nav>
                        </div>
                      </div>
                    </div>
                    {/* post image */}
                    <a href="#preview_modal" data-uk-toggle="">
                      <div className="relative w-full h-48">
                        <img
                          src="assets/images/post/post-3.jpg"
                          alt=""
                          className="w-full h-full object-cover inset-0"
                        />
                      </div>
                    </a>
                    {/* post icons */}
                    <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                      <button type="button" className="button__ico">
                        <ion-icon
                          className="md:text-2xl text-lg"
                          name="heart-outline"
                        />
                      </button>
                      <button type="button" className="button__ico">
                        <ion-icon
                          className="md:text-2xl text-lg"
                          name="chatbubble-ellipses-outline"
                        />
                      </button>
                      <button type="button" className="button__ico ml-auto">
                        <ion-icon
                          className="md:text-2xl text-lg"
                          name="bookmark-outline"
                        />
                      </button>
                    </div>
                  </div>
                  <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2">
                    {/* heading */}
                    <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">
                      <a href="profile.html" className="max-md:hidden">
                        <img
                          src="assets/images/avatars/avatar-4.jpg"
                          alt=""
                          className="w-6 h-6 rounded-full"
                        />
                      </a>
                      <div className="flex-1">
                        <a href="profile.html">
                          <h4 className="text-black dark:text-white">
                            John Michael
                          </h4>
                        </a>
                      </div>
                      {/* dropdown options */}
                      <div className="absolute top-0.5 right-0 m-2.5">
                        <button type="button" className="button__ico w-8 h-8">
                          <ion-icon
                            className="text-xl"
                            name="ellipsis-horizontal"
                          />
                        </button>
                        <div
                          className="w-[232px]"
                          data-uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"
                        >
                          <nav>
                            <a href="#">
                              <ion-icon
                                className="text-xl shrink-0"
                                name="bookmark-outline"
                              />
                              Add favorites
                            </a>
                            <a href="#">
                              <ion-icon
                                className="text-xl shrink-0"
                                name="flag-outline"
                              />
                              Report
                            </a>
                            <a href="#">
                              <ion-icon
                                className="text-xl shrink-0"
                                name="share-outline"
                              />
                              Share
                            </a>
                            <hr />
                            <a
                              href="#"
                              className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"
                            >
                              <ion-icon
                                className="text-xl shrink-0"
                                name="stop-circle-outline"
                              />
                              Remove
                            </a>
                          </nav>
                        </div>
                      </div>
                    </div>
                    {/* post image */}
                    <a href="#preview_modal" data-uk-toggle="">
                      <div className="relative w-full h-48">
                        <img
                          src="assets/images/post/post-4.jpg"
                          alt=""
                          className="w-full h-full object-cover inset-0"
                        />
                      </div>
                    </a>
                    {/* post icons */}
                    <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                      <button type="button" className="button__ico">
                        <ion-icon
                          className="md:text-2xl text-lg"
                          name="heart-outline"
                        />
                      </button>
                      <button type="button" className="button__ico">
                        <ion-icon
                          className="md:text-2xl text-lg"
                          name="chatbubble-ellipses-outline"
                        />
                      </button>
                      <button type="button" className="button__ico ml-auto">
                        <ion-icon
                          className="md:text-2xl text-lg"
                          name="bookmark-outline"
                        />
                      </button>
                    </div>
                  </div>
                  <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2">
                    {/* heading */}
                    <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">
                      <a href="profile.html" className="max-md:hidden">
                        <img
                          src="assets/images/avatars/avatar-7.jpg"
                          alt=""
                          className="w-6 h-6 rounded-full"
                        />
                      </a>
                      <div className="flex-1">
                        <a href="profile.html">
                          <h4 className="text-black dark:text-white">
                            Alexa stella
                          </h4>
                        </a>
                      </div>
                      {/* dropdown options */}
                      <div className="absolute top-0.5 right-0 m-2.5">
                        <button type="button" className="button__ico w-8 h-8">
                          <ion-icon
                            className="text-xl"
                            name="ellipsis-horizontal"
                          />
                        </button>
                        <div
                          className="w-[232px]"
                          data-uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"
                        >
                          <nav>
                            <a href="#">
                              <ion-icon
                                className="text-xl shrink-0"
                                name="bookmark-outline"
                              />
                              Add favorites
                            </a>
                            <a href="#">
                              <ion-icon
                                className="text-xl shrink-0"
                                name="flag-outline"
                              />
                              Report
                            </a>
                            <a href="#">
                              <ion-icon
                                className="text-xl shrink-0"
                                name="share-outline"
                              />
                              Share
                            </a>
                            <hr />
                            <a
                              href="#"
                              className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"
                            >
                              <ion-icon
                                className="text-xl shrink-0"
                                name="stop-circle-outline"
                              />
                              Remove
                            </a>
                          </nav>
                        </div>
                      </div>
                    </div>
                    {/* post image */}
                    <a href="#preview_modal" data-uk-toggle="">
                      <div className="relative w-full h-48">
                        <img
                          src="assets/images/post/post-5.jpg"
                          alt=""
                          className="w-full h-full object-cover inset-0"
                        />
                      </div>
                    </a>
                    {/* post icons */}
                    <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                      <button type="button" className="button__ico">
                        <ion-icon
                          className="md:text-2xl text-lg"
                          name="heart-outline"
                        />
                      </button>
                      <button type="button" className="button__ico">
                        <ion-icon
                          className="md:text-2xl text-lg"
                          name="chatbubble-ellipses-outline"
                        />
                      </button>
                      <button type="button" className="button__ico ml-auto">
                        <ion-icon
                          className="md:text-2xl text-lg"
                          name="bookmark-outline"
                        />
                      </button>
                    </div>
                  </div>
                  <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2">
                    {/* heading */}
                    <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">
                      <a href="profile.html" className="max-md:hidden">
                        <img
                          src="assets/images/avatars/avatar-5.jpg"
                          alt=""
                          className="w-6 h-6 rounded-full"
                        />
                      </a>
                      <div className="flex-1">
                        <a href="profile.html">
                          <h4 className="text-black dark:text-white">
                            Monroe Parker
                          </h4>
                        </a>
                      </div>
                      {/* dropdown options */}
                      <div className="absolute top-0.5 right-0 m-2.5">
                        <button type="button" className="button__ico w-8 h-8">
                          <ion-icon
                            className="text-xl"
                            name="ellipsis-horizontal"
                          />
                        </button>
                        <div
                          className="w-[232px]"
                          data-uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"
                        >
                          <nav>
                            <a href="#">
                              <ion-icon
                                className="text-xl shrink-0"
                                name="bookmark-outline"
                              />
                              Add favorites
                            </a>
                            <a href="#">
                              <ion-icon
                                className="text-xl shrink-0"
                                name="flag-outline"
                              />
                              Report
                            </a>
                            <a href="#">
                              <ion-icon
                                className="text-xl shrink-0"
                                name="share-outline"
                              />
                              Share
                            </a>
                            <hr />
                            <a
                              href="#"
                              className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"
                            >
                              <ion-icon
                                className="text-xl shrink-0"
                                name="stop-circle-outline"
                              />
                              Remove
                            </a>
                          </nav>
                        </div>
                      </div>
                    </div>
                    {/* post image */}
                    <a href="#preview_modal" data-uk-toggle="">
                      <div className="relative w-full h-48">
                        <img
                          src="assets/images/post/post-1.jpg"
                          alt=""
                          className="w-full h-full object-cover inset-0"
                        />
                      </div>
                    </a>
                    {/* post icons */}
                    <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                      <button type="button" className="button__ico">
                        <ion-icon
                          className="md:text-2xl text-lg"
                          name="heart-outline"
                        />
                      </button>
                      <button type="button" className="button__ico">
                        <ion-icon
                          className="md:text-2xl text-lg"
                          name="chatbubble-ellipses-outline"
                        />
                      </button>
                      <button type="button" className="button__ico ml-auto">
                        <ion-icon
                          className="md:text-2xl text-lg"
                          name="bookmark-outline"
                        />
                      </button>
                    </div>
                  </div>
                  <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2">
                    {/* heading */}
                    <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">
                      <a href="profile.html" className="max-md:hidden">
                        <img
                          src="assets/images/avatars/avatar-2.jpg"
                          alt=""
                          className="w-6 h-6 rounded-full"
                        />
                      </a>
                      <div className="flex-1">
                        <a href="profile.html">
                          <h4 className="text-black dark:text-white">
                            Jesse Steeve
                          </h4>
                        </a>
                      </div>
                      {/* dropdown options */}
                      <div className="absolute top-0.5 right-0 m-2.5">
                        <button type="button" className="button__ico w-8 h-8">
                          <ion-icon
                            className="text-xl"
                            name="ellipsis-horizontal"
                          />
                        </button>
                        <div
                          className="w-[232px]"
                          data-uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"
                        >
                          <nav>
                            <a href="#">
                              <ion-icon
                                className="text-xl shrink-0"
                                name="bookmark-outline"
                              />
                              Add favorites
                            </a>
                            <a href="#">
                              <ion-icon
                                className="text-xl shrink-0"
                                name="flag-outline"
                              />
                              Report
                            </a>
                            <a href="#">
                              <ion-icon
                                className="text-xl shrink-0"
                                name="share-outline"
                              />
                              Share
                            </a>
                            <hr />
                            <a
                              href="#"
                              className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"
                            >
                              <ion-icon
                                className="text-xl shrink-0"
                                name="stop-circle-outline"
                              />
                              Remove
                            </a>
                          </nav>
                        </div>
                      </div>
                    </div>
                    {/* post image */}
                    <a href="#preview_modal" data-uk-toggle="">
                      <div className="relative w-full h-48">
                        <img
                          src="assets/images/post/post-2.jpg"
                          alt=""
                          className="w-full h-full object-cover inset-0"
                        />
                      </div>
                    </a>
                    {/* post icons */}
                    <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                      <button type="button" className="button__ico">
                        <ion-icon
                          className="md:text-2xl text-lg"
                          name="heart-outline"
                        />
                      </button>
                      <button type="button" className="button__ico">
                        <ion-icon
                          className="md:text-2xl text-lg"
                          name="chatbubble-ellipses-outline"
                        />
                      </button>
                      <button type="button" className="button__ico ml-auto">
                        <ion-icon
                          className="md:text-2xl text-lg"
                          name="bookmark-outline"
                        />
                      </button>
                    </div>
                  </div>
                  <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2">
                    {/* heading */}
                    <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">
                      <a href="profile.html" className="max-md:hidden">
                        <img
                          src="assets/images/avatars/avatar-3.jpg"
                          alt=""
                          className="w-6 h-6 rounded-full"
                        />
                      </a>
                      <div className="flex-1">
                        <a href="profile.html">
                          <h4 className="text-black dark:text-white">
                            Martin Gray
                          </h4>
                        </a>
                      </div>
                      {/* dropdown options */}
                      <div className="absolute top-0.5 right-0 m-2.5">
                        <button type="button" className="button__ico w-8 h-8">
                          <ion-icon
                            className="text-xl"
                            name="ellipsis-horizontal"
                          />
                        </button>
                        <div
                          className="w-[232px]"
                          data-uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"
                        >
                          <nav>
                            <a href="#">
                              <ion-icon
                                className="text-xl shrink-0"
                                name="bookmark-outline"
                              />
                              Add favorites
                            </a>
                            <a href="#">
                              <ion-icon
                                className="text-xl shrink-0"
                                name="flag-outline"
                              />
                              Report
                            </a>
                            <a href="#">
                              <ion-icon
                                className="text-xl shrink-0"
                                name="share-outline"
                              />
                              Share
                            </a>
                            <hr />
                            <a
                              href="#"
                              className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"
                            >
                              <ion-icon
                                className="text-xl shrink-0"
                                name="stop-circle-outline"
                              />
                              Remove
                            </a>
                          </nav>
                        </div>
                      </div>
                    </div>
                    {/* post image */}
                    <a href="#preview_modal" data-uk-toggle="">
                      <div className="relative w-full h-48">
                        <img
                          src="assets/images/post/post-3.jpg"
                          alt=""
                          className="w-full h-full object-cover inset-0"
                        />
                      </div>
                    </a>
                    {/* post icons */}
                    <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                      <button type="button" className="button__ico">
                        <ion-icon
                          className="md:text-2xl text-lg"
                          name="heart-outline"
                        />
                      </button>
                      <button type="button" className="button__ico">
                        <ion-icon
                          className="md:text-2xl text-lg"
                          name="chatbubble-ellipses-outline"
                        />
                      </button>
                      <button type="button" className="button__ico ml-auto">
                        <ion-icon
                          className="md:text-2xl text-lg"
                          name="bookmark-outline"
                        />
                      </button>
                    </div>
                  </div>
                  <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2">
                    {/* heading */}
                    <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">
                      <a href="profile.html" className="max-md:hidden">
                        <img
                          src="assets/images/avatars/avatar-4.jpg"
                          alt=""
                          className="w-6 h-6 rounded-full"
                        />
                      </a>
                      <div className="flex-1">
                        <a href="profile.html">
                          <h4 className="text-black dark:text-white">
                            John Michael
                          </h4>
                        </a>
                      </div>
                      {/* dropdown options */}
                      <div className="absolute top-0.5 right-0 m-2.5">
                        <button type="button" className="button__ico w-8 h-8">
                          <ion-icon
                            className="text-xl"
                            name="ellipsis-horizontal"
                          />
                        </button>
                        <div
                          className="w-[232px]"
                          data-uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"
                        >
                          <nav>
                            <a href="#">
                              <ion-icon
                                className="text-xl shrink-0"
                                name="bookmark-outline"
                              />
                              Add favorites
                            </a>
                            <a href="#">
                              <ion-icon
                                className="text-xl shrink-0"
                                name="flag-outline"
                              />
                              Report
                            </a>
                            <a href="#">
                              <ion-icon
                                className="text-xl shrink-0"
                                name="share-outline"
                              />
                              Share
                            </a>
                            <hr />
                            <a
                              href="#"
                              className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"
                            >
                              <ion-icon
                                className="text-xl shrink-0"
                                name="stop-circle-outline"
                              />
                              Remove
                            </a>
                          </nav>
                        </div>
                      </div>
                    </div>
                    {/* post image */}
                    <a href="#preview_modal" data-uk-toggle="">
                      <div className="relative w-full h-48">
                        <img
                          src="assets/images/post/post-4.jpg"
                          alt=""
                          className="w-full h-full object-cover inset-0"
                        />
                      </div>
                    </a>
                    {/* post icons */}
                    <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                      <button type="button" className="button__ico">
                        <ion-icon
                          className="md:text-2xl text-lg"
                          name="heart-outline"
                        />
                      </button>
                      <button type="button" className="button__ico">
                        <ion-icon
                          className="md:text-2xl text-lg"
                          name="chatbubble-ellipses-outline"
                        />
                      </button>
                      <button type="button" className="button__ico ml-auto">
                        <ion-icon
                          className="md:text-2xl text-lg"
                          name="bookmark-outline"
                        />
                      </button>
                    </div>
                  </div>
                  {/* placeholders */}
                  <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse" />
                  <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse" />
                  <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse" />
                </div>
                {/* load more */}
                <div className="flex justify-center my-6">
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
        </div>
      </main>
      {/* post preview modal */}
      <div
        className="hidden lg:p-20 max-lg:!items-start"
        id="preview_modal"
        data-uk-modal=""
      >
        <div className="uk-modal-dialog tt relative mx-auto overflow-hidden shadow-xl rounded-lg lg:flex items-center ax-w-[86rem] w-full lg:h-[80vh]">
          {/* image previewer */}
          <div className="lg:h-full lg:w-[calc(100vw-400px)] w-full h-96 flex justify-center items-center relative">
            <div className="relative z-10 w-full h-full">
              <img
                src="assets/images/post/post-1.jpg"
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
          <div className="lg:w-[400px] w-full bg-white h-full relative  overflow-y-auto shadow-xl dark:bg-dark2 flex flex-col justify-between">
            <div className="p-5 pb-0">
              {/* story heading */}
              <div className="flex gap-3 text-sm font-medium">
                <img
                  src="assets/images/avatars/avatar-5.jpg"
                  alt=""
                  className="w-9 h-9 rounded-full"
                />
                <div className="flex-1">
                  <h4 className="text-black font-medium dark:text-white">
                    Steeve
                  </h4>
                  <div className="text-gray-500 text-xs dark:text-white/80">
                    2 hours ago
                  </div>
                </div>
                {/* dropdown */}
                <div className="-m-1">
                  <button type="button" className="button__ico w-8 h-8">
                    <ion-icon className="text-xl" name="ellipsis-horizontal" />
                  </button>
                  <div
                    className="w-[253px]"
                    data-uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true"
                  >
                    <nav>
                      <a href="#">
                        <ion-icon
                          className="text-xl shrink-0"
                          name="bookmark-outline"
                        />
                        Add to favorites
                      </a>
                      <a href="#">
                        <ion-icon
                          className="text-xl shrink-0"
                          name="notifications-off-outline"
                        />
                        Mute Notification
                      </a>
                      <a href="#">
                        <ion-icon
                          className="text-xl shrink-0"
                          name="flag-outline"
                        />
                        Report this post
                      </a>
                      <a href="#">
                        <ion-icon
                          className="text-xl shrink-0"
                          name="share-outline"
                        />
                        Share your profile
                      </a>
                      <hr />
                      <a
                        href="#"
                        className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"
                      >
                        <ion-icon
                          className="text-xl shrink-0"
                          name="stop-circle-outline"
                        />
                        Unfollow
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
              <p className="font-normal text-sm leading-6 mt-4">
                Photography is the art of capturing light with a camera. it can
                be fun, challenging. It can also be a hobby, a passion. 📷
              </p>
              <div className="shadow relative -mx-5 px-5 py-3 mt-3">
                <div className="flex items-center gap-4 text-xs font-semibold">
                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      className="button__ico text-red-500 bg-red-100 dark:bg-slate-700"
                    >
                      <ion-icon className="text-lg" name="heart" />
                    </button>
                    <a href="#">1,300</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      className="button__ico bg-slate-100 dark:bg-slate-700"
                    >
                      <ion-icon
                        className="text-lg"
                        name="chatbubble-ellipses"
                      />
                    </button>
                    <span>260</span>
                  </div>
                  <button type="button" className="button__ico ml-auto">
                    <ion-icon className="text-xl" name="share-outline" />
                  </button>
                  <button type="button" className="button__ico">
                    <ion-icon className="text-xl" name="bookmark-outline" />
                  </button>
                </div>
              </div>
            </div>
            <div className="p-5 h-full overflow-y-auto flex-1">
              {/* comment list */}
              <div className="relative text-sm font-medium space-y-5">
                <div className="flex items-start gap-3 relative">
                  <img
                    src="assets/images/avatars/avatar-2.jpg"
                    alt=""
                    className="w-6 h-6 mt-1 rounded-full"
                  />
                  <div className="flex-1">
                    <a
                      href="#"
                      className="text-black font-medium inline-block dark:text-white"
                    >
                      Steeve
                    </a>
                    <p className="mt-0.5">What a beautiful, I love it. 😍 </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 relative">
                  <img
                    src="assets/images/avatars/avatar-3.jpg"
                    alt=""
                    className="w-6 h-6 mt-1 rounded-full"
                  />
                  <div className="flex-1">
                    <a
                      href="#"
                      className="text-black font-medium inline-block dark:text-white"
                    >
                      Monroe
                    </a>
                    <p className="mt-0.5"> You captured the moment.😎 </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 relative">
                  <img
                    src="assets/images/avatars/avatar-7.jpg"
                    alt=""
                    className="w-6 h-6 mt-1 rounded-full"
                  />
                  <div className="flex-1">
                    <a
                      href="#"
                      className="text-black font-medium inline-block dark:text-white"
                    >
                      Alexa
                    </a>
                    <p className="mt-0.5"> This photo is amazing! </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 relative">
                  <img
                    src="assets/images/avatars/avatar-4.jpg"
                    alt=""
                    className="w-6 h-6 mt-1 rounded-full"
                  />
                  <div className="flex-1">
                    <a
                      href="#"
                      className="text-black font-medium inline-block dark:text-white"
                    >
                      John
                    </a>
                    <p className="mt-0.5"> Wow, You are so talented 😍 </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 relative">
                  <img
                    src="assets/images/avatars/avatar-5.jpg"
                    alt=""
                    className="w-6 h-6 mt-1 rounded-full"
                  />
                  <div className="flex-1">
                    <a
                      href="#"
                      className="text-black font-medium inline-block dark:text-white"
                    >
                      Michael
                    </a>
                    <p className="mt-0.5"> I love taking photos 🌳🐶</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 relative">
                  <img
                    src="assets/images/avatars/avatar-3.jpg"
                    alt=""
                    className="w-6 h-6 mt-1 rounded-full"
                  />
                  <div className="flex-1">
                    <a
                      href="#"
                      className="text-black font-medium inline-block dark:text-white"
                    >
                      Monroe
                    </a>
                    <p className="mt-0.5"> Awesome. 😊😢 </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 relative">
                  <img
                    src="assets/images/avatars/avatar-5.jpg"
                    alt=""
                    className="w-6 h-6 mt-1 rounded-full"
                  />
                  <div className="flex-1">
                    <a
                      href="#"
                      className="text-black font-medium inline-block dark:text-white"
                    >
                      Jesse
                    </a>
                    <p className="mt-0.5"> Well done 🎨📸 </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 relative">
                  <img
                    src="assets/images/avatars/avatar-2.jpg"
                    alt=""
                    className="w-6 h-6 mt-1 rounded-full"
                  />
                  <div className="flex-1">
                    <a
                      href="#"
                      className="text-black font-medium inline-block dark:text-white"
                    >
                      Steeve
                    </a>
                    <p className="mt-0.5">What a beautiful, I love it. 😍 </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 relative">
                  <img
                    src="assets/images/avatars/avatar-7.jpg"
                    alt=""
                    className="w-6 h-6 mt-1 rounded-full"
                  />
                  <div className="flex-1">
                    <a
                      href="#"
                      className="text-black font-medium inline-block dark:text-white"
                    >
                      Alexa
                    </a>
                    <p className="mt-0.5"> This photo is amazing! </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 relative">
                  <img
                    src="assets/images/avatars/avatar-4.jpg"
                    alt=""
                    className="w-6 h-6 mt-1 rounded-full"
                  />
                  <div className="flex-1">
                    <a
                      href="#"
                      className="text-black font-medium inline-block dark:text-white"
                    >
                      John
                    </a>
                    <p className="mt-0.5"> Wow, You are so talented 😍 </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 relative">
                  <img
                    src="assets/images/avatars/avatar-5.jpg"
                    alt=""
                    className="w-6 h-6 mt-1 rounded-full"
                  />
                  <div className="flex-1">
                    <a
                      href="#"
                      className="text-black font-medium inline-block dark:text-white"
                    >
                      Michael
                    </a>
                    <p className="mt-0.5"> I love taking photos 🌳🐶</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 relative">
                  <img
                    src="assets/images/avatars/avatar-3.jpg"
                    alt=""
                    className="w-6 h-6 mt-1 rounded-full"
                  />
                  <div className="flex-1">
                    <a
                      href="#"
                      className="text-black font-medium inline-block dark:text-white"
                    >
                      Monroe
                    </a>
                    <p className="mt-0.5"> Awesome. 😊😢 </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-3 text-sm font-medium flex items-center gap-2">
              <img
                src="assets/images/avatars/avatar-2.jpg"
                alt=""
                className="w-6 h-6 rounded-full"
              />
              <div className="flex-1 relative overflow-hidden ">
                <textarea
                  placeholder="Add Comment...."
                  rows={1}
                  className="w-full resize-  px-4 py-2 focus:!border-transparent focus:!ring-transparent resize-y"
                  defaultValue={""}
                />
                <div className="flex items-center gap-2 absolute bottom-0.5 right-0 m-3">
                  <ion-icon
                    className="text-xl flex text-blue-700"
                    name="image"
                  />
                  <ion-icon
                    className="text-xl flex text-yellow-500"
                    name="happy"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="hidden text-sm rounded-full py-1.5 px-4 font-semibold bg-secondery"
              >
                Replay
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* create status */}
      <div className="hidden lg:p-20" id="create-status" data-uk-modal="">
        <div className="uk-modal-dialog tt relative overflow-hidden mx-auto bg-white p-7 shadow-xl rounded-lg md:w-[520px] w-full dark:bg-dark2">
          <div className="text-center py-3 border-b -m-7 mb-0 dark:border-slate-700">
            <h2 className="text-sm font-medium"> Create Status </h2>
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
          <div className="space-y-5 mt-7">
            <div>
              <label htmlFor="" className="text-base">
                What do you have in mind?
              </label>
              <input type="text" className="w-full mt-3" />
            </div>
            <div>
              <div className="w-full h-72 relative border1 rounded-lg overflow-hidden bg-[url('../images/ad_pattern.png')] bg-repeat">
                <label
                  htmlFor="createStatusUrl"
                  className="flex flex-col justify-center items-center absolute -translate-x-1/2 left-1/2 bottom-0 z-10 w-full pb-6 pt-10 cursor-pointer bg-gradient-to-t from-gray-700/60"
                >
                  <input id="createStatusUrl" type="file" className="hidden" />
                  <ion-icon name="image" className="text-3xl text-teal-600" />
                  <span className="text-white mt-2">
                    Browse to Upload image
                  </span>
                </label>
                <img
                  id="createStatusImage"
                  src="#"
                  alt="Uploaded Image"
                  accept="image/png, image/jpeg"
                  style={{ display: "none" }}
                  className="w-full h-full absolute object-cover"
                />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-start gap-2">
                <ion-icon
                  name="time-outline"
                  className="text-3xl text-sky-600  rounded-full bg-blue-50 dark:bg-transparent"
                />
                <p className="text-sm text-gray-500 font-medium">
                  Your Status will be available <br /> for
                  <span className="text-gray-800"> 24 Hours</span>
                </p>
              </div>
              <button
                type="button"
                className="button bg-blue-500 text-white px-8"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* create post modal */}
      <div
        className="hidden lg:p-20 max-lg:!items-start"
        id="create-post"
        data-uk-modal=""
      >
        <div className="uk-modal-dialog tt relative mx-auto bg-white shadow-xl rounded-lg max-lg:w-full dark:bg-dark2">
          {/* This is a switcher for multiple tabs. Each switcher tab should have the same number of tabs. https://getuikit.com/docs/switcher*/}
          <ul className="hidden" data-uk-switcher="connect: .posTabs">
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
                data-uk-switcher-item="next"
              >
                Next
              </a>
            </li>
            {/* tab 2 */}
            <li>
              <a
                href="#"
                className="absolute top-0 m-3.5 left-0"
                data-uk-switcher-item="previous"
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
                data-uk-switcher-item="next"
              >
                Next
              </a>
            </li>
            {/* tab 3 */}
            <li>
              <a
                href="#"
                className="absolute top-0 m-3.5 left-0"
                data-uk-switcher-item="previous"
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
                Share
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
                  data-uk-scrollspy="target: > div; cls: uk-animation-scale-up; delay: 300;repeat:true"
                >
                  <div data-uk-scrollspy-class="uk-animation-scale-up">
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
                    data-uk-scrollspy-class="uk-animation-slide-bottom-small"
                  >
                    <button
                      type="button"
                      className="text-white bg-blue-600 rounded-lg py-1.5 px-4 text-sm dark:bg-white/5"
                    >
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
                        data-uk-switcher=""
                      >
                        <li className="flex-1">
                          <a
                            href="#"
                            className="block px-4 py-1.5 rounded-md aria-expanded:bg-white aria-expanded:shadow aria-expanded:dark:bg-white/10"
                          >
                            Filters
                          </a>
                        </li>
                        <li className="flex-1">
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
                            <label
                              htmlFor="range1"
                              className="mb-2 inline-block"
                            >
                              Example range
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
                            <label
                              htmlFor="range2"
                              className="mb-2 inline-block"
                            >
                              Example range
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
                            <label
                              htmlFor="range3"
                              className="mb-2 inline-block"
                            >
                              Example range
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
                            <label
                              htmlFor="range4"
                              className="mb-2 inline-block"
                            >
                              Example range
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
                            <label
                              htmlFor="range5"
                              className="mb-2 inline-block"
                            >
                              Example range
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
                            <label
                              htmlFor="range6"
                              className="mb-2 inline-block"
                            >
                              Example range
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
                            data-uk-scrollspy="target: > div; cls: uk-animation-scale-up; delay: 50;repeat:true"
                          >
                            <div
                              className="group cursor-pointer"
                              data-uk-toggle="target: #addPostImage; cls: brightness-125"
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
                              data-uk-toggle="target: #addPostImage; cls: contrast-150"
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
                              data-uk-toggle="target: #addPostImage; cls: grayscale"
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
                              data-uk-toggle="target: #addPostImage; cls: hue-rotate-60"
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
                              data-uk-toggle="target: #addPostImage; cls: invert"
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
                              data-uk-toggle="target: #addPostImage; cls: saturate-150"
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
                              data-uk-toggle="target: #addPostImage; cls: sepia"
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
                              data-uk-toggle="target: #addPostImage; cls: brightness-125"
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
                              data-uk-toggle="target: #addPostImage; cls: grayscale"
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
                              data-uk-toggle="target: #addPostImage; cls: grayscale"
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
                              data-uk-toggle="target: #addPostImage; cls: hue-rotate-60"
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
                              data-uk-toggle="target: #addPostImage; cls: invert"
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
                      data-uk-nav="multiple: true"
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
                          <h4 className="font-medium text-sm">
                            
                            Accessibility
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
                        <ul className="-space-y-1">
                          <li>
                            <div className="p-4">
                              <p className="text-[13px] font-light">
                                Alt text helps people with visual impairments
                                understand your photos. You can either write
                                your own alt text or let it be created
                                automatically for your photos.
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
                                    Hide like and view counts on this post
                                  </h4>
                                </div>
                                <input type="checkbox" defaultChecked="" />
                                <span className="switch-button !relative shrink-0" />
                              </label>
                              <div>
                                <p className="text-[13px] font-light mt-1.5">
                                  Only you will see the total number of likes
                                  and views on this post. You can change this
                                  later by going to the ··· menu at the top of
                                  the post. To hide like counts on other
                                  people's posts, go to your account settings.
                                  <a href="#"> Learn more</a>.
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="p-4">
                              <label className="switch flex justify-between items-start gap-4 cursor-pointer min-h-[30px]">
                                <div>
                                  <h4 className="font-medium text-sm">
                                    Turn off commenting
                                  </h4>
                                </div>
                                <input type="checkbox" defaultChecked="" />
                                <span className="switch-button !relative shrink-0" />
                              </label>
                              <div>
                                <p className="text-[13px] font-light mt-1.5">
                                  You can change this later by going to the menu
                                  at the top of your post.
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
  );
};

export default Profile;
