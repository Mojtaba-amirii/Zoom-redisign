import { RxHamburgerMenu } from "react-icons/rx";

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center text-2xl p-6 w-full">
      <div className="flex item-center gap-6 w-2/3">
        <img src="/Zoom_logo.svg" alt="zoom-logo" />
        <div>
          <ul className="hidden lg:flex items-center text-base gap-5 ">
            <li className=" text-gray-500 hover:text-blue-900">Products</li>
            <li className=" text-gray-500 hover:text-blue-900">Solutions</li>
            <li className=" text-gray-500 hover:text-blue-900">Resources</li>
            <li className=" text-gray-500 hover:text-blue-900">
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
          className=" text-blue-600 border border-blue-400 rounded-2xl text-base p-2 whitespace-nowrap"
        >
          Contact Sales
        </button>
        <button
          type="button"
          className=" text-blue-600 border border-blue-400 rounded-2xl text-base p-2 whitespace-nowrap"
        >
          Sign Up Free
        </button>
      </div>
    </nav>
  );
}
