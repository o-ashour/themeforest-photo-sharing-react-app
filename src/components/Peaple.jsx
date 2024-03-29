// see scripts, icons, prettify, weird syntax, paths
const Peaple = () => {
  return (
    <>
        {/* main contents */}
        <main className="2xl:ml-[--w-side] xl:ml-[--w-side-md] md:ml-[--w-side-small]">
          <div className="max-w-3xl p-6 mx-auto">
            {/* heading title */}
            <div className="page__heading">
              <a href="#">
                <ion-icon name="chevron-back-outline" /> Back
              </a>
              <h1> Peaples</h1>
            </div>
            {/* tabs */}
            <nav
              className="border-b dark:border-slate-700"
              data-uk-sticky="cls-active: bg-slate-100/60 z-30 backdrop-blur-lg px-4 ;  animation: uk-animation-slide-top"
            >
              <ul
                uk-tab=""
                className="flex gap-5 text-sm text-center text-gray-600 capitalize font-semibold -mb-px dark:text-white/80"
                data-uk-switcher="connect: #ttabs ; animation: uk-animation-slide-right-medium, uk-animation-slide-left-medium"
              >
                <li>
                  
                  <a
                    href="#"
                    className="inline-block py-5 border-b-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white"
                  >
                    
                    followers 2,640
                  </a>
                </li>
                <li>
                  
                  <a
                    href="#"
                    className="inline-block py-5 border-b-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white"
                  >
                    
                    following 1,420
                  </a>
                </li>
                <li>
                  
                  <a
                    href="#"
                    className="inline-block py-5 border-b-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white"
                  >
                    
                    Suggestions
                  </a>
                </li>
              </ul>
            </nav>
            <div className="uk-switcher mt-10" id="ttabs">
              {/* list  One */}
              <div>
                <div
                  className="grid sm:grid-cols-2 gap-2 mt-5 mb-2 text-xs font-normal text-gray-500 dark:text-white/80"
                  data-uk-scrollspy="target: > div; cls: uk-animation-scale-up; delay: 100"
                >
                  <div className="bg-white flex gap-4 items-center flex-wrap justify-between p-5 rounded-lg shadow-sm border1 dark:bg-dark2">
                    <a href="profile.html">
                      <img
                        src="assets/images/avatars/avatar-1.jpg"
                        alt=""
                        className="rounded-full lg:w-16 lg:h-16 w-10 h-10"
                      />
                    </a>
                    <div className="flex-1">
                      <a href="profile.html">
                        <h4 className="font-semibold text-sm text-black dark:text-white">
                          
                          Jesse Steeve
                        </h4>
                      </a>
                      <div className="mt-0.5"> 16K following </div>
                    </div>
                    <button
                      type="button"
                      className="button bg-secondery rounded-full py-1.5 font-semibold"
                    >
                      Fallow
                    </button>
                  </div>
                  <div className="bg-white flex gap-4 items-center flex-wrap justify-between p-5 rounded-lg shadow-sm border1 dark:bg-dark2">
                    <a href="profile.html">
                      <img
                        src="assets/images/avatars/avatar-2.jpg"
                        alt=""
                        className="rounded-full lg:w-16 lg:h-16 w-10 h-10"
                      />
                    </a>
                    <div className="flex-1">
                      <a href="profile.html">
                        <h4 className="font-semibold text-sm text-black dark:text-white">
                          
                          John Michael
                        </h4>
                      </a>
                      <div className="mt-0.5"> 16K following </div>
                    </div>
                    <button
                      type="button"
                      className="button bg-secondery rounded-full py-1.5 font-semibold"
                    >
                      Fallow
                    </button>
                  </div>
                  <div className="bg-white flex gap-4 items-center flex-wrap justify-between p-5 rounded-lg shadow-sm border1 dark:bg-dark2">
                    <a href="profile.html">
                      <img
                        src="assets/images/avatars/avatar-7.jpg"
                        alt=""
                        className="rounded-full lg:w-16 lg:h-16 w-10 h-10"
                      />
                    </a>
                    <div className="flex-1">
                      <a href="profile.html">
                        <h4 className="font-semibold text-sm text-black dark:text-white">
                          
                          Alexa stella
                        </h4>
                      </a>
                      <div className="mt-0.5"> 16K following </div>
                    </div>
                    <button
                      type="button"
                      className="button bg-secondery rounded-full py-1.5 font-semibold"
                    >
                      Fallow
                    </button>
                  </div>
                  <div className="bg-white flex gap-4 items-center flex-wrap justify-between p-5 rounded-lg shadow-sm border1 dark:bg-dark2">
                    <a href="profile.html">
                      <img
                        src="assets/images/avatars/avatar-3.jpg"
                        alt=""
                        className="rounded-full lg:w-16 lg:h-16 w-10 h-10"
                      />
                    </a>
                    <div className="flex-1">
                      <a href="profile.html">
                        <h4 className="font-semibold text-sm text-black dark:text-white">
                          
                          Monroe Parker
                        </h4>
                      </a>
                      <div className="mt-0.5"> 16K following </div>
                    </div>
                    <button
                      type="button"
                      className="button bg-secondery rounded-full py-1.5 font-semibold"
                    >
                      Fallow
                    </button>
                  </div>
                  <div className="bg-white flex gap-4 items-center flex-wrap justify-between p-5 rounded-lg shadow-sm border1 dark:bg-dark2">
                    <a href="profile.html">
                      <img
                        src="assets/images/avatars/avatar-5.jpg"
                        alt=""
                        className="rounded-full lg:w-16 lg:h-16 w-10 h-10"
                      />
                    </a>
                    <div className="flex-1">
                      <a href="profile.html">
                        <h4 className="font-semibold text-sm text-black dark:text-white">
                          
                          Johnson smith
                        </h4>
                      </a>
                      <div className="mt-0.5"> 16K following </div>
                    </div>
                    <button
                      type="button"
                      className="button bg-secondery rounded-full py-1.5 font-semibold"
                    >
                      Fallow
                    </button>
                  </div>
                  <div className="bg-white flex gap-4 items-center flex-wrap justify-between p-5 rounded-lg shadow-sm border1 dark:bg-dark2">
                    <a href="profile.html">
                      <img
                        src="assets/images/avatars/avatar-6.jpg"
                        alt=""
                        className="rounded-full lg:w-16 lg:h-16 w-10 h-10"
                      />
                    </a>
                    <div className="flex-1">
                      <a href="profile.html">
                        <h4 className="font-semibold text-sm text-black dark:text-white">
                          
                          Martin Gray
                        </h4>
                      </a>
                      <div className="mt-0.5"> 16K following </div>
                    </div>
                    <button
                      type="button"
                      className="button bg-secondery rounded-full py-1.5 font-semibold"
                    >
                      Fallow
                    </button>
                  </div>
                  <div className="bg-white flex gap-4 items-center flex-wrap justify-between p-5 rounded-lg shadow-sm border1 dark:bg-dark2">
                    <a href="profile.html">
                      <img
                        src="assets/images/avatars/avatar-2.jpg"
                        alt=""
                        className="rounded-full lg:w-16 lg:h-16 w-10 h-10"
                      />
                    </a>
                    <div className="flex-1">
                      <a href="profile.html">
                        <h4 className="font-semibold text-sm text-black dark:text-white">
                          
                          John Michael
                        </h4>
                      </a>
                      <div className="mt-0.5"> 16K following </div>
                    </div>
                    <button
                      type="button"
                      className="button bg-secondery rounded-full py-1.5 font-semibold"
                    >
                      Fallow
                    </button>
                  </div>
                  <div className="bg-white flex gap-4 items-center flex-wrap justify-between p-5 rounded-lg shadow-sm border1 dark:bg-dark2">
                    <a href="profile.html">
                      <img
                        src="assets/images/avatars/avatar-7.jpg"
                        alt=""
                        className="rounded-full lg:w-16 lg:h-16 w-10 h-10"
                      />
                    </a>
                    <div className="flex-1">
                      <a href="profile.html">
                        <h4 className="font-semibold text-sm text-black dark:text-white">
                          
                          Alexa stella
                        </h4>
                      </a>
                      <div className="mt-0.5"> 16K following </div>
                    </div>
                    <button
                      type="button"
                      className="button bg-secondery rounded-full py-1.5 font-semibold"
                    >
                      Fallow
                    </button>
                  </div>
                  <div className="bg-white flex gap-4 items-center flex-wrap justify-between p-5 rounded-lg shadow-sm border1 dark:bg-dark2">
                    <a href="profile.html">
                      <img
                        src="assets/images/avatars/avatar-3.jpg"
                        alt=""
                        className="rounded-full lg:w-16 lg:h-16 w-10 h-10"
                      />
                    </a>
                    <div className="flex-1">
                      <a href="profile.html">
                        <h4 className="font-semibold text-sm text-black dark:text-white">
                          
                          Monroe Parker
                        </h4>
                      </a>
                      <div className="mt-0.5"> 16K following </div>
                    </div>
                    <button
                      type="button"
                      className="button bg-secondery rounded-full py-1.5 font-semibold"
                    >
                      Fallow
                    </button>
                  </div>
                  <div className="bg-white flex gap-4 items-center flex-wrap justify-between p-5 rounded-lg shadow-sm border1 dark:bg-dark2">
                    <a href="profile.html">
                      <img
                        src="assets/images/avatars/avatar-5.jpg"
                        alt=""
                        className="rounded-full lg:w-16 lg:h-16 w-10 h-10"
                      />
                    </a>
                    <div className="flex-1">
                      <a href="profile.html">
                        <h4 className="font-semibold text-sm text-black dark:text-white">
                          
                          Johnson smith
                        </h4>
                      </a>
                      <div className="mt-0.5"> 16K following </div>
                    </div>
                    <button
                      type="button"
                      className="button bg-secondery rounded-full py-1.5 font-semibold"
                    >
                      Fallow
                    </button>
                  </div>
                  <div className="bg-white flex gap-4 items-center flex-wrap justify-between p-5 rounded-lg shadow-sm border1 dark:bg-dark2">
                    <a href="profile.html">
                      <img
                        src="assets/images/avatars/avatar-6.jpg"
                        alt=""
                        className="rounded-full lg:w-16 lg:h-16 w-10 h-10"
                      />
                    </a>
                    <div className="flex-1">
                      <a href="profile.html">
                        <h4 className="font-semibold text-sm text-black dark:text-white">
                          
                          Martin Gray
                        </h4>
                      </a>
                      <div className="mt-0.5"> 16K following </div>
                    </div>
                    <button
                      type="button"
                      className="button bg-secondery rounded-full py-1.5 font-semibold"
                    >
                      Fallow
                    </button>
                  </div>
                  <div className="bg-white flex gap-4 items-center flex-wrap justify-between p-5 rounded-lg shadow-sm border1 dark:bg-dark2">
                    <a href="profile.html">
                      <img
                        src="assets/images/avatars/avatar-1.jpg"
                        alt=""
                        className="rounded-full lg:w-16 lg:h-16 w-10 h-10"
                      />
                    </a>
                    <div className="flex-1">
                      <a href="profile.html">
                        <h4 className="font-semibold text-sm text-black dark:text-white">
                          
                          Jesse Steeve
                        </h4>
                      </a>
                      <div className="mt-0.5"> 16K following </div>
                    </div>
                    <button
                      type="button"
                      className="button bg-secondery rounded-full py-1.5 font-semibold"
                    >
                      Fallow
                    </button>
                  </div>
                </div>
                <div className="flex justify-center my-10">
                  <button
                    type="button"
                    className="bg-white py-2 px-5 rounded-full shadow-md font-semibold text-sm dark:bg-dark2"
                  >
                    Load more...
                  </button>
                </div>
              </div>
              {/* list Two */}
              <div>
                <div
                  className="space-y-6 text-sm font-normal text-gray-500"
                  data-uk-scrollspy="target: > div; cls: uk-animation-slide-bottom-small; delay: 100 "
                >
                  <div className="flex items-center justify-between gap-4">
                    <a href="profile.html">
                      <div className="relative w-12 h-12">
                        <img
                          src="assets/images/avatars/avatar-3.jpg"
                          className="object-cover w-full h-full rounded-full"
                          alt=""
                        />
                      </div>
                    </a>
                    <div className="flex-1">
                      <a href="profile.html">
                        
                        <h4 className="text-base font-medium text-black dark:text-white">
                          
                          Monroe Parker
                        </h4>
                      </a>
                      <p className="mt-0.5"> 15k following </p>
                    </div>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        className="button bg-primary-soft text-primary border border-primary/10 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                      >
                        
                        <span className="max-md:hidden">Following</span>
                      </button>
                      <button
                        type="button"
                        className="text-white bg-primary button"
                      >
                        
                        <span className="max-md:hidden"> Message </span>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <a href="profile.html">
                      <div className="relative w-12 h-12">
                        <img
                          src="assets/images/avatars/avatar-2.jpg"
                          className="object-cover w-full h-full rounded-full"
                          alt=""
                        />
                      </div>
                    </a>
                    <div className="flex-1">
                      <a href="profile.html">
                        
                        <h4 className="text-base font-medium text-black dark:text-white">
                          
                          Jesse Steeve
                        </h4>
                      </a>
                      <p className="mt-0.5"> 15k following </p>
                    </div>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        className="button bg-primary-soft text-primary border border-primary/10 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                      >
                        
                        <span className="max-md:hidden">Following</span>
                      </button>
                      <button
                        type="button"
                        className="text-white bg-primary button"
                      >
                        
                        <span className="max-md:hidden"> Message </span>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <a href="profile.html">
                      <div className="relative w-12 h-12">
                        <img
                          src="assets/images/avatars/avatar-5.jpg"
                          className="object-cover w-full h-full rounded-full"
                          alt=""
                        />
                      </div>
                    </a>
                    <div className="flex-1">
                      <a href="profile.html">
                        
                        <h4 className="text-base font-medium text-black dark:text-white">
                          
                          Alexa stella
                        </h4>
                      </a>
                      <p className="mt-0.5"> 15k following </p>
                    </div>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        className="button bg-primary-soft text-primary border border-primary/10 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                      >
                        
                        <span className="max-md:hidden">Following</span>
                      </button>
                      <button
                        type="button"
                        className="text-white bg-primary button"
                      >
                        
                        <span className="max-md:hidden"> Message </span>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <a href="profile.html">
                      <div className="relative w-12 h-12">
                        <img
                          src="assets/images/avatars/avatar-6.jpg"
                          className="object-cover w-full h-full rounded-full"
                          alt=""
                        />
                      </div>
                    </a>
                    <div className="flex-1">
                      <a href="profile.html">
                        
                        <h4 className="text-base font-medium text-black dark:text-white">
                          
                          John Michael
                        </h4>
                      </a>
                      <p className="mt-0.5"> 15k following </p>
                    </div>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        className="button bg-primary-soft text-primary border border-primary/10 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                      >
                        
                        <span className="max-md:hidden">Following</span>
                      </button>
                      <button
                        type="button"
                        className="text-white bg-primary button"
                      >
                        
                        <span className="max-md:hidden"> Message </span>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <a href="profile.html">
                      <div className="relative w-12 h-12">
                        <img
                          src="assets/images/avatars/avatar-7.jpg"
                          className="object-cover w-full h-full rounded-full"
                          alt=""
                        />
                      </div>
                    </a>
                    <div className="flex-1">
                      <a href="profile.html">
                        
                        <h4 className="text-base font-medium text-black dark:text-white">
                          
                          Alexa stella
                        </h4>
                      </a>
                      <p className="mt-0.5"> 15k following </p>
                    </div>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        className="button bg-primary-soft text-primary border border-primary/10 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                      >
                        
                        <span className="max-md:hidden">Following</span>
                      </button>
                      <button
                        type="button"
                        className="text-white bg-primary button"
                      >
                        
                        <span className="max-md:hidden"> Message </span>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <a href="profile.html">
                      <div className="relative w-12 h-12">
                        <img
                          src="assets/images/avatars/avatar-4.jpg"
                          className="object-cover w-full h-full rounded-full"
                          alt=""
                        />
                      </div>
                    </a>
                    <div className="flex-1">
                      <a href="profile.html">
                        
                        <h4 className="text-base font-medium text-black dark:text-white">
                          
                          James Lewis
                        </h4>
                      </a>
                      <p className="mt-0.5"> 15k following </p>
                    </div>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        className="button bg-primary-soft text-primary border border-primary/10 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                      >
                        
                        <span className="max-md:hidden">Following</span>
                      </button>
                      <button
                        type="button"
                        className="text-white bg-primary button"
                      >
                        
                        <span className="max-md:hidden"> Message </span>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <a href="profile.html">
                      <div className="relative w-12 h-12">
                        <img
                          src="assets/images/avatars/avatar-3.jpg"
                          className="object-cover w-full h-full rounded-full"
                          alt=""
                        />
                      </div>
                    </a>
                    <div className="flex-1">
                      <a href="profile.html">
                        
                        <h4 className="text-base font-medium text-black dark:text-white">
                          
                          Monroe Parker
                        </h4>
                      </a>
                      <p className="mt-0.5"> 15k following </p>
                    </div>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        className="button bg-primary-soft text-primary border border-primary/10 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                      >
                        
                        <span className="max-md:hidden">Following</span>
                      </button>
                      <button
                        type="button"
                        className="text-white bg-primary button"
                      >
                        
                        <span className="max-md:hidden"> Message </span>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <a href="profile.html">
                      <div className="relative w-12 h-12">
                        <img
                          src="assets/images/avatars/avatar-2.jpg"
                          className="object-cover w-full h-full rounded-full"
                          alt=""
                        />
                      </div>
                    </a>
                    <div className="flex-1">
                      <a href="profile.html">
                        
                        <h4 className="text-base font-medium text-black dark:text-white">
                          
                          Jesse Steeve
                        </h4>
                      </a>
                      <p className="mt-0.5"> 15k following </p>
                    </div>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        className="button bg-primary-soft text-primary border border-primary/10 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                      >
                        
                        <span className="max-md:hidden">Following</span>
                      </button>
                      <button
                        type="button"
                        className="text-white bg-primary button"
                      >
                        
                        <span className="max-md:hidden"> Message </span>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <a href="profile.html">
                      <div className="relative w-12 h-12">
                        <img
                          src="assets/images/avatars/avatar-5.jpg"
                          className="object-cover w-full h-full rounded-full"
                          alt=""
                        />
                      </div>
                    </a>
                    <div className="flex-1">
                      <a href="profile.html">
                        
                        <h4 className="text-base font-medium text-black dark:text-white">
                          
                          Alexa stella
                        </h4>
                      </a>
                      <p className="mt-0.5"> 15k following </p>
                    </div>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        className="button bg-primary-soft text-primary border border-primary/10 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                      >
                        
                        <span className="max-md:hidden">Following</span>
                      </button>
                      <button
                        type="button"
                        className="text-white bg-primary button"
                      >
                        
                        <span className="max-md:hidden"> Message </span>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <a href="profile.html">
                      <div className="relative w-12 h-12">
                        <img
                          src="assets/images/avatars/avatar-6.jpg"
                          className="object-cover w-full h-full rounded-full"
                          alt=""
                        />
                      </div>
                    </a>
                    <div className="flex-1">
                      <a href="profile.html">
                        
                        <h4 className="text-base font-medium text-black dark:text-white">
                          
                          John Michael
                        </h4>
                      </a>
                      <p className="mt-0.5"> 15k following </p>
                    </div>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        className="button bg-primary-soft text-primary border border-primary/10 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                      >
                        
                        <span className="max-md:hidden">Following</span>
                      </button>
                      <button
                        type="button"
                        className="text-white bg-primary button"
                      >
                        
                        <span className="max-md:hidden"> Message </span>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <a href="profile.html">
                      <div className="relative w-12 h-12">
                        <img
                          src="assets/images/avatars/avatar-7.jpg"
                          className="object-cover w-full h-full rounded-full"
                          alt=""
                        />
                      </div>
                    </a>
                    <div className="flex-1">
                      <a href="profile.html">
                        
                        <h4 className="text-base font-medium text-black dark:text-white">
                          
                          Alexa stella
                        </h4>
                      </a>
                      <p className="mt-0.5"> 15k following </p>
                    </div>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        className="button bg-primary-soft text-primary border border-primary/10 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                      >
                        
                        <span className="max-md:hidden">Following</span>
                      </button>
                      <button
                        type="button"
                        className="text-white bg-primary button"
                      >
                        
                        <span className="max-md:hidden"> Message </span>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <a href="profile.html">
                      <div className="relative w-12 h-12">
                        <img
                          src="assets/images/avatars/avatar-4.jpg"
                          className="object-cover w-full h-full rounded-full"
                          alt=""
                        />
                      </div>
                    </a>
                    <div className="flex-1">
                      <a href="profile.html">
                        
                        <h4 className="text-base font-medium text-black dark:text-white">
                          
                          James Lewis
                        </h4>
                      </a>
                      <p className="mt-0.5"> 15k following </p>
                    </div>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        className="button bg-primary-soft text-primary border border-primary/10 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                      >
                        
                        <span className="max-md:hidden">Following</span>
                      </button>
                      <button
                        type="button"
                        className="text-white bg-primary button"
                      >
                        
                        <span className="max-md:hidden"> Message </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center my-10">
                  <button
                    type="button"
                    className="bg-white py-2 px-5 rounded-full shadow-md font-semibold text-sm dark:bg-dark2"
                  >
                    Load more...
                  </button>
                </div>
              </div>
              {/* list Three */}
              <div>
                <div
                  className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 text-xs font-normal text-gray-500 dark:text-white/80"
                  data-uk-scrollspy="target: > div; cls: uk-animation-scale-up; delay: 100"
                >
                  <div className="flex flex-col items-center shadow-sm p-2 rounded-xl bg-white border1 dark:bg-dark2">
                    <a href="profile.html">
                      <div className="relative w-20 h-20 mx-auto mt-3">
                        <img
                          src="assets/images/avatars/avatar-5.jpg"
                          alt=""
                          className="h-full object-cover rounded-full shadow w-full"
                        />
                      </div>
                    </a>
                    <div className="mt-5 text-center w-full">
                      <a href="profile.html">
                        
                        <h4 className="font-semibold text-sm text-black dark:text-white">
                          
                          Jesse Steeve
                        </h4>
                      </a>
                      <div className="mt-1"> 15K Followers</div>
                      <button
                        type="button"
                        className="block font-semibold mt-4 py-1.5 rounded-lg text-[13px] w-full bg-slate-100/70 dark:bg-slate-700"
                      >
                        
                        Follow
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center shadow-sm p-2 rounded-xl bg-white border1 dark:bg-dark2">
                    <a href="profile.html">
                      <div className="relative w-20 h-20 mx-auto mt-3">
                        <img
                          src="assets/images/avatars/avatar-2.jpg"
                          alt=""
                          className="h-full object-cover rounded-full shadow w-full"
                        />
                      </div>
                    </a>
                    <div className="mt-5 text-center w-full">
                      <a href="profile.html">
                        
                        <h4 className="font-semibold text-sm text-black dark:text-white">
                          
                          John Michael
                        </h4>
                      </a>
                      <div className="mt-1"> 15K Followers</div>
                      <button
                        type="button"
                        className="block font-semibold mt-4 py-1.5 rounded-lg text-[13px] w-full bg-slate-100/70 dark:bg-slate-700"
                      >
                        
                        Follow
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center shadow-sm p-2 rounded-xl bg-white border1 dark:bg-dark2">
                    <a href="profile.html">
                      <div className="relative w-20 h-20 mx-auto mt-3">
                        <img
                          src="assets/images/avatars/avatar-7.jpg"
                          alt=""
                          className="h-full object-cover rounded-full shadow w-full"
                        />
                      </div>
                    </a>
                    <div className="mt-5 text-center w-full">
                      <a href="profile.html">
                        
                        <h4 className="font-semibold text-sm text-black dark:text-white">
                          
                          Martin Gray
                        </h4>
                      </a>
                      <div className="mt-1"> 15K Followers</div>
                      <button
                        type="button"
                        className="block font-semibold mt-4 py-1.5 rounded-lg text-[13px] w-full bg-slate-100/70 dark:bg-slate-700"
                      >
                        
                        Follow
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center shadow-sm p-2 rounded-xl bg-white border1 dark:bg-dark2">
                    <a href="profile.html">
                      <div className="relative w-20 h-20 mx-auto mt-3">
                        <img
                          src="assets/images/avatars/avatar-3.jpg"
                          alt=""
                          className="h-full object-cover rounded-full shadow w-full"
                        />
                      </div>
                    </a>
                    <div className="mt-5 text-center w-full">
                      <a href="profile.html">
                        
                        <h4 className="font-semibold text-sm text-black dark:text-white">
                          
                          Monroe Parker
                        </h4>
                      </a>
                      <div className="mt-1"> 15K Followers</div>
                      <button
                        type="button"
                        className="block font-semibold mt-4 py-1.5 rounded-lg text-[13px] w-full bg-slate-100/70 dark:bg-slate-700"
                      >
                        
                        Follow
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center shadow-sm p-2 rounded-xl bg-white border1 dark:bg-dark2">
                    <a href="profile.html">
                      <div className="relative w-20 h-20 mx-auto mt-3">
                        <img
                          src="assets/images/avatars/avatar-6.jpg"
                          alt=""
                          className="h-full object-cover rounded-full shadow w-full"
                        />
                      </div>
                    </a>
                    <div className="mt-5 text-center w-full">
                      <a href="profile.html">
                        
                        <h4 className="font-semibold text-sm text-black dark:text-white">
                          
                          James Lewis
                        </h4>
                      </a>
                      <div className="mt-1"> 15K Followers</div>
                      <button
                        type="button"
                        className="block font-semibold mt-4 py-1.5 rounded-lg text-[13px] w-full bg-slate-100/70 dark:bg-slate-700"
                      >
                        
                        Follow
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center shadow-sm p-2 rounded-xl bg-white border1 dark:bg-dark2">
                    <a href="profile.html">
                      <div className="relative w-20 h-20 mx-auto mt-3">
                        <img
                          src="assets/images/avatars/avatar-7.jpg"
                          alt=""
                          className="h-full object-cover rounded-full shadow w-full"
                        />
                      </div>
                    </a>
                    <div className="mt-5 text-center w-full">
                      <a href="profile.html">
                        
                        <h4 className="font-semibold text-sm text-black dark:text-white">
                          
                          Alexa stella
                        </h4>
                      </a>
                      <div className="mt-1"> 15K Followers</div>
                      <button
                        type="button"
                        className="block font-semibold mt-4 py-1.5 rounded-lg text-[13px] w-full bg-slate-100/70 dark:bg-slate-700"
                      >
                        
                        Follow
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center shadow-sm p-2 rounded-xl bg-white border1 dark:bg-dark2">
                    <a href="profile.html">
                      <div className="relative w-20 h-20 mx-auto mt-3">
                        <img
                          src="assets/images/avatars/avatar-5.jpg"
                          alt=""
                          className="h-full object-cover rounded-full shadow w-full"
                        />
                      </div>
                    </a>
                    <div className="mt-5 text-center w-full">
                      <a href="profile.html">
                        
                        <h4 className="font-semibold text-sm text-black dark:text-white">
                          
                          Jesse Steeve
                        </h4>
                      </a>
                      <div className="mt-1"> 15K Followers</div>
                      <button
                        type="button"
                        className="block font-semibold mt-4 py-1.5 rounded-lg text-[13px] w-full bg-slate-100/70 dark:bg-slate-700"
                      >
                        
                        Follow
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center shadow-sm p-2 rounded-xl bg-white border1 dark:bg-dark2">
                    <a href="profile.html">
                      <div className="relative w-20 h-20 mx-auto mt-3">
                        <img
                          src="assets/images/avatars/avatar-2.jpg"
                          alt=""
                          className="h-full object-cover rounded-full shadow w-full"
                        />
                      </div>
                    </a>
                    <div className="mt-5 text-center w-full">
                      <a href="profile.html">
                        
                        <h4 className="font-semibold text-sm text-black dark:text-white">
                          
                          John Michael
                        </h4>
                      </a>
                      <div className="mt-1"> 15K Followers</div>
                      <button
                        type="button"
                        className="block font-semibold mt-4 py-1.5 rounded-lg text-[13px] w-full bg-slate-100/70 dark:bg-slate-700"
                      >
                        
                        Follow
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center shadow-sm p-2 rounded-xl bg-white border1 dark:bg-dark2">
                    <a href="profile.html">
                      <div className="relative w-20 h-20 mx-auto mt-3">
                        <img
                          src="assets/images/avatars/avatar-7.jpg"
                          alt=""
                          className="h-full object-cover rounded-full shadow w-full"
                        />
                      </div>
                    </a>
                    <div className="mt-5 text-center w-full">
                      <a href="profile.html">
                        
                        <h4 className="font-semibold text-sm text-black dark:text-white">
                          
                          Martin Gray
                        </h4>
                      </a>
                      <div className="mt-1"> 15K Followers</div>
                      <button
                        type="button"
                        className="block font-semibold mt-4 py-1.5 rounded-lg text-[13px] w-full bg-slate-100/70 dark:bg-slate-700"
                      >
                        
                        Follow
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center shadow-sm p-2 rounded-xl bg-white border1 dark:bg-dark2">
                    <a href="profile.html">
                      <div className="relative w-20 h-20 mx-auto mt-3">
                        <img
                          src="assets/images/avatars/avatar-3.jpg"
                          alt=""
                          className="h-full object-cover rounded-full shadow w-full"
                        />
                      </div>
                    </a>
                    <div className="mt-5 text-center w-full">
                      <a href="profile.html">
                        
                        <h4 className="font-semibold text-sm text-black dark:text-white">
                          
                          Monroe Parker
                        </h4>
                      </a>
                      <div className="mt-1"> 15K Followers</div>
                      <button
                        type="button"
                        className="block font-semibold mt-4 py-1.5 rounded-lg text-[13px] w-full bg-slate-100/70 dark:bg-slate-700"
                      >
                        
                        Follow
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center shadow-sm p-2 rounded-xl bg-white border1 dark:bg-dark2">
                    <a href="profile.html">
                      <div className="relative w-20 h-20 mx-auto mt-3">
                        <img
                          src="assets/images/avatars/avatar-6.jpg"
                          alt=""
                          className="h-full object-cover rounded-full shadow w-full"
                        />
                      </div>
                    </a>
                    <div className="mt-5 text-center w-full">
                      <a href="profile.html">
                        
                        <h4 className="font-semibold text-sm text-black dark:text-white">
                          
                          James Lewis
                        </h4>
                      </a>
                      <div className="mt-1"> 15K Followers</div>
                      <button
                        type="button"
                        className="block font-semibold mt-4 py-1.5 rounded-lg text-[13px] w-full bg-slate-100/70 dark:bg-slate-700"
                      >
                        
                        Follow
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center shadow-sm p-2 rounded-xl bg-white border1 dark:bg-dark2">
                    <a href="profile.html">
                      <div className="relative w-20 h-20 mx-auto mt-3">
                        <img
                          src="assets/images/avatars/avatar-7.jpg"
                          alt=""
                          className="h-full object-cover rounded-full shadow w-full"
                        />
                      </div>
                    </a>
                    <div className="mt-5 text-center w-full">
                      <a href="profile.html">
                        
                        <h4 className="font-semibold text-sm text-black dark:text-white">
                          
                          Alexa stella
                        </h4>
                      </a>
                      <div className="mt-1"> 15K Followers</div>
                      <button
                        type="button"
                        className="block font-semibold mt-4 py-1.5 rounded-lg text-[13px] w-full bg-slate-100/70 dark:bg-slate-700"
                      >
                        
                        Follow
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center my-10">
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
      {/* plan__model */}
      <div className="plan__model w-screen h-screen fixed inset-0 flex justify-center items-center overflow-hidden z-50 bg-white/40 backdrop-blur-sm dark:bg-black/40">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl relative dark:bg-dark2">
          <div className="pt-6">
            <div className="text-center">
              <h1 className="lg:text-3xl lg:font-bold md:text-2xl text-xl bg-gradient-to-tr from-orange-500 to-yellow-500 bg-clip-text text-transparent leading-relaxed">
                
                With Instello Premium
              </h1>
              <p className="text-sm text-gray-500 mt-2">
                
                Exclusive features and benefits on Instello are accessible to you.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-5 max-w-2xl mx-auto mt-10">
              <label htmlFor="monthly">
                <input
                  type="radio"
                  name="radio"
                  id="monthly"
                  className="peer appearance-none hidden"
                  defaultChecked=""
                />
                <div className="relative p-4 bg-slate-100 shadow-sm rounded-xl cursor-pointer peer-checked:[&_.active]:block dark:bg-dark3">
                  <div className="mb-4 text-sm"> Monthly </div>
                  <h2 className="text-3xl font-bold text-black relative px-2 dark:text-white">
                    
                    <span className="text-xs absolute top-1.5 -left-1 font-normal text-gray-400">
                      $
                    </span>
                    12.99
                  </h2>
                  <ion-icon
                    name="checkmark-circle"
                    className="hidden active absolute top-0 right-0 m-4 text-2xl text-blue-600 uk-animation-scale-up"
                  />
                </div>
              </label>
              <label htmlFor="yearly">
                <input
                  type="radio"
                  name="radio"
                  id="yearly"
                  className="peer appearance-none hidden"
                />
                <div className="relative p-4 bg-slate-100 shadow-sm rounded-xl cursor-pointer peer-checked:[&_.active]:block dark:bg-dark3">
                  <div className="mb-4 text-sm"> Yearly </div>
                  <h2 className="text-3xl font-bold text-black relative px-2 dark:text-white">
                    
                    <span className="text-xs absolute top-1.5 -left-1 font-normal text-gray-400">
                      $
                    </span>
                    32.99
                  </h2>
                  <ion-icon
                    name="checkmark-circle"
                    className="hidden active absolute top-0 right-0 m-4 text-2xl text-blue-600 uk-animation-scale-up"
                  />
                </div>
              </label>
              <label htmlFor="forever">
                <input
                  type="radio"
                  name="radio"
                  id="forever"
                  className="peer appearance-none hidden"
                />
                <div className="relative p-4 bg-slate-100 shadow-sm rounded-xl cursor-pointer peer-checked:[&_.active]:block dark:bg-dark3">
                  <div className="mb-4 text-sm"> Forever </div>
                  <h2 className="text-3xl font-bold text-black relative px-2 dark:text-white">
                    
                    <span className="text-xs absolute top-1.5 -left-1 font-normal text-gray-400">
                      $
                    </span>
                    92.99
                  </h2>
                  <ion-icon
                    name="checkmark-circle"
                    className="hidden active absolute top-0 right-0 m-4 text-2xl text-blue-600 uk-animation-scale-up"
                  />
                </div>
              </label>
            </div>
            <div className="lg:p-8 p-4 shadow-sm mt-6">
              <h1 className="text-base font-medium text-black dark:text-white">
                Why Choose Premium Membership
              </h1>
              <div className=" text-sm text-gray-500 grid grid-cols-2 gap-10 mt-8 dark:text-white/80">
                <div className="flex gap-5 max-md:items-center">
                  <ion-icon
                    name="camera"
                    className="flex shrink-0 p-2 text-2xl rounded-full bg-sky-100 text-sky-500 dark:bg-sky-500/20"
                  />
                  <div>
                    <h5 className="text-black text-base font-medium dark:text-white">
                      
                      Stories
                    </h5>
                    <p className="mt-1 max-md:hidden">
                      
                      Post moments your everyday life that disappear after 24 hours
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 max-md:items-center">
                  <ion-icon
                    name="image"
                    className="flex shrink-0 p-2 text-2xl rounded-full bg-teal-100 text-teal-500 dark:bg-teal-500/20"
                  />
                  <div>
                    <h5 className="text-black text-base font-medium dark:text-white">
                      
                      Images
                    </h5>
                    <p className="mt-1 max-md:hidden">
                      
                      You can upload Unlimited photes and share with your friends
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 max-md:items-center">
                  <ion-icon
                    name="chatbox"
                    className="flex shrink-0 p-2 text-2xl rounded-full bg-orange-100 text-orange-500 dark:bg-orange-500/20"
                  />
                  <div>
                    <h5 className="text-black text-base font-medium dark:text-white">
                      
                      Messages
                    </h5>
                    <p className="mt-1 max-md:hidden">
                      
                      Send photos, videos, and messages privately to your friends or
                      groups
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 max-md:items-center">
                  <ion-icon
                    name="videocam"
                    className="flex shrink-0 p-2 text-2xl rounded-full bg-pink-100 text-pink-500 dark:bg-pink-500/20"
                  />
                  <div>
                    <h5 className="text-black text-base font-medium dark:text-white">
                      
                      Shorts
                    </h5>
                    <p className="mt-1 max-md:hidden">
                      
                      Create and share short, entertaining videos with music,
                      filters, and effects
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 max-md:items-center">
                  <ion-icon
                    name="compass"
                    className="flex shrink-0 p-2 text-2xl rounded-full bg-purple-100 text-purple-500 dark:bg-purple-500/20"
                  />
                  <div>
                    <h5 className="text-black text-base font-medium dark:text-white">
                      
                      Explore
                    </h5>
                    <p className="mt-1 max-md:hidden">
                      
                      Discover content and creators based on their interests
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 max-md:items-center">
                  <ion-icon
                    name="bookmark"
                    className="flex shrink-0 p-2 text-2xl rounded-full bg-green-100 text-green-500 dark:bg-green-500/20"
                  />
                  <div>
                    <h5 className="text-black text-base font-medium dark:text-white">
                      
                      Bookmark
                    </h5>
                    <p className="mt-1 max-md:hidden">
                      
                      Create collections of saved posts based on themes, topics, or
                      categories.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 max-md:items-center">
                  <ion-icon
                    name="shield"
                    className="flex shrink-0 p-2 text-2xl rounded-full bg-red-100 text-red-500 dark:bg-red-500/20"
                  />
                  <div>
                    <h5 className="text-black text-base font-medium dark:text-white">
                      
                      Privacy
                    </h5>
                    <p className="mt-1 max-md:hidden">
                      
                      Make your account visible only to people who follow you
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 max-md:items-center">
                  <ion-icon
                    name="cart"
                    className="flex shrink-0 p-2 text-2xl rounded-full bg-sky-100 text-sky-500 dark:bg-sky-500/20"
                  />
                  <div>
                    <h5 className="text-black text-base font-medium dark:text-white">
                      
                      Shopping
                    </h5>
                    <p className="mt-1 max-md:hidden">
                      
                      Browse and buy products from your favorite brands and creators
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-10 flex justify-between">
              <p className="max-w-xl mx-auto text-center text-xs text-gray-500 dark:text-white/80">
                
                Instello Premium is the ultimate way to enhance your Instello
                experience and connect with your passions. Try it free for 30 days
                and cancel anytime.
              </p>
            </div>
          </div>
          {/* close button */}
          <button
            type="button"
            className="bg-slate-100 rounded-full p-1 absolute top-0 right-0 m-6 shrink-0 flex dark:bg-dark3"
            data-uk-toggle="target: .plan__model ; cls: hidden opacity-0"
          >
            <ion-icon className="text-2xl" name="close" />
          </button>
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

export default Peaple;