import { FaGraduationCap } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";
import Card from "./components/Card";

const cards = [
  { icon: <FaGraduationCap />, title: "Education" },
  { icon: <AiFillDollarCircle />, title: "Financial Services" },
  { icon: <FaGraduationCap />, title: "Government" },
  { icon: <FaGraduationCap />, title: "Healthcare" },
  { icon: <FaGraduationCap />, title: "Healthcare" },
  { icon: <FaGraduationCap />, title: "Healthcare" },
];
// const HmMenu = [{ icon: <RxHamburgerMenu />, title: "HAMBURGER" }];

function App() {
  return (
    <div className="flex flex-col items-center w-11/12 mx-auto my-12 gap-16">
      <div className="flex flex-col md:flex-row">
        <section className="w-2/3 flex flex-col justify-center">
          <h1 className="text-xl font-bold  p-2">One platform to innovate</h1>
          <p className="p-2">
            Bring teams together, re imagine workplaces, engage <br />
            new audiences, and delight your costumers - all <br /> on the Zoom
            platform you know and love.
          </p>
          <div className="flex gap-3 p-2">
            <button className=" text-white bg-blue-600 border border-blue-600 rounded-2xl text-base p-2">
              Plans & Pricing
            </button>
            <button className=" text-blue-600 border border-blue-600 rounded-2xl text-base p-2">
              Sign Up, It's Free
            </button>
          </div>
        </section>
        <section className=" w-[100%] h-auto">
          <img className="border rounded-2xl " src="/woman-desk.jpg" />
        </section>
      </div>

      <div className="flex flex-col md:flex-row items-center  bg-blue-800 mt-4  rounded-2xl p-6">
        <section>
          <img src="/zoom_wheel_big.png" alt="zoom-image" />
        </section>
        <section className="text-blue-300">
          <h1 className=" font-semibold text-2xl p-3">Make work, less work</h1>
          <p className="text-xl p-3">
            Securely connect and collaborate so you can work better together.
            Simple to manage and delightful to use, Zoom powers the modern
            workforce.
          </p>
          <a href="" className="p-3 hover:text-white">
            Discover the Possibilities
          </a>
        </section>
      </div>

      <div className="flex flex-col sm:flex-row justify-between font-open-sans w-full">
        <section className=" flex flex-col align-items-center align-middle justify-content-center text-center gap-3 mb-4">
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
            href=""
            target="_blank"
            className="font-bold  text-blue-300 bg-blue-600 border border-blue-600 rounded-2xl text-base p-2"
          >
            Explore Industry Solutions
          </button>
        </section>
        <section className="grid grid-cols sm:grid-cols-2 lg:grid-cols-3 gap-2 font-xs font-bold md:font-base text-center ">
          {cards.map((card, index) => {
            return <Card key={index} icon={card.icon} title={card.title} />;
          })}
        </section>
      </div>
    </div>
  );
}

export default App;
