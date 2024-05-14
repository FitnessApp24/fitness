import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col sm:justify-center md:justify-start items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <Link
          href="https://fitness.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <svg
            width="84"
            height="72"
            viewBox="0 0 84 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-8"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 3.41017C0 1.78043 1.7114 0.717387 3.17243 1.43971L27.3079 13.3722V67.9126C27.3079 70.3803 24.6967 71.9735 22.5023 70.8448L1.19263 59.8827C0.460302 59.5061 0 58.7515 0 57.928V3.41017Z"
              fill="url(#paint0_linear_104_104)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M27.2982 13.377L55.2322 59.4222L27.2982 45.322V13.377Z"
              fill="url(#paint1_linear_104_104)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M54.6257 1.02674C55.2337 0.061509 56.4792 -0.278113 57.4932 0.244837L83.5161 13.6666L55.2019 59.3966L36.8847 29.1885L54.6257 1.02674Z"
              fill="url(#paint2_linear_104_104)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M55.2092 59.3954L83.5118 13.6584L83.684 64.9218C83.6978 69.0338 79.3563 71.7037 75.6928 69.8363L55.2092 59.3954Z"
              fill="url(#paint3_linear_104_104)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_104_104"
                x1="-2.12577"
                y1="-26.2438"
                x2="60.547"
                y2="-23.6135"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3A8EF6" />
                <stop offset="1" stopColor="#6F3AFA" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_104_104"
                x1="34.2817"
                y1="8.26082"
                x2="84.2021"
                y2="51.6421"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3D93FF" />
                <stop offset="1" stopColor="#65A8FB" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_104_104"
                x1="33.2547"
                y1="-23.2928"
                x2="139.705"
                y2="-14.3013"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3A8EF6" />
                <stop offset="1" stopColor="#6F3AFA" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_104_104"
                x1="62.3279"
                y1="7.34905"
                x2="121.245"
                y2="49.669"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#65A8FB" />
                <stop offset="1" stopColor="#65A8FB" />
              </linearGradient>
            </defs>
          </svg>
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 mt-5">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Sign in to your account
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@email.com" required={true} />
                    </div>
                    <p className='text-[9px] text-gray-600'>*Experience hassle-free access: Sign in or sign up with OTP verification for instant account access.</p>
                   
                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                            </div>
                            <div className="ml-3 text-sm">
                              <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in</button>

                </form>
            </div>
        </div>
    </div>
  </section>
  )
}

export default Login