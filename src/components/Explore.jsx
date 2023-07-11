// see scripts, icons, prettify, weird syntax, paths
const Explore = () => {
  return (
    <>
        {/* main contents */}
        <main className="2xl:ml-[--w-side] xl:ml-[--w-side-md] md:ml-[--w-side-small]">
          {/* explore */}
          <div className="main__inner">
            {/* search box */}
            <div
              className="z-10 p-5 max-lg:!top-10 lg:rounded-bl-2xl lg:rounded-br-2xl shadow-md bg-slate-100/60 backdrop-blur-3xl dark:bg-slate-800/60"
              uk-sticky="cls-inactive: invisible h-0; start: 200; animation: uk-animation-slide-top"
            >
              <div className="relative">
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
                  className="!bg-white/20 w-full !pl-10 !py-2 border !border-gray-300 dark:!border-slate-500"
                />
              </div>
            </div>
            <div
              className="gallery -mt-16"
              uk-scrollspy="target: > div; cls: uk-animation-scale-up; delay: 100"
            >
              <div className="gallery__card">
                <a href="#preview_modal" uk-toggle="">
                  <div className="card__image">
                    <img src="assets/images/post/post-1.jpg" alt="" />
                  </div>
                </a>
              </div>
              <div className="gallery__card">
                <a href="#preview_modal" uk-toggle="">
                  <div className="card__image">
                    <img src="assets/images/post/post-2.jpg" alt="" />
                  </div>
                </a>
              </div>
              <div className="gallery__card">
                <a href="#preview_modal" uk-toggle="">
                  <div className="card__image">
                    <img src="assets/images/post/post-3.jpg" alt="" />
                  </div>
                </a>
              </div>
              <div className="gallery__card">
                <a href="#preview_modal" uk-toggle="">
                  <div className="card__image">
                    <img src="assets/images/post/post-4.jpg" alt="" />
                  </div>
                </a>
              </div>
              <div className="gallery__card">
                <a href="#preview_modal" uk-toggle="">
                  <div className="card__image">
                    <img src="assets/images/post/post-5.jpg" alt="" />
                  </div>
                </a>
              </div>
              <div className="gallery__card">
                <a href="#preview_modal" uk-toggle="">
                  <div className="card__image">
                    <img src="assets/images/post/post-3.jpg" alt="" />
                  </div>
                </a>
              </div>
              <div className="gallery__card">
                <a href="#preview_modal" uk-toggle="">
                  <div className="card__image">
                    <img src="assets/images/post/post-5.jpg" alt="" />
                  </div>
                </a>
              </div>
              <div className="gallery__card">
                <a href="#preview_modal" uk-toggle="">
                  <div className="card__image">
                    <img src="assets/images/post/post-4.jpg" alt="" />
                  </div>
                </a>
              </div>
              <div className="gallery__card">
                <a href="#preview_modal" uk-toggle="">
                  <div className="card__image">
                    <img src="assets/images/post/post-2.jpg" alt="" />
                  </div>
                </a>
              </div>
              <div className="gallery__card">
                <a href="#preview_modal" uk-toggle="">
                  <div className="card__image">
                    <img src="assets/images/post/post-1.jpg" alt="" />
                  </div>
                </a>
              </div>
              <div className="gallery__card">
                <a href="#preview_modal" uk-toggle="">
                  <div className="card__image">
                    <img src="assets/images/post/post-1.jpg" alt="" />
                  </div>
                </a>
              </div>
              <div className="gallery__card">
                <a href="#preview_modal" uk-toggle="">
                  <div className="card__image">
                    <img src="assets/images/post/post-5.jpg" alt="" />
                  </div>
                </a>
              </div>
              <div className="gallery__card">
                <a href="#preview_modal" uk-toggle="">
                  <div className="card__image">
                    <img src="assets/images/post/post-3.jpg" alt="" />
                  </div>
                </a>
              </div>
              <div className="gallery__card">
                <a href="#preview_modal" uk-toggle="">
                  <div className="card__image">
                    <img src="assets/images/post/post-4.jpg" alt="" />
                  </div>
                </a>
              </div>
              <div className="gallery__card">
                <a href="#preview_modal" uk-toggle="">
                  <div className="card__image">
                    <img src="assets/images/post/post-2.jpg" alt="" />
                  </div>
                </a>
              </div>
              <div className="w-full h-60 bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse" />
              <div className="w-full h-60 bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse" />
              <div className="w-full h-60 bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse" />
            </div>
          </div>
        </main>
      {/* post preview modal */}
      <div
        className="hidden lg:p-20 max-lg:!items-start"
        id="preview_modal"
        uk-modal=""
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
                    uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true"
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
                
                Photography is the art of capturing light with a camera. it can be
                fun, challenging. It can also be a hobby, a passion. 📷
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
                  <ion-icon className="text-xl flex text-blue-700" name="image" />
                  <ion-icon className="text-xl flex text-yellow-500" name="happy" />
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
                            <label htmlFor="range1" className="mb-2 inline-block">
                              
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
                            <label htmlFor="range2" className="mb-2 inline-block">
                              
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
                            <label htmlFor="range3" className="mb-2 inline-block">
                              
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
                            <label htmlFor="range4" className="mb-2 inline-block">
                              
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
                            <label htmlFor="range5" className="mb-2 inline-block">
                              
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
                            <label htmlFor="range6" className="mb-2 inline-block">
                              
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
                                
                                Alt text helps people with visual impairments
                                understand your photos. You can either write your
                                own alt text or let it be created automatically for
                                your photos.
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
                                    
                                    Turn off commenting
                                  </h4>
                                </div>
                                <input type="checkbox" defaultChecked="" />
                                <span className="switch-button !relative shrink-0" />
                              </label>
                              <div>
                                <p className="text-[13px] font-light mt-1.5">
                                  
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

export default Explore;