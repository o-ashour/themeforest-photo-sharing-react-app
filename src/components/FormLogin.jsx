// see scripts, icons, prettify, weird syntax, paths
const FormLogin = () => {
  return (
    <div className="bg-white dark:bg-slate-900">
      <div className="flex flex-col h-screen justify-center items-center">
        <div className="max-w-sm mx-auto md:px-10 p-4 w-full">
          <div data-uk-scrollspy="target: > * > *; cls: uk-animation-scale-up; delay: 100 ;repeat: true">
            {/* logo */}
            <div
              className="flex justify-center mb-12"
              data-uk-scrollspy="target: > *; cls: uk-animation-scale-up; delay: 100 ;repeat: true"
            >
              <img
                src="assets/images/logo.png"
                alt=""
                className="w-auto h-16 shrink-0 bg-fuchsia-100 px-3 rounded-2xl p-2.5"
              />
            </div>
            <form
              method="#"
              action="#"
              className="space-y-3"
              data-uk-scrollspy="target: > *; cls: uk-animation-scale-up; delay: 100 ;repeat: true"
            >
              <input
                className="!w-full"
                id="email"
                name="email"
                type="email"
                autofocus=""
                placeholder="Email"
                required=""
              />
              <input
                className="!w-full"
                id="email"
                name="email"
                type="email"
                autofocus=""
                placeholder="Password"
                required=""
              />
              <a href="#" className="hidden">
                <div className="text-sm text-right text-gray-400 py-4">
                  
                  Forget password
                </div>
              </a>
              <button
                type="submit"
                className="font-medium w-full rounded-lg bg-slate-900 py-1.5 px-4 text-white h-[38px] active:scale-[0.97] transition-all duration-150"
              >
                
                <span>Sign in</span>
              </button>
              <div className="flex gap-3 justify-center text-2xl py-5 text-slate-500">
                <a href="#">
                  
                  <ion-icon name="logo-facebook" />
                </a>
                <a href="#">
                  
                  <ion-icon name="logo-google" />
                </a>
                <a href="#">
                  
                  <ion-icon name="logo-apple" />
                </a>
              </div>
              <div className="space-x-2 text-sm text-center text-slate-400 dark:text-white/70">
                <span> No account? </span>
                <span>—</span>
                <a
                  href="form-register.html"
                  className="text-gray-600 hover:text-gray-500"
                >
                  Join now
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Uikit js you can use cdn  https://getuikit.com/docs/installation  or fine the latest  https://getuikit.com/docs/installation */}
      {/* Ion icon */}
    </div>
  )
}

export default FormLogin;