// see scripts, icons, prettify, weird syntax, paths
const Home = () => {
  return (
    <>
        {/* main contents */}
        <main className="2xl:ml-[--w-side] xl:ml-[--w-side-md] md:ml-[--w-side-small]">
          <div className="main__inner">
            {/* stories */}
            <div>
              <h3 className="font-extrabold text-2xl  text-black dark:text-white">
                
                Stories
              </h3>
              <div
                className="relative"
                tabIndex={-1}
                uk-slider="autoplay: true;finite: true"
                uk-lightbox=""
              >
                <div className="py-5 uk-slider-container">
                  <ul
                    className="uk-slider-items w-[calc(100%+14px)]"
                    uk-scrollspy="target: > li; cls: uk-animation-scale-up; delay: 20;repeat:true"
                  >
                    <li className="md:pr-3" uk-scrollspy-class="uk-animation-fade">
                      <div className="md:w-20 md:h-20 w-12 h-12 rounded-full relative border-2 border-dashed grid place-items-center bg-slate-200 border-slate-300 dark:border-slate-700 dark:bg-dark2">
                        <ion-icon name="camera" className="text-2xl" />
                      </div>
                    </li>
                    <li className="md:pr-2.5 pr-2 hover:scale-[1.15] hover:-rotate-2 duration-300">
                      <a
                        href="assets/images/avatars/avatar-lg-1.jpg"
                        data-caption="Caption 1"
                      >
                        <div className="md:w-20 md:h-20 w-12 h-12 relative md:border-4 border-2 shadow border-white rounded-full overflow-hidden dark:border-slate-700">
                          <img
                            src="assets/images/avatars/avatar-2.jpg"
                            alt=""
                            className="absolute w-full h-full object-cover"
                          />
                        </div>
                      </a>
                    </li>
                    <li className="md:pr-2.5 pr-2 hover:scale-[1.15] hover:-rotate-2 duration-300">
                      <a
                        href="assets/images/avatars/avatar-lg-2.jpg"
                        data-caption="Caption 1"
                      >
                        <div className="md:w-20 md:h-20 w-12 h-12 relative md:border-4 border-2 shadow border-white rounded-full overflow-hidden dark:border-slate-700">
                          <img
                            src="assets/images/avatars/avatar-3.jpg"
                            alt=""
                            className="absolute w-full h-full object-cover"
                          />
                        </div>
                      </a>
                    </li>
                    <li className="md:pr-2.5 pr-2 hover:scale-[1.15] hover:-rotate-2 duration-300">
                      <a
                        href="assets/images/avatars/avatar-lg-4.jpg"
                        data-caption="Caption 1"
                      >
                        <div className="md:w-20 md:h-20 w-12 h-12 relative md:border-4 border-2 shadow border-white rounded-full overflow-hidden dark:border-slate-700">
                          <img
                            src="assets/images/avatars/avatar-5.jpg"
                            alt=""
                            className="absolute w-full h-full object-cover"
                          />
                        </div>
                      </a>
                    </li>
                    <li className="md:pr-2.5 pr-2 hover:scale-[1.15] hover:-rotate-2 duration-300">
                      <a
                        href="assets/images/avatars/avatar-lg-5.jpg"
                        data-caption="Caption 1"
                      >
                        <div className="md:w-20 md:h-20 w-12 h-12 relative md:border-4 border-2 shadow border-white rounded-full overflow-hidden dark:border-slate-700">
                          <img
                            src="assets/images/avatars/avatar-6.jpg"
                            alt=""
                            className="absolute w-full h-full object-cover"
                          />
                        </div>
                      </a>
                    </li>
                    <li className="md:pr-2.5 pr-2 hover:scale-[1.15] hover:-rotate-2 duration-300">
                      <a
                        href="assets/images/avatars/avatar-lg-1.jpg"
                        data-caption="Caption 1"
                      >
                        <div className="md:w-20 md:h-20 w-12 h-12 relative md:border-4 border-2 shadow border-white rounded-full overflow-hidden dark:border-slate-700">
                          <img
                            src="assets/images/avatars/avatar-7.jpg"
                            alt=""
                            className="absolute w-full h-full object-cover"
                          />
                        </div>
                      </a>
                    </li>
                    <li className="md:pr-2.5 pr-2 hover:scale-[1.15] hover:-rotate-2 duration-300">
                      <a
                        href="assets/images/avatars/avatar-lg-1.jpg"
                        data-caption="Caption 1"
                      >
                        <div className="md:w-20 md:h-20 w-12 h-12 relative md:border-4 border-2 shadow border-white rounded-full overflow-hidden dark:border-slate-700">
                          <img
                            src="assets/images/avatars/avatar-2.jpg"
                            alt=""
                            className="absolute w-full h-full object-cover"
                          />
                        </div>
                      </a>
                    </li>
                    <li className="md:pr-2.5 pr-2 hover:scale-[1.15] hover:-rotate-2 duration-300">
                      <a
                        href="assets/images/avatars/avatar-lg-2.jpg"
                        data-caption="Caption 1"
                      >
                        <div className="md:w-20 md:h-20 w-12 h-12 relative md:border-4 border-2 shadow border-white rounded-full overflow-hidden dark:border-slate-700">
                          <img
                            src="assets/images/avatars/avatar-3.jpg"
                            alt=""
                            className="absolute w-full h-full object-cover"
                          />
                        </div>
                      </a>
                    </li>
                    <li className="md:pr-2.5 pr-2 hover:scale-[1.15] hover:-rotate-2 duration-300">
                      <a
                        href="assets/images/avatars/avatar-lg-4.jpg"
                        data-caption="Caption 1"
                      >
                        <div className="md:w-20 md:h-20 w-12 h-12 relative md:border-4 border-2 shadow border-white rounded-full overflow-hidden dark:border-slate-700">
                          <img
                            src="assets/images/avatars/avatar-5.jpg"
                            alt=""
                            className="absolute w-full h-full object-cover"
                          />
                        </div>
                      </a>
                    </li>
                    <li className="md:pr-2.5 pr-2 hover:scale-[1.15] hover:-rotate-2 duration-300">
                      <a
                        href="assets/images/avatars/avatar-lg-5.jpg"
                        data-caption="Caption 1"
                      >
                        <div className="md:w-20 md:h-20 w-12 h-12 relative md:border-4 border-2 shadow border-white rounded-full overflow-hidden dark:border-slate-700">
                          <img
                            src="assets/images/avatars/avatar-6.jpg"
                            alt=""
                            className="absolute w-full h-full object-cover"
                          />
                        </div>
                      </a>
                    </li>
                    <li className="md:pr-2.5 pr-2 hover:scale-[1.15] hover:-rotate-2 duration-300">
                      <a
                        href="assets/images/avatars/avatar-lg-1.jpg"
                        data-caption="Caption 1"
                      >
                        <div className="md:w-20 md:h-20 w-12 h-12 relative md:border-4 border-2 shadow border-white rounded-full overflow-hidden dark:border-slate-700">
                          <img
                            src="assets/images/avatars/avatar-7.jpg"
                            alt=""
                            className="absolute w-full h-full object-cover"
                          />
                        </div>
                      </a>
                    </li>
                    <li className="md:pr-2.5 pr-2">
                      <div className="md:w-20 md:h-20 w-12 h-12 bg-slate-200/60 rounded-full dark:bg-dark2 animate-pulse" />
                    </li>
                  </ul>
                </div>
                <div className="max-md:hidden">
                  <button
                    type="button"
                    className="absolute -translate-y-1/2 bg-white shadow rounded-full top-1/2 -left-3.5 grid w-8 h-8 place-items-center dark:bg-dark3"
                    uk-slider-item="previous"
                  >
                    
                    <ion-icon name="chevron-back" className="text-2xl" />
                  </button>
                  <button
                    type="button"
                    className="absolute -right-2 -translate-y-1/2 bg-white shadow rounded-full top-1/2 grid w-8 h-8 place-items-center dark:bg-dark3"
                    uk-slider-item="next"
                  >
                    
                    <ion-icon name="chevron-forward" className="text-2xl" />
                  </button>
                </div>
              </div>
            </div>
            <div
              className="flex max-lg:flex-col xl:gap-10 md:gap-3 md:mt-10"
              id="js-oversized"
            >
              {/* feed story */}
              <div className="md:max-w-[510px] mx-auto flex-1 xl:space-y-6 space-y-3">
                {/* add story */}
                <div className="bg-white rounded-xl shadow-sm p-4 space-y-4 text-sm font-medium border1 dark:bg-dark2">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex-1 bg-slate-100 hover:bg-opacity-80 transition-all rounded-lg cursor-pointer dark:bg-dark3"
                      uk-toggle="target: #create-status"
                    >
                      <div className="py-2.5 text-center dark:text-white">
                        
                        What do you have in mind?
                      </div>
                    </div>
                    <div
                      className="p-2 bg-sky-100 hover:bg-opacity-80 transition-all rounded-lg cursor-pointer"
                      uk-toggle="target: #create-status"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 fill-sky-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div
                      className="p-2 bg-pink-100 hover:bg-opacity-80 transition-all rounded-lg cursor-pointer"
                      uk-toggle="target: #create-status"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 fill-pink-600"
                      >
                        <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/*  post image*/}
                <div className="bg-white rounded-xl shadow-sm text-sm font-medium border1 dark:bg-dark2">
                  {/* post heading */}
                  <div className="flex gap-3 sm:p-4 p-2.5 text-sm font-medium">
                    <a href="profile.html">
                      
                      <img
                        src="assets/images/avatars/avatar-3.jpg"
                        alt=""
                        className="w-9 h-9 rounded-full"
                      />
                    </a>
                    <div className="flex-1">
                      <a href="profile.html">
                        
                        <h4 className="text-black dark:text-white">
                          
                          Monroe Parker
                        </h4>
                      </a>
                      <div className="text-xs text-gray-500 dark:text-white/80">
                        
                        2 hours ago
                      </div>
                    </div>
                    <div className="-mr-1">
                      <button type="button" className="button__ico w-8 h-8">
                        
                        <ion-icon
                          className="text-xl"
                          name="ellipsis-horizontal"
                        />
                      </button>
                      <div
                        className="w-[245px]"
                        uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"
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
                  {/* post image */}
                  <div className="relative w-full lg:h-72 h-full sm:px-4">
                    <img
                      src="assets/images/avatars/avatar-lg-4.jpg"
                      alt=""
                      className="sm:rounded-lg w-full h-full object-cover"
                    />
                  </div>
                  {/* post icons */}
                  <div className="sm:p-4 p-2.5 flex items-center gap-4 text-xs font-semibold">
                    <div className="flex items-center gap-2.5">
                      <button
                        type="button"
                        className="button__ico text-red-500 bg-red-100 dark:bg-slate-700"
                      >
                        
                        <ion-icon className="text-lg" name="heart" />
                      </button>
                      <a href="#">1,380</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        className="button__ico bg-slate-200/70 dark:bg-slate-700"
                      >
                        
                        <ion-icon
                          className="text-lg"
                          name="chatbubble-ellipses"
                        />
                      </button>
                      <span>260</span>
                    </div>
                    <button type="button" className="button__ico ml-auto">
                      
                      <ion-icon
                        className="text-xl"
                        name="paper-plane-outline"
                      />
                    </button>
                    <button type="button" className="button__ico">
                      
                      <ion-icon className="text-xl" name="share-outline" />
                    </button>
                  </div>
                  {/* comments */}
                  <div className="sm:p-4 p-2.5 border-t border-gray-100 font-normal space-y-3 relative dark:border-slate-700/40">
                    <div className="flex items-start gap-3 relative">
                      <a href="profile.html">
                        
                        <img
                          src="assets/images/avatars/avatar-2.jpg"
                          alt=""
                          className="w-6 h-6 mt-1 rounded-full"
                        />
                      </a>
                      <div className="flex-1">
                        <a
                          href="profile.html"
                          className="text-black font-medium inline-block dark:text-white"
                        >
                          
                          Steeve
                        </a>
                        <p className="mt-0.5">
                          What a beautiful photo! I love it. 😍
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 relative">
                      <a href="profile.html">
                        
                        <img
                          src="assets/images/avatars/avatar-3.jpg"
                          alt=""
                          className="w-6 h-6 mt-1 rounded-full"
                        />
                      </a>
                      <div className="flex-1">
                        <a
                          href="profile.html"
                          className="text-black font-medium inline-block dark:text-white"
                        >
                          
                          Monroe
                        </a>
                        <p className="mt-0.5"> You captured the moment.😎 </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="flex items-center gap-1.5 text-gray-500 hover:text-blue-500 mt-2"
                    >
                      <ion-icon
                        name="chevron-down-outline"
                        className="ml-auto duration-200 group-aria-expanded:rotate-180"
                      />
                      More Comment
                    </button>
                  </div>
                  {/* add comment */}
                  <div className="sm:px-4 sm:py-3 p-2.5 border-t border-gray-100 flex items-center gap-1 dark:border-slate-700/40">
                    <img
                      src="assets/images/avatars/avatar-7.jpg"
                      alt=""
                      className="w-6 h-6 rounded-full"
                    />
                    <div className="flex-1 relative overflow-hidden h-10">
                      <textarea
                        placeholder="Add Comment...."
                        rows={1}
                        className="w-full resize-none !bg-transparent px-4 py-2 focus:!border-transparent focus:!ring-transparent"
                        defaultValue={""}
                      />
                      <div
                        className="!top-2 pr-2"
                        uk-drop="pos: bottom-right; mode: click"
                      >
                        <div
                          className="flex items-center gap-2"
                          uk-scrollspy="target: > svg; cls: uk-animation-slide-right-small; delay: 100 ;repeat: true"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6 fill-sky-600"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5 fill-pink-600"
                          >
                            <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="text-sm rounded-full py-1.5 px-3.5 bg-secondery"
                    >
                      
                      Replay
                    </button>
                  </div>
                </div>
                {/* post slide image*/}
                <div className="bg-white rounded-xl shadow-sm text-sm font-medium border1 dark:bg-dark2">
                  {/* post heading */}
                  <div className="flex gap-3 sm:p-4 p-2.5 text-sm font-medium">
                    <a href="profile.html">
                      
                      <img
                        src="assets/images/avatars/avatar-2.jpg"
                        alt=""
                        className="w-9 h-9 rounded-full"
                      />
                    </a>
                    <div className="flex-1">
                      <a href="profile.html">
                        
                        <h4 className="text-black dark:text-white">
                          
                          Martin Gray
                        </h4>
                      </a>
                      <div className="text-xs text-gray-500 dark:text-white/80">
                        
                        2 hours ago
                      </div>
                    </div>
                    <div className="-mr-1">
                      <button type="button" className="button__ico w-8 h-8">
                        
                        <ion-icon
                          className="text-xl"
                          name="ellipsis-horizontal"
                        />
                      </button>
                      <div
                        className="w-[245px]"
                        uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"
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
                  {/* slide images */}
                  <div
                    className="relative uk-visible-toggle sm:px-4"
                    tabIndex={-1}
                    uk-slideshow="animation: push;finite: true;min-height: 200; max-height: 250"
                  >
                    <ul className="uk-slideshow-items" uk-lightbox="">
                      <li className="w-full overflow-hidden sm:rounded-md">
                        <a
                          href="assets/images/avatars/avatar-lg-3.jpg"
                          data-caption="Caption"
                        >
                          <img
                            src="assets/images/avatars/avatar-lg-2.jpg"
                            className="w-full h-full object-cover inset-0"
                            alt=""
                          />
                        </a>
                      </li>
                      <li className="w-full overflow-hidden sm:rounded-md">
                        <a
                          href="assets/images/avatars/avatar-lg-3.jpg"
                          data-caption="Caption"
                        >
                          <img
                            src="assets/images/avatars/avatar-lg-3.jpg"
                            className="w-full h-full object-cover inset-0"
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                    {/* navigation */}
                    <button
                      type="button"
                      className="absolute left-2 -translate-y-1/2 bg-black/40 backdrop-blur-3xl rounded-full top-1/2 grid w-7 h-7 place-items-center shadow"
                      uk-slideshow-item="previous"
                    >
                      
                      <ion-icon
                        name="chevron-back"
                        className="text-xl text-white"
                      />
                    </button>
                    <button
                      type="button"
                      className="absolute right-2 -translate-y-1/2 bg-black/40 backdrop-blur-3xl rounded-full top-1/2 grid w-7 h-7 place-items-center shadow"
                      uk-slideshow-item="next"
                    >
                      
                      <ion-icon
                        name="chevron-forward"
                        className="text-xl text-white"
                      />
                    </button>
                  </div>
                  {/* post icons */}
                  <div className="sm:p-4 p-2.5 flex items-center gap-4 text-xs font-semibold">
                    <div className="flex items-center gap-2.5">
                      <button
                        type="button"
                        className="button__ico text-red-500 bg-red-100 dark:bg-slate-700"
                      >
                        
                        <ion-icon className="text-lg" name="heart" />
                      </button>
                      <a href="#">1,280</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        className="button__ico bg-slate-200/70 dark:bg-slate-700"
                      >
                        
                        <ion-icon
                          className="text-lg"
                          name="chatbubble-ellipses"
                        />
                      </button>
                      <span>638</span>
                    </div>
                    <button type="button" className="button__ico ml-auto">
                      
                      <ion-icon
                        className="text-xl"
                        name="paper-plane-outline"
                      />
                    </button>
                    <button type="button" className="button__ico">
                      
                      <ion-icon className="text-xl" name="share-outline" />
                    </button>
                  </div>
                  {/* comments */}
                  <div className="sm:p-4 p-2.5 border-t border-gray-100 font-normal space-y-3 relative dark:border-slate-700/40">
                    <div className="flex items-start gap-3 relative">
                      <a href="profile.html">
                        
                        <img
                          src="assets/images/avatars/avatar-2.jpg"
                          alt=""
                          className="w-6 h-6 mt-1 rounded-full"
                        />
                      </a>
                      <div className="flex-1">
                        <a
                          href="profile.html"
                          className="text-black font-medium inline-block dark:text-white"
                        >
                          
                          Steeve
                        </a>
                        <p className="mt-0.5">
                          
                          Wow, You are so talented and creative. 😍
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 relative">
                      <a href="profile.html">
                        
                        <img
                          src="assets/images/avatars/avatar-3.jpg"
                          alt=""
                          className="w-6 h-6 mt-1 rounded-full"
                        />
                      </a>
                      <div className="flex-1">
                        <a
                          href="profile.html"
                          className="text-black font-medium inline-block dark:text-white"
                        >
                          
                          Monroe
                        </a>
                        <p className="mt-0.5"> This photo is amazing! 😍 </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="flex items-center gap-1.5 text-gray-500 hover:text-blue-500 mt-2"
                    >
                      <ion-icon
                        name="chevron-down-outline"
                        className="ml-auto duration-200 group-aria-expanded:rotate-180"
                      />
                      More Comment
                    </button>
                  </div>
                  {/* add comment */}
                  <div className="sm:px-4 sm:py-3 p-2.5 border-t border-gray-100 flex items-center gap-1 dark:border-slate-700/40">
                    <img
                      src="assets/images/avatars/avatar-7.jpg"
                      alt=""
                      className="w-6 h-6 rounded-full"
                    />
                    <div className="flex-1 relative overflow-hidden h-10">
                      <textarea
                        placeholder="Add Comment...."
                        rows={1}
                        className="w-full resize-none !bg-transparent px-4 py-2 focus:!border-transparent focus:!ring-transparent"
                        defaultValue={""}
                      />
                      <div
                        className="!top-2 pr-2"
                        uk-drop="pos: bottom-right; mode: click"
                      >
                        <div
                          className="flex items-center gap-2"
                          uk-scrollspy="target: > svg; cls: uk-animation-slide-right-small; delay: 100 ;repeat: true"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6 fill-sky-600"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5 fill-pink-600"
                          >
                            <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="text-sm rounded-full py-1.5 px-3.5 bg-secondery"
                    >
                      
                      Replay
                    </button>
                  </div>
                </div>
                {/* post text*/}
                <div className="bg-white rounded-xl shadow-sm text-sm font-medium border1 dark:bg-dark2">
                  {/* post heading */}
                  <div className="flex gap-3 sm:p-4 p-2.5 text-sm font-medium">
                    <a href="profile.html">
                      
                      <img
                        src="assets/images/avatars/avatar-5.jpg"
                        alt=""
                        className="w-9 h-9 rounded-full"
                      />
                    </a>
                    <div className="flex-1">
                      <a href="profile.html">
                        
                        <h4 className="text-black dark:text-white">
                          
                          John Michael
                        </h4>
                      </a>
                      <div className="text-xs text-gray-500 dark:text-white/80">
                        
                        2 hours ago
                      </div>
                    </div>
                    <div className="-mr-1">
                      <button type="button" className="button__ico w-8 h-8">
                        
                        <ion-icon
                          className="text-xl"
                          name="ellipsis-horizontal"
                        />
                      </button>
                      <div
                        className="w-[245px]"
                        uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"
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
                  {/* slide images */}
                  <div className="sm:px-4 p-2.5 pt-0">
                    <p className="font-normal">
                      
                      Photography is the art of capturing light with a camera. It
                      can be used to create images that tell stories, express
                      emotions, or document reality. it can be fun, challenging, or
                      rewarding. It can also be a hobby, a profession, or a passion.
                      📷
                    </p>
                  </div>
                  {/* post icons */}
                  <div className="sm:p-4 p-2.5 flex items-center gap-4 text-xs font-semibold">
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
                        className="button__ico bg-slate-200/70 dark:bg-slate-700"
                      >
                        
                        <ion-icon
                          className="text-lg"
                          name="chatbubble-ellipses"
                        />
                      </button>
                      <span>260</span>
                    </div>
                    <button type="button" className="button__ico ml-auto">
                      
                      <ion-icon
                        className="text-xl"
                        name="paper-plane-outline"
                      />
                    </button>
                    <button type="button" className="button__ico">
                      
                      <ion-icon className="text-xl" name="share-outline" />
                    </button>
                  </div>
                  {/* comments */}
                  <div className="sm:p-4 p-2.5 border-t border-gray-100 font-normal space-y-3 relative dark:border-slate-700/40">
                    <div className="flex items-start gap-3 relative">
                      <a href="profile.html">
                        
                        <img
                          src="assets/images/avatars/avatar-2.jpg"
                          alt=""
                          className="w-6 h-6 mt-1 rounded-full"
                        />
                      </a>
                      <div className="flex-1">
                        <a
                          href="profile.html"
                          className="text-black font-medium inline-block dark:text-white"
                        >
                          
                          Steeve
                        </a>
                        <p className="mt-0.5">
                          
                          I love taking photos of nature and animals. 🌳🐶
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 relative">
                      <a href="profile.html">
                        
                        <img
                          src="assets/images/avatars/avatar-3.jpg"
                          alt=""
                          className="w-6 h-6 mt-1 rounded-full"
                        />
                      </a>
                      <div className="flex-1">
                        <a
                          href="profile.html"
                          className="text-black font-medium inline-block dark:text-white"
                        >
                          
                          Monroe
                        </a>
                        <p className="mt-0.5">
                          
                          I enjoy people and emotions. 😊😢
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 relative">
                      <a href="profile.html">
                        
                        <img
                          src="assets/images/avatars/avatar-5.jpg"
                          alt=""
                          className="w-6 h-6 mt-1 rounded-full"
                        />
                      </a>
                      <div className="flex-1">
                        <a
                          href="profile.html"
                          className="text-black font-medium inline-block dark:text-white"
                        >
                          
                          Jesse
                        </a>
                        <p className="mt-0.5"> Photography is my passion. 🎨📸 </p>
                      </div>
                    </div>
                  </div>
                  {/* add comment */}
                  <div className="sm:px-4 sm:py-3 p-2.5 border-t border-gray-100 flex items-center gap-1 dark:border-slate-700/40">
                    <img
                      src="assets/images/avatars/avatar-7.jpg"
                      alt=""
                      className="w-6 h-6 rounded-full"
                    />
                    <div className="flex-1 relative overflow-hidden h-10">
                      <textarea
                        placeholder="Add Comment...."
                        rows={1}
                        className="w-full resize-none !bg-transparent px-4 py-2 focus:!border-transparent focus:!ring-transparent"
                        defaultValue={""}
                      />
                      <div
                        className="!top-2 pr-2"
                        uk-drop="pos: bottom-right; mode: click"
                      >
                        <div
                          className="flex items-center gap-2"
                          uk-scrollspy="target: > svg; cls: uk-animation-slide-right-small; delay: 100 ;repeat: true"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6 fill-sky-600"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5 fill-pink-600"
                          >
                            <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="text-sm rounded-full py-1.5 px-3.5 bg-secondery"
                    >
                      
                      Replay
                    </button>
                  </div>
                </div>
                {/* placeholder */}
                <div className="rounded-xl shadow-sm p-4 space-y-4 bg-slate-200/40 animate-pulse border1 dark:bg-dark2">
                  <div className="flex gap-3">
                    <div className="w-9 h-9 rounded-full bg-slate-300/20" />
                    <div className="flex-1 space-y-3">
                      <div className="w-40 h-5 rounded-md bg-slate-300/20" />
                      <div className="w-24 h-4 rounded-md bg-slate-300/20" />
                    </div>
                    <div className="w-6 h-6 rounded-full bg-slate-300/20" />
                  </div>
                  <div className="w-full h-52 rounded-lg bg-slate-300/10 my-3">
                    
                  </div>
                  <div className="flex gap-3">
                    <div className="w-16 h-5 rounded-md bg-slate-300/20" />
                    <div className="w-14 h-5 rounded-md bg-slate-300/20" />
                    <div className="w-6 h-6 rounded-full bg-slate-300/20 ml-auto" />
                    <div className="w-6 h-6 rounded-full bg-slate-300/20  " />
                  </div>
                </div>
              </div>
              {/* right sidebar */}
              <div className="lg:max-w-[370px] md:max-w-[510px] mx-auto">
                <div
                  className="xl:space-y-6 space-y-3 md:pb-12"
                  uk-sticky="end: #js-oversized; offset: 50; media:992"
                >
                  {/* peaple you might know */}
                  <div className="bg-white rounded-xl shadow-sm p-5 px-6 border1 dark:bg-dark2">
                    <div className="flex justify-between text-black dark:text-white">
                      <h3 className="font-bold text-base">
                        
                        Peaple You might know
                      </h3>
                      <button type="button">
                        
                        <ion-icon name="sync-outline" className="text-xl" />
                      </button>
                    </div>
                    <div className="space-y-4 capitalize text-xs font-normal mt-5 mb-2 text-gray-500 dark:text-white/80">
                      <div className="flex items-center gap-3">
                        <a href="profile.html">
                          <img
                            src="assets/images/avatars/avatar-7.jpg"
                            alt=""
                            className="bg-gray-200 rounded-full w-10 h-10"
                          />
                        </a>
                        <div className="flex-1">
                          <a href="profile.html">
                            <h4 className="font-semibold text-sm text-black dark:text-white">
                              
                              Johnson smith
                            </h4>
                          </a>
                          <div className="mt-0.5"> Suggested For You </div>
                        </div>
                        <button
                          type="button"
                          className="text-sm rounded-full py-1.5 px-4 font-semibold bg-secondery"
                        >
                          
                          Follow
                        </button>
                      </div>
                      <div className="flex items-center gap-3">
                        <a href="profile.html">
                          <img
                            src="assets/images/avatars/avatar-5.jpg"
                            alt=""
                            className="bg-gray-200 rounded-full w-10 h-10"
                          />
                        </a>
                        <div className="flex-1">
                          <a href="profile.html">
                            <h4 className="font-semibold text-sm text-black dark:text-white">
                              
                              James Lewis
                            </h4>
                          </a>
                          <div className="mt-0.5"> Followed by Johnson </div>
                        </div>
                        <button
                          type="button"
                          className="text-sm rounded-full py-1.5 px-4 font-semibold bg-secondery"
                        >
                          
                          Follow
                        </button>
                      </div>
                      <div className="flex items-center gap-3">
                        <a href="profile.html">
                          <img
                            src="assets/images/avatars/avatar-2.jpg"
                            alt=""
                            className="bg-gray-200 rounded-full w-10 h-10"
                          />
                        </a>
                        <div className="flex-1">
                          <a href="profile.html">
                            <h4 className="font-semibold text-sm text-black dark:text-white">
                              
                              John Michael
                            </h4>
                          </a>
                          <div className="mt-0.5"> Followed by Monroe</div>
                        </div>
                        <button
                          type="button"
                          className="text-sm rounded-full py-1.5 px-4 font-semibold bg-secondery"
                        >
                          
                          Follow
                        </button>
                      </div>
                      <div className="flex items-center gap-3">
                        <a href="profile.html">
                          <img
                            src="assets/images/avatars/avatar-3.jpg"
                            alt=""
                            className="bg-gray-200 rounded-full w-10 h-10"
                          />
                        </a>
                        <div className="flex-1">
                          <a href="profile.html">
                            <h4 className="font-semibold text-sm text-black dark:text-white">
                              
                              Monroe Parker
                            </h4>
                          </a>
                          <div className="mt-0.5"> Suggested For You </div>
                        </div>
                        <button
                          type="button"
                          className="text-sm rounded-full py-1.5 px-4 font-semibold bg-secondery"
                        >
                          
                          Follow
                        </button>
                      </div>
                      <div className="flex items-center gap-3">
                        <a href="profile.html">
                          <img
                            src="assets/images/avatars/avatar-4.jpg"
                            alt=""
                            className="bg-gray-200 rounded-full w-10 h-10"
                          />
                        </a>
                        <div className="flex-1">
                          <a href="profile.html">
                            <h4 className="font-semibold text-sm text-black dark:text-white">
                              
                              Martin Gray
                            </h4>
                          </a>
                          <div className="mt-0.5"> Suggested For You </div>
                        </div>
                        <button
                          type="button"
                          className="text-sm rounded-full py-1.5 px-4 font-semibold bg-secondery"
                        >
                          
                          Follow
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* latest marketplace items */}
                  <div className="bg-white rounded-xl shadow-sm p-5 px-6 border1 dark:bg-dark2">
                    <div className="flex justify-between text-black dark:text-white">
                      <h3 className="font-bold text-base"> Premium Photos </h3>
                      <button type="button">
                        
                        <ion-icon name="sync-outline" className="text-xl" />
                      </button>
                    </div>
                    <div
                      className="relative capitalize font-medium text-sm text-center mt-4 mb-2"
                      tabIndex={-1}
                      uk-slider="autoplay: true;finite: true"
                    >
                      <div className="overflow-hidden uk-slider-container">
                        <ul className="-ml-2 uk-slider-items w-[calc(100%+0.5rem)]">
                          <li className="w-1/2 pr-2">
                            <a href="#">
                              <div className="relative overflow-hidden rounded-lg">
                                <div className="relative w-full md:h-40 h-full">
                                  <img
                                    src="assets/images/product/product-3.jpg"
                                    alt=""
                                    className="object-cover w-full h-full inset-0"
                                  />
                                </div>
                                <div className="absolute right-0 top-0 m-2 bg-white/60 rounded-full py-0.5 px-2 text-sm font-semibold dark:bg-slate-800/60">
                                  
                                  $12
                                </div>
                              </div>
                              <div className="mt-3 w-full"> Gaming Mouse </div>
                            </a>
                          </li>
                          <li className="w-1/2 pr-2">
                            <a href="#">
                              <div className="relative overflow-hidden rounded-lg">
                                <div className="relative w-full md:h-40 h-full">
                                  <img
                                    src="assets/images/product/product-1.jpg"
                                    alt=""
                                    className="object-cover w-full h-full inset-0"
                                  />
                                </div>
                                <div className="absolute right-0 top-0 m-2 bg-white/60 rounded-full py-0.5 px-2 text-sm font-semibold dark:bg-slate-800/60">
                                  
                                  $18
                                </div>
                              </div>
                              <div className="mt-3 w-full"> Deep Cleanse </div>
                            </a>
                          </li>
                          <li className="w-1/2 pr-2">
                            <a href="#">
                              <div className="relative overflow-hidden rounded-lg">
                                <div className="relative w-full md:h-40 h-full">
                                  <img
                                    src="assets/images/product/product-5.jpg"
                                    alt=""
                                    className="object-cover w-full h-full inset-0"
                                  />
                                </div>
                                <div className="absolute right-0 top-0 m-2 bg-white/60 rounded-full py-0.5 px-2 text-sm font-semibold dark:bg-slate-800/60">
                                  
                                  $12
                                </div>
                              </div>
                              <div className="mt-3 w-full"> Chill Lotion </div>
                            </a>
                          </li>
                        </ul>
                        <button
                          type="button"
                          className="absolute bg-white rounded-full top-16 -left-4 grid w-9 h-9 place-items-center shadow dark:bg-dark3"
                          uk-slider-item="previous"
                        >
                          
                          <ion-icon name="chevron-back" className="text-2xl" />
                        </button>
                        <button
                          type="button"
                          className="absolute -right-4 bg-white rounded-full top-16 grid w-9 h-9 place-items-center shadow dark:bg-dark3"
                          uk-slider-item="next"
                        >
                          
                          <ion-icon name="chevron-forward" className="text-2xl" />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* online friends */}
                  <div className="bg-white rounded-xl shadow-sm p-5 px-6 border1 dark:bg-dark2">
                    <div className="flex justify-between text-black dark:text-white">
                      <h3 className="font-bold text-base"> Online Friends </h3>
                      <button type="button">
                        
                        <ion-icon name="sync-outline" className="text-xl" />
                      </button>
                    </div>
                    <div className="grid grid-cols-6 gap-3 mt-4">
                      <a href="profile.html">
                        <div className="w-10 h-10 relative">
                          <img
                            src="assets/images/avatars/avatar-2.jpg"
                            alt=""
                            className="w-full h-full absolute inset-0 rounded-full"
                          />
                          <div className="absolute bottom-0 right-0 m-0.5 bg-green-500 rounded-full w-2 h-2" />
                        </div>
                      </a>
                      <a href="profile.html">
                        <div className="w-10 h-10 relative">
                          <img
                            src="assets/images/avatars/avatar-3.jpg"
                            alt=""
                            className="w-full h-full absolute inset-0 rounded-full"
                          />
                          <div className="absolute bottom-0 right-0 m-0.5 bg-green-500 rounded-full w-2 h-2" />
                        </div>
                      </a>
                      <a href="profile.html">
                        <div className="w-10 h-10 relative">
                          <img
                            src="assets/images/avatars/avatar-4.jpg"
                            alt=""
                            className="w-full h-full absolute inset-0 rounded-full"
                          />
                          <div className="absolute bottom-0 right-0 m-0.5 bg-green-500 rounded-full w-2 h-2" />
                        </div>
                      </a>
                      <a href="profile.html">
                        <div className="w-10 h-10 relative">
                          <img
                            src="assets/images/avatars/avatar-5.jpg"
                            alt=""
                            className="w-full h-full absolute inset-0 rounded-full"
                          />
                          <div className="absolute bottom-0 right-0 m-0.5 bg-green-500 rounded-full w-2 h-2" />
                        </div>
                      </a>
                      <a href="profile.html">
                        <div className="w-10 h-10 relative">
                          <img
                            src="assets/images/avatars/avatar-6.jpg"
                            alt=""
                            className="w-full h-full absolute inset-0 rounded-full"
                          />
                          <div className="absolute bottom-0 right-0 m-0.5 bg-green-500 rounded-full w-2 h-2" />
                        </div>
                      </a>
                      <a href="profile.html">
                        <div className="w-10 h-10 relative">
                          <img
                            src="assets/images/avatars/avatar-7.jpg"
                            alt=""
                            className="w-full h-full absolute inset-0 rounded-full"
                          />
                          <div className="absolute bottom-0 right-0 m-0.5 bg-green-500 rounded-full w-2 h-2" />
                        </div>
                      </a>
                    </div>
                  </div>
                  {/* Pro Members */}
                  <div className="bg-white rounded-xl shadow-sm p-5 px-6 border1 dark:bg-dark2">
                    <div className="flex justify-between text-black dark:text-white">
                      <h3 className="font-bold text-base"> Pro Members </h3>
                    </div>
                    <div
                      className="relative capitalize font-normal text-sm mt-4 mb-2"
                      tabIndex={-1}
                      uk-slider="autoplay: true;finite: true"
                    >
                      <div className="overflow-hidden uk-slider-container">
                        <ul className="-ml-2 uk-slider-items w-[calc(100%+0.5rem)]">
                          <li className="w-1/2 pr-2">
                            <a href="profile.html"></a>
                            <div className="flex flex-col items-center shadow-sm p-2 rounded-xl border1">
                              <a href="profile.html"></a>
                              <a href="profile.html">
                                <div className="relative w-16 h-16 mx-auto mt-2">
                                  <img
                                    src="assets/images/avatars/avatar-5.jpg"
                                    alt=""
                                    className="h-full object-cover rounded-full shadow w-full"
                                  />
                                </div>
                              </a>
                              <div className="mt-5 text-center w-full">
                                <a href="profile.html">
                                  
                                  <h5 className="font-semibold">
                                    
                                    Martin Gray
                                  </h5>
                                </a>
                                <div className="text-xs text-gray-400 mt-0.5 font-medium">
                                  
                                  12K Followers
                                </div>
                                <button
                                  type="button"
                                  className="bg-secondery block font-semibold mt-4 py-1.5 rounded-lg text-sm w-full border1"
                                >
                                  
                                  Follow
                                </button>
                              </div>
                            </div>
                          </li>
                          <li className="w-1/2 pr-2">
                            <div className="flex flex-col items-center shadow-sm p-2 rounded-xl border1">
                              <a href="profile.html">
                                <div className="relative w-16 h-16 mx-auto mt-2">
                                  <img
                                    src="assets/images/avatars/avatar-4.jpg"
                                    alt=""
                                    className="h-full object-cover rounded-full shadow w-full"
                                  />
                                </div>
                              </a>
                              <div className="mt-5 text-center w-full">
                                <a href="profile.html">
                                  
                                  <h5 className="font-semibold">
                                    
                                    Alexa Park
                                  </h5>
                                </a>
                                <div className="text-xs text-gray-400 mt-0.5 font-medium">
                                  
                                  12K Followers
                                </div>
                                <button
                                  type="button"
                                  className="bg-secondery block font-semibold mt-4 py-1.5 rounded-lg text-sm w-full border1"
                                >
                                  
                                  Follow
                                </button>
                              </div>
                            </div>
                          </li>
                          <li className="w-1/2 pr-2">
                            <div className="flex flex-col items-center shadow-sm p-2 rounded-xl border1">
                              <a href="profile.html">
                                <div className="relative w-16 h-16 mx-auto mt-2">
                                  <img
                                    src="assets/images/avatars/avatar-4.jpg"
                                    alt=""
                                    className="h-full object-cover rounded-full shadow w-full"
                                  />
                                </div>
                              </a>
                              <div className="mt-5 text-center w-full">
                                <a href="profile.html">
                                  
                                  <h5 className="font-semibold">
                                    
                                    James Lewis
                                  </h5>
                                </a>
                                <div className="text-xs text-gray-400 mt-0.5 font-medium">
                                  
                                  15K Followers
                                </div>
                                <button
                                  type="button"
                                  className="bg-secondery block font-semibold mt-4 py-1.5 rounded-lg text-sm w-full border1"
                                >
                                  
                                  Follow
                                </button>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <button
                          type="button"
                          className="absolute -translate-y-1/2 bg-slate-100 rounded-full top-1/2 -left-4 grid w-9 h-9 place-items-center dark:bg-dark3"
                          uk-slider-item="previous"
                        >
                          
                          <ion-icon name="chevron-back" className="text-2xl" />
                        </button>
                        <button
                          type="button"
                          className="absolute -right-4 -translate-y-1/2 bg-slate-100 rounded-full top-1/2 grid w-9 h-9 place-items-center dark:bg-dark3"
                          uk-slider-item="next"
                        >
                          
                          <ion-icon name="chevron-forward" className="text-2xl" />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Trends */}
                  <div className="bg-white rounded-xl shadow-sm p-5 px-6 border1 dark:bg-dark2">
                    <div className="flex justify-between text-black dark:text-white">
                      <h3 className="font-bold text-base"> Trends for you </h3>
                      <button type="button">
                        
                        <ion-icon name="sync-outline" className="text-xl" />
                      </button>
                    </div>
                    <div className="space-y-3.5 capitalize text-xs font-normal mt-5 mb-2 text-gray-600 dark:text-white/80">
                      <a href="#">
                        <div className="flex items-center gap-3 p">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5 -mt-2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"
                            />
                          </svg>
                          <div className="flex-1">
                            <h4 className="font-semibold text-black dark:text-white text-sm">
                              
                              artificial intelligence
                            </h4>
                            <div className="mt-0.5"> 1,245,62 post </div>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="block">
                        <div className="flex items-center gap-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5 -mt-2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"
                            />
                          </svg>
                          <div className="flex-1">
                            <h4 className="font-semibold text-black dark:text-white text-sm">
                              
                              Web developers
                            </h4>
                            <div className="mt-0.5"> 1,624 post </div>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="block">
                        <div className="flex items-center gap-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5 -mt-2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"
                            />
                          </svg>
                          <div className="flex-1">
                            <h4 className="font-semibold text-black dark:text-white text-sm">
                              
                              Ui Designers
                            </h4>
                            <div className="mt-0.5"> 820 post </div>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="block">
                        <div className="flex items-center gap-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5 -mt-2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"
                            />
                          </svg>
                          <div className="flex-1">
                            <h4 className="font-semibold text-black dark:text-white text-sm">
                              
                              affiliate marketing
                            </h4>
                            <div className="mt-0.5"> 480 post </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      {/* create status */}
      <div className="hidden lg:p-20" id="create-status" uk-modal="">
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
                  <span className="text-white mt-2">Browse to Upload image </span>
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
              <button type="button" className="button bg-blue-500 text-white px-8">
                
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

export default Home;