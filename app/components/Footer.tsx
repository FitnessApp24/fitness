import Link from "next/link";
import React from "react";
 
const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href=""
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Link
          href="/home"
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

          <span className="self-center text-2xl font-bold whitespace-nowrap bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
            Fitness
          </span>
        </Link>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="/home" className="hover:underline">
            Fitness
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
 
export default Footer;