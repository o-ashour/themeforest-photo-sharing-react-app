import './css/style.css';
import './css/tailwind.css';

function Index() {
  return (
    <div className="bg-white dark:bg-slate-950 overflow-x-hidden">
      <header className="lg:py-4 lg:px-6 py-3 px-4 border-b border-slate-200/60 dark:border-slate-600/40 bg-white/95 backdrop-blur-xl z-40 dark:bg-slate-900/80 uk-animation-slide-top-small" uk-sticky>
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center z-20 relative">
              <button type="button" className="p-2.5 text-lg max-md:flex hidden group z" data-uk-toggle="target: #header-nav ; cls:max-md:hidden">
                <ion-icon name="menu" className="group-aria-expanded:inline hidden"></ion-icon>
                <ion-icon name="close" className="group-aria-expanded:hidden"></ion-icon>
              </button>
              <a href="index.html">
                <img src="assets/images/logo.png" alt="" className="h-7" />
              </a>
            </div>

            <div id="header-nav" className="max-md:hidden max-md:bg-white max-md:p-5 max-md:fixed max-md:top-0 max-md:shadow-md max-md:left-0 max-md:pt-14 max-md:w-full max-md:z-10">
              <nav className="flex lg:items-center font-semibold text-slate-500 dark:text-white/70 lg:gap-1 max-md:border-t max-md:pt-2 max-md:flex max-md:flex-col" data-uk-scrollspy-nav="closest: a ; scroll: true">
                <a className="lg:py-1.5 py-2.5 px-3 duration-500 hover:text-black" href="#home">
                  Home
                </a>
                <a className="lg:py-1.5 py-2.5 px-3 duration-500 hover:text-black" href="#features">
                  Features
                </a>
                <a className="lg:py-1.5 py-2.5 px-3 duration-500 hover:text-black" href="#demos">
                  Demos
                </a>
                <a className="lg:py-1.5 py-2.5 px-3 duration-500 hover:text-black" href="#faq">
                  Faq
                </a>
              </nav>
            </div>

            <div className="flex items-center z-20 relative">
              <div className="flex items-center gap-4 relative pl-6 text-slate-600">
                <a className="bg-pink-500 dark:bg-pink-700/30 text-white shadow px-4 h-9 text-sm rounded-md flex items-center gap-2 font-semibold" target="_blank" href="https://themeforest.net/item/instello-ultimate-photo-sharing-html-template/29882650">
                  <ion-icon name="cart-outline" className="text-xl"></ion-icon>
                  Buy now
                </a>
                <div className="w-[1px] bg-slate-200 h-6 absolute left-0 hidden"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="md:mt-10 -mt-8 pt-8">
        <div className="relative md:mb-44">
          <div className="max-w-5xl mx-auto space-y-32 max-md:p-8">
            {/*<!-- hero -->*/}
            <section id="home">
              <div className="flex flex-col justify-center mt-6 text-center gap-6">
                <div>
                  <img src="assets/images/logo.svg" alt="" className="max-md:w-24  mx-auto" />
                </div>
                <p className="max-w-2xl mx-auto text-gray-500 sm:text-lg text-sm leading-relaxed dark:text-white"> Professional and elegant template for creating a social photo sharing network , designed with a clean, customizable and modern</p>
              </div>

              <div className="md:flex justify-center items-center gap-4 mt-8 font-semibold text-sm hidden">
                <a href="#demos" uk-scroll className="flex items-center gap-2 bg-slate-100 rounded-lg px-5 py-3 text-black dark:bg-slate-900 dark:text-white">
                  <ion-icon name="eye-outline" className="hidden"></ion-icon>
                  Check Demo
                </a>
                <a className="flex items-center gap-3 rounded-lg px-5 py-2.5 bg-black text-white shadow dark:bg-white/90 dark:text-black" target="_blank" href="https://themeforest.net/item/instello-ultimate-photo-sharing-html-template/29882650">
                  Buy now
                </a>
              </div>

              {/*<!-- hero -->*/}
              <div className="flex items-center justify-center relative md:mt-32 mt-20" >
                <div className="lg:rounded-xl rounded-md shadow-xl z-10 scale-125 overflow-hidden relative w-1/2">
                  <div className="bg-gray-950 w-full py-1.5 px-3"> <svg className="w-6" viewBox="0 0 420 100" focusable="false"><circle fill="#ff5f57" cx="50" cy="50" r="50"></circle><circle fill="#febc2e" cx="210" cy="50" r="50"></circle><circle fill="#28c840" cx="370" cy="50" r="50"></circle></svg> </div>
                  <img src="./assets/images/demos/demo-1.jpg" alt="" className="" />
                </div>

                <div className="w-1/2 absolute left-0 delay-500 uk-animation-slide-right-medium">
                  <div className="lg:rounded-xl rounded-md shadow-md overflow-hidden -skew-x-6">
                    <div className="bg-gray-950 w-full py-1.5 px-3"> <svg className="w-6" viewBox="0 0 420 100" focusable="false"><circle fill="#ff5f57" cx="50" cy="50" r="50"></circle><circle fill="#febc2e" cx="210" cy="50" r="50"></circle><circle fill="#28c840" cx="370" cy="50" r="50"></circle></svg> </div>
                    <img src="assets/images/demos/explore.png" alt="" />
                  </div>
                </div>
                <div className="w-1/2 absolute right-0 duration-50 uk-animation-slide-left-medium">
                  <div className="lg:rounded-xl rounded-md shadow-md overflow-hidden skew-x-6">
                    <div className="bg-gray-950 w-full py-1.5 px-3"> <svg className="w-6" viewBox="0 0 420 100" focusable="false"><circle fill="#ff5f57" cx="50" cy="50" r="50"></circle><circle fill="#febc2e" cx="210" cy="50" r="50"></circle><circle fill="#28c840" cx="370" cy="50" r="50"></circle></svg> </div>
                    <img src="assets/images/demos/shop.png" alt="" />
                  </div>
                </div>
              </div>
            </section>

            {/*<!-- features -->*/}
            <section>
              <div className="grid md:grid-cols-3 grid-cols-2 gap-5 md:gap-y-10 md:mt-8 -mt-6 md:text-xl text-sm font-medium" id="features" data-uk-scrollspy="target: > div; cls: uk-animation-scale-up; delay: 100">
                <div className="space-x-4 flex items-center">
                  <div className="rounded-full  bg-pink-200 md:p-1.5 p-1 inline-flex ring right-2 ring-pink-50 ring-offset-1 dark:ring-slate-600">
                    <ion-icon name="reader" className="md:text-4xl text-2xl text-white drop-shadow-md"></ion-icon>
                  </div>
                  <div>  User Friendly  <br /> Design  </div>
                </div>
                <div className="space-x-4 flex items-center">
                  <div className="rounded-full  bg-yellow-200 md:p-1.5 p-1 inline-flex ring right-2 ring-yellow-50 ring-offset-1 dark:ring-slate-600">
                    <ion-icon name="cog" className="md:text-4xl text-2xl text-white drop-shadow-md"></ion-icon>
                  </div>
                  <div> Modern Features   </div>
                </div>
                <div className="space-x-4 flex items-center">
                  <div className="rounded-full  bg-emerald-200 md:p-1.5 p-1 inline-flex ring right-2 ring-emerald-50 ring-offset-1 dark:ring-slate-600">
                    <ion-icon name="leaf" className="md:text-4xl text-2xl text-white drop-shadow-md"></ion-icon>
                  </div>
                  <div>  Clean Markup </div>
                </div>
                <div className="space-x-4 flex items-center">
                  <div className="rounded-full  bg-sky-200 md:p-1.5 p-1 inline-flex ring ring-sky-50 ring-offset-1 dark:ring-slate-600">
                    <ion-icon name="albums" className="md:text-4xl text-2xl text-white drop-shadow-md"></ion-icon>
                  </div>
                  <div> Pixel Perfect </div>
                </div>
                <div className="space-x-4 flex items-center">
                  <div className="rounded-full  bg-purple-200 md:p-1.5 p-1 inline-flex ring right-2 ring-purple-50 ring-offset-1 dark:ring-slate-600">
                    <ion-icon name="moon" className="md:text-4xl text-2xl text-white drop-shadow-md"></ion-icon>
                  </div>
                  <div> Dark and Light  <br /> Schemes  </div>
                </div>
                <div className="space-x-4 flex items-center">
                  <div className="rounded-full  bg-pink-200 md:p-1.5 p-1 inline-flex ring right-2 ring-pink-50 ring-offset-1 dark:ring-slate-600">
                    <ion-icon name="layers" className="md:text-4xl text-2xl text-white drop-shadow-md"></ion-icon>
                  </div>
                  <div> Customizable   <br /> Components  </div>
                </div>
              </div>
            </section>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" className="absolute -bottom-44 w-full max-lg:hidden rotate-3">
            <path fill="#f1f5f9" d="M 0 0 c 0 0 200 50 500 50 s 500 -50 500 -50 v 101 h -1000 v -100 z" className="fill-current text-slate-50 dark:text-slate-800/60"></path>
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" className="absolute -bottom-40 w-full max-lg:hidden -rotate-6">
            <path fill="#f1f5f9" d="M 0 0 c 0 0 200 50 500 50 s 500 -50 500 -50 v 101 h -1000 v -100 z" className="fill-current text-slate-50/80 dark:text-slate-800/40"></path>
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" className="absolute -bottom-44 w-full max-lg:hidden">
            <path fill="#f1f5f9" d="M 0 0 c 0 0 200 50 500 50 s 500 -50 500 -50 v 101 h -1000 v -100 z" className="fill-current text-slate-100 dark:text-slate-800"></path>
          </svg>
        </div>

        {/*<!-- demos -->*/}
        <section className="bg-slate-100 md:py-20 py-8 md:my-20 my-8 relative dark:bg-dark2">
          <div className="max-w-5xl mx-auto max-lg:p-8">
            <div className="text-center md:space-y-3" id="demos">
              <div className="lg:text-3xl text-lg md:font-bold font-semibold text-black dark:text-white"> Check the Demos </div>
              <p className="max-w-3xl mx-auto text-gray-500 md:text-base text-sm leading-relaxed dark:text-white/80">  Explore our demo pages and different layout of designs </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 lg:mt-20 mt-10 text-center font-normal capitalize" data-uk-scrollspy="target: > a ; cls: uk-animation-slide-bottom-small ; delay: 160">
              <a href="home.html" target="_blank">
                <div className="group">
                  <div className="md:rounded-xl rounded-md shadow-md overflow-hidden duration-300 group-hover:-translate-y-1 group-hover:scale-[1.01] group-hover:shadow-lg">
                    <div className="bg-gray-950 w-full py-1.5 px-3"> <svg className="w-6" viewBox="0 0 420 100" focusable="false"><circle fill="#ff5f57" cx="50" cy="50" r="50"></circle><circle fill="#febc2e" cx="210" cy="50" r="50"></circle><circle fill="#28c840" cx="370" cy="50" r="50"></circle></svg> </div>
                    <img src="assets/images/demos/home.png" alt="" className="w-full h-full object-cover inset-0" />
                  </div>
                  <p className="py-4 group-hover:text-black"> Home </p>
                </div>
              </a>
              <a href="explore.html" target="_blank">
                <div className="group">
                  <div className="md:rounded-xl rounded-md shadow-md overflow-hidden duration-300 group-hover:-translate-y-1 group-hover:scale-[1.01] group-hover:shadow-lg">
                    <div className="bg-gray-950 w-full py-1.5 px-3"> <svg className="w-6" viewBox="0 0 420 100" focusable="false"><circle fill="#ff5f57" cx="50" cy="50" r="50"></circle><circle fill="#febc2e" cx="210" cy="50" r="50"></circle><circle fill="#28c840" cx="370" cy="50" r="50"></circle></svg> </div>
                    <img src="assets/images/demos/explore.png" alt="" className="w-full h-full object-cover inset-0" />
                  </div>
                  <p className="py-4 group-hover:text-black"> explore </p>
                </div>
              </a>
              <a href="messages.html" target="_blank">
                <div className="group">
                  <div className="md:rounded-xl rounded-md shadow-md overflow-hidden duration-300 group-hover:-translate-y-1 group-hover:scale-[1.01] group-hover:shadow-lg">
                    <div className="bg-gray-950 w-full py-1.5 px-3"> <svg className="w-6" viewBox="0 0 420 100" focusable="false"><circle fill="#ff5f57" cx="50" cy="50" r="50"></circle><circle fill="#febc2e" cx="210" cy="50" r="50"></circle><circle fill="#28c840" cx="370" cy="50" r="50"></circle></svg> </div>
                    <img src="assets/images/demos/messages.png" alt="" className="w-full h-full object-cover inset-0" />
                  </div>
                  <p className="py-4 group-hover:text-black"> Messages </p>
                </div>
              </a>
              <a href="reels.html" target="_blank">
                <div className="group">
                  <div className="md:rounded-xl rounded-md shadow-md overflow-hidden duration-300 group-hover:-translate-y-1 group-hover:scale-[1.01] group-hover:shadow-lg">
                    <div className="bg-gray-950 w-full py-1.5 px-3"> <svg className="w-6" viewBox="0 0 420 100" focusable="false"><circle fill="#ff5f57" cx="50" cy="50" r="50"></circle><circle fill="#febc2e" cx="210" cy="50" r="50"></circle><circle fill="#28c840" cx="370" cy="50" r="50"></circle></svg> </div>
                    <img src="assets/images/demos/reels.png" alt="" className="w-full h-full object-cover inset-0" />
                  </div>
                  <p className="py-4 group-hover:text-black"> reels </p>
                </div>
              </a>
              <a href="reels-view.html" target="_blank">
                <div className="group">
                  <div className="md:rounded-xl rounded-md shadow-md overflow-hidden duration-300 group-hover:-translate-y-1 group-hover:scale-[1.01] group-hover:shadow-lg">
                    <div className="bg-gray-950 w-full py-1.5 px-3"> <svg className="w-6" viewBox="0 0 420 100" focusable="false"><circle fill="#ff5f57" cx="50" cy="50" r="50"></circle><circle fill="#febc2e" cx="210" cy="50" r="50"></circle><circle fill="#28c840" cx="370" cy="50" r="50"></circle></svg> </div>
                    <img src="assets/images/demos/reels-view.png" alt="" className="w-full h-full object-cover inset-0" />
                  </div>
                  <p className="py-4 group-hover:text-black"> reels-view </p>
                </div>
              </a>
              <a href="shop.html" target="_blank">
                <div className="group">
                  <div className="md:rounded-xl rounded-md shadow-md overflow-hidden duration-300 group-hover:-translate-y-1 group-hover:scale-[1.01] group-hover:shadow-lg">
                    <div className="bg-gray-950 w-full py-1.5 px-3"> <svg className="w-6" viewBox="0 0 420 100" focusable="false"><circle fill="#ff5f57" cx="50" cy="50" r="50"></circle><circle fill="#febc2e" cx="210" cy="50" r="50"></circle><circle fill="#28c840" cx="370" cy="50" r="50"></circle></svg> </div>
                    <img src="assets/images/demos/shop.png" alt="" className="w-full h-full object-cover inset-0" />
                  </div>
                  <p className="py-4 group-hover:text-black"> Marketplace </p>
                </div>
              </a>
              <a href="peaple.html" target="_blank">
                <div className="group">
                  <div className="md:rounded-xl rounded-md shadow-md overflow-hidden duration-300 group-hover:-translate-y-1 group-hover:scale-[1.01] group-hover:shadow-lg">
                    <div className="bg-gray-950 w-full py-1.5 px-3"> <svg className="w-6" viewBox="0 0 420 100" focusable="false"><circle fill="#ff5f57" cx="50" cy="50" r="50"></circle><circle fill="#febc2e" cx="210" cy="50" r="50"></circle><circle fill="#28c840" cx="370" cy="50" r="50"></circle></svg> </div>
                    <img src="assets/images/demos/peaple.png" alt="" className="w-full h-full object-cover inset-0" />
                  </div>
                  <p className="py-4 group-hover:text-black"> Users </p>
                </div>
              </a>
              <a href="profile.html" target="_blank">
                <div className="group">
                  <div className="md:rounded-xl rounded-md shadow-md overflow-hidden duration-300 group-hover:-translate-y-1 group-hover:scale-[1.01] group-hover:shadow-lg">
                    <div className="bg-gray-950 w-full py-1.5 px-3"> <svg className="w-6" viewBox="0 0 420 100" focusable="false"><circle fill="#ff5f57" cx="50" cy="50" r="50"></circle><circle fill="#febc2e" cx="210" cy="50" r="50"></circle><circle fill="#28c840" cx="370" cy="50" r="50"></circle></svg> </div>
                    <img src="assets/images/demos/profile.png" alt="" className="w-full h-full object-cover inset-0" />
                  </div>
                  <p className="py-4 group-hover:text-black"> Profile </p>
                </div>
              </a>
              <a href="components.html" target="_blank">
                <div className="group">
                  <div className="md:rounded-xl rounded-md shadow-md overflow-hidden duration-300 group-hover:-translate-y-1 group-hover:scale-[1.01] group-hover:shadow-lg">
                    <div className="bg-gray-950 w-full py-1.5 px-3"> <svg className="w-6" viewBox="0 0 420 100" focusable="false"><circle fill="#ff5f57" cx="50" cy="50" r="50"></circle><circle fill="#febc2e" cx="210" cy="50" r="50"></circle><circle fill="#28c840" cx="370" cy="50" r="50"></circle></svg> </div>
                    <img src="assets/images/demos/componentes.png" alt="" className="w-full h-full object-cover inset-0" />
                  </div>
                  <p className="py-4 group-hover:text-black"> components </p>
                </div>
              </a>
              <a href="form-register.html" target="_blank">
                <div className="group">
                  <div className="md:rounded-xl rounded-md shadow-md overflow-hidden duration-300 group-hover:-translate-y-1 group-hover:scale-[1.01] group-hover:shadow-lg">
                    <div className="bg-gray-950 w-full py-1.5 px-3"> <svg className="w-6" viewBox="0 0 420 100" focusable="false"><circle fill="#ff5f57" cx="50" cy="50" r="50"></circle><circle fill="#febc2e" cx="210" cy="50" r="50"></circle><circle fill="#28c840" cx="370" cy="50" r="50"></circle></svg> </div>
                    <img src="assets/images/demos/form-register.png" alt="" className="w-full h-full object-cover inset-0" />
                  </div>
                  <p className="py-4 group-hover:text-black"> Register </p>
                </div>
              </a>
            </div>
          </div>
        </section>

        <div className="relative max-lg:hidden">
          <svg className="absolute -mt-20 fill-current text-slate-100 dark:text-slate-800/40 invisible lg:visible rotate-180 scale-x-[-1]" width="100%" height="100px" xmlns="http://www.w3.org/2000/svg" xmlnsXLink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" x="0px" y="0px" viewBox="0 0 2560 100" style={{ enableBackground: 'new 0 0 2560 100' }} xmlSpace="preserve">
            <polygon points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>

        <div className="max-w-5xl mx-auto md:space-y-32 max-md:p-8 relative lg:mt-36">
          {/*!-- code preview -->*/}
          <section>
            <div className="flex max-md:flex-col items-center md:gap-20 gap-10">
              <div className="flex-1 md:space-y-8 space-y-3">
                <div className="rounded-full  bg-slate-200 dark:bg-slate-700 md:p-1.5 p-2 inline-flex ring right-2 ring-slate-100 ring-offset-1 dark:ring-slate-800 dark:ring-offset-slate-500">
                  <ion-icon name="reader" className="md:text-4xl text-2xl text-white drop-shadow-md slate-800"></ion-icon>
                </div>
                <div className="md:text-3xl text-lg md:font-bold font-semibold text-black dark:text-white"> What is inside </div>
                <p className="max-w-3xl mx-auto text-gray-500  md:text-lg leading-loose  dark:text-white/80">
                  high-quality code that’s been thoroughly tested and optimized for performance,
                  <br className="max-md:hidden" /> <br className="max-md:hidden" />
                  you’ll receive access to clean and well-documented code that’s easy to customize
                </p>
              </div>
              <div className="md:w-3/5 w-full">
                <a href="code.html">
                  <div className=" relative">
                    <div className="bg-gray-950 w-full py-1.5 px-3 md:rounded-t-xl rounded-t-md"> <svg className="w-6" viewBox="0 0 420 100" focusable="false"><circle fill="#ff5f57" cx="50" cy="50" r="50"></circle><circle fill="#febc2e" cx="210" cy="50" r="50"></circle><circle fill="#28c840" cx="370" cy="50" r="50"></circle></svg> </div>
                    <img src="assets/images/demos/code-prev.jpg" alt="" className="w-full h-full object-cover inset-0 md:rounded-b-xl rounded-b-md shadow-lg" />

                    <img src="assets/images/brand-uikit.svg" alt="" className="w-12 h-12 rounded-full absolute  top-8 -right-6 bg-white shadow-md p-1.5" />
                    <img src="assets/images/brand-tailwind.svg" alt="" className="w-12 h-12 rounded-full absolute  -bottom-5 right-6 bg-white shadow-md p-1.5" />
                  </div>
                </a>
              </div>
            </div>
          </section>

          {/* !-- Faq -- */}
          <section className="max-md:my-20">
            <div className="text- center space-y-3" id="faq">
              <div className="p-1 text-sm text-yellow-500 bg-yellow-100 px-2 inline-block rounded-md -rotate-3 dark:bg-yellow-400/20"> Support</div>
              <div className="lg:text-3xl text-lg md:font-bold font-semibold text-black dark:text-white"> Any Question?</div>
            </div>

            <ul className="relative space-y-3 mt-10 max-w-3xl mx-auto hidden" uk-accordion="active: 0">
              <li className="uk-open">
                <a className="flex items-center justify-between py-4 px-5 text-lg bg-slate-100 rounded-md font-semibold group dark:text-white dark:bg-gray-800 uk-accordion-title" href="#">
                  Can i use this for WordPress
                  <svg className="w-6 h-6 duration-200 group-aria-expanded:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </a>
                <div className="p-2 dark:text-white/80 uk-accordion-content text-base">
                  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
                </div>
              </li>
              <li>
                <a className="flex items-center justify-between py-4 px-5 text-lg bg-slate-100 rounded-md font-semibold group dark:text-white dark:bg-gray-800 uk-accordion-title" href="#">
                  Can i use this for WordPress
                  <svg className="w-6 h-6 duration-200 group-aria-expanded:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><polyline points="6 9 12 15 18 9"></polyline></svg>
                </a>
                <div className="p-2 dark:text-white/80 uk-accordion-content text-base">
                  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
                </div>
              </li>
              <li>
                <a className="flex items-center justify-between py-4 px-5 text-lg bg-slate-100 rounded-md font-semibold group dark:text-white dark:bg-gray-800 uk-accordion-title" href="#">
                  Can i use this for WordPress
                  <svg className="w-6 h-6 duration-200 group-aria-expanded:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><polyline points="6 9 12 15 18 9"></polyline></svg>
                </a>
                <div className="p-2 dark:text-white/80 uk-accordion-content text-base">
                  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
                </div>
              </li>
            </ul>

            <div className="grid lg:grid-cols-2 lg:gap-10 mt-16 gap-4 text-sm">
              <div>
                <h1 className="md:text-xl text-base font-semibold mb-2 text-black dark:text-white"> Can I use Instello For React , Vue or Larval ? </h1>
                <p className="lg:text-lg"> absolutely yes. Instello Built <a href="https://tailwindcss.com/" className="underline">tailwindcss</a> Rapidly build modern websites without ever leaving your HTML</p>
              </div>
              <div>
                <h1 className="md:text-xl text-base font-semibold mb-2 text-black dark:text-white"> Is this Wordpress theme ? </h1>
                <p className="lg:text-lg"> No. This is n't Wordpress theme is just HTML template. You can integrate any platform you want</p>
              </div>
              <div>
                <h1 className="md:text-xl text-base font-semibold mb-2 text-black dark:text-white"> Is Instello working fully ? </h1>
                <p className="lg:text-lg">  No. is just HTML template . hire backend developer on <a href="https://www.freelancer.com/" className="underline">Freelancer</a> or <a href="https://www.upwork.com/" className="underline">Upwork</a></p>
              </div>
            </div>
          </section>

          {/* !-- other templates -- */}
          <section>
            <div className="text- center space-y-3">
              <div className="p-1 text-sm text-green-500 bg-green-100 px-2 inline-block rounded-md max-md:hidden -rotate-3 dark:bg-green-400/20"> Awesome</div>
              <div className="lg:text-3xl text-lg md:font-bold font-semibold text-black dark:text-white"> Other Products </div>
              <p className="max-w-3xl text-gray-500 text-sm sm:text-lg leading-relaxed dark:text-white/80 max-md:hidden"> a great solution ready for you to start building your apps? Use our templates and design system as the rock-solid foundation for your internal UI component library </p>
            </div>

            <div className="relative mt-8" tabindex="-1" data-uk-slider="finite: true">
              <div className="overflow-hidden uk-slider-container">
                <ul className="-ml-2 uk-slider-items w-[calc(100%+0.875rem)]">
                  {/*<!-- single template -->*/}
                  <li className="md:w-1/2 w-full pr-3.5">
                    <a href="https://themeforest.net/item/socialite-online-community-html-template/26345647" target="_blank">
                      <div className="flex flex-col">
                        <div className="relative w-full h-full">
                          <img src="assets/images/demos/prev-socilite.png" alt="" className="w-full h-full object-cover inset-0 md:rounded-xl rounded-md shadow" />
                        </div>
                        <div className="relative mt-4">
                          <div className="md:font-semibold font-medium lg:text-xl text-lg text-black">Socialite</div>
                          <div className="font-medium text-gray-400 mt-0.5">social network</div>
                          <span className="absolute bg-gray-100 font-medium md:px-3.5 px-3 py-1 right-0 top-3 rounded-full text-black">$19 </span>
                        </div>
                      </div>
                    </a>
                  </li>

                  {/*<!-- single template -->*/}
                  <li className="md:w-1/2 w-full pr-3.5">
                    <a href="https://themeforest.net/item/flex-modern-multipurpose-tailwind-template/34769270" target="_blank">
                      <div className="flex flex-col">
                        <div className="relative w-full h-full">
                          <img src="assets/images/demos/prev-flex.png" alt="" className="w-full h-full object-cover inset-0 md:rounded-xl rounded-md shadow" />
                        </div>
                        <div className="relative mt-4">
                          <div className="md:font-semibold font-medium lg:text-xl text-lg text-black">Flex</div>
                          <div className="font-medium text-gray-400 mt-0.5">Landing</div>
                          <span className="absolute bg-gray-100 font-medium md:px-3.5 px-3 py-1 right-0 top-3 rounded-full text-black">$19</span>
                        </div>
                      </div>
                    </a>
                  </li>

                  {/*<!-- single template -->*/}
                  <li className="md:w-1/2 w-full pr-3.5">
                    <a href="https://themeforest.net/item/courseplus-modern-learning-management-application/23651460" target="_blank">
                      <div className="flex flex-col">
                        <div className="relative w-full h-full">
                          <img src="assets/images/demos/prev-courseplus.png" alt="" className="w-full h-full object-cover inset-0 md:rounded-xl rounded-md shadow" />
                        </div>
                        <div className="relative mt-4">
                          <div className="md:font-semibold font-medium lg:text-xl text-lg text-black"> CoursePlus </div>
                          <div className="font-medium text-gray-400 mt-0.5">Educational</div>
                          <span className="absolute bg-gray-100 font-medium md:px-3.5 px-3 py-1 right-0 top-3 rounded-full text-black">$24 </span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <button type="button" className="absolute -translate-y-1/2 bg-white rounded-full bottom-1/2 -left-5 grid w-10 h-10 place-items-center shadow-md dark:bg-dark3" data-uk-slider-item="previous"> <ion-icon name="chevron-back" className="text-2xl"></ion-icon></button>
              <button type="button" className="absolute -right-5 -translate-y-1/2 bg-white rounded-full bottom-1/2 grid w-10 h-10 place-items-center shadow-md dark:bg-dark3" data-uk-slider-item="next"> <ion-icon name="chevron-forward" className="text-2xl"></ion-icon></button>
            </div>
          </section>
        </div>
      </main>



      <footer>
        <div className="max-w-5xl mx-auto mb-6 mt-32 pt-6 border-t">
          <div className="flex justify-center text-sm dark:to-white">
            Made with ❤️ by
            <a className="ml-2 hover:underline hover:text-blue-500" href="https://foxthemes.net/">
              Foxthemes
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;
