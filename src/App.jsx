import { FaGraduationCap } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";
import { GiHealthNormal, GiPriceTag } from "react-icons/gi";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import Card from "./components/Card";

const cards = [
  { icon: <FaGraduationCap />, title: "Education" },
  { icon: <AiFillDollarCircle />, title: "Financial Services" },
  { icon: <FaGraduationCap />, title: "Government" },
  { icon: <GiHealthNormal />, title: "Healthcare" },
  { icon: <MdOutlinePrecisionManufacturing />, title: "Manufacturing" },
  { icon: <GiPriceTag />, title: "Retail" },
];
// const HmMenu = [{ icon: <RxHamburgerMenu />, title: "HAMBURGER" }];

function App() {
  return (
    <section className="flex flex-col items-center w-11/12 mx-auto my-4 sm:my-24 gap-y-8 sm:gap-y-24">
      <div className="flex flex-col md:flex-row gap-y-4 justify-between sm:gap-y-0">
        <div className=" flex flex-col justify-center sm:w-1/2">
          <h1 className="text-xl font-bold  p-2">One platform to innovate</h1>
          <p className="p-2">
            Bring teams together, re imagine workplaces, engage <br />
            new audiences, and delight your costumers - all <br /> on the Zoom
            platform you know and love.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 p-2">
            <button
              type="button"
              className=" w-fit text-white bg-blue-600 border border-blue-600 rounded-2xl text-base py-2 px-4 hover:shadow-lg hover:shadow-blue-500"
            >
              Plans & Pricing
            </button>
            <button
              type="button"
              className=" w-fit text-blue-600 border border-blue-600 rounded-2xl text-base py-2 px-4 hover:shadow-lg hover:shadow-blue-500"
            >
              Sign Up, It's Free
            </button>
          </div>
        </div>
        <div className="sm:w-1/2">
          <img
            className=" w-full h-auto border rounded-2xl  "
            src="/woman-desk.jpg"
            alt="zoom-image"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center bg-blue-800 mt-4 rounded-2xl p-6">
        <div>
          <img src="/zoom_wheel_big.png" alt="zoom-image" />
        </div>
        <div className="text-blue-300">
          <h1 className=" font-semibold text-2xl p-3">Make work, less work</h1>
          <p className="text-xl p-3">
            Securely connect and collaborate so you can work better together.
            Simple to manage and delightful to use, Zoom powers the modern
            workforce.
          </p>
          <a
            href="#"
            className="py-2 px-3 hover:text-white border border-blue-300 rounded-2xl"
          >
            Discover the Possibilities
          </a>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between font-open-sans w-full">
        <div className="flex flex-col justify-center items-center gap-4 mb-4 text-center text-pretty">
          <h1 className="text-xl font-bold">
            Powering organizations across industries and geographies
          </h1>
          <p className="font-semibold">
            Zoom helps consolidate communications, connect people,
            <br /> and collaborate better together in the boardroom, classroom,
            <br /> operating room, and everywhere in between.
          </p>
          <button
            type="button"
            href="#"
            target="_blank"
            className=" w-fit font-bold text-blue-300 bg-blue-600 border hover:text-white border-blue-600 rounded-2xl text-base py-2 px-6"
          >
            Explore Industry Solutions
          </button>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 font-xs font-bold md:font-base text-center ">
          {cards.map((card, index) => {
            return <Card key={index} icon={card.icon} title={card.title} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default App;
