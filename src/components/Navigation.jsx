import { RxHamburgerMenu } from "react-icons/rx";

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center text-2xl p-6 w-full">
      <div className="flex item-center gap-6 w-2/3">
      <a href="./" className=" cursor-pointer" >      
        <img src="/Zoom_logo.svg" alt="zoom-logo" />
      </a>
        <div>
          <ul className="hidden lg:flex items-center text-base gap-5 ">
            <li className=" text-gray-500 hover:text-blue-900 cursor-pointer">Products</li>
            <li className=" text-gray-500 hover:text-blue-900 cursor-pointer">Solutions</li>
            <li className=" text-gray-500 hover:text-blue-900 cursor-pointer">Resources</li>
            <li className=" text-gray-500 hover:text-blue-900 cursor-pointer">
              Plans & Pricing
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center md:hidden">
        <ul className="flex gap-3 ">
          <li className=" text-blue-700 hover:text-blue-900">Join</li>
          <li className=" text-blue-700 hover:text-blue-900">Host</li>
        </ul>
        <div className=" text-blue-600 text-4xl mx-2">
          <RxHamburgerMenu />
        </div>
      </div>
      <div className="hidden md:flex gap-2 items-center">
        <button
          type="button"
          className=" text-blue-600 border border-blue-400 rounded-2xl text-base py-2 px-4 whitespace-nowrap hover:bg-blue-600 hover:text-white"
        >
          Contact Sales
        </button>
        <button
          type="button"
          className=" text-blue-600 border border-blue-400 rounded-2xl text-base py-2 px-4 whitespace-nowrap hover:bg-blue-600 hover:text-white"
        >
          Sign Up Free
        </button>
      </div>
    </nav>
  );
}
