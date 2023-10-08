import React from 'react'

export default function Login() {
  return (
    <div className='flex flex-col bg-stone-100 h-full sm:flex-col md:flex-row lg:flex-row md:h-screen overflow-y-auto'>
      <div className='flex w-full h-full bg-blue-700 relative md:w-6/12 overflow-hidden'>
        <div className="mt-12 mx-16 font-mono text-emerald-50 text-xl font-bold tracking-wide ">
          <p>LOGO</p>
        </div>
        <div class="grid place-items-center h-full font-mono font-bold tracking-widest text-3xl text-emerald-50 py-36 md:py-0">
          <div>Board.</div>
        </div>
        <div className='absolute my-16 mx-24 bottom-0 w-4/12 md:mx-56 md:justify-center'>
          <div class="grid grid-cols-4 gap-12 md:gap-4">
            <div className='w-10 mx-2 md:mx-1'>
              <img
              className="h-10 md:w-auto md:h-10"
              src="https://seeklogo.com/images/G/github-logo-7880D80B8D-seeklogo.com.png"
              alt="Your Company"
              />
            </div>
            <div className='w-10 mx-2 md:mx-1'>
              <img
              className="h-10 md:w-auto md:h-10"
              src="https://seeklogo.com/images/T/twitter-icon-circle-black-logo-35827D553B-seeklogo.com.png"
              alt="Your Company"
              />
            </div>
            <div className='w-10 mx-2 md:mx-1'>
              <img
              className="h-10 md:w-auto md:h-10"
              src="https://seeklogo.com/images/L/linkedin-black-icon-logo-ECC426C572-seeklogo.com.png"
              alt="Your Company"
              />
            </div>
            <div className='w-10 mx-2 md:mx-1'>
              <img
              className="h-10 md:w-auto md:h-10"
              src="https://seeklogo.com/images/D/discord-logo-04854F1CD3-seeklogo.com.png"
              alt="Your Company"
              />
            </div>
          </div>
        </div>
        <div className='relative hidden w-44 bg-stone-100 origin-center rotate-12 scale-150 translate-y-15 translate-x-96 md:block'>
        </div>
      </div>
      <div className='w-full md:w-6/12 overflow-hidden'>
        <h1 className='mt-6 px-10 text-3xl font-bold md:px-40 md:mt-36'>Sign In</h1>
        <p className="mt-2 px-10 text-sm text-black-900 md:px-40">
          Sign In To Your Account
        </p>
        <div className='grid grid-flow-row m-auto mt-4 md:grid-flow-col md:w-96'>
          <div className='mx-16 my-3 grid py-1 px-2 grid-flow-col items-center rounded-full bg-neutral-50 md:mx-2 md:py-1 md:px-2 md:my-0 cursor-pointer'>
            <img className="mx-auto h-6 w-6" src= "https://seeklogo.com/images/G/google-2015-icon-logo-B4217923DD-seeklogo.com.png" alt='Google'/>
            <button className='px-0 py-1'>Sign in with Google</button>
          </div>
          <div className='mx-16 grid py-1 px-2 grid-flow-col items-center rounded-full bg-neutral-50 md:mx-2 md:py-1 md:px-2 cursor-pointer'>
            <img className="mx-auto h-6 w-auto" src= "https://seeklogo.com/images/A/apple-logo-E3DBF3AE34-seeklogo.com.png" alt='Apple'/>
            <button className='px-0 py-1'>Sign in with Apple</button>
          </div>
        </div>
        <div className="flex mt-2 flex-0 justify-center mx-2 md:flex-1">
          <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="my-10 text-center text-sm text-gray-500">
              Do not have an account?{' '}
              <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Registier here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
  