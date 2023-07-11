// see scripts, icons, prettify, weird syntax, paths
const Setting = () => {
  return (
    <>
        {/* main contents */}
        <main className="2xl:ml-[--w-side] xl:ml-[--w-side-md] md:ml-[--w-side-small]">
          <div className="max-w-2xl mx-auto">
            {/* heading title */}
            <div className="page__heading py-6 mt-6">
              <a href="#">
                <ion-icon name="chevron-back-outline" /> Back
              </a>
              <h1> Settings </h1>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm dark:border-slate-700 dark:bg-dark2">
              <div className="flex md:gap-8 gap-4 items-center md:p-10 p-6">
                <div className="relative md:w-20 md:h-20 w-12 h-12 shrink-0">
                  <label htmlFor="file" className="cursor-pointer">
                    <img
                      id="img"
                      src="assets/images/avatars/avatar-3.jpg"
                      className="object-cover w-full h-full rounded-full"
                      alt=""
                    />
                    <input type="file" id="file" className="hidden" />
                  </label>
                  <label
                    htmlFor="file"
                    className="md:p-1 p-0.5 rounded-full bg-slate-600 md:border-4 border-white absolute -bottom-2 -right-2 cursor-pointer dark:border-slate-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="md:w-4 md:h-4 w-3 h-3 fill-white"
                    >
                      <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
                      <path
                        fillRule="evenodd"
                        d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <input id="file" type="file" className="hidden" />
                  </label>
                </div>
                <div className="flex-1">
                  <h3 className="md:text-xl text-base font-semibold text-black dark:text-white">
                    {" "}
                    Monroe Parker{" "}
                  </h3>
                  <p className="text-sm text-blue-600 mt-1 font-normal">@Monroe</p>
                </div>
              </div>
              <hr className="border-t border-gray-100 dark:border-slate-700" />
              {/* nav tabs */}
              <div
                className="relative -mb-px px-2"
                tabIndex={-1}
                uk-slider="finite: true"
              >
                <nav className="overflow-hidden rounded-xl uk-slider-container pt-2">
                  <ul
                    className="uk-slider-items w-[calc(100%+10px)] capitalize font-semibold text-gray-500 text-sm dark:text-white"
                    uk-switcher="connect: #setting_tab ; animation: uk-animation-slide-right-medium, uk-animation-slide-left-medium"
                  >
                    <li className="w-auto pr-2.5">
                      {" "}
                      <a
                        href="#"
                        className="inline-block p-4 pt-2 border-b-2 border-transparent aria-expanded:text-blue-500 aria-expanded:border-blue-500"
                      >
                        {" "}
                        General{" "}
                      </a>{" "}
                    </li>
                    <li className="w-auto pr-2.5">
                      {" "}
                      <a
                        href="#"
                        className="inline-block p-4 pt-2 border-b-2 border-transparent aria-expanded:text-blue-500 aria-expanded:border-blue-500"
                      >
                        {" "}
                        social links
                      </a>{" "}
                    </li>
                    <li className="w-auto pr-2.5">
                      {" "}
                      <a
                        href="#"
                        className="inline-block p-4 pt-2 border-b-2 border-transparent aria-expanded:text-blue-500 aria-expanded:border-blue-500"
                      >
                        {" "}
                        notifications
                      </a>{" "}
                    </li>
                    <li className="w-auto pr-2.5">
                      {" "}
                      <a
                        href="#"
                        className="inline-block p-4 pt-2 border-b-2 border-transparent aria-expanded:text-blue-500 aria-expanded:border-blue-500"
                      >
                        {" "}
                        manage
                      </a>{" "}
                    </li>
                    <li className="w-auto pr-2.5">
                      {" "}
                      <a
                        href="#"
                        className="inline-block p-4 pt-2 border-b-2 border-transparent aria-expanded:text-blue-500 aria-expanded:border-blue-500"
                      >
                        {" "}
                        privacy
                      </a>{" "}
                    </li>
                    <li className="w-auto pr-2.5">
                      {" "}
                      <a
                        href="#"
                        className="inline-block p-4 pt-2 border-b-2 border-transparent aria-expanded:text-blue-500 aria-expanded:border-blue-500"
                      >
                        {" "}
                        Alerts
                      </a>{" "}
                    </li>
                    <li className="w-auto pr-2.5">
                      {" "}
                      <a
                        href="#"
                        className="inline-block p-4 pt-2 border-b-2 border-transparent aria-expanded:text-blue-500 aria-expanded:border-blue-500"
                      >
                        {" "}
                        password
                      </a>{" "}
                    </li>
                  </ul>
                </nav>
                <a
                  className="absolute -translate-y-1/2 top-1/2 left-0 flex items-center w-20 h-full p-2.5 justify-start rounded-xl bg-gradient-to-r from-white via-white dark:from-slate-800 dark:via-slate-800"
                  href="#"
                  uk-slider-item="previous"
                >
                  {" "}
                  <ion-icon name="chevron-back" className="text-2xl ml-1" />{" "}
                </a>
                <a
                  className="absolute right-0 -translate-y-1/2 top-1/2 flex items-center w-20 h-full p-2.5 justify-end rounded-xl bg-gradient-to-l from-white via-white dark:from-slate-800 dark:via-slate-800"
                  href="#"
                  uk-slider-item="next"
                >
                  {" "}
                  <ion-icon name="chevron-forward" className="text-2xl mr-1" />{" "}
                </a>
              </div>
            </div>
            {/* tab content */}
            <div className="mt-6 mb-20 text-sm font-medium text-gray-600 dark:text-white/80">
              <div
                id="setting_tab"
                className="uk-switcher bg-white border rounded-xl shadow-sm md:py-12 md:px-20 p-6 overflow-hidden dark:border-slate-700 dark:bg-dark2"
              >
                {/* tab user basic info */}
                <div>
                  <div>
                    <div className="space-y-6">
                      <div className="md:flex items-center gap-10">
                        <label className="md:w-32 text-right"> Username </label>
                        <div className="flex-1 max-md:mt-4">
                          <input
                            type="text"
                            placeholder="Monroe"
                            className="lg:w-1/2 w-full"
                          />
                        </div>
                      </div>
                      <div className="md:flex items-center gap-10">
                        <label className="md:w-32 text-right"> Email </label>
                        <div className="flex-1 max-md:mt-4">
                          <input
                            type="text"
                            placeholder="info@mydomain.com"
                            className="w-full"
                          />
                        </div>
                      </div>
                      <div className="md:flex items-start gap-10">
                        <label className="md:w-32 text-right"> Bio </label>
                        <div className="flex-1 max-md:mt-4">
                          <textarea
                            className="w-full"
                            rows={5}
                            placeholder="Inter your Bio"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="md:flex items-center gap-10">
                        <label className="md:w-32 text-right"> Gender </label>
                        <div className="flex-1 max-md:mt-4">
                          <select className="!border-0 !rounded-md lg:w-1/2 w-full">
                            <option value={1}>Male</option>
                            <option value={2}>Female</option>
                          </select>
                        </div>
                      </div>
                      <div className="md:flex items-center gap-10">
                        <label className="md:w-32 text-right"> Relationship </label>
                        <div className="flex-1 max-md:mt-4">
                          <select className="!border-0 !rounded-md lg:w-1/2 w-full">
                            <option value={0}>None</option>
                            <option value={1}>Single</option>
                            <option value={2}>In a relationship</option>
                            <option value={3}>Married</option>
                            <option value={4}>Engaged</option>
                          </select>
                        </div>
                      </div>
                      <div className="md:flex items-start gap-10 " hidden="">
                        <label className="md:w-32 text-right"> Avatar </label>
                        <div className="flex-1 flex items-center gap-5 max-md:mt-4">
                          <img
                            src="assets/images/avatars/avatar-3.jpg"
                            alt=""
                            className="w-10 h-10 rounded-full"
                          />
                          <button
                            type="submit"
                            className="px-4 py-1 rounded-full bg-slate-100/60 border dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                          >
                            {" "}
                            Change
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-4 mt-16">
                      <button
                        type="submit"
                        className="button lg:px-6 bg-secondery max-md:flex-1"
                      >
                        {" "}
                        Cancle
                      </button>
                      <button
                        type="submit"
                        className="button lg:px-10 bg-primary text-white max-md:flex-1"
                      >
                        {" "}
                        Save <span className="ripple-overlay" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* tab socialinks */}
                <div>
                  <div>
                    <div className="font-normal text-gray-400">
                      <div>
                        <h4 className="text-xl font-medium text-black dark:text-white">
                          {" "}
                          Social Links{" "}
                        </h4>
                        <p className="mt-3 font-normal text-gray-600 dark:text-white">
                          We may still send you important notifications about your
                          account and content outside of you preferred notivications
                          settings
                        </p>
                      </div>
                      <div className="space-y-6 mt-8">
                        <div className="flex items-center gap-3">
                          <div className="bg-blue-50 rounded-full p-2 flex ">
                            <ion-icon
                              name="logo-facebook"
                              className="text-2xl text-blue-600"
                            />
                          </div>
                          <div className="flex-1">
                            <input
                              type="text"
                              className="w-full"
                              placeholder="http://www.facebook.com/myname"
                            />
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="bg-pink-50 rounded-full p-2 flex ">
                            <ion-icon
                              name="logo-instagram"
                              className="text-2xl text-pink-600"
                            />
                          </div>
                          <div className="flex-1">
                            <input
                              type="text"
                              className="w-full"
                              placeholder="http://www.instagram.com/myname"
                            />
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="bg-sky-50 rounded-full p-2 flex ">
                            <ion-icon
                              name="logo-twitter"
                              className="text-2xl text-sky-600"
                            />
                          </div>
                          <div className="flex-1">
                            <input
                              type="text"
                              className="w-full"
                              placeholder="http://www.twitter.com/myname"
                            />
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="bg-red-50 rounded-full p-2 flex ">
                            <ion-icon
                              name="logo-youtube"
                              className="text-2xl text-red-600"
                            />
                          </div>
                          <div className="flex-1">
                            <input
                              type="text"
                              className="w-full"
                              placeholder="http://www.youtube.com/myname"
                            />
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="bg-slate-50 rounded-full p-2 flex ">
                            <ion-icon
                              name="logo-github"
                              className="text-2xl text-black"
                            />
                          </div>
                          <div className="flex-1">
                            <input
                              type="text"
                              className="w-full"
                              placeholder="http://www.github.com/myname"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-4 mt-16">
                      <button
                        type="submit"
                        className="button lg:px-6 bg-secondery max-md:flex-1"
                      >
                        {" "}
                        Cancle
                      </button>
                      <button
                        type="submit"
                        className="button lg:px-10 bg-primary text-white max-md:flex-1"
                      >
                        {" "}
                        Save
                      </button>
                    </div>
                  </div>
                </div>
                {/* tab checkbox */}
                <div>
                  <div>
                    <div className="md:flex items-start gap-16">
                      <label className="md:w-32 text-right font-semibold">
                        {" "}
                        Notify me when{" "}
                      </label>
                      <div className="flex-1 space-y-4 interactive-effect max-md:mt-5">
                        <div>
                          <label className="inline-flex items-center">
                            <input
                              className="rounded"
                              type="checkbox"
                              defaultChecked=""
                              name="checkbox1"
                              defaultValue={3}
                            />
                            <span className="ml-3"> Someone send me message </span>
                          </label>
                        </div>
                        <div>
                          <label className="inline-flex items-center">
                            <input
                              className="rounded"
                              type="checkbox"
                              defaultChecked=""
                              name="checkbox1"
                              defaultValue={3}
                            />
                            <span className="ml-3"> Someone liked my photo </span>
                          </label>
                        </div>
                        <div>
                          <label className="inline-flex items-center">
                            <input
                              className="rounded"
                              type="checkbox"
                              defaultChecked=""
                              name="checkbox2"
                              defaultValue={3}
                            />
                            <span className="ml-3">
                              {" "}
                              Someone shared on my photo{" "}
                            </span>
                          </label>
                        </div>
                        <div>
                          <label className="inline-flex items-center">
                            <input
                              className="rounded"
                              type="checkbox"
                              defaultChecked=""
                              name="checkbox2"
                              defaultValue={3}
                            />
                            <span className="ml-3"> Someone followed me </span>
                          </label>
                        </div>
                        <div>
                          <label className="inline-flex items-center">
                            <input
                              className="rounded"
                              type="checkbox"
                              defaultChecked=""
                              name="checkbox2"
                              defaultValue={3}
                            />
                            <span className="ml-3"> Someone liked my posts</span>
                          </label>
                        </div>
                        <div>
                          <label className="inline-flex items-center">
                            <input
                              className="rounded"
                              type="checkbox"
                              defaultChecked=""
                              name="checkbox2"
                              defaultValue={3}
                            />
                            <span className="ml-3"> Someone mentioned me</span>
                          </label>
                        </div>
                        <div>
                          <label className="inline-flex items-center">
                            <input
                              className="rounded"
                              type="checkbox"
                              defaultChecked=""
                              name="checkbox2"
                              defaultValue={3}
                            />
                            <span className="ml-3">
                              {" "}
                              Someone sent me follow requset
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-4 mt-16">
                      <button
                        type="submit"
                        className="button lg:px-6 bg-secondery max-md:flex-1"
                      >
                        {" "}
                        Cancle
                      </button>
                      <button
                        type="submit"
                        className="button lg:px-10 bg-primary text-white max-md:flex-1"
                      >
                        {" "}
                        Save
                      </button>
                    </div>
                  </div>
                </div>
                {/* tab toggle options*/}
                <div>
                  <div>
                    <div className="space-y-6">
                      <div className="md:flex items-start gap-10">
                        <label className="w-40 text-right font-semibold">
                          {" "}
                          Who can follow me ?{" "}
                        </label>
                        <div className="flex-1 space-y-2 interactive-effect max-md:mt-3">
                          <div>
                            <label className="inline-flex items-center">
                              <input
                                type="radio"
                                name="radio-s1"
                                defaultChecked=""
                                defaultValue={1}
                              />
                              <span className="ml-3"> Everyone</span>
                            </label>
                          </div>
                          <div>
                            <label className="inline-flex items-center">
                              <input
                                type="radio"
                                name="radio-s1"
                                defaultValue={2}
                              />
                              <span className="ml-3"> The People I Follow</span>
                            </label>
                          </div>
                          <div>
                            <label className="inline-flex items-center">
                              <input
                                type="radio"
                                name="radio-s1"
                                defaultValue={3}
                              />
                              <span className="ml-3"> No body</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="md:flex items-start gap-10">
                        <label className="md:w-40 text-right font-semibold">
                          {" "}
                          Who can message me ?{" "}
                        </label>
                        <div className="flex-1 space-y-2 interactive-effect max-md:mt-3">
                          <div>
                            <label className="inline-flex items-center">
                              <input
                                type="radio"
                                name="radio-s2"
                                defaultChecked=""
                                defaultValue={1}
                              />
                              <span className="ml-3"> Everyone</span>
                            </label>
                          </div>
                          <div>
                            <label className="inline-flex items-center">
                              <input
                                type="radio"
                                name="radio-s2"
                                defaultValue={2}
                              />
                              <span className="ml-3"> The People I Follow</span>
                            </label>
                          </div>
                          <div>
                            <label className="inline-flex items-center">
                              <input
                                type="radio"
                                name="radio-s2"
                                defaultValue={3}
                              />
                              <span className="ml-3"> No body</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="md:flex items-start gap-10">
                        <label className="md:w-40 text-right font-semibold">
                          Status
                        </label>
                        <div className="flex-1 space-y-2 interactive-effect max-md:mt-3">
                          <div>
                            <label className="inline-flex items-center">
                              <input
                                type="radio"
                                name="radio-s3"
                                defaultChecked=""
                                defaultValue={3}
                              />
                              <span className="ml-3"> Yes</span>
                            </label>
                          </div>
                          <div>
                            <label className="inline-flex items-center">
                              <input
                                type="radio"
                                name="radio-s3"
                                defaultValue={3}
                              />
                              <span className="ml-3"> No</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="md:flex items-start gap-10">
                        <label className="md:w-40 text-right font-semibold">
                          Show my activities ?
                        </label>
                        <div className="flex-1 space-y-2 interactive-effect max-md:mt-3">
                          <div>
                            <label className="inline-flex items-center">
                              <input
                                type="radio"
                                name="radio-s4"
                                defaultChecked=""
                                defaultValue={3}
                              />
                              <span className="ml-3"> Public</span>
                            </label>
                          </div>
                          <div>
                            <label className="inline-flex items-center">
                              <input
                                type="radio"
                                name="radio-s4"
                                defaultValue={3}
                              />
                              <span className="ml-3"> Hide</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-4 mt-16">
                      <button
                        type="submit"
                        className="button lg:px-6 bg-secondery max-md:flex-1"
                      >
                        {" "}
                        Cancle
                      </button>
                      <button
                        type="submit"
                        className="button lg:px-10 bg-primary text-white max-md:flex-1"
                      >
                        {" "}
                        Save
                      </button>
                    </div>
                  </div>
                </div>
                {/* tab select dropdown*/}
                <div>
                  <div>
                    <div className="space-y-6">
                      <div className="md:flex items-center gap-16 justify-between">
                        <label className="md:w-40 text-right">
                          {" "}
                          Who can follow me ?{" "}
                        </label>
                        <div className="flex-1 max-md:mt-4">
                          <select className="w-full !border-0 !rounded-md">
                            <option value={1}>Everyone</option>
                            <option value={2}>People I Follow</option>
                          </select>
                        </div>
                      </div>
                      <div className="md:flex items-center gap-16 justify-between">
                        <label className="md:w-40 text-right">
                          {" "}
                          Who can message me ?{" "}
                        </label>
                        <div className="flex-1 max-md:mt-4">
                          <select className="w-full !border-0 !rounded-md">
                            <option value={1}>Everyone</option>
                            <option value={2}>People I Follow</option>
                            <option value={2}>No body</option>
                          </select>
                        </div>
                      </div>
                      <div className="md:flex items-center gap-16 justify-between">
                        <label className="md:w-40 text-right">
                          {" "}
                          Show my activities ?
                        </label>
                        <div className="flex-1 max-md:mt-4">
                          <select className="w-full !border-0 !rounded-md">
                            <option value={1}>Yes</option>
                            <option value={2}>Now</option>
                          </select>
                        </div>
                      </div>
                      <div className="md:flex items-center gap-16 justify-between">
                        <label className="md:w-40 text-right"> Status </label>
                        <div className="flex-1 max-md:mt-4">
                          <select className="w-full !border-0 !rounded-md">
                            <option value={1}>Online</option>
                            <option value={2}>Offline</option>
                          </select>
                        </div>
                      </div>
                      <div className="md:flex items-center gap-16 justify-between">
                        <label className="md:w-40 text-right">
                          {" "}
                          Who can see my tags?{" "}
                        </label>
                        <div className="flex-1 max-md:mt-4">
                          <select className="w-full !border-0 !rounded-md">
                            <option value={1}>Everyone</option>
                            <option value={2}>People I Follow</option>
                            <option value={2}>No body</option>
                          </select>
                        </div>
                      </div>
                      <div className="md:flex items-center gap-16 justify-between">
                        <label className="md:w-40 text-right">
                          {" "}
                          Allow search engines{" "}
                        </label>
                        <div className="flex-1 max-md:mt-4">
                          <select className="w-full !border-0 !rounded-md">
                            <option value={1}>Yes</option>
                            <option value={2}>Now</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-4 mt-16">
                      <button
                        type="submit"
                        className="button lg:px-6 bg-secondery max-md:flex-1"
                      >
                        {" "}
                        Cancle
                      </button>
                      <button
                        type="submit"
                        className="button lg:px-10 bg-primary text-white max-md:flex-1"
                      >
                        {" "}
                        Save
                      </button>
                    </div>
                  </div>
                </div>
                {/* tab Premision */}
                <div>
                  <div>
                    <div className="font-normal text-gray-400 text-sm">
                      <div>
                        <h4 className="text-lg font-semibold text-black dark:text-white">
                          {" "}
                          Alerts preferences{" "}
                        </h4>
                        <p className=" mt-3">
                          We may still send you important notifications about your
                          account and content outside of you preferred notivications
                          settings
                        </p>
                      </div>
                      <div
                        className="mt-8 md:space-y-8 space-y-4"
                        uk-scrollspy="target: > div; cls: uk-animation-slide-bottom-medium; delay: 100 ;repeat: true"
                      >
                        <div className="w-full">
                          <label className="switch flex justify-between items-center cursor-pointer gap-4">
                            <div className="bg-sky-100 text-sky-500 rounded-full p-2 md:flex hidden shrink-0">
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
                                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                />
                              </svg>
                            </div>
                            <div className="flex-1 md:pr-8">
                              <h4 className="text-base font-medium mb-1.5 text-black dark:text-white">
                                {" "}
                                Email notifications
                              </h4>
                              <p className="">
                                {" "}
                                You can receive notifications about important
                                updates and content directly to your email inbox.{" "}
                              </p>
                            </div>
                            <input type="checkbox" defaultChecked="" />
                            <span className="switch-button !relative" />
                          </label>
                        </div>
                        <div className="w-full">
                          <label className="switch flex justify-between items-center cursor-pointer gap-4">
                            <div className="bg-purple-100 text-purple-500 rounded-full p-2 md:flex hidden shrink-0">
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
                                  d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
                                />
                              </svg>
                            </div>
                            <div className="flex-1 md:pr-8">
                              <h4 className="text-base font-medium mb-1.5 text-black dark:text-white">
                                {" "}
                                web notifications
                              </h4>
                              <p className="">
                                {" "}
                                You can receive notifications through your
                                notifications center{" "}
                              </p>
                            </div>
                            <input type="checkbox" />
                            <span className="switch-button !relative" />
                          </label>
                        </div>
                        <div className="w-full">
                          <label className="switch flex justify-between items-center cursor-pointer gap-4">
                            <div className="bg-teal-100 text-teal-500 rounded-full p-2 md:flex hidden shrink-0">
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
                                  d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                                />
                              </svg>
                            </div>
                            <div className="flex-1 md:pr-8">
                              <h4 className="text-base font-medium mb-1.5 text-black dark:text-white">
                                {" "}
                                Phone notifications
                              </h4>
                              <p className="">
                                {" "}
                                You can receive notifications on your phone, so you
                                can stay up-to-date even when you’re on the go
                              </p>
                            </div>
                            <input type="checkbox" defaultChecked="" />
                            <span className="switch-button !relative" />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-4 mt-16">
                      <button
                        type="submit"
                        className="button lg:px-6 bg-secondery max-md:flex-1"
                      >
                        {" "}
                        Cancle
                      </button>
                      <button
                        type="submit"
                        className="button lg:px-10 bg-primary text-white max-md:flex-1"
                      >
                        {" "}
                        Save
                      </button>
                    </div>
                  </div>
                </div>
                {/* tab password*/}
                <div>
                  <div>
                    <div className="space-y-6">
                      <div className="md:flex items-center gap-16 justify-between max-md:space-y-3">
                        <label className="md:w-40 text-right">
                          {" "}
                          Current Password{" "}
                        </label>
                        <div className="flex-1 max-md:mt-4">
                          <input
                            type="password"
                            placeholder="******"
                            className="w-full"
                          />
                        </div>
                      </div>
                      <div className="md:flex items-center gap-16 justify-between max-md:space-y-3">
                        <label className="md:w-40 text-right"> New password </label>
                        <div className="flex-1 max-md:mt-4">
                          <input
                            type="password"
                            placeholder="******"
                            className="w-full"
                          />
                        </div>
                      </div>
                      <div className="md:flex items-center gap-16 justify-between max-md:space-y-3">
                        <label className="md:w-40 text-right">
                          {" "}
                          Repeat password{" "}
                        </label>
                        <div className="flex-1 max-md:mt-4">
                          <input
                            type="password"
                            placeholder="******"
                            className="w-full"
                          />
                        </div>
                      </div>
                      <hr className="border-gray-100 dark:border-gray-700" />
                      <div className="md:flex items-center gap-16 justify-between">
                        <label className="md:w-40 text-right">
                          {" "}
                          Two-factor authentication{" "}
                        </label>
                        <div className="flex-1 max-md:mt-4">
                          <select className="w-full !border-0 !rounded-md">
                            <option value={1}>Enable</option>
                            <option value={2}>Disable</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-4 mt-16">
                      <button
                        type="submit"
                        className="button lg:px-6 bg-secondery max-md:flex-1"
                      >
                        {" "}
                        Cancle
                      </button>
                      <button
                        type="submit"
                        className="button lg:px-10 bg-primary text-white max-md:flex-1"
                      >
                        {" "}
                        Save
                      </button>
                    </div>
                  </div>
                </div>
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

export default Setting;