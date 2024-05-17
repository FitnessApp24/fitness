"use client";
import Link from "next/link";
import React from "react";

const Header = () => {
  const [show, setShow] = React.useState(false);
  const toggleHandler = () => {
    setShow(!show);
  };
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
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
        <button
          onClick={toggleHandler}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {/* <li>
              <a
                href="/"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li> */}
            {/* <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </a>
            </li> */}
            {/* <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Services
              </a>
            </li> */}
            {/* <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </a>
            </li> */}
            <li>
              <a
                href="/login"
                onClick={() => {
                  if (sessionStorage.getItem('sessionId')) {
                    sessionStorage.removeItem('sessionId');
                    window.location.href = '/login';
                  }
                  
                }}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                {sessionStorage.getItem('sessionId') ? 'Logout' : 'Login'}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        id="dropdownNavbar"
        className={`z-10 ${
          show ? "block" : "hidden"
        } md:hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700 dark:divide-gray-600`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-400"
          aria-labelledby="dropdownLargeButton"
        >
          {/* <li>
            <Link
              href="/"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Home
            </Link>
          </li> */}
          {/* <li>
            <Link
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Contact
            </Link>
          </li> */}
        </ul>
        <div className="py-1">
          <Link
            href="/login"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
           {sessionStorage.getItem('sessionId') ? 'Logout' : 'Login'}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
