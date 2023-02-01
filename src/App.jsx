import { RxHamburgerMenu } from "react-icons/rx";
import { FaGraduationCap } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";

const cards = [
  { icon: <FaGraduationCap />, title: "Education" },
  { icon: <AiFillDollarCircle />, title: "Financial Services" },
  { icon: <FaGraduationCap />, title: "Government" },
  { icon: <FaGraduationCap />, title: "Healthcare" },
  { icon: <FaGraduationCap />, title: "Healthcare" },
  { icon: <FaGraduationCap />, title: "Healthcare" },
];
const HmMenu = [{ icon: <RxHamburgerMenu />, title: "HAMBURGER" }];

import Card from "./Card";

function App() {
  return (
    <div className="flex flex-col items-center  w-full">
      <nav className="flex justify-between items-center text-2xl p-3 w-full">
        <div className="flex item-center gap-6 w-2/3">
          <img src="/Zoom_logo.svg"></img>
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
          <div className=" mx-3 text-blue-300">
            <RxHamburgerMenu />
          </div>
        </div>
        <div className="hidden md:flex gap-2 items-center">
          <button className=" text-blue-600 border border-blue-400 rounded-2xl text-base p-2">
            Contact Sales
          </button>
          <button className=" text-blue-600 border border-blue-400 rounded-2xl text-base p-2">
            Sign Up Free
          </button>
          <div className="hidden md:block lg:hidden mx-3 text-blue-300">
            <RxHamburgerMenu />
          </div>
        </div>
      </nav>

      <div className="flex flex-col md:flex-row m-10 p-10 pb-0 mb-0">
        <section className="w-2/3">
          <h1 className="text-xl font-bold pt-8 p-2">
            One platform to innovate
          </h1>
          <p className="pt-8 p-2">
            Bring teams togather, reimagine workplaces, engage <br />
            new audiences, and delight your costumers - all <br /> on the Zoom
            platform you know and love.
          </p>
          <div className="flex gap-3 pt-8 p-2">
            <button className=" text-white bg-blue-600 border border-blue-600 rounded-2xl text-base p-2">
              Plans & Pricing
            </button>
            <button className=" text-blue-600 border border-blue-600 rounded-2xl text-base p-2">
              Sign Up, It's Free
            </button>
          </div>
        </section>
        <section className="w-auto h-auto">
          <img className="border rounded-2xl " src="/woman-desk.jpg" />
        </section>
      </div>

      <div className="flex flex-col md:flex-row items-center  bg-blue-800 mt-0">
        <section>
          <img src="/zoom_wheel_big.png" />
        </section>
        <section className="text-blue-300">
          <h1 className="p-3">Make work less work</h1>
          <p className="p-3">
            Securely connect and collaborate so you can work better together.
            Simple to manage and delightful to use, Zoom powers the modern
            workforce.
          </p>
          <a href="" className="p-3 hover:text-white">
            Discover the Possibilities
          </a>
        </section>
      </div>

      <div className="flex flex-row font-open-sans m-4">
        <section>
          <h1 className="text-xl font-bold pt-8 p-2">
            Powering organizations across industries and geographies
          </h1>
          <p className="font-semibold pt-8 p-2 pb-10">
            Zoom helps consolidate communications, connect people,
            <br /> and collaborate better together in the boardroom, classroom,
            <br /> operating room, and everywhere in between.
          </p>
          <a
            href=""
            target="_blank"
            className="font-bold  text-blue-300 bg-blue-600 border border-blue-600 rounded-2xl text-base p-2"
          >
            Explore Industry Solutions
          </a>
        </section>
        <section className="grid grid-cols-2 gap-2 fonst-bold m-4">
          {cards.map((card, index) => {
            return <Card key={index} icon={card.icon} title={card.title} />;
          })}
        </section>
      </div>
    </div>
  );
}

export default App;
